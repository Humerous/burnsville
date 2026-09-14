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

| # | Product identity |
|---|---|
| 01 | GREEN SPARK |
| 02 | SUN GOLD |
| 03 | CITRUS FLARE |
| 04 | RED EMBER |
| 05 | DARK HARVEST |
| 06 | SALINE CURRENT |
| 07 | CALABRIAN SUN |
| 08 | BIRD’S FIRE |
| 09 | VIOLET’S FUSE |
| 10 | GHOST BLACK |

## LOCKED LIMITED / VINTAGE RANGE

The authoritative product identities are the following codes. Historical descriptive labels are not product-name authority.

| Product identity |
|---|
| P-X |
| CASK-13 |
| POT-7 |
| TMR-200 |
| X-666 |
| B-42 |

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

The locked Core numbers and Limited / Vintage codes above are the stable REVIEW 1 runtime identifiers. They are unique and immutable once installed. Runtime records also store one controlled collection value: `Core` or `Limited / Vintage`. The public API exposes that collection as `collection` while the Mongo model stores it as `catalogueCollection` to avoid Mongoose's reserved `collection` property.

Admin product editing may update approved operational product fields, but it may not rename a product or change its identifier or collection. A separate commercial SKU scheme is deferred until after REVIEW 1 and does not block Preview migration.

## LOCKED REVIEW 1 IMAGE ARCHITECTURE

Owner approval recorded: 2026-09-13.

1. The existing single `image` product field remains the approved product-image architecture through REVIEW 1.
2. Each product uses one transparent bottle render as its primary runtime image across Home, Shop, Product Detail, Cart, Checkout/Order and Admin.
3. Portrait bottle renders must be contained inside the approved square product-card media area without cropping, stretching or redesigning the card.
4. The preserved 1122 × 1402 opaque poster/card artworks are supporting marketing evidence only and are excluded from the REVIEW 1 runtime catalogue.
5. Limited / Vintage products use the locked codes as their only REVIEW 1 display names. Historical descriptive labels are not approved display names.
6. Visible product-identity text in runtime bottle artwork must match the locked identities in this file. Historical conflicting labels must be corrected before the asset is installed.
7. Runtime filenames may use lowercase ASCII-safe slugs, but filenames do not change or replace the exact displayed identities above.

## CHANGE CONTROL

Use:

DISCUSS → AGREE → UPDATE THIS MASTER AUTHORITY → IMPLEMENT → QA

Do not allow implementation files or historical evidence to become authority by inference.
