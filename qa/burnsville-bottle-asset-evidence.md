# BURNSVILLE — REVIEW 1 BOTTLE ASSET EVIDENCE

## STATUS

PASS — 16 PRIMARY RUNTIME BOTTLE ASSETS VERIFIED AND INSTALLED.

Verification date: 2026-09-13.

Authority: `BURNSVILLE-MASTER-AUTHORITY.md` and decision D-019 in `docs/BURNSVILLE-DECISIONS.md`.

## SCOPE

The Review 1 product-image architecture uses one transparent bottle render per product through the existing `image` field. The approved portrait bottles are contained inside the existing square product-card media without crop or stretch. Preserved opaque poster/card artworks are excluded from runtime.

The source bottle set remains preserved outside this repository at:

`/Users/videoimagetechnologies/Documents/Developer/Projects/burnsville_mern-app/frontend/public/images/products/bottles/`

No preserved source file was moved, overwritten or deleted.

## ASSET HANDLING

Eight source bottles already displayed the exact locked identity and were copied without visual editing:

- 01 GREEN SPARK
- 02 SUN GOLD
- 03 CITRUS FLARE
- 04 RED EMBER
- 05 DARK HARVEST
- 06 SALINE CURRENT
- 08 BIRD’S FIRE
- 10 GHOST BLACK

Eight bottle labels required an authorised identity-text correction:

- 07 → CALABRIAN SUN
- 09 → VIOLET’S FUSE
- P-X → code-only display identity
- CASK-13 → exact hyphenated code-only display identity
- POT-7 → code-only display identity
- TMR-200 → code-only display identity
- X-666 → code-only display identity
- B-42 → code-only display identity

The built-in ImageGen workflow was used for localised label-text patches. Each prompt required the exact target identity, restricted the change to the identity area, and preserved the bottle, Burnsville logo, label system, ingredient text, artwork, colour, lighting and framing. Whole generated images were rejected after validation found a baked checkerboard and missing usable transparency. Only the corrected central label regions were composited onto the preserved source bottle pixels, then the original source alpha mask was restored.

## VERIFICATION EVIDENCE

- 16 expected runtime files exist under `frontend/public/images/products/bottles/`.
- All 16 files decode as 1024 × 1536 WebP images with alpha.
- A complete visual contact-sheet review passed.
- Full-resolution corrected-label review passed for all eight edited bottles.
- No historical identity label remains visible in the corrected runtime artwork.
- All six Limited / Vintage bottles show the locked code as the only product identity.
- Image dimensions, framing and colour treatment are preserved.
- Every edited file's restored alpha mask is pixel-identical to its preserved source: ImageMagick absolute-error metric `0 (0)`.
- The six corrected Limited / Vintage WebPs use high-quality colour compression with lossless alpha. A second full-resolution label review passed after optimization, and the complete asset directory was reduced from 6.0 MB to 2.8 MB.
- `qa/product-assets.mjs` verifies exact identity-to-path mapping, WebP dimensions, alpha metadata and SHA-256 integrity.
- The Vite production build contains all 16 files with matching SHA-256 values.
- A local production preview returned HTTP 200 and `image/webp` for all 16 paths; every served response matched its approved SHA-256.

## SAFETY BOUNDARY

No database was accessed or mutated. No unresolved description, flavour profile, ingredient list, heat level, pairing, price or stock value was inferred. Legacy runtime data/assets remain preserved until the complete approved catalogue passes isolated integration and rollback review.
