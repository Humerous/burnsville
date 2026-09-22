# BURNSVILLE — CURRENT DECISIONS

## D-001 — CURRENT-ONLY REPOSITORY

The working repository contains the current Burnsville application only. Old third-party product fixtures, old third-party product artwork and old catalogue seeding paths are removed.

## D-002 — PRODUCT AUTHORITY

`BURNSVILLE-MASTER-AUTHORITY.md` controls product identities and approved customer-facing wording.

## D-003 — FINAL CATALOGUE

The current catalogue contains exactly 16 Burnsville products in the locked authority order.

## D-004 — DUAL-ASSET PRODUCT CONTRACT

`image` stores the transparent bottle path.

`cardImage` stores the full product-card path.

Home and Shop use `cardImage || image`.

Product Detail is bottle-primary and card-secondary under Visual Authority V1.1.

## D-005 — ASSET PROTECTION

Approved bottle and card artwork must not be redesigned, recoloured, rewritten, regenerated, destructively cropped or replaced without explicit owner approval.

## D-006 — CURRENT DATABASE SEPARATION

The current project must use its own current MongoDB database. An archived Burnsville database must not be used as the runtime source for this repository.

## D-007 — SAFE DATABASE INITIALIZATION

`npm run data:bootstrap` may initialize an empty/current-only database with the approved 16-product catalogue. It must fail if unrelated product records are present.

## D-008 — NAVIGATION / SCOPE

Packs and Journal are out of scope and are not current routes. ABOUT remains a required V1.1 navigation item but its final content/placement must follow owner-approved implementation.

## D-009 — CONTROL WORKFLOW

`DISCUSS → AGREE → COMMAND → APPROVE → EXECUTE → QA`

One authoritative version. One active stage. One next action.
