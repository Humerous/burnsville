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
Authentication, authorization, product CRUD, cart, stock, checkout/order flow, reviews, admin functionality, upload security and automated QA must be preserved through the UI rebuild unless a verified defect requires change.

### D-005 — INTEGRATION BRANCH CONSOLIDATED
`modernise/burnsville-v2-integration-spec` is superseded. Its safe validation, migration and QA concepts were selectively consolidated into the primary V2 branch. PR #2 is closed without merge. Stale product identities and visual assumptions from that branch are historical only.

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

### D-012 — VISUAL AUTHORITY IMPLEMENTED
RESOLVED. The supplied approved references and authorised final-build prompt control the current three-block UI implementation.

### D-013 — INTERIM README POLICY
The active branch must not retain stale destructive/seeding instructions. Until final release documentation is written, README may contain a clearly marked modernisation-status notice and point to repository control files.

### D-014 — CURRENT TECHNICAL HEAT RANGE
The current Product schema defines heat as 1–10 and the admin editor now matches that range. If the final approved Burnsville system later requires another scale, schema, validation, UI and QA must be changed together as an explicit product decision.

### D-015 — STALE CATALOGUE/ASSET AUTHORITY QUARANTINED
Superseded catalogue and asset-map files are retained only as explicitly marked historical evidence. The historical card installer is fail-closed. None of these files may be promoted from Git history or used for runtime integration.

### D-016 — NEUTRAL METADATA UNTIL RELEASE
Unsupported legacy marketing claims were removed. Neutral Burnsville metadata is acceptable during development; final canonical/social/launch metadata waits for the released public identity and URL.

### D-017 — FINAL PRODUCT COUNT AND NAMES
The project owner confirmed 16 products: 10 Core and 6 Limited / Vintage. `NIGHT ORCHARD` is the sixth Limited product. The confirmed names are recorded in `backend/data/burnsville-final-catalogue-intake.json`; identifiers, assets and product/commercial values remain unresolved until supplied or approved.

## PENDING DECISIONS

The following must remain open until the final product and release handoff is complete:

- final product image/gallery model
- final product catalogue facts and commercial values
- final shop browsing/pagination/filtering model
- whether human-readable product slugs are introduced
- final homepage featured-product strategy
- final SEO/public positioning copy
