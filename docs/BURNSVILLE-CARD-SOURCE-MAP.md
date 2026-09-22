# BURNSVILLE — CURRENT CARD ASSET MAP

The current runtime card set contains exactly 16 approved WebP assets.

Runtime directory:

`frontend/public/images/products/cards/`

The canonical filename, product identity, dimensions and SHA-256 for each card are stored in:

`backend/data/burnsville-product-card-asset-map.json`

The product runtime paths are stored in:

`backend/data/burnsville-final-catalogue-intake.json`

Current card artwork must not be regenerated, recoloured, rewritten, destructively cropped or replaced without explicit owner approval.

`qa/product-card-assets.mjs` verifies that the runtime directory contains exactly the approved 16 files and that every file matches its recorded SHA-256 and dimensions.
