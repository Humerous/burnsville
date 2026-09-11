# BURNSVILLE — PROJECT CONTROL

## STATUS

Repository modernisation foundation is working. Final visual UI and final product catalogue are not yet locked.

Primary working branch: `modernise/burnsville-v2`.

Current project mode: REFERENCE INTAKE + CONTROL CONSOLIDATION.

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
- Automated API/security/production-serving QA exists and has passed on the current V2 baseline.
- A Vercel preview deployment exists for the working V2 branch.

## CURRENT VISUAL STATUS

UNLOCKED / PROVISIONAL.

The current UI may be used as functional and structural reference only. Final visual authority will be created after the user's remaining reference uploads are reviewed and classified.

Do not make further visual-system assumptions until that intake is complete.

## ACTIVE REPOSITORY LINES

### `main`
Historical/preserved base. Not the active development source.

### `modernise/burnsville-v2`
PRIMARY WORKING SOURCE OF TRUTH.

### `modernise/burnsville-v2-integration-spec`
Historical/preparatory product-integration branch. Contains useful safety, migration and validation material, but also stale product assumptions. Do not merge wholesale.

## OPEN WORKSTREAMS

1. Final reference intake and visual authority.
2. Selective integration-spec consolidation.
3. Final product data architecture.
4. Final Burnsville catalogue and asset handoff.
5. New visual implementation over the existing functional engine.
6. Browser/E2E, responsive and accessibility QA.
7. SEO/public metadata cleanup.
8. README/public repository presentation.
9. Controlled release to `main` and production.

## RELEASE BLOCKERS

- Final UI not locked.
- Final product catalogue not integrated.
- Legacy third-party runtime catalogue remains present.
- Product image architecture may need expansion beyond one image.
- Integration-spec branch has not been selectively reconciled.
- Final browser/responsive/accessibility QA not complete.
- Public README and SEO metadata not final.

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
- SEO/public metadata is correct
- README accurately describes the modern project
- release branch/PR is current and reviewable
- production deployment passes live QA
