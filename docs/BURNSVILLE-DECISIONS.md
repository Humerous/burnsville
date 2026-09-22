# BURNSVILLE — CURRENT DECISIONS

## D-001 — CURRENT-ONLY REPOSITORY

The active repository contains the current Burnsville application, approved catalogue and approved product artwork only.

## D-002 — PRODUCT AUTHORITY

`BURNSVILLE-MASTER-AUTHORITY.md` controls product identities and approved customer-facing wording.

## D-003 — FINAL CATALOGUE

The current catalogue contains exactly 16 Burnsville products in the locked authority order.

## D-004 — DUAL-ASSET PRODUCT CONTRACT

`image` stores the transparent bottle path.

`cardImage` stores the full product-card path.

Home and Shop use `cardImage || image`.

Product Detail is bottle-primary and card-secondary.

## D-005 — ASSET PROTECTION

Approved bottle and card artwork must not be redesigned, recoloured, rewritten, regenerated, destructively cropped or replaced without explicit approval.

## D-006 — DATABASE SEPARATION

The project uses a dedicated current MongoDB database.

## D-007 — SAFE DATABASE INITIALIZATION

`npm run data:bootstrap` may initialize an empty/current-only database with the approved 16-product catalogue. It fails if unrelated product records are present.

## D-008 — NAVIGATION / SCOPE

Packs and Journal are not current routes.

## D-009 — FINAL STATE

`main` is the authoritative repository branch and the project is complete.
