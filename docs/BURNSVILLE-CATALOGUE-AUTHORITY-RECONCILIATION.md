# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT COUNT AND NAMES CONFIRMED / PRODUCT FACTS AND ASSETS BLOCKED.

Audit date: 2026-09-12

Active branch at audit: `modernise/burnsville-v2`

Starting HEAD: `3975fec90de2c9f9ed09b0a840a565897152d2cd`

## OUTCOME

The project owner confirmed a final catalogue of 16 products: 10 Core and 6 Limited / Vintage. The owner also confirmed that no product names change. The original names on the preserved 16-product set therefore remain current name authority. The remaining product facts, identifiers and final runtime asset roles are not yet approved.

The preserved 16-product dataset and its card/bottle assets are technically valid supporting evidence. Its product names now match the current explicit instruction. The full dataset cannot yet be promoted into the runtime because its remaining facts are not explicitly approved and its 1122 × 1402 portrait cards do not meet the 1:1 card rule in the final build instruction.

No product data, image, runtime catalogue or database record was changed by this reconciliation.

## AUTHORITY USED

1. Current explicit user instruction.
2. `pasted-text.txt` for build, safety and card-geometry constraints; its proposed renamed forms are superseded by the current explicit owner instruction.
3. Current repository control documents.
4. Uploaded PASS UI layouts as visual/layout evidence only.
5. Preserved 16-product catalogue and assets: names confirmed, remaining facts and asset roles supporting evidence only.

## SOURCE INVENTORY VERIFIED

### Uploaded Desktop pack

`/Users/videoimagetechnologies/Desktop/Approved Burnsville visual system..zip`

The archive contains flattened UI/storyboard PNG files and a favicon package. It contains no standalone product-card or bottle master set. OCR of `ALL SAUCES.png` confirms the unchanged names `SALINE CURRENT` and `CALABRIAN GLOW`, but the storyboard does not supply a complete 16-product data or asset handoff.

### Preserved historical checkout

`/Users/videoimagetechnologies/Documents/Developer/Projects/burnsville_mern-app`

Verified supporting material:

- 16 WEBP bottle derivatives at 1024 × 1536 with alpha.
- 16 WEBP card derivatives at 1122 × 1402 without alpha.
- Bottle derivative SHA-256 values match `qa/burnsville-bottle-source-register.json`.
- Product data exists for the same historical 16-product set.
- The historical data includes price, stock, descriptions, heat, ingredients and other commercial/product facts, but the current handoff does not approve those values for the current identities.

The preserved cards are portrait assets. The final build instruction defines approved card geometry as 1:1 and 1254 × 1254 where applicable. The existing cards therefore require an explicit geometry decision before runtime installation.

## PRODUCT AUTHORITY MATRIX

| Collection | Current confirmed name | Historical candidate | Disposition |
| --- | --- | --- | --- |
| Core | GREEN SPARK | GREEN SPARK | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | SUN GOLD | SUN GOLD | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | CITRUS FLARE | CITRUS FLARE | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | RED EMBER | RED EMBER | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | DARK HARVEST | DARK HARVEST | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Core | SALINE CURRENT | SALINE CURRENT | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Core | CALABRIAN GLOW | CALABRIAN GLOW | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Core | BIRD'S FIRE | BIRD'S FIRE | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Core | VIOLETS FUSE | VIOLETS FUSE | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Core | GHOST BLACK | GHOST BLACK | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | FERMENT BLOOM | FERMENT BLOOM | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Limited / Vintage | CASK 13 | CASK 13 | Name confirmed unchanged. Final identifier and asset-role approval remain required. |
| Limited / Vintage | VELVET SCORCH | VELVET SCORCH | Name confirmed unchanged. Historical bottle/card remain candidates pending final asset-role and geometry approval. |
| Limited / Vintage | DESERT STATIC | DESERT STATIC | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | FINAL BURN | FINAL BURN | Name confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |
| Limited / Vintage | NIGHT ORCHARD | NIGHT ORCHARD | Name and range membership confirmed. Historical bottle/card remain candidates only pending current asset-role and geometry approval. |

## CURRENT SAFE DECISIONS

- The final catalogue contains 16 products: 10 Core and 6 Limited / Vintage.
- All 16 original product names remain unchanged.
- The 16 names in `backend/data/burnsville-final-catalogue-intake.json` are the only current product facts recorded as confirmed.
- `backend/data/burnsville-product-catalogue.json` remains non-runtime supporting evidence: its names are confirmed, but its identifiers, paths and product/commercial facts are not automatically approved.
- `backend/data/burnsville-product-asset-map.json` and `scripts/install-approved-product-cards.sh` remain non-runtime pending resolution of the portrait-card versus 1:1 geometry conflict.
- No unapproved price, stock, heat, description, ingredients, pairings, ratings, reviews or identifiers may be copied into the current catalogue without explicit approval.
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
