# BURNSVILLE — KNOWN ISSUES

## PURPOSE

Track verified remaining work. Do not use this file to invent new scope.

## RED — RELEASE BLOCKERS

### KI-002 — FINAL BURNSVILLE CATALOGUE NOT IN RUNTIME
The current runtime still uses legacy third-party sample products and images. Product identity authority is now resolved in `BURNSVILLE-MASTER-AUTHORITY.md`, but product facts and final matching asset roles remain unresolved. Replacement is blocked until the complete approved Burnsville catalogue and assets are available and validated.

### KI-004 — FINAL PRODUCT IMAGE MODEL NOT CONFIRMED
The current Product schema supports one required primary image. The conflict-free final product handoff must determine whether separate product-card, bottle, gallery or pairing imagery is structurally required.

### KI-005 — FINAL PRODUCT DATA INCOMPLETE
Final approved values for the complete runtime catalogue must be supplied/confirmed before migration. Missing values must not be invented.

## AMBER — MUST RESOLVE BEFORE RELEASE

### KI-007 — SHOP PAGE SIZE IS FIXED AT 10
Final catalogue browsing behaviour must be decided once the final range/UI is known.

### KI-008 — HOMEPAGE FEATURED PRODUCT STRATEGY IS PROVISIONAL
Current homepage implementation displays a limited subset rather than an explicitly approved merchandising strategy.

### KI-010 — PRODUCT ROUTES USE MONGODB IDS
This is functional but may later be reconsidered for public-facing product URLs. It is not a current technical blocker.

### KI-011 — README IS INTERIM
Known-stale destructive/historical instructions were removed and replaced with a modernisation notice. The complete public/portfolio README waits for the final released system.

### KI-012 — RELEASE SEO/METADATA IS INCOMPLETE
Legacy generic metadata has been removed and replaced with neutral Burnsville defaults. Final OpenGraph, canonical URL, sitemap/indexing and public launch metadata still require the final release identity/URL.

## CLOSED / FIXED

### KI-001 — FINAL UI NOT LOCKED
FIXED. The supplied approved references were implemented through the authorised three-block build and verified in commit `8d3403ce4be7f221ea9e5862b9965ba915ed2957`.

### KI-006 — FINAL BROWSER/RESPONSIVE/ACCESSIBILITY QA PENDING
FIXED for the approved UI. Customer E2E, targeted keyboard checks and the required 320–1024 responsive matrix passed. Product-specific release QA remains required after catalogue integration.

### KI-009 — SHOP-BY-HEAT IS NOT A FILTER
FIXED. Shop-by-Heat uses the existing real server-side heat filter and preserves the heat parameter through catalogue pagination.

### KI-003 — INTEGRATION-SPEC BRANCH CONSOLIDATION
FIXED. Safe integration, validation and migration controls were consolidated into `modernise/burnsville-v2`. PR #2 was closed as superseded without merging stale product or visual assumptions.

### KI-013 — PR #1 DESCRIPTION STALE
FIXED. PR #1 now documents the current modernisation foundation, remaining blockers and draft merge status.

### KI-014 — PR #2 DRAFT PREPARATION BRANCH
FIXED. PR #2 is closed as superseded; branch history remains available for reference.

### KI-015 — ADMIN HEAT RANGE MISMATCH
FIXED. The admin Product Edit input now matches the current MongoDB schema at 1–10.

### KI-016 — PRODUCT IDENTITY AUTHORITY CONFLICT
FIXED. `BURNSVILLE-MASTER-AUTHORITY.md` is now the sole current product-identity authority. Core identities are locked at 01–10 with Core 07 `CALABRIAN SUN`; Limited / Vintage identities are locked as `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, and `B-42`. Historical descriptive labels and filenames remain supporting evidence only and cannot rename products.

### KI-017 — LEGACY DEFAULT METADATA CLAIMS
FIXED. Generic/unsupported metadata claims were replaced with neutral Burnsville defaults pending final release metadata.

## GREEN — VERIFIED WORKING FOUNDATION

- Vite production build
- Express/Mongoose API
- authentication
- admin authorization
- product CRUD
- reviews
- cart/order flow
- server-authoritative pricing
- stock handling
- GridFS-backed admin image upload
- upload security checks
- integrated API QA
- production serving QA
- approved three-block customer/admin UI
- browser customer journey and responsive/accessibility QA
- Vercel preview deployment pipeline
- Codex/agent repository control layer present on active V2 branch
- master product-identity authority present at repository root

## UPDATE RULE

Only mark an issue closed when there is verifiable evidence: code + QA, approved reference decision, or completed release verification as appropriate.
