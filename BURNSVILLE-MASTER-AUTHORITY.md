# BURNSVILLE — MASTER AUTHORITY

## STATUS

LOCKED PRODUCT IDENTITY AND PRODUCT-FACT AUTHORITY.

This file is the sole current authority for Burnsville product identities on `modernise/burnsville-v2`.

If any repository file, historical mapping, commit, README, asset filename, screenshot transcription, prior Codex output, or older instruction conflicts with this file, this file wins unless the owner explicitly issues a newer approval.

## NON-NEGOTIABLE CONTROL RULES

1. Do not rename, reinterpret, substitute, normalise, or infer a product identity from historical filenames or descriptive labels.
2. Historical catalogue and asset maps are supporting evidence only unless this file explicitly promotes a field.
3. Missing future product facts must remain unresolved. Do not invent SKUs, image roles, filenames, or changes to the approved final catalogue.
4. A later automated reconciliation may not supersede this file without explicit owner approval.
5. Any proposed identity change must stop for owner approval before implementation.
6. Approved UI/backend/QA work must not be changed merely to reconcile catalogue authority.

## LOCKED CORE RANGE

| #   | Product identity  |
| --- | ----------------- |
| 01  | GREEN SPARK       |
| 02  | SUN GOLD          |
| 03  | CITRUS FLARE      |
| 04  | RED EMBER         |
| 05  | DARK HARVEST      |
| 06  | SALINE CURRENT    |
| 07  | CALABRIAN GLOW    |
| 08  | BIRD’S FIRE       |
| 09  | VIOLET’S FUSE     |
| 10  | GHOST BLACK       |

## LOCKED LIMITED / VINTAGE RANGE

The authoritative immutable catalogue identities are the following codes.

Approved customer-facing wording printed on the approved product cards may also be used for presentation where explicitly listed below.

The approved customer-facing wording does not replace the immutable catalogue identity unless this file explicitly states otherwise.

| Product identity | Approved customer-facing wording |
| ---------------- | -------------------------------- |
| P-X              | FERMENT BLOOM                    |
| CASK-13          | CASK 13                           |
| POT-7            | VELVET SCORCH                     |
| TMR-200          | No additional wording required    |
| X-666            | FINAL BURN                        |
| B-42             | NIGHT ORCHARD                     |

CASK-13 also carries the approved printed product code `R-13` on the approved product card.

`R-13` does not replace the immutable catalogue identity `CASK-13`.

Historical descriptive labels remain non-authoritative unless explicitly approved in this file.

## APPROVED PRODUCT FACTS

Description, ingredient, price and stock approval recorded: 2026-09-13.

The final-catalogue intake may use the approved descriptions, ingredients, prices and stock counts recorded in `docs/BURNSVILLE-CATALOGUE-AUTHORITY-RECONCILIATION.md`.

Limited / Vintage heat approval recorded: 2026-09-14. All six products are approved as `heatLevel: 10` for the existing runtime filter and therefore belong to the `Extreme` band.

The original artwork establishes these exact displayed source scales:

- P-X — 10/15 — Extreme
- CASK-13 — 10/10 — Extreme
- POT-7 — 10/14 — Extreme
- TMR-200 — 10/12 — Extreme
- X-666 — 10/20 — Extreme
- B-42 — 10/13 — Extreme

The denominators are source/display evidence. They must not be stored in the existing 1–10 `heatLevel` field, and no new runtime field is required for REVIEW 1.

Core heat, flavour-profile and pairing approval recorded: 2026-09-14.

The approved Core runtime heat values are: 01 = 3, 02 = 6, 03 = 7, 04 = 9, 05 = 7, 06 = 9, 07 = 9, 08 = 10, 09 = 6 and 10 = 9. All 16 approved flavour profiles and pairing sets are recorded in `backend/data/burnsville-final-catalogue-intake.json`.

## REVIEW 1 IDENTIFIER AND COLLECTION POLICY

Owner approval recorded: 2026-09-14.

The locked Core numbers and Limited / Vintage codes above are the stable REVIEW 1 runtime identifiers. They are unique and immutable once installed.

The approved customer-facing wording defined in this file does not alter those stable runtime identifiers.

Runtime records also store one controlled collection value: `Core` or `Limited / Vintage`. The public API exposes that collection as `collection` while the Mongo model stores it as `catalogueCollection` to avoid Mongoose's reserved `collection` property.

Admin product editing may update approved operational product fields, but it may not change a product's stable identifier or collection.

Approved customer-facing wording must remain consistent with this authority.

A separate commercial SKU scheme is deferred until after REVIEW 1 and does not block Preview migration.

## LOCKED REVIEW 1 IMAGE ARCHITECTURE

Owner product-card review approval recorded: 2026-09-21.

### FULL PRODUCT CARD

1. The complete 16-card product-card set is approved.
2. The full product cards are the primary customer-facing artwork for flavour selection, product discovery and browse/shop presentation.
3. The product cards are approved runtime presentation assets and must not be described as obsolete posters, supporting evidence only, or excluded source artwork.
4. All 16 approved product cards are accepted as supplied.
5. The application must accommodate the approved artwork.
6. The approved product cards must not be redesigned, cropped, rewritten, recoloured, regenerated, have their typography replaced, have their ingredients changed, have their artwork wording changed, or have their dimensions destructively standardised without explicit owner approval.

### TRANSPARENT BOTTLE

7. The existing transparent bottle renders remain approved product assets.
8. Transparent bottles are a separate asset class from the full product cards.
9. Transparent bottles are not being deleted.
10. Transparent bottles must not be described as the sole or primary image for flavour-selection browsing.
11. Their exact secondary runtime placement will be determined during implementation.
12. No Product Detail, Cart, Checkout, Order or Admin image-placement rule is approved by this authority update.

### CUSTOMER-FACING ARTWORK WORDING

13. Approved artwork wording on the full product cards may coexist with the immutable runtime identifiers defined in this file.
14. Approved Limited / Vintage customer-facing wording must not be interpreted as a replacement for the immutable catalogue identities unless explicitly stated.
15. Product 07 uses `CALABRIAN GLOW` as its approved product identity and customer-facing wording.
16. CASK-13 remains the immutable catalogue identity even where the approved product card displays `CASK 13` and printed product code `R-13`.
17. Runtime filenames may use lowercase ASCII-safe slugs, but filenames do not change or replace the exact approved identities or customer-facing wording defined in this file.

### IMPLEMENTATION BOUNDARY

18. This authority defines the approved asset classes and their customer-facing roles only.
19. It does not approve a final technical field structure for supporting both asset classes.
20. It does not approve final Product Detail, Cart, Checkout, Order or Admin asset placement.
21. Those implementation decisions must be resolved separately before dependent implementation begins.
22. No missing image-placement rule, schema field, filename or runtime behaviour may be invented by inference.

## CHANGE CONTROL

Use:

DISCUSS → AGREE → UPDATE THIS MASTER AUTHORITY → IMPLEMENT → QA

Do not allow implementation files or historical evidence to become authority by inference.
