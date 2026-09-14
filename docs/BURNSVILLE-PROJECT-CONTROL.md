# BURNSVILLE — PROJECT CONTROL

## STATUS

Repository modernisation, the approved three-block visual UI, final Review 1 catalogue, product-only replacement procedure and isolated QA are complete on the active V2 branch. Shared Preview and Production data remain unchanged.

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

APPROVED UI IMPLEMENTED / PREVIEW MIGRATION READY FOR OWNER APPROVAL.

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
- final catalogue intake with 16 locked identities, all approved facts and approved image paths
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

1. Owner-approved product-only migration to the shared Preview database and post-migration QA.
2. Final release SEO/public metadata and legal destinations.
3. Final public README/repository presentation.
4. Controlled release to `main` and Production.

## NEXT CODEX BLOCK — ENTRY CONDITIONS

Do not spend the next major block re-auditing product identities or redesigning completed UI.

The isolated product-only replacement, rollback, product-specific API/browser QA and required responsive/accessibility matrix pass. The next controlled action is:

OWNER APPROVAL → SHARED PREVIEW PRODUCT-ONLY MIGRATION → POST-MIGRATION QA

Do not mutate Preview until the owner explicitly authorises that exact stage.

## RELEASE BLOCKERS

- Shared Preview still contains its current catalogue until owner-approved migration.
- Post-migration Preview comparison and customer/admin browser QA remain required.
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
