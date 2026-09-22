import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const fail = (message) => {
  console.error(`PRODUCT CARD ASSET QA FAILED: ${message}`);
  process.exit(1);
};

const readWebpSize = (bytes) => {
  if (bytes.length < 30 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') return null;
  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const type = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;
    if (type === 'VP8X' && size >= 10 && dataOffset + size <= bytes.length) {
      return {
        width: 1 + bytes[dataOffset + 4] + (bytes[dataOffset + 5] << 8) + (bytes[dataOffset + 6] << 16),
        height: 1 + bytes[dataOffset + 7] + (bytes[dataOffset + 8] << 8) + (bytes[dataOffset + 9] << 16),
      };
    }
    if (type === 'VP8L' && size >= 5 && dataOffset + size <= bytes.length && bytes[dataOffset] === 0x2f) {
      const packed = bytes.readUInt32LE(dataOffset + 1);
      return { width: (packed & 0x3fff) + 1, height: ((packed >>> 14) & 0x3fff) + 1 };
    }
    if (type === 'VP8 ' && size >= 10 && dataOffset + size <= bytes.length && bytes.toString('binary', dataOffset + 3, dataOffset + 6) === '\x9d\x01\x2a') {
      return {
        width: bytes.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: bytes.readUInt16LE(dataOffset + 8) & 0x3fff,
      };
    }
    offset = dataOffset + size + (size % 2);
  }
  return null;
};

const mapPath = path.resolve('backend/data/card-assets.json');
const intakePath = path.resolve('backend/data/catalogue.json');
const publicRoot = path.resolve('frontend/public');
const cardDirectory = path.resolve(publicRoot, 'images/products/cards');

for (const required of [mapPath, intakePath, cardDirectory]) {
  if (!fs.existsSync(required)) fail(`${required} is missing`);
}

const assetMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const intake = JSON.parse(fs.readFileSync(intakePath, 'utf8'));

if (assetMap.version !== 1) fail('card asset manifest version must be 1');
if (assetMap.catalogue !== 'backend/data/catalogue.json') fail('card asset manifest catalogue path is incorrect');
if (assetMap.directory !== '/images/products/cards/') fail('card asset directory is incorrect');
if (!Array.isArray(assetMap.assets) || assetMap.assets.length !== 16) fail('card asset map must contain exactly 16 assets');

const directoryFiles = fs.readdirSync(cardDirectory).filter((filename) => filename.endsWith('.webp')).sort();
const expectedFiles = assetMap.assets.map(({ filename }) => filename).sort();
if (JSON.stringify(directoryFiles) !== JSON.stringify(expectedFiles)) fail('runtime card directory must contain exactly the 16 mapped WebP files');

assetMap.assets.forEach((asset, index) => {
  const expectedPath = `/images/products/cards/${asset.filename}`;
  if (asset.path !== expectedPath) fail(`assets[${index}].path must be ${expectedPath}`);
  if (intake.products?.[index]?.cardImage !== expectedPath) fail(`catalogue cardImage for ${asset.identifier} must be ${expectedPath}`);
  const filePath = path.resolve(cardDirectory, asset.filename);
  if (!filePath.startsWith(`${cardDirectory}${path.sep}`) || !fs.existsSync(filePath)) fail(`assets[${index}] does not resolve under the runtime card directory`);
  const bytes = fs.readFileSync(filePath);
  const metadata = readWebpSize(bytes);
  if (!metadata || JSON.stringify([metadata.width, metadata.height]) !== JSON.stringify(asset.size)) fail(`assets[${index}] dimensions do not match approved map`);
  const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
  if (sha256 !== asset.sha256) fail(`assets[${index}] SHA-256 does not match the approved map`);
});

console.log('PRODUCT CARD ASSET QA PASSED');
console.log('Validated 16 approved full product cards, dimensions, catalogue paths and SHA-256 integrity.');
