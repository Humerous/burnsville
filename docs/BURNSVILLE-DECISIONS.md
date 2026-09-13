# BURNSVILLE — DECISION REGISTER

## PURPOSE

Record decisions that must survive future Codex/agent sessions and prevent accidental rework.

## CURRENT DECISIONS

### D-001 — PRIMARY WORKING BRANCH
`modernise/burnsville-v2` is the active technical source of truth.

### D-002 — MAIN PROTECTION
`main` must remain unchanged until final release approval.

### D-003 — CURRENT UI STATUS
The current visual UI implements the supplied approved reference pack and is the active design authority. Preserve its CSS, components, product cards and responsive behavior unless a newer explicit user instruction supersedes it.

### D-004 — WORKING ENGINE MUST BE PRESERVED
Authentication, authorization, product CRUD, cart, stock, checkout/order flow, reviews, admin functionality, upload security and automated QA must be preserved unless a verified defect or approved architecture change requires modification.

### D-005 — INTEGRATION BRANCH CONSOLIDATED
`modernise/burnsville-v2-integration-spec` is superseded. Its safe validation, migration and QA concepts were selectively consolidated into the primary V2 branch. PR #2 is closed without merge. Stale product identities and visual assumptions from that branch are historical only.

### D-006 — NO INVENTED PRODUCT DATA
Missing product facts, names, descriptions, ingredients, pairings, heat values, prices, stock, filenames or paths must remain unresolved until explicitly supplied or approved.

### D-007 — LEGACY CATALOGUE
The current third-party sample catalogue is temporary runtime data. It must not be deleted until the complete approved Burnsville replacement dataset passes isolated QA and rollback evidence exists.

### D-008 — PRODUCT IMAGE ARCHITECTURE
The current single-image product schema is not yet approved as final. Do not expand it until the final product/asset handoff establishes whether multiple structural product images are required.

### D-009 — DATABASE SAFETY
Do not use the destructive legacy seeder for final catalogue replacement. Catalogue replacement must use a reviewed isolated migration with backup/rollback and explicit environment approval.

### D-010 — UPLOAD SYSTEM
The existing admin image upload flow is a working technical capability and must be preserved through final product integration unless an approved architecture change replaces it.

### D-011 — SECURITY DEPENDENCY POLICY
Do not use `npm audit fix --force`. Dependency updates must be controlled and verified with existing QA.

### D-012 — VISUAL AUTHORITY IMPLEMENTED
RESOLVED. The supplied approved references and authorised final-build prompt control the current three-block UI implementation.

### D-013 — INTERIM README POLICY
The active branch must not retain stale destructive/seeding instructions. Until final release documentation is written, README may contain a clearly marked modernisation-status notice and point to repository control files.

### D-014 — CURRENT TECHNICAL HEAT RANGE
The current Product schema defines heat as 1–10 and the admin editor matches that range. Shop-by-Heat uses the real server-side heat filter. Product-specific heat values remain pending until explicitly approved.

### D-015 — SUPPORTING CATALOGUE/ASSET MAPS ARE NON-RUNTIME
`BURNSVILLE-MASTER-AUTHORITY.md` controls all product identities. Supporting catalogue and asset maps may retain historical filenames or descriptive labels only as evidence. Those labels cannot rename products or approve identifiers, paths, facts, asset roles or card geometry. The portrait-card installer remains fail-closed until geometry and asset-role approval is recorded.

### D-016 — NEUTRAL METADATA UNTIL RELEASE
Unsupported legacy marketing claims were removed. Neutral Burnsville metadata is acceptable during development; final canonical/social/launch metadata waits for the released public identity and URL.

### D-017 — FINAL PRODUCT IDENTITY AUTHORITY
The project owner locked 16 product identities in `BURNSVILLE-MASTER-AUTHORITY.md`: 10 Core identities numbered 01–10 and 6 Limited / Vintage identities `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, and `B-42`. Historical descriptive Limited / Vintage labels are not product-name authority. Product facts, final asset roles and commercial values remain unresolved until explicitly supplied or approved.

### D-018 — PRODUCT AUTHORITY MUST BE MACHINE-CHECKED
`qa/product-authority.mjs` must pass in CI. It verifies the master authority and final catalogue intake remain aligned and rejects reintroduction of known conflicting identities. Do not remove, bypass or weaken this gate merely to make CI pass.

### D-019 — REVIEW 1 PRODUCT IMAGE ARCHITECTURE
Owner-approved on 2026-09-13. Keep the existing single `image` field through REVIEW 1. Use one transparent bottle render per product across existing customer/admin product surfaces, contained without crop or stretch inside the approved square card media. Exclude the 1122 × 1402 opaque poster/card artworks from runtime. Limited / Vintage display names remain code-only, and visible bottle identity text must match `BURNSVILLE-MASTER-AUTHORITY.md` before installation.

## PENDING DECISIONS

The following must remain open until the final product and release handoff is complete:

- final product catalogue facts and commercial values
- final shop browsing/pagination model
- whether human-readable product slugs are introduced
- final homepage featured-product strategy
- final SEO/public positioning copy
