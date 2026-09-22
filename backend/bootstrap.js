import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

dotenv.config();

const SYSTEM_OWNER_EMAIL = 'catalogue-owner@burnsville.invalid';
const cataloguePath = path.resolve(
  'backend/data/burnsville-final-catalogue-intake.json',
);

const loadCatalogue = () => {
  const data = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'));
  if (!Array.isArray(data.products) || data.products.length !== 16) {
    throw new Error('Current Burnsville catalogue must contain exactly 16 products');
  }
  if (data.products.some((product) => product.brand !== 'Burnsville')) {
    throw new Error('Current Burnsville catalogue contains a non-Burnsville product');
  }
  return data.products;
};

const assertCurrentRuntime = async (approvedProducts) => {
  const runtime = await Product.find({}).lean();
  if (runtime.length !== approvedProducts.length) {
    throw new Error(
      `Database already contains ${runtime.length} products; expected 16 current Burnsville products`,
    );
  }
  const approved = new Map(
    approvedProducts.map((product) => [product.identifier, product]),
  );
  for (const product of runtime) {
    const expected = approved.get(product.identifier);
    if (!expected || product.brand !== 'Burnsville') {
      throw new Error('Database contains products outside the current Burnsville catalogue');
    }
    if (product.image !== expected.image || product.cardImage !== expected.cardImage) {
      throw new Error(`Asset path drift detected for ${product.identifier}`);
    }
  }
};

const bootstrapCatalogue = async () => {
  await connectDB();
  const approvedProducts = loadCatalogue();

  try {
    await Product.init();
    const existingProductCount = await Product.countDocuments({});

    if (existingProductCount > 0) {
      await assertCurrentRuntime(approvedProducts);
      console.log('Current Burnsville catalogue already initialized; no changes made.');
      return;
    }

    let catalogueOwner = await User.findOne({ email: SYSTEM_OWNER_EMAIL });
    if (!catalogueOwner) {
      catalogueOwner = await User.create({
        name: 'Burnsville Catalogue',
        email: SYSTEM_OWNER_EMAIL,
        password: crypto.randomBytes(32).toString('hex'),
        isAdmin: false,
      });
    }

    const runtimeProducts = approvedProducts.map(({ collection, ...product }) => ({
      ...product,
      catalogueCollection: collection,
      user: catalogueOwner._id,
    }));

    await Product.insertMany(runtimeProducts);
    await assertCurrentRuntime(approvedProducts);
    console.log('Current Burnsville catalogue initialized: 16 products.');
  } finally {
    await mongoose.disconnect();
  }
};

bootstrapCatalogue().catch((error) => {
  console.error(`Catalogue bootstrap failed: ${error.message}`);
  process.exitCode = 1;
});
