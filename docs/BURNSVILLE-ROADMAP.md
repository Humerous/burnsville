# BURNSVILLE — COMPLETION ROADMAP

## CURRENT MODE

FINAL PRODUCT INTEGRATION + RELEASE PREPARATION.

The approved three-block visual UI and its responsive/browser QA are complete. Preserve that system while the final catalogue and release inputs are resolved.

## PACK 0 — CODEX READINESS + CONTROL

Status: COMPLETE.

Goal: make the repository safe for longer Codex execution blocks.

Implemented:

- root `AGENTS.md`
- project control baseline
- architecture baseline
- decision register
- known-issues register
- product integration contract
- catalogue migration safety plan
- final integration QA checklist
- final catalogue intake with the 15 currently confirmed names and explicit unresolved fields
- stale catalogue replacement map replaced with a neutral control gate
- catalogue authority reconciliation report
- superseded 16-product maps quarantined as historical evidence and their installer disabled
- interim README safety notice
- active branch authority documented
- current approved UI authority recorded

Still intentionally excluded from authority:

- stale historical product names/facts
- rejected asset maps
- integration-branch visual/heat artwork decisions

Pass condition: future agents can identify source of truth, protected areas, open work and release gates without reconstructing chat history.

## PACK 1 — REFERENCE INTAKE + FINAL DESIGN AUTHORITY

Status: COMPLETE for the supplied approved visual pack.

Goal: turn uploaded visual references into one implementation authority.

Actions:

- classify references as authoritative/supporting/inspiration/superseded
- resolve conflicting visual directions
- document final typography, colour, spacing, component, imagery and responsive rules
- define page-level reference hierarchy
- create final design-system documentation

Pass condition: visual implementation can proceed without guessing.

## PACK 2 — PRODUCT ARCHITECTURE + FINAL CATALOGUE CONTRACT

Goal: define the exact data/image model required by the final product experience.

Actions:

- decide whether one image remains sufficient
- define any gallery/card/bottle/supporting image fields required
- confirm product identity/code fields
- confirm final shop browsing strategy
- confirm final heat scale/filter behaviour
- confirm homepage merchandising strategy
- update admin data requirements
- update final-catalogue validator

Pass condition: product data architecture matches the approved UI and handoff.

## PACK 3 — FINAL UI IMPLEMENTATION

Status: COMPLETE in commit `8d3403ce4be7f221ea9e5862b9965ba915ed2957`.

Goal: rebuild the customer/admin presentation around the existing working engine.

Preserve:

- auth
- authorization
- product/business logic
- cart
- stock
- orders
- reviews
- image upload
- security/QA behaviour

Rework as approved:

- header/navigation
- home
- shop
- product experience
- auth/account
- cart/checkout
- admin presentation
- footer
- responsive styling

Pass condition: approved UI implemented without functional regressions.

## PACK 4 — FINAL PRODUCT INTEGRATION

Goal: replace the legacy demo catalogue with approved Burnsville products.

Flow:

FINAL HANDOFF → VALIDATOR → ISOLATED DATASET → API QA → FRONTEND QA → MIGRATION REVIEW

No missing product facts may be inferred.

Pass condition: all approved products/assets work through Home, Shop, Product, Cart, Checkout/Order and Admin with no public legacy catalogue content.

## PACK 5 — E2E + ACCESSIBILITY + PERFORMANCE

Status: CUSTOMER E2E AND REQUIRED RESPONSIVE/ACCESSIBILITY QA COMPLETE; repeat product-specific checks after Pack 4 catalogue integration.

Goal: prove the finished application.

Required flows:

Customer:

SIGN IN → SHOP → PRODUCT → CART → CHECKOUT → ORDER

Admin:

SIGN IN → PRODUCTS → EDIT → UPLOAD → SAVE

Also verify:

- 1440 desktop
- 768 tablet
- 390 mobile
- 320 narrow mobile
- WCAG 2.2 AA fundamentals
- keyboard/focus behaviour
- no horizontal overflow
- no console errors
- build and API QA
- production dependency gate
- performance/image optimisation

Pass condition: functional, responsive and accessibility gates pass.

## PACK 6 — PUBLIC RELEASE

Goal: turn the completed app into a production and portfolio-quality release.

Actions:

- remove obsolete legacy product assets/data after rollback evidence exists
- write final public README
- final SEO/meta/OpenGraph/canonical/sitemap/robots
- final favicon/social imagery
- reconcile and update PR descriptions
- final release PR to `main`
- production deployment after approval
- live QA
- release/tag/handoff

Pass condition: production passes and repository documentation matches the released system.

## GLOBAL RULE

Do not jump forward merely because later work is technically possible. Each pack must preserve the pass conditions of previous packs.
