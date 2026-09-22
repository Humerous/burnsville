import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const EXPECTED_PRODUCTS = [
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
].map(([collection, identifier, name]) => ({ collection, identifier, name }));

const PLACEHOLDER_VALUES = new Set([
  'DATA REQUIRED',
  'CONTENT REQUIRED',
  'TBC',
  'TBD',
  'TODO',
  'PENDING',
]);

const HISTORICAL_IDENTITIES = new Set([
  'CALABRIAN SUN',
  'FERMENT BLOOM',
  'VELVET SCORCH',
  'DESERT STATIC',
  'FINAL BURN',
  'NIGHT ORCHARD',
  'R-13',
  'CASK 13',
]);

const isApprovedText = (value) =>
  typeof value === 'string' &&
  value.trim().length > 0 &&
  !PLACEHOLDER_VALUES.has(value.trim().toUpperCase());

const hasTwoOrFewerDecimals = (value) =>
  Math.abs(value * 100 - Math.round(value * 100)) < Number.EPSILON * 100;

const resolvePublicAsset = (assetRoot, publicPath) => {
  const relativePath = publicPath.replace(/^\/+/, '');
  const resolvedRoot = path.resolve(assetRoot);
  const resolvedAsset = path.resolve(resolvedRoot, relativePath);

  if (
    resolvedAsset !== resolvedRoot &&
    !resolvedAsset.startsWith(`${resolvedRoot}${path.sep}`)
  ) {
    return null;
  }

  return resolvedAsset;
};

