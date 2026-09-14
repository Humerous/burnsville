import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import mongoose from 'mongoose';
import usersFixture from '../backend/data/users.js';
import legacyProductsFixture from '../backend/data/products.js';
import Product from '../backend/models/productModel.js';
import User from '../backend/models/userModel.js';
import Order from '../backend/models/orderModel.js';
import {
  applyCatalogueReplacement,
  assertRuntimeCatalogue,
  collectionEvidence,
  loadApprovedCatalogue,
  rollbackCatalogueReplacement,
} from '../scripts/product-catalogue-replacement.mjs';

if (process.env.BURNSVILLE_PRODUCT_REPLACEMENT !== '1') {
  throw new Error('Refusing isolated replacement QA without BURNSVILLE_PRODUCT_REPLACEMENT=1');
}
if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required');

const evidencePath = path.resolve(
  process.env.BURNSVILLE_QA_EVIDENCE || '/tmp/burnsville-product-replacement-evidence.json'
);
const runId = `${Date.now()}-${process.pid}`;
const snapshotOne = `/tmp/burnsville-products-before-${runId}.json`;
const snapshotTwo = `/tmp/burnsville-products-rerun-${runId}.json`;
const snapshotThree = `/tmp/burnsville-products-after-rollback-${runId}.json`;

await mongoose.connect(process.env.MONGO_URI);
let passed = false;
try {
  assert.match(
    mongoose.connection.name,
    /^(burnsville_qa|burnsville_isolated)/,
    'Isolated replacement QA requires a burnsville_qa* or burnsville_isolated* database'
  );
  await mongoose.connection.dropDatabase();
  await Product.init();

  const createdUsers = await User.insertMany(usersFixture);
  const admin = createdUsers.find((user) => user.isAdmin);
  assert.ok(admin, 'Isolated fixture admin missing');

  const legacyProducts = await Product.insertMany(
    legacyProductsFixture.map((product) => ({ ...product, user: admin._id }))
  );
  assert.equal(legacyProducts.length, 10, 'Expected ten legacy products in isolated fixture');

  await Order.create({
    user: createdUsers[1]._id,
    orderItems: [
      {
        name: legacyProducts[0].name,
        qty: 1,
        image: legacyProducts[0].image,
        price: legacyProducts[0].price,
        product: legacyProducts[0]._id,
      },
    ],
    shippingAddress: {
      address: '1 Isolated QA Road',
      city: 'Cape Town',
      postalCode: '8001',
      country: 'South Africa',
    },
    paymentMethod: 'Peach Payments',
    itemsPrice: legacyProducts[0].price,
    vatPrice: 0,
    shippingPrice: 0,
    totalPrice: legacyProducts[0].price,
  });

  const initialProducts = await collectionEvidence(Product);
  const initialUsers = await collectionEvidence(User);
  const initialOrders = await collectionEvidence(Order);
  const { catalogue } = loadApprovedCatalogue();

  const first = await applyCatalogueReplacement({ snapshotPath: snapshotOne });
  const firstRuntime = await assertRuntimeCatalogue(catalogue.products);
  assert.equal(firstRuntime.length, 16, 'First replacement did not produce 16 products');
  assert.ok(
    firstRuntime.every((product) => product.brand === 'Burnsville'),
    'Legacy third-party catalogue remained after first replacement'
  );

  const second = await applyCatalogueReplacement({ snapshotPath: snapshotTwo });
  const secondRuntime = await assertRuntimeCatalogue(catalogue.products);
  assert.deepEqual(
    first.productIds,
    second.productIds,
    'Replacement rerun changed IDs or created duplicate products'
  );
  assert.equal(secondRuntime.length, 16, 'Replacement rerun changed product count');

  const rollback = await rollbackCatalogueReplacement({ snapshotPath: snapshotOne });
  const rolledBackProducts = await collectionEvidence(Product);
  assert.equal(rolledBackProducts.digest, initialProducts.digest, 'Rollback did not restore exact products');

  const usersAfterRollback = await collectionEvidence(User);
  const ordersAfterRollback = await collectionEvidence(Order);
  assert.equal(usersAfterRollback.digest, initialUsers.digest, 'Users changed during replacement/rollback');
  assert.equal(ordersAfterRollback.digest, initialOrders.digest, 'Orders changed during replacement/rollback');

  const finalApply = await applyCatalogueReplacement({ snapshotPath: snapshotThree });
  await assertRuntimeCatalogue(catalogue.products);
  const finalUsers = await collectionEvidence(User);
  const finalOrders = await collectionEvidence(Order);
  assert.equal(finalUsers.digest, initialUsers.digest, 'Users changed after final replacement');
  assert.equal(finalOrders.digest, initialOrders.digest, 'Orders changed after final replacement');

  const evidence = {
    status: 'PASS',
    databaseName: mongoose.connection.name,
    initial: {
      products: initialProducts.count,
      users: initialUsers.count,
      orders: initialOrders.count,
      productDigest: initialProducts.digest,
      usersDigest: initialUsers.digest,
      ordersDigest: initialOrders.digest,
    },
    replacement: {
      products: 16,
      firstSnapshot: first.snapshotPath,
      rerunSnapshot: second.snapshotPath,
      finalSnapshot: finalApply.snapshotPath,
      stableIdsOnRerun: true,
      legacyThirdPartyProductsRemaining: 0,
    },
    rollback: {
      snapshot: rollback.snapshotPath,
      restoredProducts: rollback.restoredProductCount,
      restoredProductDigest: rollback.restoredProductDigest,
      exactProductDigestRestored: true,
      usersUnchanged: true,
      ordersUnchanged: true,
    },
  };
  fs.writeFileSync(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`, {
    mode: 0o600,
  });
  console.log('PASS: isolated Burnsville product-only replacement, rerun and rollback QA');
  console.log(JSON.stringify(evidence, null, 2));
  passed = true;
} finally {
  if (process.env.BURNSVILLE_QA_KEEP_DB !== '1' || !passed) {
    await mongoose.connection.dropDatabase();
  }
  await mongoose.disconnect();
}
