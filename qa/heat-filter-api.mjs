import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import Product from '../backend/models/productModel.js';

if (process.env.BURNSVILLE_QA_HEAT_FILTER !== '1') {
  throw new Error(
    'Refusing to run heat-filter mutation QA without BURNSVILLE_QA_HEAT_FILTER=1'
  );
}

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is required for isolated heat-filter QA');
}

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5001';

const request = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  const text = await response.text();
  let data = text;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      // Keep non-JSON response as text.
    }
  }

  return { status: response.status, data, text };
};

const expectStatus = (result, expected, label) => {
  assert.equal(
    result.status,
    expected,
    `${label}: expected HTTP ${expected}, got ${result.status}: ${result.text}`
  );
};

await mongoose.connect(process.env.MONGO_URI);

const product = await Product.findOne({});
assert.ok(product, 'No product available for heat-filter QA');
const originalHeatLevel = product.heatLevel ?? null;

const updateHeatLevel = async (heatLevel) => {
  await Product.updateOne(
    { _id: product._id },
    { $set: { heatLevel } },
    { runValidators: true }
  );
};

const assertFilterIncludesProduct = async (filter, heatLevel) => {
  await updateHeatLevel(heatLevel);

  const filtered = await request(`/api/products?heat=${filter}`);
  expectStatus(filtered, 200, `${filter} heat filter`);
  assert.ok(
    filtered.data.products.some((item) => item._id === String(product._id)),
    `${filter} filter did not include heat level ${heatLevel}`
  );
};

try {
  const cases = [
    ['mild', 1],
    ['mild', 3],
    ['medium', 4],
    ['medium', 6],
    ['hot', 7],
    ['hot', 8],
    ['very-hot', 9],
    ['extreme', 10],
  ];

  for (const [filter, heatLevel] of cases) {
    await assertFilterIncludesProduct(filter, heatLevel);
  }

  await updateHeatLevel(10);
  const mildAtExtreme = await request('/api/products?heat=mild');
  expectStatus(mildAtExtreme, 200, 'Cross-band exclusion');
  assert.ok(
    !mildAtExtreme.data.products.some((item) => item._id === String(product._id)),
    'Mild filter incorrectly included an Extreme product'
  );

  const invalid = await request('/api/products?heat=volcanic');
  expectStatus(invalid, 400, 'Invalid heat filter rejection');
} finally {
  await updateHeatLevel(originalHeatLevel);
  await mongoose.disconnect();
}

console.log('PASS: Burnsville heat filter API QA');
