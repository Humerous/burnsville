# BLOCK 11D — BURNSVILLE CATALOGUE REPLACEMENT MAP

## STATUS

IDENTITY AND REVIEW 1 ASSET AUTHORITY LOCKED / FINAL PRODUCT FACTS PENDING.

## PURPOSE

Replace the temporary legacy third-party catalogue with final approved Burnsville product data while preserving the existing working ecommerce engine.

This file is a planning/control artifact only. It does not authorise database mutation.

## CURRENT AUTHORITY

Use in this order:

1. `AGENTS.md`
2. `BURNSVILLE-MASTER-AUTHORITY.md`
3. `docs/BURNSVILLE-PROJECT-CONTROL.md`
4. `docs/BURNSVILLE-DECISIONS.md`
5. `docs/BURNSVILLE-PRODUCT-INTEGRATION.md`
6. `docs/BURNSVILLE-CATALOGUE-MIGRATION-PLAN.md`
7. `qa/block-11d-final-product-integration-checklist.md`

Historical catalogue/asset files are supporting evidence only.

## ALREADY RESOLVED

- 16 products total
- 10 Core identities 01–10
- 6 Limited / Vintage identities: `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, `B-42`
- approved UI implementation
- current technical heat range 1–10
- real server-side heat filtering
- product-identity drift guard in CI
- approved single-image Review 1 architecture
- 16 approved transparent bottle assets and runtime paths
- approved square-media containment rule
- product-asset integrity guard in CI

Do not spend a future implementation block re-auditing these unless the owner explicitly reopens them.

## SAFETY CONSTRAINTS

- Do not invent or rename products.
- Do not invent ingredients, descriptions, heat values, prices, stock or availability.
- Do not replace or reinterpret the approved Review 1 runtime asset map.
- Do not carry third-party products, descriptions, ratings or reviews into the final Burnsville catalogue.
- New replacement products begin with rating/review values of zero unless real migrated review data is separately approved.
- Do not mutate shared Preview/Production data during preparation.
- Do not use the destructive legacy seeder.
- Do not use bootstrap against an already-populated product collection as a replacement method.

## CURRENT RUNTIME BOUNDARY

`backend/data/products.js` remains the temporary legacy runtime/bootstrap catalogue until the complete approved Burnsville replacement set is ready.

Legacy public product imagery remains temporarily for the same reason.

Do not remove either until the replacement catalogue passes isolated QA and rollback evidence exists.

## SAFE GENERAL DEFAULTS

Only these general values may be used without product-specific invention:

- `brand: Burnsville`
- `category: Hot Sauce`
- `rating: 0`
- `numReviews: 0`
- `reviews: []`

All product-specific/commercial values must come from the final approved handoff.

## FINAL REPLACEMENT GATE

Before runtime replacement:

1. Run `node qa/product-authority.mjs`.
2. Run `node qa/product-assets.mjs` against the locked Review 1 map.
3. Record only approved product facts/commercial data.
4. Build one complete replacement dataset.
5. Run the read-only catalogue validator.
6. Run isolated API/customer/admin QA.
7. Review backup/rollback procedure.
8. Obtain explicit approval before shared-environment migration.
9. Remove legacy catalogue/assets only after the replacement passes.

## PASS CONDITION

The replacement set must pass:

AUTHORITY → ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

with no identity drift, invented values, public legacy product content, or unauthorised database changes.
