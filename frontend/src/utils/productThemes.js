export const productThemes = {
  '01': {
    theme: 'theme-green-spark',
    accent: '#7fa52b',
  },
  '02': {
    theme: 'theme-sun-gold',
    accent: '#e28a18',
  },
  '03': {
    theme: 'theme-citrus-flare',
    accent: '#d6b51e',
  },
  '04': {
    theme: 'theme-red-ember',
    accent: '#c93224',
  },
  '05': {
    theme: 'theme-dark-harvest',
    accent: '#6b3b27',
  },
  '06': {
    theme: 'theme-saline-current',
    accent: '#278b8d',
  },
  '07': {
    theme: 'theme-calabrian-glow',
    accent: '#d73b27',
  },
  '08': {
    theme: 'theme-birds-fire',
    accent: '#d84429',
  },
  '09': {
    theme: 'theme-violets-fuse',
    accent: '#a52570',
  },
  '10': {
    theme: 'theme-ghost-black',
    accent: '#292929',
  },
  'B-42': {
    theme: 'theme-b42-night-orchard',
    accent: '#59276f',
  },
  'CASK-13': {
    theme: 'theme-cask-13',
    accent: '#875522',
  },
  'P-X': {
    theme: 'theme-px-ferment-bloom',
    accent: '#63802d',
  },
  'POT-7': {
    theme: 'theme-pot7-velvet-scorch',
    accent: '#2875a6',
  },
  'TMR-200': {
    theme: 'theme-tmr200',
    accent: '#d52868',
  },
  'X-666': {
    theme: 'theme-x666-final-burn',
    accent: '#a6261c',
  },
};

export const getProductTheme = (product) => {
  if (!product || !product.identifier) {
    return null;
  }

  return productThemes[String(product.identifier).trim().toUpperCase()] || null;
};
