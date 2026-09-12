# BURNSVILLE — PROJECT CONTROL

## STATUS

Repository modernisation and the approved three-block visual UI are working and consolidated on the active V2 branch. The final product catalogue and public release inputs remain incomplete.

Primary working branch: `modernise/burnsville-v2`.

Current project mode: FINAL PRODUCT INTEGRATION + RELEASE PREPARATION PENDING.

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
- project control
- architecture baseline
- decision register
- roadmap
- known-issues register
- controlled product-integration contract
- safe catalogue migration plan
- final product-integration QA checklist
- final catalogue intake placeholder
- corrected catalogue replacement controls
- interim README safety notice

Removed from active authority:

- obsolete locked product catalogue
- obsolete locked asset map
- invalid product asset-map JSON
- stale Burnsville product catalogue JSON that contained superseded product identities

Not imported as authority:

- stale product names/facts from the superseded integration branch
- rejected asset assumptions
- integration-branch visual/heat changes

## OPEN WORKSTREAMS

1. Final product data/image architecture.
2. Final Burnsville catalogue and asset handoff.
3. Controlled catalogue migration and product-specific regression QA.
4. Final release SEO/public metadata and legal destinations.
5. Final public README/repository presentation.
6. Controlled release to `main` and production.

## RELEASE BLOCKERS

- Final product catalogue not integrated.
- Legacy third-party runtime catalogue remains present until approved replacement data passes QA.
- Final product image architecture remains unconfirmed for catalogue integration.
- Product-specific browser/responsive/accessibility QA must run after catalogue replacement.
- Final release URL/canonical/social metadata is not yet locked.

## CHANGE CONTROL

Material product or visual work follows:

DISCUSS → AGREE → COMMAND → APPROVE → EXECUTE → QA

Do not reopen approved technical work without a verified defect, new requirement or explicit user instruction.

## DEFINITION OF FINISHED

Burnsville is finished only when:

- final approved UI is implemented consistently
- final approved Burnsville catalogue replaces legacy sample products
- all final product assets resolve correctly
- customer commerce flow passes end to end
- admin edit/upload flow passes end to end
- automated QA passes
- responsive and accessibility QA passes
- no legacy third-party catalogue content is public
- final SEO/public metadata is correct
- README accurately describes the released project
- release PR is current and reviewable
- production deployment passes live QA
