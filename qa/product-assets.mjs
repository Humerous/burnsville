import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const EXPECTED = [
  ['core', '01', 'GREEN SPARK', 'burnsville-01-green-spark-bottle.webp'],
  ['core', '02', 'SUN GOLD', 'burnsville-02-sun-gold-bottle.webp'],
  ['core', '03', 'CITRUS FLARE', 'burnsville-03-citrus-flare-bottle.webp'],
  ['core', '04', 'RED EMBER', 'burnsville-04-red-ember-bottle.webp'],
  ['core', '05', 'DARK HARVEST', 'burnsville-05-dark-harvest-bottle.webp'],
  ['core', '06', 'SALINE CURRENT', 'burnsville-06-saline-current-bottle.webp'],
  ['core', '07', 'CALABRIAN GLOW', 'burnsville-07-calabrian-sun-bottle.webp'],
  ['core', '08', 'BIRD’S FIRE', 'burnsville-08-birds-fire-bottle.webp'],
  ['core', '09', 'VIOLET’S FUSE', 'burnsville-09-violets-fuse-bottle.webp'],
  ['core', '10', 'GHOST BLACK', 'burnsville-10-ghost-black-bottle.webp'],
  ['limited-vintage', 'P-X', 'P-X', 'burnsville-p-x-bottle.webp'],
  ['limited-vintage', 'CASK-13', 'CASK-13', 'burnsville-cask-13-bottle.webp'],
  ['limited-vintage', 'POT-7', 'POT-7', 'burnsville-pot-7-bottle.webp'],
  ['limited-vintage', 'TMR-200', 'TMR-200', 'burnsville-tmr-200-bottle.webp'],
  ['limited-vintage', 'X-666', 'X-666', 'burnsville-x-666-bottle.webp'],
  ['limited-vintage', 'B-42', 'B-42', 'burnsville-b-42-bottle.webp'],
].map(([, identifier, name, filename]) => ({ identifier, name, filename }));

const fail = (message) => {
  console.error(`PRODUCT ASSET QA FAILED: ${message}`);
  process.exit(1);
};

const readWebpMetadata = (bytes) => {
  if (
    bytes.length < 30 ||
    bytes.toString('ascii', 0, 4) !== 'RIFF' ||
    bytes.toString('ascii', 8, 12) !== 'WEBP'
  ) {
    return null;
  }

  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const type = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (type === 'VP8X' && size >= 10 && dataOffset + size <= bytes.length) {
      const width =
        1 +
        bytes[dataOffset + 4] +
        (bytes[dataOffset + 5] << 8) +
        (bytes[dataOffset + 6] << 16);
      const height =
        1 +
        bytes[dataOffset + 7] +
        (bytes[dataOffset + 8] << 8) +
        (bytes[dataOffset + 9] << 16);
      return {
        width,
        height,
        alpha: (bytes[dataOffset] & 0x10) === 0x10,
      };
    }

    if (
      type === 'VP8L' &&
      size >= 5 &&
      dataOffset + size <= bytes.length &&
      bytes[dataOffset] === 0x2f
    ) {
      const packed = bytes.readUInt32LE(dataOffset + 1);
      return {
        width: (packed & 0x3fff) + 1,
        height: ((packed >>> 14) & 0x3fff) + 1,
        alpha: ((packed >>> 28) & 0x01) === 1,
      };
    }

    offset = dataOffset + size + (size % 2);
  }

  return null;
};

const mapPath = path.resolve('backend/data/bottle-assets.json');
const intakePath = path.resolve('backend/data/catalogue.json');
const publicRoot = path.resolve('frontend/public');
const assetDirectory = path.resolve(publicRoot, 'images/products/bottles');

if (!fs.existsSync(mapPath)) fail(`${mapPath} is missing`);

const assetMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const intake = JSON.parse(fs.readFileSync(intakePath, 'utf8'));
if (assetMap.version !== 1) fail('bottle asset manifest version must be 1');
if (assetMap.catalogue !== 'backend/data/catalogue.json') fail('bottle asset manifest catalogue path is incorrect');
if (assetMap.directory !== '/images/products/bottles/') fail('bottle asset directory is incorrect');
if (!Array.isArray(assetMap.assets) || assetMap.assets.length !== EXPECTED.length) {
  fail(`asset map must contain exactly ${EXPECTED.length} assets`);
}

const directoryFiles = fs
  .readdirSync(assetDirectory)
  .filter((filename) => filename.endsWith('.webp'))
  .sort();
const expectedFiles = EXPECTED.map(({ filename }) => filename).sort();
if (JSON.stringify(directoryFiles) !== JSON.stringify(expectedFiles)) {
  fail('runtime bottle directory must contain exactly the 16 mapped WebP files');
}

EXPECTED.forEach((expected, index) => {
  const actual = assetMap.assets[index];
  for (const field of ['identifier', 'name', 'filename']) {
    if (actual?.[field] !== expected[field]) {
      fail(`assets[${index}].${field} must be ${JSON.stringify(expected[field])}`);
    }
  }

  const expectedPath = `/images/products/bottles/${expected.filename}`;
  if (actual.path !== expectedPath) {
    fail(`assets[${index}].path must be ${expectedPath}`);
  }
  if (intake.products?.[index]?.image !== expectedPath) {
    fail(`catalogue image for ${expected.identifier} must be ${expectedPath}`);
  }
  if (JSON.stringify(actual.size) !== JSON.stringify([1024, 1536])) {
    fail(`assets[${index}].size must be [1024,1536]`);
  }
  if (actual.format !== 'webp' || actual.alpha !== true) {
    fail(`assets[${index}] must declare WebP with alpha`);
  }

  const filePath = path.resolve(assetDirectory, expected.filename);
  if (!filePath.startsWith(`${assetDirectory}${path.sep}`) || !fs.existsSync(filePath)) {
    fail(`assets[${index}] does not resolve under the runtime bottle directory`);
  }

  const bytes = fs.readFileSync(filePath);
  const metadata = readWebpMetadata(bytes);
  if (!metadata || metadata.width !== 1024 || metadata.height !== 1536 || !metadata.alpha) {
    fail(`assets[${index}] must decode as a 1024x1536 WebP with alpha metadata`);
  }

  const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
  if (sha256 !== actual.sha256) {
    fail(`assets[${index}] SHA-256 does not match the approved map`);
  }
});

console.log('PRODUCT ASSET QA PASSED');
console.log('Validated 16 approved transparent bottle assets, dimensions, alpha metadata and SHA-256 integrity.');
