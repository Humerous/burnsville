# BURNSVILLE — PRODUCT INTEGRATION CONTRACT

## STATUS

IDENTITIES LOCKED / FINAL PRODUCT FACTS, ASSET ROLES AND IMAGE ARCHITECTURE PENDING.

This document defines how approved Burnsville products will enter the existing application without inventing facts, bypassing QA or creating a parallel product system.

## AUTHORITY

`BURNSVILLE-MASTER-AUTHORITY.md` is the sole current authority for product identities unless the owner explicitly approves a newer change.

Historical catalogue/asset-map files are supporting evidence only. Historical descriptive labels and filenames cannot rename products or approve product facts.

## LOCKED IDENTITY HANDOFF

Already complete:

- 16 products total
- 10 Core identities numbered 01–10
- 6 Limited / Vintage identities: `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, `B-42`

Do not request re-approval of these identities unless the owner explicitly reopens them.

## REQUIRED REMAINING HANDOFF PER PRODUCT

Supply only explicitly approved values:

- approved primary/runtime visual asset
- approved asset role
- description if supplied
- heat value if supplied
- flavour profile if supplied
- ingredients if supplied
- pairings if supplied
- price if supplied
- stock/availability if supplied
- any descriptive display name for Limited / Vintage only if explicitly approved

Any value not supplied remains unresolved.

## ASSET ROLE GATE

Before implementation, each visual must be classified where relevant as one of:

- PRODUCT CARD ARTWORK
- BOTTLE / PRODUCT ART
- PRODUCT DETAIL / GALLERY ART
- PAIRING / SUPPORTING ART
- PAGE DESIGN REFERENCE ONLY

Do not infer an asset role from appearance or filename alone.

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

The current single `image` field is a known constraint. The final asset handoff must decide whether separate card/bottle/gallery/supporting image fields are required.

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

Completed control gates:

1. Product count and identities locked in `BURNSVILLE-MASTER-AUTHORITY.md`.
2. Authority drift protected by `qa/product-authority.mjs` in CI.
3. Approved UI and working commerce engine preserved.

Next gates:

4. Confirm required product/image schema.
5. Validate and classify final source assets.
6. Resolve card geometry and approve runtime filenames/paths.
7. Complete approved product facts/commercial values.
8. Build replacement JSON from approved values only.
9. Run product-authority QA and the read-only catalogue validator.
10. Test against an isolated database/runtime.
11. Verify Home, Shop, Product, Cart, Checkout/Order and Admin.
12. Verify responsive and accessibility behaviour.
13. Review migration and rollback procedure.
14. Migrate a shared environment only with explicit approval.
15. Remove legacy third-party catalogue data/assets only after replacement QA passes.

## PASS CONDITION

The final approved product set must travel through:

AUTHORITY → ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

without invented values, broken assets, identity drift, public legacy catalogue content or unauthorised database changes.
