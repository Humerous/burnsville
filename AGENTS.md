# BURNSVILLE — AGENT CONTROL

## AUTHORITY

This file governs automated coding work in this repository.

Primary working branch: `modernise/burnsville-v2`.

`main` is not the active development branch and must not be modified, merged, rebased, force-pushed, or deployed without explicit user approval.

The approved three-block visual UI was implemented and verified in commit `8d3403ce4be7f221ea9e5862b9965ba915ed2957`. Treat the current CSS, layout, colours, typography, product-card presentation, heat artwork and page styling as approved implementation authority unless a newer explicit user instruction supersedes it.

## NON-NEGOTIABLE RULES

1. Do not invent missing product facts, product names, descriptions, ingredients, pairings, heat values, prices, stock, filenames, image paths, commercial data, or design decisions.
2. Do not redesign or reinterpret visual work unless the user has explicitly approved the new direction.
3. Preserve working business logic unless a verified defect or approved architecture change requires modification.
4. Preserve authentication, authorization, product CRUD, cart, stock handling, orders, reviews, image upload, security checks, and automated QA while visual work changes.
5. Do not use `backend/seeder.js` for catalogue replacement.
6. Do not mutate Preview or Production MongoDB/Atlas data without explicit user approval and a reviewed migration/rollback procedure.
7. Do not delete legacy runtime product data or assets until the approved Burnsville replacement catalogue passes isolated QA.
8. Do not merge `modernise/burnsville-v2-integration-spec` wholesale. Harvest only explicitly reviewed material.
9. Do not use historical catalogue or asset-map files as final product authority.
10. Do not expose secrets or commit real credentials. Environment variable names may be documented in `.env.example`; values must remain external.
11. Do not use `npm audit fix --force`.
12. Do not lower QA gates to make a build pass.
13. Do not deploy Production or change the production domain without explicit approval.

## WORKFLOW

Use this sequence for material changes:

AUDIT → PLAN → IMPLEMENT → TEST → REVIEW → COMMIT

For visual/product changes, use:

REFERENCE INTAKE → CLASSIFY AUTHORITY → AGREE → IMPLEMENT → VISUAL QA → FUNCTIONAL QA

## REQUIRED VERIFICATION

Before calling a coding block complete:

- run the relevant build
- run relevant automated QA
- run `git diff --check`
- verify no unrelated files changed
- verify no secrets were introduced
- verify existing commerce/security behaviour still passes when affected

For UI work, final browser/responsive verification is required after the visual direction is locked.

## CURRENT TECHNICAL BASELINE

The current V2 branch has a working Vite frontend, Express/Mongoose backend, authentication, admin screens, product CRUD, cart, checkout/order flow, reviews, GridFS-backed admin image upload, Vercel preview deployment, and automated API/security/production-serving QA.

Treat these capabilities as assets to preserve.

## CURRENT KNOWN PRODUCT CONSTRAINTS

- Product model currently has one primary `image` field.
- Product routes use MongoDB IDs.
- Shop API currently uses a page size of 10.
- Homepage product showcase currently displays a limited subset.
- Shop-by-Heat is currently presentation, not a true catalogue filter.
- Runtime catalogue still contains legacy third-party sample products pending approved Burnsville replacement.

Do not change these constraints merely for preference. Change them only when the final product/UI system requires it and the implementation is explicitly authorised.

## SOURCE OF TRUTH ORDER

When sources conflict, use this priority:

1. Explicit current user instruction.
2. Current approved reference handoff/documentation created after final reference intake.
3. `docs/BURNSVILLE-PROJECT-CONTROL.md` and `docs/BURNSVILLE-DECISIONS.md`.
4. Current tested runtime behaviour on `modernise/burnsville-v2`.
5. Historical integration/reference documents.

Historical files never override a newer explicit approval.
