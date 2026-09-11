# BURNSVILLE — PROJECT CONTROL

## STATUS

Repository modernisation foundation is working and consolidated on the active V2 branch. Final visual UI and final product catalogue are not yet locked.

Primary working branch: `modernise/burnsville-v2`.

Current project mode: REFERENCE INTAKE + FINAL DESIGN/PRODUCT AUTHORITY PENDING.

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
- A Vercel preview deployment pipeline exists for the working V2 branch.
- Codex/agent repository controls are present at the repository root and under `docs/`.

## CURRENT VISUAL STATUS

UNLOCKED / PROVISIONAL.

The current UI is functional and structural reference only. Final visual authority will be created after the user's remaining reference uploads are reviewed and classified.

Do not make final visual-system assumptions until that intake is complete.

## ACTIVE REPOSITORY LINES

### `main`
Historical/preserved base. Not the active development source.

### `modernise/burnsville-v2`
PRIMARY WORKING SOURCE OF TRUTH.

### `modernise/burnsville-v2-integration-spec`
Historical/superseded preparation branch. PR #2 is closed without merge. Useful safety, migration and validation concepts were selectively consolidated into V2; stale product and visual assumptions remain historical only.

## CONSOLIDATION STATUS

COMPLETE for the non-visual control layer.

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

1. Final reference intake and visual authority.
2. Final product data/image architecture.
3. Final Burnsville catalogue and asset handoff.
4. New visual implementation over the existing functional engine.
5. Browser/E2E, responsive and accessibility QA.
6. Final release SEO/public metadata.
7. Final public README/repository presentation.
8. Controlled release to `main` and production.

## RELEASE BLOCKERS

- Final UI not locked.
- Final product catalogue not integrated.
- Legacy third-party runtime catalogue remains present until approved replacement data passes QA.
- Final product image architecture depends on incoming references.
- Final browser/responsive/accessibility QA must run after the UI rebuild.
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
