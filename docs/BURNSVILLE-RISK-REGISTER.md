# BURNSVILLE — RISK REGISTER

## STATUS

TARGETED RISK DELTA COMPLETE FOR REMOTE HEAD `2967be17796a2f818d6a07c6d9f79393fe454fb1`.

Audit date: 2026-09-13

Active stage: FINAL PRODUCT INTEGRATION → QA → REVIEW 1

Scope: current repository controls, product-integration path and release gates. This is not a broad redesign or a reopening of locked product identities.

## SEVERITY

- **P0** — active data-loss, security or correctness event that stops all dependent work
- **P1** — must be resolved or explicitly accepted before the affected release path proceeds
- **P2** — controlled follow-up that does not block current independent product-readiness work

No active P0 event was found. The documented P1 risks block only their dependent migration, commerce or release paths.

## KNOWN RISKS RECONFIRMED

| ID | Severity | Evidence | Impact | Required treatment | Can current independent work continue? |
|---|---|---|---|---|---|
| A — Destructive legacy seeder | P1 / controlled | `backend/seeder.js` deletes orders, products and users. Production/Vercel execution is blocked, while isolated CI still invokes `npm run data:import`. | Running it against a shared non-Vercel environment could destroy unrelated data. | Keep it limited to disposable QA. Never use it for final catalogue migration or rollback. | Yes. |
| B — Legacy empty-database bootstrap | P1 / controlled | `backend/bootstrap.js` inserts `backend/data/products.js`, which contains ten third-party sample products, whenever the product collection is empty. | An empty shared environment could be populated with legacy catalogue data if the command is used. | Do not use bootstrap for final integration. Replace only through the reviewed product-only migration after isolated proof. | Yes. |
| C — Working branch unprotected | P1 | GitHub branch-protection API returned `Branch not protected` for `modernise/burnsville-v2` on 2026-09-13. | Approved work can be overwritten or pushed without required checks. | Add appropriate protection after confirming the required-check policy; do not rewrite branch history. | Yes; preserve clean commits and CI evidence. |
| D — Release branch unprotected | P1 / release gate | GitHub branch-protection API returned `Branch not protected` for `main` on 2026-09-13. PR #1 is still a draft. | A release could bypass review or required QA. | Protect `main` and require the intended QA checks before REVIEW 1 exits into release. | Yes; no merge to `main`. |
| E — Authentication rate limits absent | P1 / release gate | User registration/login routes are public and the Express stack contains no rate-limit middleware. | Public authentication endpoints are exposed to brute-force and resource-abuse attempts. | Approve and add an application or edge rate-limit policy before public release. | Yes; do not silently redesign auth. |
| F — Security headers/CSP absent | P1 / release gate | `backend/server.js` configures JSON, routes and static serving without a security-header policy; no header middleware is installed. | Browser hardening is weaker than the intended public baseline. | Define and test a CSP/security-header policy compatible with current fonts, icons, images and payment providers before release. | Yes. |
| G — Long-lived JWT in local storage | P1 / architecture decision | `generateToken.js` issues 30-day JWTs; `frontend/src/store.js` and user actions persist `userInfo` in local storage. | A successful script injection could expose a long-lived bearer token. | Owner/architecture decision required before changing the working auth model; consider shorter sessions and an HttpOnly-cookie design in a controlled security block. | Yes; preserve working auth now. |
| H — Preview indexing permissive | P2 / release control | `frontend/public/robots.txt` has an empty `Disallow`, and no environment-specific noindex response was found. | Search engines may index a development Preview URL. | Add Preview-only noindex controls without blocking the eventual Production index policy. | Yes. |
| I — Payment choice is not payment verification | P1 / commerce gate | Checkout offers Peach Payments, PayFast, SnapScan and Zapper, while no provider integration/webhook exists. The current pay endpoint explicitly accepts only a client-mediated demo result. | Orders cannot safely be marked paid for real commerce; provider names could be mistaken for active payment processing. | Keep Preview unpaid. Select and verify one provider, credentials, server verification and webhook handling before real commerce. | Yes; no live-payment claim. |
| J — Environment contract absent | P2 / handoff | No tracked `.env.example` exists. Runtime reads `MONGO_URI`/`MONGODB_URI`, `JWT_SECRET`, `PAYPAL_CLIENT_ID`, `NODE_ENV` and `PORT`. `.gitignore` ignores `.env*`. | Setup and deployment handoff can omit required names or accidentally rely on undocumented state. | Add a values-free environment contract and explicit gitignore exception during release preparation. | Yes. |
| K — Final SEO metadata incomplete | P2 / release gate | Metadata is deliberately neutral; no approved canonical/OpenGraph/sitemap release set exists. | Search and social presentation cannot be called final. | Complete only after the public URL and positioning copy are approved. | Yes. |
| L — Preview is not release cutover | P1 / release gate | `vercel.json` enables deployment only for `modernise/burnsville-v2`; Production/main deployment is disabled. | Successful Preview status does not release the intended Production version. | Keep release as a separate explicitly approved stage with rollback and live QA. | Yes. |
| M — Accumulated CSS overrides | P2 | The approved UI is distributed across existing global and screen stylesheets with later overrides. | Broad cleanup could introduce visual regressions and increase review cost. | Do not refactor during product integration. Change only verified defects and rerun visual QA. | Yes. |
| N — Large draft PR | P2 / review | PR #1 is open and draft, with successful checks at `2967be1`; it contains the accumulated modernisation history. | Review complexity can obscure later product-integration changes. | Keep commits narrowly scoped and maintain a precise PR description/checklist before REVIEW 1. | Yes. |

