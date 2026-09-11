# BLOCK 11D — BURNSVILLE CATALOGUE REPLACEMENT MAP

## STATUS

CONTROLLED PREPARATION / FINAL USER HANDOFF PENDING.

## PURPOSE

Replace the temporary legacy third-party catalogue with final approved Burnsville product data while preserving the existing working ecommerce engine.

This file is a planning/control artifact only. It does not authorise database mutation.

## CURRENT AUTHORITY

Use:

- `AGENTS.md`
- `docs/BURNSVILLE-PROJECT-CONTROL.md`
- `docs/BURNSVILLE-DECISIONS.md`
- `docs/BURNSVILLE-PRODUCT-INTEGRATION.md`
- `docs/BURNSVILLE-CATALOGUE-MIGRATION-PLAN.md`
- `qa/block-11d-final-product-integration-checklist.md`

Historical catalogue/asset files are not final authority.

## SAFETY CONSTRAINTS

- Do not invent or rename products.
- Do not invent ingredients, descriptions, heat values, prices, stock, availability, filenames, dimensions or image paths.
- Do not infer final asset roles.
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

1. Confirm final reference/UI authority.
2. Confirm final product count and identities.
3. Confirm product/image schema requirements.
4. Confirm final product asset roles and runtime paths.
5. Record only approved product facts/commercial data.
6. Build one complete replacement dataset.
7. Run the read-only catalogue validator.
8. Run isolated API/customer/admin QA.
9. Review backup/rollback procedure.
10. Obtain explicit approval before shared-environment migration.
11. Remove legacy catalogue/assets only after the replacement passes.

## PASS CONDITION

The replacement set must pass:

ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

with no invented values, no public legacy product content, and no unauthorised database changes.