export const validateCatalogue = (
  catalogue,
  {
    assetRoot = path.resolve('frontend/public'),
    fileExists = (filePath) =>
      fs.existsSync(filePath) && fs.statSync(filePath).isFile(),
  } = {}
) => {
  const errors = [];
  const products = catalogue?.products;

  if (catalogue?.version !== 1) errors.push('catalogue.version must be 1');
  if (catalogue?.brand !== 'Burnsville') errors.push('catalogue.brand must be "Burnsville"');
  if (catalogue?.currency !== 'ZAR') errors.push('catalogue.currency must be "ZAR"');

  if (!Array.isArray(products)) {
    return [...errors, 'products must be an array'];
  }

  if (products.length !== EXPECTED_PRODUCTS.length) {
    errors.push(`products must contain exactly ${EXPECTED_PRODUCTS.length} entries`);
  }

  const identifiers = products.map((product) => product?.identifier);
  const duplicateIdentifiers = identifiers.filter(
    (identifier, index) => identifiers.indexOf(identifier) !== index
  );

  if (duplicateIdentifiers.length > 0) {
    errors.push(
      `duplicate identifiers: ${[...new Set(duplicateIdentifiers)].join(', ')}`
    );
  }

  const coreCount = products.filter(
    (product) => product?.collection === 'Core'
  ).length;
  const limitedCount = products.filter(
    (product) => product?.collection === 'Limited / Vintage'
  ).length;

  if (coreCount !== 10 || limitedCount !== 6) {
    errors.push(
      `collection split must be 10 Core and 6 Limited / Vintage; found ${coreCount}/${limitedCount}`
    );
  }

  EXPECTED_PRODUCTS.forEach((expected, index) => {
    const product = products[index];
    const label = `products[${index}] (${expected.identifier})`;

    if (!product || typeof product !== 'object' || Array.isArray(product)) {
      errors.push(`${label} must be an object`);
      return;
    }

    for (const field of ['collection', 'identifier', 'name']) {
      if (product[field] !== expected[field]) {
        errors.push(
          `${label}.${field} must be exactly "${expected[field]}"; found ${JSON.stringify(
            product[field]
          )}`
        );
      }
    }

    for (const field of ['name', 'identifier', 'displayName', 'sku', 'code']) {
      if (
        typeof product[field] === 'string' &&
        HISTORICAL_IDENTITIES.has(product[field].trim().toUpperCase())
      ) {
        errors.push(`${label}.${field} reintroduces historical identity ${product[field]}`);
      }
    }

    if (product.brand !== 'Burnsville') {
      errors.push(`${label}.brand must be exactly "Burnsville"`);
    }

    if (product.category !== 'Hot Sauce') {
      errors.push(`${label}.category must be exactly "Hot Sauce"`);
    }

    for (const field of [
      'description',
      'flavourProfile',
      'ingredients',
    ]) {
      if (!isApprovedText(product[field])) {
        errors.push(`${label}.${field} requires approved non-placeholder text`);
      }
    }

    if (
      !Number.isInteger(product.heatLevel) ||
      product.heatLevel < 1 ||
      product.heatLevel > 10
    ) {
      errors.push(`${label}.heatLevel must be an integer from 1 to 10`);
    }

    if (
      !Array.isArray(product.pairings) ||
      product.pairings.length === 0 ||
      product.pairings.some((pairing) => !isApprovedText(pairing))
    ) {
      errors.push(`${label}.pairings must contain approved non-placeholder text`);
    }

    if (
      typeof product.price !== 'number' ||
      !Number.isFinite(product.price) ||
      product.price <= 0 ||
      !hasTwoOrFewerDecimals(product.price)
    ) {
      errors.push(`${label}.price must be positive money with at most two decimals`);
    }

    if (
      !Number.isInteger(product.countInStock) ||
      product.countInStock < 0
    ) {
      errors.push(`${label}.countInStock must be a non-negative integer`);
    }

    if (product.rating !== 0 || product.numReviews !== 0) {
      errors.push(`${label} must start with rating 0 and numReviews 0`);
    }

    if (!Array.isArray(product.reviews) || product.reviews.length !== 0) {
      errors.push(`${label}.reviews must be an empty array`);
    }

    if ('user' in product || '_id' in product) {
      errors.push(`${label} must not contain runtime user or _id values`);
    }

    for (const imageField of ['image', 'cardImage']) {
      const imagePath = product[imageField];
      if (!isApprovedText(imagePath) || !imagePath.startsWith('/')) {
        errors.push(`${label}.${imageField} must be an approved absolute public path`);
        continue;
      }

      const extension = path.extname(imagePath).toLowerCase();
      if (!['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(extension)) {
        errors.push(`${label}.${imageField} must use a supported web image extension`);
      }

      const resolvedAsset = resolvePublicAsset(assetRoot, imagePath);
      if (!resolvedAsset || !fileExists(resolvedAsset)) {
        errors.push(
          `${label}.${imageField} does not resolve under ${path.resolve(assetRoot)}: ${imagePath}`
        );
      }
    }
  });

  return errors;
};

const run = () => {
  const args = process.argv.slice(2);
  const assetRootFlag = args.indexOf('--asset-root');
  const positionalArgs = args.filter(
    (arg, index) =>
      !arg.startsWith('--') &&
      !(assetRootFlag >= 0 && index === assetRootFlag + 1)
  );
  const inputPath = path.resolve(
    positionalArgs[0] || 'backend/data/catalogue.json'
  );
  const assetRoot = path.resolve(
    assetRootFlag >= 0 && args[assetRootFlag + 1]
      ? args[assetRootFlag + 1]
      : 'frontend/public'
  );

  let catalogue;
  try {
    catalogue = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  } catch (error) {
    console.error(`CATALOGUE READINESS FAILED: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const errors = validateCatalogue(catalogue, { assetRoot });

  if (errors.length > 0) {
    console.error(`CATALOGUE READINESS BLOCKED: ${errors.length} issue(s)`);
    const displayedErrors = errors.slice(0, 80);
    for (const error of displayedErrors) console.error(`- ${error}`);
    if (errors.length > displayedErrors.length) {
      console.error(`- ${errors.length - displayedErrors.length} additional issue(s) omitted`);
    }
    process.exitCode = 1;
    return;
  }

  console.log('CATALOGUE READINESS PASSED');
  console.log(
    `Validated ${EXPECTED_PRODUCTS.length} products, locked identities, product fields and asset paths without database access.`
  );
};

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))
) {
  run();
}
