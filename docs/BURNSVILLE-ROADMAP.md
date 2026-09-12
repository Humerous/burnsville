# BURNSVILLE — COMPLETION ROADMAP

## CURRENT MODE

FINAL PRODUCT INTEGRATION + RELEASE PREPARATION.

The approved three-block visual UI and its responsive/browser QA are complete. Product identity authority is locked in `BURNSVILLE-MASTER-AUTHORITY.md`. Preserve those systems while the remaining product facts, asset roles and release inputs are resolved.

## PACK 0 — CODEX READINESS + CONTROL

Status: COMPLETE.

Goal: make the repository safe for longer Codex execution blocks.

Implemented:

- root `AGENTS.md`
- root `BURNSVILLE-MASTER-AUTHORITY.md`
- project control baseline
- architecture baseline
- decision register
- known-issues register
- product integration contract
- catalogue migration safety plan
- final integration QA checklist
- final catalogue intake with 16 locked product identities, a 10/6 range split and explicit unresolved fields
- supporting catalogue and asset maps quarantined from runtime authority
- catalogue authority reconciliation report
- portrait-card installer disabled pending geometry and asset-role approval
- automated `qa/product-authority.mjs` identity guard wired into CI
- interim README safety notice
- active branch authority documented
- current approved UI authority recorded

Still intentionally excluded from authority:

- unapproved historical product/commercial facts
- historical descriptive labels as product identities
- unapproved asset roles and paths
- integration-branch visual assumptions

Pass condition: future agents can identify source of truth, protected areas, open work and release gates without reconstructing chat history.

## PACK 1 — REFERENCE INTAKE + FINAL DESIGN AUTHORITY

Status: COMPLETE for the supplied approved visual pack.

Goal: turn uploaded visual references into one implementation authority.

Pass condition: visual implementation can proceed without guessing.

## PACK 2 — PRODUCT ARCHITECTURE + FINAL CATALOGUE CONTRACT

Status: PARTIAL — PRODUCT IDENTITIES LOCKED; PRODUCT FACTS/ASSET ARCHITECTURE PENDING.

Goal: define the exact data/image model required by the final product experience.

Complete:

- final product count: 16
- final Core identities: 01–10
- final Limited / Vintage identities: `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, `B-42`
- current technical heat range: 1–10
- real server-side heat filtering

Still required:

- decide whether one image remains sufficient
- define any gallery/card/bottle/supporting image fields required
- classify final runtime asset roles
- resolve portrait-card versus approved square-card geometry
- confirm final shop browsing/pagination behaviour
- confirm homepage merchandising strategy
- approve product facts/commercial values
- update final-catalogue validator for the approved completed dataset

Pass condition: product data architecture matches the approved UI and complete handoff.

## PACK 3 — FINAL UI IMPLEMENTATION

Status: COMPLETE in commit `8d3403ce4be7f221ea9e5862b9965ba915ed2957`.

Goal: preserve the approved customer/admin presentation and working engine.

Pass condition: approved UI remains implemented without functional regressions.

## PACK 4 — FINAL PRODUCT INTEGRATION

Status: BLOCKED ONLY BY REMAINING APPROVED PRODUCT FACTS / ASSET-ROLE INPUTS.

Goal: replace the legacy demo catalogue with approved Burnsville products.

Flow:

FINAL HANDOFF → AUTHORITY QA → VALIDATOR → ISOLATED DATASET → API QA → FRONTEND QA → MIGRATION REVIEW

No missing product facts may be inferred.

Pass condition: all approved products/assets work through Home, Shop, Product, Cart, Checkout/Order and Admin with no public legacy catalogue content.

## PACK 5 — E2E + ACCESSIBILITY + PERFORMANCE

Status: CUSTOMER E2E AND REQUIRED RESPONSIVE/ACCESSIBILITY QA COMPLETE; repeat product-specific checks after Pack 4 catalogue integration.

Required release checks include:

- customer flow
- admin product/edit/upload flow
- 1440 desktop
- 768 tablet
- 390 mobile
- 320 narrow mobile
- WCAG 2.2 AA fundamentals
- keyboard/focus behaviour
- no horizontal overflow
- no console errors
- build and API QA
- product-authority QA
- production dependency gate
- performance/image optimisation

Pass condition: functional, responsive, accessibility and authority gates pass.

## PACK 6 — PUBLIC RELEASE

Goal: turn the completed app into a production and portfolio-quality release.

Actions:

- remove obsolete legacy product assets/data only after rollback evidence exists
- write final public README
- final SEO/meta/OpenGraph/canonical/sitemap/robots
- final favicon/social imagery
- keep PR #1 description current
- final release review to `main`
- production deployment after explicit approval
- live QA
- release/tag/handoff

Pass condition: production passes and repository documentation matches the released system.

## GLOBAL RULE

Do not jump forward merely because later work is technically possible. Each pack must preserve the pass conditions of previous packs. Product identity changes require explicit owner approval and an update to `BURNSVILLE-MASTER-AUTHORITY.md` before implementation.
