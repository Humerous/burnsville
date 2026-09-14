# BURNSVILLE — PRODUCT INTEGRATION CONTRACT

## STATUS

REVIEW 1 CATALOGUE INTEGRATED / ISOLATED QA PASSED / PREVIEW MIGRATION READY FOR OWNER APPROVAL.

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

## COMPLETED PRODUCT HANDOFF

All 16 Review 1 products have approved identity, collection, primary asset, description, heat, flavour profile, ingredients, pairings, price and stock values in `backend/data/burnsville-final-catalogue-intake.json`. New replacement products start with empty reviews and zero derived rating values.

## APPROVED REVIEW 1 ASSET ROLE

The owner approved the following on 2026-09-13:

- one transparent bottle render is the primary runtime image for each product
- the same primary image flows through all existing customer/admin product surfaces
- the current single `image` field remains sufficient through REVIEW 1
- portrait bottle renders are contained inside approved square media areas without crop or stretch
- opaque 1122 × 1402 poster/card artworks remain supporting marketing evidence and are not runtime product images
- Limited / Vintage products use code-only display names through REVIEW 1
- conflicting visible identity text must be corrected before a bottle asset is installed

Any future gallery or additional structural product-image field requires a later explicit architecture decision.

## ASSET CLASSIFICATION RULE

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

The current single `image` field is approved through REVIEW 1. Do not add gallery/card/supporting fields during this stage.

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

Completed Review 1 integration gates:

4. Validate the approved single-image architecture against the current schema. — COMPLETE
5. Correct, validate and install the approved bottle assets. — COMPLETE
6. Record final runtime filenames/paths and asset evidence. — COMPLETE
7. Complete approved product facts/commercial values. — COMPLETE
8. Build replacement JSON from approved values only. — COMPLETE
9. Run product-authority QA and the catalogue validator. — COMPLETE
10. Prove product-only replacement, rerun safety and rollback against an isolated database. — COMPLETE
11. Verify Home, Shop, Product, Cart, Checkout/Order, reviews and Admin. — COMPLETE
12. Verify 1440/768/390/320 responsive and accessibility behaviour. — COMPLETE
13. Review and document the executable migration and rollback procedure. — COMPLETE
14. Migrate shared Preview only with explicit owner approval. — PENDING OWNER APPROVAL
15. Remove legacy source data/assets only after shared Preview and Production release acceptance. — DEFERRED

## PASS CONDITION

The final approved product set must travel through:

AUTHORITY → ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

without invented values, broken assets, identity drift, public legacy catalogue content or unauthorised database changes.
