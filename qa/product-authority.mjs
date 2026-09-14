import fs from 'node:fs';

const expected = [
  { collection: 'Core', identifier: '01', name: 'GREEN SPARK' },
  { collection: 'Core', identifier: '02', name: 'SUN GOLD' },
  { collection: 'Core', identifier: '03', name: 'CITRUS FLARE' },
  { collection: 'Core', identifier: '04', name: 'RED EMBER' },
  { collection: 'Core', identifier: '05', name: 'DARK HARVEST' },
  { collection: 'Core', identifier: '06', name: 'SALINE CURRENT' },
  { collection: 'Core', identifier: '07', name: 'CALABRIAN SUN' },
  { collection: 'Core', identifier: '08', name: 'BIRD’S FIRE' },
  { collection: 'Core', identifier: '09', name: 'VIOLET’S FUSE' },
  { collection: 'Core', identifier: '10', name: 'GHOST BLACK' },
  { collection: 'Limited / Vintage', identifier: 'P-X', name: 'P-X' },
  { collection: 'Limited / Vintage', identifier: 'CASK-13', name: 'CASK-13' },
  { collection: 'Limited / Vintage', identifier: 'POT-7', name: 'POT-7' },
  { collection: 'Limited / Vintage', identifier: 'TMR-200', name: 'TMR-200' },
  { collection: 'Limited / Vintage', identifier: 'X-666', name: 'X-666' },
  { collection: 'Limited / Vintage', identifier: 'B-42', name: 'B-42' },
];

const limitedHeatAuthority = [
  ['P-X', '10/15'],
  ['CASK-13', '10/10'],
  ['POT-7', '10/14'],
  ['TMR-200', '10/12'],
  ['X-666', '10/20'],
  ['B-42', '10/13'],
];

const fail = (message) => {
  console.error(`PRODUCT AUTHORITY QA FAILED: ${message}`);
  process.exit(1);
};

const masterPath = 'BURNSVILLE-MASTER-AUTHORITY.md';
const intakePath = 'backend/data/burnsville-final-catalogue-intake.json';

if (!fs.existsSync(masterPath)) fail(`${masterPath} is missing`);
if (!fs.existsSync(intakePath)) fail(`${intakePath} is missing`);

const master = fs.readFileSync(masterPath, 'utf8');
const intake = JSON.parse(fs.readFileSync(intakePath, 'utf8'));

if (intake.authority !== masterPath) {
  fail(`catalogue intake must declare ${masterPath} as authority`);
}

if (!Array.isArray(intake.products) || intake.products.length !== expected.length) {
  fail(`catalogue intake must contain exactly ${expected.length} products`);
}

expected.forEach((item, index) => {
  const actual = intake.products[index];
  if (!actual) fail(`missing product at position ${index + 1}`);
  for (const field of ['collection', 'identifier', 'name']) {
    if (actual[field] !== item[field]) {
      fail(`position ${index + 1} ${field} expected "${item[field]}" but found "${actual[field]}"`);
    }
  }

  if (!master.includes(item.identifier) || !master.includes(item.name)) {
    fail(`master authority does not contain locked identity ${item.identifier} / ${item.name}`);
  }
});

const forbiddenActiveIdentities = [
  'CALABRIAN GLOW',
  'FERMENT BLOOM',
  'VELVET SCORCH',
  'NIGHT ORCHARD',
  'CASK 13',
];

for (const forbidden of forbiddenActiveIdentities) {
  if (intake.products.some((product) => product.name === forbidden || product.identifier === forbidden)) {
    fail(`historical descriptive label reintroduced as active identity: ${forbidden}`);
  }
}

for (const [identifier, sourceScale] of limitedHeatAuthority) {
  const product = intake.products.find(
    (candidate) => candidate.identifier === identifier
  );

  if (product?.heatLevel !== 10) {
    fail(`${identifier} runtime heatLevel must be 10`);
  }

  if (!master.includes(`${identifier} — ${sourceScale} — Extreme`)) {
    fail(`${identifier} source heat authority ${sourceScale} is missing from ${masterPath}`);
  }
}

console.log('PRODUCT AUTHORITY QA PASSED');
console.log(`Validated ${expected.length} locked identities and 6 Limited / Vintage heat mappings against ${masterPath} and catalogue intake.`);
