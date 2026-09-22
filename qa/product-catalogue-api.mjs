import assert from 'node:assert/strict';
import fs from 'node:fs';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5001';
const approved = JSON.parse(
  fs.readFileSync(
    'backend/data/catalogue.json',
    'utf8',
  ),
).products;

const request = async (requestPath, options = {}) => {
  const headers = new Headers(options.headers || {});
  if (options.token) headers.set('Authorization', `Bearer ${options.token}`);
  let body = options.body;
  if (body && !(body instanceof FormData) && typeof body !== 'string') {
    headers.set('Content-Type', 'application/json');
    body = JSON.stringify(body);
  }
  const response = await fetch(`${baseUrl}${requestPath}`, {
    method: options.method || 'GET',
    headers,
    body,
  });
  const text = await response.text();
  let data = text;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      // Keep text for diagnostics.
    }
  }
  return { status: response.status, data, text };
};

const expectStatus = (result, status, label) =>
  assert.equal(
    result.status,
    status,
    `${label}: HTTP ${result.status}: ${result.text}`,
  );

const runtimeFields = [
  'identifier',
  'collection',
  'name',
  'image',
  'cardImage',
  'description',
  'heatLevel',
  'flavourProfile',
  'ingredients',
  'pairings',
  'price',
  'countInStock',
  'brand',
  'category',
];

console.log('PRODUCT QA: pagination and exact approved runtime catalogue');
const pageOne = await request('/api/products?pageNumber=1');
const pageTwo = await request('/api/products?pageNumber=2');
expectStatus(pageOne, 200, 'Shop page one');
expectStatus(pageTwo, 200, 'Shop page two');
assert.equal(pageOne.data.page, 1);
assert.equal(pageOne.data.pages, 2);
assert.equal(
  pageOne.data.products.length,
  10,
  'Shop page one must contain 10 products',
);
assert.equal(
  pageTwo.data.products.length,
  6,
  'Shop page two must contain 6 products',
);
const runtimeProducts = [...pageOne.data.products, ...pageTwo.data.products];
assert.equal(
  runtimeProducts.length,
  16,
  'Public catalogue must contain 16 products',
);

for (const expected of approved) {
  const actual = runtimeProducts.find(
    (product) => product.identifier === expected.identifier,
  );
  assert.ok(actual, `Missing public product ${expected.identifier}`);
  for (const field of runtimeFields) {
    assert.deepEqual(
      actual[field],
      expected[field],
      `${expected.identifier}.${field} drift`,
    );
  }
  assert.ok(
    actual._id,
    `${expected.identifier} must retain a MongoDB ID route`,
  );
  assert.equal(
    actual.rating,
    0,
    `${expected.identifier} should begin without rating`,
  );
  assert.equal(
    actual.numReviews,
    0,
    `${expected.identifier} should begin without reviews`,
  );
}
assert.ok(runtimeProducts.every((product) => product.brand === 'Burnsville'));

console.log('PRODUCT QA: search, heat filters and product detail');
const search = await request(
  `/api/products?keyword=${encodeURIComponent('GREEN SPARK')}`,
);
expectStatus(search, 200, 'Search');
assert.deepEqual(
  search.data.products.map(({ identifier }) => identifier),
  ['01'],
);

const expectedHeatCounts = {
  mild: 1,
  medium: 2,
  hot: 2,
  'very-hot': 4,
  extreme: 7,
};
for (const [heat, count] of Object.entries(expectedHeatCounts)) {
  const response = await request(`/api/products?heat=${heat}`);
  expectStatus(response, 200, `${heat} heat filter`);
  assert.equal(response.data.products.length, count, `${heat} heat count`);
}

const greenSpark = runtimeProducts.find(
  ({ identifier }) => identifier === '01',
);
const detail = await request(`/api/products/${greenSpark._id}`);
expectStatus(detail, 200, 'Product detail');
for (const field of runtimeFields) {
  assert.deepEqual(
    detail.data[field],
    approved[0][field],
    `Detail ${field} drift`,
  );
}

console.log('PRODUCT QA: customer review and authoritative checkout/order');
const customerLogin = await request('/api/users/login', {
  method: 'POST',
  body: { email: 'kenny@example.com', password: '123456' },
});
expectStatus(customerLogin, 200, 'Customer login');
const customerToken = customerLogin.data.token;

