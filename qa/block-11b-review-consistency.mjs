import assert from 'node:assert/strict';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5001';

const requestJson = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  const text = await response.text();
  let data = text;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      // Keep text for diagnostics below.
    }
  }

  assert.equal(
    response.status,
    200,
    `${path}: expected HTTP 200, got ${response.status}: ${text}`
  );

  return data;
};

const expectedRating = (reviews) => {
  if (!reviews.length) {
    return 0;
  }

  return (
    reviews.reduce(
      (total, review) => total + (Number(review.rating) || 0),
      0
    ) / reviews.length
  );
};

const assertAuthoritativeSummary = (product, label) => {
  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const rating = expectedRating(reviews);

  assert.equal(
    product.numReviews,
    reviews.length,
    `${label}: numReviews must equal the actual embedded review count`
  );
  assert.ok(
    Math.abs(Number(product.rating) - rating) < 0.001,
    `${label}: rating must be derived from actual embedded reviews`
  );
};

console.log('BLOCK 11B: verify catalogue review summaries');
const catalogue = await requestJson('/api/products');
assert.ok(Array.isArray(catalogue.products), 'Catalogue products missing');
assert.ok(catalogue.products.length > 0, 'Catalogue unexpectedly empty');

for (const product of catalogue.products) {
  assertAuthoritativeSummary(product, `Catalogue product ${product.name}`);
}

const catalogueProduct = catalogue.products[0];
assert.equal(
  catalogueProduct.reviews.length,
  0,
  'Unreviewed catalogue product unexpectedly contains review records'
);
assert.equal(
  catalogueProduct.numReviews,
  0,
  'Unreviewed catalogue product returned a non-zero review count'
);
assert.equal(
  catalogueProduct.rating,
  0,
  'Unreviewed catalogue product returned a non-zero rating'
);

console.log('BLOCK 11B: verify product-detail review summary');
const detail = await requestJson(`/api/products/${catalogueProduct._id}`);
assertAuthoritativeSummary(detail, `Product detail ${detail.name}`);
assert.equal(detail.numReviews, 0, 'Product detail review count is not authoritative');
assert.equal(detail.rating, 0, 'Product detail rating is not authoritative');

console.log('BLOCK 11B review consistency QA passed');
