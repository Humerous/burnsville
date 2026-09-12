# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT COUNT AND NAMES CONFIRMED / PRODUCT FACTS AND ASSETS BLOCKED.

Audit date: 2026-09-12

Active branch at audit: `modernise/burnsville-v2`

Starting HEAD: `3975fec90de2c9f9ed09b0a840a565897152d2cd`

## OUTCOME

The project owner confirmed a final catalogue of 16 products: 10 Core and 6 Limited / Vintage. `NIGHT ORCHARD` is retained as the sixth Limited / Vintage product. The remaining product facts and current matching product artwork have not been supplied.

The preserved 16-product dataset and its card/bottle assets are technically valid historical evidence. They cannot be promoted into the current runtime because several identities conflict with the final instruction and the historical cards do not meet the current 1:1 card rule.

No product data, image, runtime catalogue or database record was changed by this reconciliation.

## AUTHORITY USED

1. Current explicit user instruction.
2. `pasted-text.txt`, section `LOCKED PRODUCT AUTHORITY`, including its warning not to resurrect stale historical names.
3. Current repository control documents.
4. Uploaded PASS UI layouts as visual/layout evidence only.
5. Preserved historical catalogue and assets as supporting evidence only.

## SOURCE INVENTORY VERIFIED

### Uploaded Desktop pack

`/Users/videoimagetechnologies/Desktop/Approved Burnsville visual system..zip`

The archive contains flattened UI/storyboard PNG files and a favicon package. It contains no standalone current product-card or bottle master set. OCR of `ALL SAUCES.png` confirms that the storyboard includes the historical names `SALINE CURRENT` and `CALABRIAN GLOW`; the storyboard therefore cannot control current product identity.

### Preserved historical checkout

`/Users/videoimagetechnologies/Documents/Developer/Projects/burnsville_mern-app`

Verified supporting material:

- 16 WEBP bottle derivatives at 1024 × 1536 with alpha.
- 16 WEBP card derivatives at 1122 × 1402 without alpha.
- Bottle derivative SHA-256 values match `qa/burnsville-bottle-source-register.json`.
- Product data exists for the same historical 16-product set.
- The historical data includes price, stock, descriptions, heat, ingredients and other commercial/product facts, but the current handoff does not approve those values for the current identities.

The historical cards are portrait assets. The current final build instruction defines approved card geometry as 1:1 and 1254 × 1254 where applicable. Their labels are baked into the artwork, so renamed products cannot safely reuse them as current assets.

## PRODUCT AUTHORITY MATRIX

| Collection | Current confirmed name | Historical candidate | Disposition |
| --- | --- | --- | --- |
| Core | GREEN SPARK | GREEN SPARK | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | SUN GOLD | SUN GOLD | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | CITRUS FLARE | CITRUS FLARE | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | RED EMBER | RED EMBER | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | DARK HARVEST | DARK HARVEST | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | VERDE SALT | SALINE CURRENT | Conflict. Historical artwork has `SALINE CURRENT` baked into the label/card and is not current authority. |
| Core | CALABRIAN SUN | CALABRIAN GLOW | Conflict. Historical artwork has `CALABRIAN GLOW` baked into the label/card and is not current authority. |
| Core | BIRD’S FIRE | BIRD'S FIRE | Name concept matches. Exact punctuation and final asset approval remain required. |
| Core | VIOLET’S FUSE | VIOLETS FUSE | Exact-name conflict. Current apostrophe form controls; historical labelled artwork remains unapproved. |
| Core | GHOST BLACK | GHOST BLACK | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | GOLDEN FERMENT | FERMENT BLOOM | Conflict. Historical labelled artwork is not current authority. |
| Limited / Vintage | CASK-13 | CASK 13 | Exact-name/identifier conflict. Current hyphenated form controls; final identifier and artwork remain required. |
| Limited / Vintage | VELVET BURN | VELVET SCORCH | Conflict. Historical labelled artwork is not current authority. |
| Limited / Vintage | DESERT STATIC | DESERT STATIC | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | FINAL BURN | FINAL BURN | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | NIGHT ORCHARD | NIGHT ORCHARD | Name and range membership confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |

## CURRENT SAFE DECISIONS

- The final catalogue contains 16 products: 10 Core and 6 Limited / Vintage.
- The 16 names in `backend/data/burnsville-final-catalogue-intake.json` are the only current product facts recorded as confirmed.
- `backend/data/burnsville-product-catalogue.json` and `backend/data/burnsville-product-asset-map.json` are retained as historical evidence and explicitly marked as superseded.
- `scripts/install-approved-product-cards.sh` is disabled because its manifest installs superseded labelled assets.
- No historical price, stock, heat, description, ingredients, pairings, ratings, reviews or identifiers may be copied into the current catalogue without explicit approval.
- No shared database migration is authorised.

## REQUIRED HANDOFF TO UNBLOCK RUNTIME REPLACEMENT

1. Supply the final identifier/SKU for every product.
2. Supply current approved card and bottle assets with an explicit role for each file, including assets matching the renamed products.
3. Confirm whether the final card standard is strictly 1254 × 1254 or approve a documented exception.
4. Supply approved description, heat, flavour, ingredients, pairings, price and stock for every product.
5. Confirm the final runtime image/gallery architecture.
6. Review the completed replacement dataset and isolated migration/rollback plan before any shared data change.

## NEXT IMPLEMENTATION GATE

When the required handoff exists:

`ASSET → DATA → VALIDATOR → ISOLATED API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN → MIGRATION REVIEW`