## TARGETED DELTA FINDINGS

| ID | Severity | Evidence | Impact | Required treatment | Can current independent work continue? |
|---|---|---|---|---|---|
| R-015 — Runtime identity drift is not structurally prevented | P1 / product architecture | The Product model has no locked `identifier` or `collection` field, and admin product updates can replace `name`. `qa/product-authority.mjs` validates repository control files, not database records. | The final database could contain renamed, duplicated or misclassified products even while CI authority QA passes. | Resolve the identifier/SKU policy and admin-edit boundary before final migration. Extend isolated QA to compare runtime records with the master authority. Do not change the approved CRUD flow without that decision. | Yes; offline validation and evidence work can continue. |
| R-016 — No release-ready catalogue validator existed | P1 / addressed for preparation | The existing authority guard checks identity alignment only. The current intake contains explicit placeholders and lacks final facts, review defaults and resolving assets. | An incomplete dataset could otherwise reach migration review without field, money, stock, review or asset-path proof. | `qa/catalogue-readiness.mjs` now provides a read-only gate. Keep it outside blocking CI until the approved dataset is complete, then require it in isolated integration QA. | Yes. |
| R-017 — Current runtime still exposes legacy catalogue sources | P1 / known release blocker | `backend/data/products.js` contains ten third-party products and `frontend/public/images` retains their product files. | Final public catalogue acceptance cannot pass until approved replacement data and assets have passed rollback-safe integration. | Preserve as rollback evidence for now. Remove only after replacement QA and migration approval. | Yes; no cleanup yet. |
| R-018 — Candidate bottle artwork contains historical visible labels | P1 / asset decision | The preserved 16-file bottle set decodes at 1024×1536 with alpha, but its historical source register and visible artwork include Core 07 `CALABRIAN GLOW`, Core 09 `VIOLETS FUSE`, `R-13`/`CASK 13`, and Limited/Vintage descriptive labels. Those conflict with or remain unresolved under the current master authority. | Using the files as public runtime imagery could visually reintroduce identities that the repository correctly rejects in data. | Keep the files as candidates only. Obtain corrected artwork or explicit owner approval for every visible secondary label before copying them into the active repository. Do not rename files as a substitute for correcting visible artwork. | Yes; validator and non-asset integration preparation can continue. |

## CURRENT RELEASE POSITION

- Product identity authority: VERIFIED.
- Approved UI/backend/QA: PRESERVE.
- Final product facts and asset roles: OWNER INPUT REQUIRED.
- Read-only catalogue readiness gate: IMPLEMENTED; the current placeholder intake is expected to fail it.
- Shared database mutation: NOT AUTHORISED.
- REVIEW 1: NOT READY.
- Production release: NOT AUTHORISED.

## UPDATE RULE

Every new entry must include verified evidence, severity, impact, required treatment and whether unaffected work can continue. Do not close a risk without code/QA evidence or an explicit approved decision appropriate to that risk.
