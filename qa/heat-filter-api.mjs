import assert from 'node:assert/strict';

if (process.env.BURNSVILLE_QA_HEAT_FILTER !== '1') {
  throw new Error(
    'Refusing to run heat-filter mutation QA without BURNSVILLE_QA_HEAT_FILTER=1'
  );
}

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5001';
const adminEmail = process.env.QA_ADMIN_EMAIL;
const adminPassword = process.env.QA_ADMIN_PASSWORD;

if (!adminEmail || !adminPassword) {
  throw new Error('QA admin credentials must be supplied through environment variables');
}

const request = async (path, options = {}) => {
  const headers = new Headers(options.headers || {});

  if (options.token) {
    headers.set('Authorization', `Bearer ${options.token}`);
  }

  let body = options.body;
  if (body && typeof body !== 'string') {
    headers.set('Content-Type', 'application/json');
    body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${path}`, {
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

const adminLogin = await request('/api/users/login', {
  method: 'POST',
  body: { email: adminEmail, password: adminPassword },
});
expectStatus(adminLogin, 200, 'Admin login');
assert.ok(adminLogin.data.token, 'Admin token missing');
const adminToken = adminLogin.data.token;

const catalogue = await request('/api/products');
expectStatus(catalogue, 200, 'Catalogue');
assert.ok(Array.isArray(catalogue.data.products), 'Catalogue products missing');
assert.ok(catalogue.data.products.length > 0, 'No product available for heat QA');

const product = catalogue.data.products[0];
const originalHeatLevel = product.heatLevel ?? null;

const productPayload = (heatLevel) => ({
  name: product.name,
  price: product.price,
  description: product.description,
  image: product.image,
  brand: product.brand,
  category: product.category,
  countInStock: product.countInStock,
  heatLevel,
  flavourProfile: product.flavourProfile || '',
  pairings: Array.isArray(product.pairings) ? product.pairings : [],
  ingredients: product.ingredients || '',
});

const updateHeatLevel = async (heatLevel) => {
  const result = await request(`/api/products/${product._id}`, {
    method: 'PUT',
    token: adminToken,
    body: productPayload(heatLevel),
  });
  expectStatus(result, 200, `Set heat level ${heatLevel}`);
};

const assertFilterIncludesProduct = async (filter, heatLevel) => {
  await updateHeatLevel(heatLevel);

  const filtered = await request(`/api/products?heat=${filter}`);
  expectStatus(filtered, 200, `${filter} heat filter`);
  assert.ok(
    filtered.data.products.some((item) => item._id === product._id),
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
    !mildAtExtreme.data.products.some((item) => item._id === product._id),
    'Mild filter incorrectly included an Extreme product'
  );

  const invalid = await request('/api/products?heat=volcanic');
  expectStatus(invalid, 400, 'Invalid heat filter rejection');
} finally {
  await updateHeatLevel(originalHeatLevel);
}

console.log('PASS: Burnsville heat filter API QA');
