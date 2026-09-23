export const limitedHeatDisplayLevels = {
  'CASK-13': 10,
  'TMR-200': 12,
  'B-42': 13,
  'POT-7': 14,
  'P-X': 15,
  'X-666': 20,
};

export const getProductDisplayHeat = (product) => {
  if (!product) {
    return null;
  }

  const identifier = product.identifier
    ? String(product.identifier).trim().toUpperCase()
    : '';

  if (limitedHeatDisplayLevels[identifier]) {
    return limitedHeatDisplayLevels[identifier];
  }

  const heatLevel = Number(product.heatLevel);

  return Number.isFinite(heatLevel) && heatLevel >= 1 && heatLevel <= 10
    ? heatLevel
    : null;
};
