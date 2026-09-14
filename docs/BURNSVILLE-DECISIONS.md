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
Missing product facts, names, SKUs, filenames or paths must remain unresolved until explicitly supplied or approved. All seven required product facts for the 16-product REVIEW 1 catalogue were approved by 2026-09-14.

### D-007 — LEGACY CATALOGUE
The current third-party sample catalogue is temporary runtime data. It must not be deleted until the complete approved Burnsville replacement dataset passes isolated QA and rollback evidence exists.

### D-008 — PRODUCT IMAGE ARCHITECTURE
SUPERSEDED FOR REVIEW 1 by D-019. The existing single-image product schema is approved through REVIEW 1. Any post-REVIEW 1 expansion to multiple structural images requires a separate explicit architecture decision.

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
The current Product schema defines heat as 1–10 and the admin editor matches that range. Shop-by-Heat uses the real server-side heat filter. All 16 runtime heat values are approved; Limited / Vintage source denominators remain documentation evidence under D-021.

### D-015 — SUPPORTING CATALOGUE/ASSET MAPS ARE NON-RUNTIME
`BURNSVILLE-MASTER-AUTHORITY.md` controls all product identities. Historical catalogue facts and opaque poster/card assets remain supporting evidence only. The approved runtime bottle map is `backend/data/burnsville-product-asset-map.json`; its neutral paths, roles and geometry are locked through REVIEW 1. The portrait-card installer remains fail-closed because those poster/card assets are excluded from runtime.

### D-016 — NEUTRAL METADATA UNTIL RELEASE
Unsupported legacy marketing claims were removed. Neutral Burnsville metadata is acceptable during development; final canonical/social/launch metadata waits for the released public identity and URL.

### D-017 — FINAL PRODUCT IDENTITY AUTHORITY
The project owner locked 16 product identities in `BURNSVILLE-MASTER-AUTHORITY.md`: 10 Core identities numbered 01–10 and 6 Limited / Vintage identities `P-X`, `CASK-13`, `POT-7`, `TMR-200`, `X-666`, and `B-42`. Historical descriptive Limited / Vintage labels are not product-name authority. All required REVIEW 1 product facts were approved by 2026-09-14.

### D-018 — PRODUCT AUTHORITY MUST BE MACHINE-CHECKED
`qa/product-authority.mjs` must pass in CI. It verifies the master authority and final catalogue intake remain aligned and rejects reintroduction of known conflicting identities. Do not remove, bypass or weaken this gate merely to make CI pass.

### D-019 — REVIEW 1 PRODUCT IMAGE ARCHITECTURE
Owner-approved on 2026-09-13. Keep the existing single `image` field through REVIEW 1. Use one transparent bottle render per product across existing customer/admin product surfaces, contained without crop or stretch inside the approved square card media. Exclude the 1122 × 1402 opaque poster/card artworks from runtime. Limited / Vintage display names remain code-only, and visible bottle identity text must match `BURNSVILLE-MASTER-AUTHORITY.md` before installation.

### D-020 — REVIEW 1 CATALOGUE PRESENTATION BASELINE
Preserve the current working catalogue presentation through REVIEW 1: Shop page size remains 10, Home continues to show the first four products returned by its current page-one request, and product routes remain `/product/:id` using MongoDB IDs. These are REVIEW 1 preservation decisions, not permanent post-release architecture. Reconsider them only after REVIEW 1 or through a newer explicit owner instruction.

### D-021 — LIMITED / VINTAGE HEAT AUTHORITY
Owner-approved on 2026-09-14. All six Limited / Vintage products use runtime `heatLevel: 10` and the existing Extreme filter band. Preserve the original artwork scales as authority evidence only: P-X 10/15, CASK-13 10/10, POT-7 10/14, TMR-200 10/12, X-666 10/20 and B-42 10/13. The denominators do not enter the 1–10 runtime field, and no new runtime schema field is required for REVIEW 1. Historical descriptive labels visible on source artwork remain non-authoritative.

### D-022 — FINAL REVIEW 1 PRODUCT FACTS
Owner-approved on 2026-09-14. The Core heat values, all 16 flavour profiles and all 16 pairing sets in `backend/data/burnsville-final-catalogue-intake.json` are final REVIEW 1 authority. This completes the seven required product facts for all 16 products and authorises offline validation plus isolated product-only migration QA. It does not authorise Preview or Production database mutation.

## PENDING DECISIONS

The following must remain open until the final product and release handoff is complete:

- post-REVIEW 1 shop browsing/pagination improvements, if required
- post-REVIEW 1 human-readable product slugs, if required
- post-REVIEW 1 curated homepage merchandising, if required
- final SEO/public positioning copy