const reviewProduct = runtimeProducts.find(
  ({ identifier }) => identifier === 'P-X',
);
const review = await request(`/api/products/${reviewProduct._id}/reviews`, {
  method: 'POST',
  token: customerToken,
  body: { rating: 5, comment: 'Isolated product QA review.' },
});
expectStatus(review, 201, 'Review creation');
const reviewed = await request(`/api/products/${reviewProduct._id}`);
expectStatus(reviewed, 200, 'Reviewed product detail');
assert.equal(reviewed.data.numReviews, 1);
assert.equal(reviewed.data.rating, 5);
assert.equal(reviewed.data.reviews.length, 1);

const order = await request('/api/orders', {
  method: 'POST',
  token: customerToken,
  body: {
    orderItems: [
      {
        product: greenSpark._id,
        qty: 1,
        name: 'FORGED NAME',
        image: '/forged.jpg',
        price: 0.01,
      },
    ],
    shippingAddress: {
      address: '16 Burnsville QA Road',
      city: 'Cape Town',
      postalCode: '8001',
      country: 'South Africa',
    },
    paymentMethod: 'Peach Payments',
    itemsPrice: 0.01,
    vatPrice: 0,
    shippingPrice: 0,
    totalPrice: 0.01,
  },
});
expectStatus(order, 201, 'Order creation');
assert.equal(order.data.orderItems[0].name, approved[0].name);
assert.equal(order.data.orderItems[0].image, approved[0].image);
assert.equal(order.data.orderItems[0].price, approved[0].price);
assert.equal(order.data.itemsPrice, approved[0].price);
assert.equal(order.data.vatPrice, 27);
assert.equal(order.data.shippingPrice, 0);
assert.equal(order.data.totalPrice, 206.98);

console.log('PRODUCT QA: admin identity boundary, editable stock and upload');
const adminLogin = await request('/api/users/login', {
  method: 'POST',
  body: { email: 'admin@example.com', password: '123456' },
});
expectStatus(adminLogin, 200, 'Admin login');
const adminToken = adminLogin.data.token;
const current = (await request(`/api/products/${greenSpark._id}`)).data;
const updateBody = {
  name: current.name,
  identifier: current.identifier,
  collection: current.collection,
  price: current.price,
  image: current.image,
  brand: current.brand,
  category: current.category,
  countInStock: approved[0].countInStock,
  description: current.description,
  heatLevel: current.heatLevel,
  flavourProfile: current.flavourProfile,
  pairings: current.pairings,
  ingredients: current.ingredients,
};
const renameAttempt = await request(`/api/products/${greenSpark._id}`, {
  method: 'PUT',
  token: adminToken,
  body: { ...updateBody, name: 'RENAMED PRODUCT' },
});
expectStatus(renameAttempt, 400, 'Locked-name edit boundary');
const afterRename = await request(`/api/products/${greenSpark._id}`);
assert.equal(afterRename.data.name, approved[0].name, 'Locked name changed');

const stockUpdate = await request(`/api/products/${greenSpark._id}`, {
  method: 'PUT',
  token: adminToken,
  body: { ...updateBody, countInStock: approved[0].countInStock + 1 },
});
expectStatus(stockUpdate, 200, 'Admin stock update');
assert.equal(stockUpdate.data.countInStock, approved[0].countInStock + 1);
const stockRestore = await request(`/api/products/${greenSpark._id}`, {
  method: 'PUT',
  token: adminToken,
  body: updateBody,
});
expectStatus(stockRestore, 200, 'Admin stock restore');
assert.equal(stockRestore.data.countInStock, approved[0].countInStock);

const pngBytes = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
  'base64',
);
const uploadForm = new FormData();
uploadForm.append(
  'image',
  new Blob([pngBytes], { type: 'image/png' }),
  'product-qa.png',
);
const upload = await request('/api/upload', {
  method: 'POST',
  token: adminToken,
  body: uploadForm,
});
expectStatus(upload, 201, 'Admin image upload');
assert.match(upload.text, /^\/uploads\/[a-f0-9]{32}\.png$/);
const uploadedAsset = await request(upload.text);
expectStatus(uploadedAsset, 200, 'Uploaded image serving');

console.log(
  'PASS: exact Burnsville product API, customer, order, review and admin QA',
);
