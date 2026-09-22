import fs from 'node:fs';

const expected = [
  ['Core', '01', 'GREEN SPARK', 3],
  ['Core', '02', 'SUN GOLD', 6],
  ['Core', '03', 'CITRUS FLARE', 7],
  ['Core', '04', 'RED EMBER', 9],
  ['Core', '05', 'DARK HARVEST', 7],
  ['Core', '06', 'SALINE CURRENT', 9],
  ['Core', '07', 'CALABRIAN GLOW', 9],
  ['Core', '08', 'BIRD’S FIRE', 10],
  ['Core', '09', 'VIOLET’S FUSE', 6],
  ['Core', '10', 'GHOST BLACK', 9],
  ['Limited / Vintage', 'P-X', 'P-X', 10],
  ['Limited / Vintage', 'CASK-13', 'CASK-13', 10],
  ['Limited / Vintage', 'POT-7', 'POT-7', 10],
  ['Limited / Vintage', 'TMR-200', 'TMR-200', 10],
  ['Limited / Vintage', 'X-666', 'X-666', 10],
  ['Limited / Vintage', 'B-42', 'B-42', 10],
].map(([collection, identifier, name, heatLevel]) => ({
  collection,
  identifier,
  name,
  heatLevel,
}));

const sourceHeatScales = {
  'P-X': '10/15',
  'CASK-13': '10/10',
  'POT-7': '10/14',
  'TMR-200': '10/12',
  'X-666': '10/20',
  'B-42': '10/13',
};

const displayNames = {
  'P-X': 'FERMENT BLOOM',
  'CASK-13': 'CASK 13',
  'POT-7': 'VELVET SCORCH',
  'TMR-200': 'TMR-200',
  'X-666': 'FINAL BURN',
  'B-42': 'NIGHT ORCHARD',
};

const forbiddenActiveIdentities = new Set([
  'CALABRIAN SUN',
  'FERMENT BLOOM',
  'VELVET SCORCH',
  'NIGHT ORCHARD',
  'CASK 13',
]);

const fail = (message) => {
  console.error(`PRODUCT AUTHORITY QA FAILED: ${message}`);
  process.exit(1);
};

const cataloguePath = 'backend/data/catalogue.json';
if (!fs.existsSync(cataloguePath)) fail(`${cataloguePath} is missing`);

const catalogue = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'));

if (catalogue.version !== 1) fail('catalogue.version must be 1');
if (catalogue.brand !== 'Burnsville') fail('catalogue.brand must be Burnsville');
if (catalogue.currency !== 'ZAR') fail('catalogue.currency must be ZAR');
if (!Array.isArray(catalogue.products) || catalogue.products.length !== expected.length) {
  fail(`catalogue must contain exactly ${expected.length} products`);
}

expected.forEach((item, index) => {
  const actual = catalogue.products[index];
  if (!actual) fail(`missing product at position ${index + 1}`);

  for (const field of ['collection', 'identifier', 'name', 'heatLevel']) {
    if (actual[field] !== item[field]) {
      fail(
        `position ${index + 1} ${field} expected ${JSON.stringify(item[field])} but found ${JSON.stringify(actual[field])}`,
      );
    }
  }

  if (
    forbiddenActiveIdentities.has(actual.name) ||
    forbiddenActiveIdentities.has(actual.identifier)
  ) {
    fail(`historical descriptive label reintroduced as active identity: ${actual.name}`);
  }
});

for (const [identifier, scale] of Object.entries(sourceHeatScales)) {
  if (catalogue.limitedSourceHeatScales?.[identifier] !== scale) {
    fail(`${identifier} source heat scale must be ${scale}`);
  }
}

for (const [identifier, displayName] of Object.entries(displayNames)) {
  if (catalogue.limitedDisplayNames?.[identifier] !== displayName) {
    fail(`${identifier} display name must be ${displayName}`);
  }
}

console.log('PRODUCT AUTHORITY QA PASSED');
console.log(`Validated ${expected.length} locked product identities, heat levels and display metadata.`);
