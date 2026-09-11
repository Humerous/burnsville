# BURNSVILLE — DECISION REGISTER

## PURPOSE

Record decisions that must survive future Codex/agent sessions and prevent accidental rework.

## CURRENT DECISIONS

### D-001 — PRIMARY WORKING BRANCH
`modernise/burnsville-v2` is the active technical source of truth.

### D-002 — MAIN PROTECTION
`main` must remain unchanged until final release approval.

### D-003 — CURRENT UI STATUS
The current visual UI is provisional and will change after final reference intake. Existing visual CSS/components are implementation history and functional reference, not final design authority.

### D-004 — WORKING ENGINE MUST BE PRESERVED
Authentication, authorization, product CRUD, cart, stock, checkout/order flow, reviews, admin functionality, upload security and automated QA must be preserved through the UI rebuild unless a verified defect requires change.

### D-005 — INTEGRATION BRANCH POLICY
`modernise/burnsville-v2-integration-spec` must not be merged wholesale. Its useful validation, migration and QA material should be selectively ported after review.

### D-006 — NO INVENTED PRODUCT DATA
Missing product facts, names, descriptions, ingredients, pairings, heat values, prices, stock, filenames or paths must remain unresolved until explicitly supplied or approved.

### D-007 — LEGACY CATALOGUE
The current third-party sample catalogue is temporary runtime data. It must not be deleted until the complete approved Burnsville replacement dataset passes isolated QA and rollback evidence exists.

### D-008 — PRODUCT IMAGE ARCHITECTURE
The current single-image product schema is not yet approved as final. Do not expand it until incoming product/UI references clarify whether multiple structural product images are required.

### D-009 — DATABASE SAFETY
Do not use the destructive legacy seeder for final catalogue replacement. Catalogue replacement must use a reviewed isolated migration with backup/rollback and explicit environment approval.

### D-010 — UPLOAD SYSTEM
The existing admin image upload flow is a working technical capability and should be preserved while the admin UI is redesigned.

### D-011 — SECURITY DEPENDENCY POLICY
Do not use `npm audit fix --force`. Dependency updates must be controlled and verified with existing QA.

### D-012 — VISUAL AUTHORITY PENDING
A final design-system document will be created only after remaining references have been uploaded, reviewed and classified.

### D-013 — INTERIM README POLICY
The active branch must not retain stale destructive/seeding instructions. Until final release documentation is written, README may contain a clearly marked modernisation-status notice and point to repository control files.

### D-014 — HEAT SCALE MISMATCH
The admin UI currently allows 1–11 while the Product schema accepts 1–10. Do not choose a final scale implicitly. Resolve this when the final Burnsville heat system is approved.

## PENDING DECISIONS

The following must remain open until the reference/product handoff is complete:

- final page composition and visual system
- final product image/gallery model
- final product catalogue facts and commercial values
- final shop browsing/pagination/filtering model
- final heat scale and whether heat levels become real filters
- whether human-readable product slugs are introduced
- final homepage featured-product strategy
- final admin presentation
- final SEO/public positioning copy
