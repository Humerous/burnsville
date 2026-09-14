import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import Product from '../backend/models/productModel.js';
import User from '../backend/models/userModel.js';
import Order from '../backend/models/orderModel.js';
import { validateCatalogue } from '../qa/catalogue-readiness.mjs';

const DEFAULT_CATALOGUE_PATH = path.resolve(
  'backend/data/burnsville-final-catalogue-intake.json'
);
const RUNTIME_FIELDS = [
  'identifier',
  'collection',
  'name',
  'image',
  'description',
  'heatLevel',
  'flavourProfile',
  'ingredients',
  'pairings',
  'price',
  'countInStock',
  'brand',
  'category',
  'rating',
  'numReviews',
  'reviews',
];

const stableValue = (value) => {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === 'object') {
    if (typeof value.toHexString === 'function') return value.toHexString();
    if (value instanceof Date) return value.toISOString();
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableValue(value[key])])
    );
  }
  return value;
};

const digest = (value) =>
  crypto.createHash('sha256').update(JSON.stringify(stableValue(value))).digest('hex');

export const collectionEvidence = async (Model, session = null) => {
  const query = Model.find({}).sort({ _id: 1 }).lean();
  if (session) query.session(session);
  const documents = await query;
  return { count: documents.length, digest: digest(documents), documents };
};

export const loadApprovedCatalogue = (cataloguePath = DEFAULT_CATALOGUE_PATH) => {
  const resolved = path.resolve(cataloguePath);
  const catalogue = JSON.parse(fs.readFileSync(resolved, 'utf8'));
  const errors = validateCatalogue(catalogue);
  if (errors.length) {
    throw new Error(`Approved catalogue validation failed: ${errors.join('; ')}`);
  }
  return { catalogue, resolved };
};

const snapshotPayload = ({ products, databaseName, cataloguePath }) => ({
  formatVersion: 1,
  purpose: 'Burnsville product-only catalogue rollback snapshot',
  createdAt: new Date().toISOString(),
  databaseName,
  cataloguePath,
  productCount: products.length,
  productDigest: digest(products),
  products,
});

const writeSnapshot = (snapshotPath, payload) => {
  const resolved = path.resolve(snapshotPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, `${JSON.stringify(payload, null, 2)}\n`, {
    encoding: 'utf8',
    flag: 'wx',
    mode: 0o600,
  });
  return resolved;
};

export const assertRuntimeCatalogue = async (approvedProducts, session = null) => {
  const query = Product.find({}).sort({ identifier: 1 }).lean();
  if (session) query.session(session);
  const runtimeProducts = await query;

  assert.equal(runtimeProducts.length, approvedProducts.length, 'Runtime product count drift');
  const expectedIdentifiers = new Set(approvedProducts.map(({ identifier }) => identifier));
  assert.equal(expectedIdentifiers.size, approvedProducts.length, 'Approved identifiers are not unique');

  for (const expected of approvedProducts) {
    const runtime = runtimeProducts.find(
      (candidate) => candidate.identifier === expected.identifier
    );
    assert.ok(runtime, `Runtime product ${expected.identifier} is missing`);
    for (const field of RUNTIME_FIELDS) {
      const runtimeValue = field === 'collection'
        ? runtime.catalogueCollection
        : runtime[field];
      assert.deepEqual(
        stableValue(runtimeValue),
        stableValue(expected[field]),
        `${expected.identifier}.${field} differs from approved intake`
      );
    }
    assert.ok(runtime._id, `${expected.identifier} has no MongoDB ID`);
    assert.ok(runtime.user, `${expected.identifier} has no owning admin user`);
  }

  for (const runtime of runtimeProducts) {
    assert.ok(
      expectedIdentifiers.has(runtime.identifier),
      `Unexpected runtime product ${runtime.name || runtime._id}`
    );
    assert.equal(runtime.brand, 'Burnsville', 'Legacy third-party brand remains');
  }

  return runtimeProducts;
};

const unchangedEvidence = (before, after, label) => {
  assert.equal(after.count, before.count, `${label} count changed`);
  assert.equal(after.digest, before.digest, `${label} records changed`);
};

export const applyCatalogueReplacement = async ({
  cataloguePath = DEFAULT_CATALOGUE_PATH,
  snapshotPath,
} = {}) => {
  if (!snapshotPath) throw new Error('A unique product snapshot path is required');

  const { catalogue, resolved } = loadApprovedCatalogue(cataloguePath);
  const adminUser = await User.findOne({ isAdmin: true }).sort({ _id: 1 });
  if (!adminUser) throw new Error('Catalogue replacement requires an existing admin user');

  const beforeProducts = await collectionEvidence(Product);
  const beforeUsers = await collectionEvidence(User);
  const beforeOrders = await collectionEvidence(Order);
  const savedSnapshot = writeSnapshot(
    snapshotPath,
    snapshotPayload({
      products: beforeProducts.documents,
      databaseName: mongoose.connection.name,
      cataloguePath: resolved,
    })
  );

  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      for (const approved of catalogue.products) {
        const existing = await Product.findOne({ identifier: approved.identifier }).session(
          session
        );
        const { collection, ...approvedFields } = approved;
        const runtimeFields = {
          ...approvedFields,
          catalogueCollection: collection,
          user: adminUser._id,
        };
        if (existing) {
          Object.assign(existing, runtimeFields);
          await existing.save({ session });
        } else {
          await Product.create([runtimeFields], { session });
        }
      }

      const identifiers = catalogue.products.map(({ identifier }) => identifier);
      await Product.deleteMany({ identifier: { $nin: identifiers } }).session(session);
      await assertRuntimeCatalogue(catalogue.products, session);
    });
  } finally {
    await session.endSession();
  }

  const afterUsers = await collectionEvidence(User);
  const afterOrders = await collectionEvidence(Order);
  unchangedEvidence(beforeUsers, afterUsers, 'Users');
  unchangedEvidence(beforeOrders, afterOrders, 'Orders');
  const runtimeProducts = await assertRuntimeCatalogue(catalogue.products);

  return {
    action: 'apply',
    databaseName: mongoose.connection.name,
    snapshotPath: savedSnapshot,
    beforeProductCount: beforeProducts.count,
    afterProductCount: runtimeProducts.length,
    userCount: afterUsers.count,
    orderCount: afterOrders.count,
    usersDigest: afterUsers.digest,
    ordersDigest: afterOrders.digest,
    productIds: runtimeProducts.map(({ identifier, _id }) => ({
      identifier,
      id: String(_id),
    })),
  };
};

