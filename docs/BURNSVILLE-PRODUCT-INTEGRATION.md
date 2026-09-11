# BURNSVILLE — PRODUCT INTEGRATION CONTRACT

## STATUS

PREPARED / FINAL PRODUCT AND VISUAL HANDOFF PENDING.

This document defines how approved Burnsville products will enter the existing application without inventing facts, bypassing QA or creating a parallel product system.

## AUTHORITY

Final product identity, facts, artwork and intended visual use must come from the user's current approved handoff/reference set.

Historical catalogue/asset-map files are not final authority.

## REQUIRED HANDOFF PER PRODUCT

Supply only explicitly approved values:

- final name
- final identifier/code/number where applicable
- collection/series where applicable
- approved primary visual asset
- approved asset role
- description if supplied
- heat value if supplied
- flavour profile if supplied
- ingredients if supplied
- pairings if supplied
- price if supplied
- stock/availability if supplied

Any value not supplied remains unresolved.

## ASSET ROLE GATE

Before implementation, each visual must be classified where relevant as one of:

- PRODUCT CARD ARTWORK
- BOTTLE / PRODUCT ART
- PRODUCT DETAIL / GALLERY ART
- PAIRING / SUPPORTING ART
- PAGE DESIGN REFERENCE ONLY

Do not infer an asset role from appearance alone.

## CURRENT APPLICATION FLOW

Approved product data must enter the existing flow:

Mongo Product → API → Home/Shop → Product Detail → Cart → Checkout/Order → Admin

Do not create a second catalogue path unless an approved architecture decision requires it.

## CURRENT PRODUCT FIELDS

The current runtime supports:

- `name`
- `image`
- `brand`
- `category`
- `description`
- `heatLevel`
- `flavourProfile`
- `pairings`
- `ingredients`
- `reviews`
- `rating`
- `numReviews`
- `price`
- `countInStock`

The current single `image` field is a known constraint. Final reference intake must decide whether separate card/bottle/gallery/supporting image fields are required.

## SAFE GENERAL DEFAULTS FOR NEW BURNSVILLE PRODUCTS

Only these general defaults may be used without product-specific invention:

- `brand: Burnsville`
- `category: Hot Sauce`
- `rating: 0`
- `numReviews: 0`
- `reviews: []`

Price, stock, heat, product copy, ingredients, pairings and final image assignments require approved source data.

## LEGACY CATALOGUE BOUNDARY

`backend/data/products.js` remains the temporary legacy runtime/bootstrap catalogue until the final approved Burnsville replacement dataset is complete and has passed isolated QA.

Do not run the destructive legacy seeder for catalogue replacement.

Do not run bootstrap against a non-empty product collection as a replacement mechanism.

## FINAL INTEGRATION SEQUENCE

1. Complete reference intake.
2. Lock final design/product authority.
3. Confirm final product count and identities.
4. Confirm required product/image schema.
5. Validate final source assets.
6. Approve runtime filenames/paths.
7. Build replacement JSON from approved values only.
8. Run the read-only catalogue validator.
9. Test against an isolated database/runtime.
10. Verify Home, Shop, Product, Cart, Checkout/Order and Admin.
11. Verify responsive and accessibility behaviour.
12. Review migration and rollback procedure.
13. Migrate a shared environment only with explicit approval.
14. Remove legacy third-party catalogue data/assets only after replacement QA passes.

## PASS CONDITION

The final approved product set must travel through:

ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

without invented values, broken assets, public legacy catalogue content or unauthorised database changes.
