# BURNSVILLE — KNOWN ISSUES

## PURPOSE

Track verified remaining work. Do not use this file to invent new scope.

## RED — RELEASE BLOCKERS

### KI-001 — FINAL UI NOT LOCKED
The current visual UI is provisional. Remaining visual references must be reviewed before final design implementation.

### KI-002 — FINAL BURNSVILLE CATALOGUE NOT IN RUNTIME
The current runtime still uses legacy third-party sample products and images.

### KI-003 — INTEGRATION-SPEC BRANCH PARTIALLY CONSOLIDATED
Safe control, migration and QA concepts have been moved into `modernise/burnsville-v2`. The integration-spec branch still contains visual/heat asset differences and stale historical product assumptions, so it must not be merged wholesale. Final branch retirement waits for reference review.

### KI-004 — PRODUCT IMAGE MODEL MAY BE TOO LIMITED
Current Product schema supports one required primary image only. Final requirements may need separate product-card, bottle, gallery or pairing imagery.

### KI-005 — FINAL PRODUCT DATA INCOMPLETE
Final approved values for the complete runtime catalogue must be supplied/confirmed before migration.

### KI-006 — FINAL BROWSER/RESPONSIVE/ACCESSIBILITY QA PENDING
Existing automated API/production QA does not replace final browser-level verification after the UI rebuild.

## AMBER — MUST RESOLVE BEFORE RELEASE

### KI-007 — SHOP PAGE SIZE IS FIXED AT 10
Final catalogue browsing behaviour must be decided once the final range/UI is known.

### KI-008 — HOMEPAGE FEATURED PRODUCT STRATEGY IS PROVISIONAL
Current homepage implementation displays a limited subset rather than an explicitly approved merchandising strategy.

### KI-009 — SHOP-BY-HEAT IS NOT A FILTER
Current heat presentation is guidance only.

### KI-010 — PRODUCT ROUTES USE MONGODB IDS
This is functional but may later be reconsidered for public-facing product URLs. Not a current technical blocker.

### KI-011 — README IS INTERIM
Known-stale destructive/historical instructions were removed from the active branch and replaced with a modernisation notice. A complete public README still waits for final release.

### KI-012 — PUBLIC SEO/METADATA IS NOT FINAL
Titles, descriptions, social metadata, canonical/public URL handling and final indexing assets require a release audit.

### KI-013 — PR #1 DESCRIPTION IS STALE
The long-running V2 PR still describes several already-completed technical items as unfinished and should be reconciled before release.

### KI-014 — PR #2 IS A DRAFT PREPARATION BRANCH
It has been partially harvested but still contains non-authoritative visual/stale reference changes. Do not merge as-is.

### KI-015 — ADMIN HEAT RANGE DOES NOT MATCH PRODUCT SCHEMA
The admin Product Edit input currently permits heat values from 1–11, while the MongoDB Product schema accepts only 1–10. Resolve this only after the final Burnsville heat-scale decision is confirmed; until then, values above 10 will fail schema validation.

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
- Vercel preview deployment pipeline
- Codex/agent repository control layer present on active V2 branch

## UPDATE RULE

Only mark an issue closed when there is verifiable evidence: code + QA, approved reference decision, or completed release verification as appropriate.