export const rollbackCatalogueReplacement = async ({ snapshotPath } = {}) => {
  if (!snapshotPath) throw new Error('A product snapshot path is required');
  const resolved = path.resolve(snapshotPath);
  const snapshot = JSON.parse(fs.readFileSync(resolved, 'utf8'));
  if (
    snapshot.formatVersion !== 1 ||
    snapshot.purpose !== 'Burnsville product-only catalogue rollback snapshot' ||
    !Array.isArray(snapshot.products)
  ) {
    throw new Error('Snapshot is not a supported Burnsville product rollback file');
  }
  if (snapshot.databaseName !== mongoose.connection.name) {
    throw new Error(
      `Snapshot database ${snapshot.databaseName} does not match connected database ${mongoose.connection.name}`
    );
  }

  const beforeUsers = await collectionEvidence(User);
  const beforeOrders = await collectionEvidence(Order);
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      await Product.deleteMany({}).session(session);
      if (snapshot.products.length) {
        await Product.insertMany(snapshot.products, { session });
      }
    });
  } finally {
    await session.endSession();
  }

  const restoredProducts = await collectionEvidence(Product);
  const afterUsers = await collectionEvidence(User);
  const afterOrders = await collectionEvidence(Order);
  assert.equal(restoredProducts.count, snapshot.productCount, 'Rollback product count mismatch');
  assert.equal(restoredProducts.digest, snapshot.productDigest, 'Rollback product digest mismatch');
  unchangedEvidence(beforeUsers, afterUsers, 'Users');
  unchangedEvidence(beforeOrders, afterOrders, 'Orders');

  return {
    action: 'rollback',
    databaseName: mongoose.connection.name,
    snapshotPath: resolved,
    restoredProductCount: restoredProducts.count,
    restoredProductDigest: restoredProducts.digest,
    userCount: afterUsers.count,
    orderCount: afterOrders.count,
    usersDigest: afterUsers.digest,
    ordersDigest: afterOrders.digest,
  };
};

const mongoHosts = (uri) => {
  const authority = uri.split('://')[1]?.split('/')[0]?.split('@').pop() || '';
  return authority.split(',').map((host) => host.split(':')[0].replace(/^\[|\]$/g, ''));
};

const isLoopbackUri = (uri) => {
  const hosts = mongoHosts(uri);
  return hosts.length > 0 && hosts.every((host) => ['127.0.0.1', 'localhost', '::1'].includes(host));
};

const assertCliSafety = (uri) => {
  if (process.env.BURNSVILLE_PRODUCT_REPLACEMENT !== '1') {
    throw new Error('Set BURNSVILLE_PRODUCT_REPLACEMENT=1 to authorize product-only replacement');
  }
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV) {
    throw new Error('Product replacement is disabled in Production and Vercel runtimes');
  }
  if (!isLoopbackUri(uri) && process.env.BURNSVILLE_ALLOW_SHARED_PRODUCT_REPLACEMENT !== '1') {
    throw new Error(
      'Shared database replacement requires BURNSVILLE_ALLOW_SHARED_PRODUCT_REPLACEMENT=1'
    );
  }
};

const runCli = async () => {
  const action = process.argv[2];
  if (!['apply', 'rollback'].includes(action)) {
    throw new Error('Usage: npm run catalogue:replace -- apply|rollback');
  }
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is required');
  assertCliSafety(uri);

  await mongoose.connect(uri);
  try {
    if (
      isLoopbackUri(uri) &&
      !/^(burnsville_qa|burnsville_isolated)/.test(mongoose.connection.name)
    ) {
      throw new Error('Local replacement is restricted to burnsville_qa* or burnsville_isolated* databases');
    }
    await Product.init();
    const snapshotPath = process.env.BURNSVILLE_PRODUCT_SNAPSHOT;
    const result = action === 'apply'
      ? await applyCatalogueReplacement({ snapshotPath })
      : await rollbackCatalogueReplacement({ snapshotPath });
    console.log('BURNSVILLE PRODUCT-ONLY REPLACEMENT PASSED');
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await mongoose.disconnect();
  }
};

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))
) {
  runCli().catch((error) => {
    console.error(`BURNSVILLE PRODUCT-ONLY REPLACEMENT FAILED: ${error.message}`);
    process.exitCode = 1;
  });
}
