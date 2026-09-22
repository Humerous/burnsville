import assert from 'node:assert/strict';
import fs from 'node:fs';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Product from '../backend/models/productModel.js';
import User from '../backend/models/userModel.js';

if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required');

await mongoose.connect(process.env.MONGO_URI);
try {
  assert.match(
    mongoose.connection.name,
    /^burnsville_qa/,
    'QA setup requires a burnsville_qa* database',
  );

  await mongoose.connection.dropDatabase();
  await Product.init();

  const users = await User.insertMany([
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'QA Customer',
      email: 'kenny@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
    },
  ]);

  const admin = users.find((user) => user.isAdmin);
  const approved = JSON.parse(
    fs.readFileSync('backend/data/catalogue.json', 'utf8'),
  ).products;

  assert.equal(approved.length, 16);
  assert.ok(approved.every((product) => product.brand === 'Burnsville'));

  await Product.insertMany(
    approved.map(({ collection, ...product }) => ({
      ...product,
      catalogueCollection: collection,
      user: admin._id,
    })),
  );

  assert.equal(await Product.countDocuments({}), 16);
  console.log('PASS: current-only QA database seeded with 16 Burnsville products');
} finally {
  await mongoose.disconnect();
}
