import assert from 'node:assert/strict';
import { validateCatalogue } from './catalogue-readiness.mjs';

const identities = [
  ['Core', '01', 'GREEN SPARK'],
  ['Core', '02', 'SUN GOLD'],
  ['Core', '03', 'CITRUS FLARE'],
  ['Core', '04', 'RED EMBER'],
  ['Core', '05', 'DARK HARVEST'],
  ['Core', '06', 'SALINE CURRENT'],
  ['Core', '07', 'CALABRIAN GLOW'],
  ['Core', '08', 'BIRD’S FIRE'],
  ['Core', '09', 'VIOLET’S FUSE'],
  ['Core', '10', 'GHOST BLACK'],
  ['Limited / Vintage', 'P-X', 'P-X'],
  ['Limited / Vintage', 'CASK-13', 'CASK-13'],
  ['Limited / Vintage', 'POT-7', 'POT-7'],
  ['Limited / Vintage', 'TMR-200', 'TMR-200'],
  ['Limited / Vintage', 'X-666', 'X-666'],
  ['Limited / Vintage', 'B-42', 'B-42'],
];

const buildCatalogue = () => ({
  authority: 'docs/PRODUCT-CATALOGUE.md',
  products: identities.map(([collection, identifier, name]) => ({
    collection,
    identifier,
    name,
    image: `/images/burnsville/${identifier}.png`,
    cardImage: `/images/burnsville/cards/${identifier}.webp`,
    brand: 'Burnsville',
    category: 'Hot Sauce',
    description: 'Approved test description',
    heatLevel: 5,
    flavourProfile: 'Approved test flavour',
    ingredients: 'Approved test ingredients',
    pairings: ['Approved test pairing'],
    price: 100,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    reviews: [],
  })),
});

const validationOptions = { fileExists: () => true };
assert.deepEqual(validateCatalogue(buildCatalogue(), validationOptions), []);

const aliasCatalogue = buildCatalogue();
aliasCatalogue.products[6].name = 'CALABRIAN SUN';
assert(
  validateCatalogue(aliasCatalogue, validationOptions).some((error) =>
    error.includes('CALABRIAN GLOW')
  )
);

const invalidFactsCatalogue = buildCatalogue();
invalidFactsCatalogue.products[0].description = 'CONTENT REQUIRED';
invalidFactsCatalogue.products[0].heatLevel = 11;
invalidFactsCatalogue.products[0].price = 1.234;
invalidFactsCatalogue.products[0].countInStock = -1;
invalidFactsCatalogue.products[0].reviews = [{ rating: 5 }];
assert.equal(validateCatalogue(invalidFactsCatalogue, validationOptions).length, 5);

const missingAssetCatalogue = buildCatalogue();
assert(
  validateCatalogue(missingAssetCatalogue, { fileExists: () => false }).some(
    (error) => error.includes('does not resolve')
  )
);

console.log('CATALOGUE READINESS VALIDATOR TESTS PASSED');
