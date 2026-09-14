# BURNSVILLE — PROJECT CONTROL

## STATUS

Repository modernisation and the approved three-block visual UI are working and consolidated on the active V2 branch. Product identities, Review 1 image architecture and all 16 bottle assets are locked. Final product facts, runtime catalogue replacement and public release inputs remain incomplete.

Primary working branch: `modernise/burnsville-v2`.

Current project mode: FINAL PRODUCT INTEGRATION → PRODUCT-SPECIFIC QA → REVIEW 1.

## MASTER AUTHORITY

`BURNSVILLE-MASTER-AUTHORITY.md` is the sole current product-identity authority.

No historical catalogue, asset map, filename, commit, screenshot transcription, prior Codex output, or automated reconciliation may override it unless the owner explicitly issues a newer approval.

`qa/product-authority.mjs` is the automated enforcement layer and must remain enabled in CI.

`qa/product-assets.mjs` enforces the approved 16-file Review 1 bottle map and must remain enabled in CI.

## CURRENT VERIFIED FOUNDATION

- Vite frontend builds successfully.
- Express/Mongoose backend is active.
- Authentication and admin authorization exist.
- Product CRUD exists.
- Cart, checkout and order flows exist.
- Server-authoritative order pricing and stock handling are implemented.
- Reviews exist.
- Admin product image upload exists and is protected.
- Uploaded images are stored in MongoDB GridFS.
- Real server-side search, heat filtering and pagination exist.
- Automated API/security/production-serving QA is established and passing on the consolidated V2 baseline.
- Browser customer-journey, responsive and accessibility QA passed for the approved UI.
- A Vercel preview deployment pipeline exists for the working V2 branch.
- Codex/agent repository controls are present at the repository root and under `docs/`.

## CURRENT VISUAL STATUS

APPROVED UI IMPLEMENTED / RELEASE DATA PENDING.

The current UI implements the supplied approved storyboard system across customer, admin and application-state surfaces.

Do not redesign approved patterns or product cards without a newer explicit user instruction.

## ACTIVE REPOSITORY LINES

### `main`
Historical/preserved base. Not the active development source.

### `modernise/burnsville-v2`
PRIMARY WORKING SOURCE OF TRUTH.

### `modernise/burnsville-v2-integration-spec`
Historical/superseded preparation branch. PR #2 is closed without merge. Useful safety, migration and validation concepts were selectively consolidated into V2; stale product and visual assumptions remain historical only.

## CONSOLIDATION STATUS

COMPLETE for the control layer and approved UI implementation.

The primary V2 branch now contains:

- root `AGENTS.md` agent rules
- root `BURNSVILLE-MASTER-AUTHORITY.md` product-identity authority
- automated product-authority CI guard
- project control
- architecture baseline
- decision register
- roadmap
- known-issues register
- targeted risk register
- controlled product-integration contract
- safe catalogue migration plan
- final product-integration QA checklist
- read-only final-catalogue readiness validator with focused automated tests
- final catalogue intake with 16 locked identities, approved image paths, safe defaults and unresolved product-fact markers
- approved 16-bottle runtime asset map and automated integrity gate
- corrected catalogue replacement controls
- catalogue authority reconciliation report
- interim README safety notice

Excluded from runtime authority or retained as supporting evidence:

- historical product/commercial facts not explicitly approved
- historical asset labels and filenames that conflict with the master identity authority
- opaque portrait poster/card artwork retained as supporting evidence and excluded from REVIEW 1 runtime
- historical 16-card installer retained as a fail-closed stub because those cards are not approved runtime imagery

Not imported as authority:

- stale product names/facts from superseded mappings
- historical descriptive Limited / Vintage labels
- rejected asset assumptions
- integration-branch visual assumptions

## OPEN WORKSTREAMS

1. Controlled product-only catalogue migration and product-specific regression QA.
2. Resolve or explicitly accept runtime identity-drift risk R-015 before shared release-candidate migration.
3. Final release SEO/public metadata and legal destinations.
4. Final public README/repository presentation.
5. Controlled release to `main` and production.

## NEXT CODEX BLOCK — ENTRY CONDITIONS

Do not spend the next major block re-auditing product identities or redesigning completed UI.

All seven required product facts are approved in the final intake. Execute:

PRODUCT FACT APPROVAL → AUTHORITY/ASSET/CATALOGUE QA → REPLACEMENT DATASET → ISOLATED QA → CUSTOMER/ADMIN REGRESSION → MIGRATION REVIEW

If a required approved input is absent, stop on that specific unresolved input rather than inventing or reopening completed work.

## RELEASE BLOCKERS

- Final product catalogue not integrated.
- Legacy third-party runtime catalogue remains present until approved replacement data passes QA.
- Product-only migration and product-specific QA remain incomplete.
- Runtime identifier/collection/admin-edit policy remains open under risk R-015 before a shared release candidate.
- Product-specific browser/responsive/accessibility QA must run after catalogue replacement.
- Final release URL/canonical/social metadata is not yet locked.

## CHANGE CONTROL

Material product or visual work follows:

DISCUSS → AGREE → UPDATE MASTER AUTHORITY → COMMAND → APPROVE → EXECUTE → QA

Do not reopen approved technical work without a verified defect, new requirement or explicit user instruction.

## DEFINITION OF FINISHED

Burnsville is finished only when:

- final approved UI is implemented consistently
- final approved Burnsville catalogue replaces legacy sample products
- all final product assets resolve correctly
- customer commerce flow passes end to end
- admin edit/upload flow passes end to end
- product-authority QA and automated QA pass
- responsive and accessibility QA passes
- no legacy third-party catalogue content is public
- final SEO/public metadata is correct
- README accurately describes the released project
- release PR is current and reviewable
- production deployment passes live QA
