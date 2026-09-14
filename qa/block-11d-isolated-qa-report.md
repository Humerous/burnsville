# BLOCK 11D — ISOLATED PRODUCT INTEGRATION QA REPORT

## STATUS

PASS — PREVIEW MIGRATION READY FOR OWNER APPROVAL.

Tested on 2026-09-14 from starting HEAD `045938ff05725c15d69a4168716fe6e1a66daf60`. All database work used a disposable local MongoDB replica-set database named `burnsville_isolated_final`. Shared Preview and Production data were not accessed or changed.

## PRODUCT-ONLY REPLACEMENT

- Started with 10 legacy products, 3 users and 1 order.
- Replaced Product records with the exact 16 approved Burnsville products.
- Verified all approved identities, facts and asset paths against `backend/data/burnsville-final-catalogue-intake.json`.
- Verified 10 Core and 6 Limited / Vintage products.
- Verified no third-party catalogue record remained in the replacement state.
- Re-ran replacement and confirmed all 16 MongoDB product IDs remained stable with no duplicates.
- Verified Users and Orders counts and SHA-256 record digests remained unchanged during replacement.
- Restored the 10 original products from the protected snapshot and matched the exact original product digest.
- Verified Users and Orders remained unchanged through rollback.
- Re-applied the approved 16-product catalogue for product and browser QA.

## PRODUCT AND APPLICATION QA

The exact catalogue API, integrated API, heat filter, review consistency and controlled functional suites passed.

Verified:

- Home shows the approved first four products.
- Shop uses 10 products on page 1 and 6 on page 2.
- Search returns the correct product.
- Heat filters return the approved catalogue groups.
- Product detail uses MongoDB-ID routes and displays approved facts and artwork.
- Cart, login redirect, shipping, payment and order creation complete successfully.
- Order creation uses server-authoritative product name, image and price.
- Customer review creation and derived review summary work.
- Admin product list, edit, operational-field persistence and GridFS upload work.
- Installed product name, identifier and collection are locked in both API and admin UI.
- The frontend production build and production static/API serving checks passed.
- Production dependency gates found no high or critical vulnerabilities. Existing moderate advisories remain recorded for later dependency maintenance because their available automated fixes require out-of-range or breaking upgrades.

## RESPONSIVE AND ACCESSIBILITY QA

Browser QA passed at 1440, 768, 390 and 320 CSS pixels across Home, Shop, heat-filtered Shop, pagination, Product, Cart and Login.

- No horizontal overflow was found.
- All tested bottle assets used their native 1024 by 1536 proportions with `object-fit: contain`.
- No bottle was cropped or stretched.
- All ten page-one bottle assets loaded after scrolling at 768, 390 and 320.
- No broken image request or unexpected console/runtime error was found.
- Route focus and visible keyboard focus were preserved.
- Automated axe checks reported zero violations on Home, Shop, Product and Login, including Shop and Product at 320.
- Axe reported colour-contrast checks as incomplete where gradients or pseudo-elements prevented calculation. Manual checks of the controlling colour tokens passed AA after changing the pepper green token to `#356d32`.

Automated scans are supporting evidence and do not by themselves claim complete WCAG conformance.

## R-015

CLOSED FOR REVIEW 1.

- Stable identifiers are the approved Core numbers and Limited / Vintage codes.
- Collection is constrained to `Core` or `Limited / Vintage`.
- Both fields are immutable after installation.
- Admin cannot rename installed authority-managed products or change identifier/collection.
- Runtime comparison covers every authoritative product field.
- A separate commercial SKU scheme is deferred until after Review 1.

## REMAINING CONTROLLED ACTION

Shared Preview migration and its post-migration QA require explicit owner approval. Production migration, Production deployment, merging PR #1 and modification of `main` remain outside this stage.
