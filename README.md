# Burnsville

> **Modernisation in progress**
>
> The active development source for the modernised Burnsville application is `modernise/burnsville-v2`. The approved three-block visual UI, final 16-product Review 1 catalogue and safe product-only replacement procedure are implemented and verified in isolation. Shared Preview and Production data remain unchanged. Historical setup, seeding, product and deployment information previously stored in this README is no longer authoritative.

## Current technical baseline

The modernised application currently includes:

- Vite/React frontend
- Express/Mongoose backend
- authentication and admin authorization
- product CRUD
- cart and checkout/order flow
- reviews
- server-authoritative order pricing and stock handling
- protected GridFS-backed product image uploads
- real server-side search, heat filtering and pagination
- automated API/security/production-serving QA
- browser journey, responsive and accessibility QA
- Vercel preview deployment workflow

## Repository control

Before making changes, read in this order:

1. `AGENTS.md`
2. `BURNSVILLE-MASTER-AUTHORITY.md` for locked product identities
3. `docs/BURNSVILLE-PROJECT-CONTROL.md`
4. `docs/BURNSVILLE-DECISIONS.md`
5. `docs/BURNSVILLE-ROADMAP.md`
6. `docs/BURNSVILLE-KNOWN-ISSUES.md`
7. `docs/BURNSVILLE-RISK-REGISTER.md`

CI runs `qa/product-authority.mjs` to prevent accidental product-identity drift, `qa/product-assets.mjs` to verify all 16 approved bottle files, validates the final catalogue, and proves product-only replacement, rerun safety and rollback in an isolated database.

## Important current boundaries

- `main` is not the active development branch.
- The current visual UI is approved implementation authority and must not be redesigned without a newer explicit instruction.
- `BURNSVILLE-MASTER-AUTHORITY.md` is the sole current product-identity authority unless the owner explicitly approves a newer change.
- Shared Preview retains its current catalogue until the owner explicitly approves the product-only migration.
- Historical catalogue/asset filenames are evidence only and cannot rename products or approve product facts. Approved Review 1 runtime paths are recorded in `backend/data/burnsville-product-asset-map.json`.
- Do not run the legacy destructive seeder for catalogue replacement.
- Do not mutate shared Preview/Production catalogue data without explicit approval and a reviewed rollback procedure.
- Do not reopen approved Review 1 product facts or identities without explicit owner authority.

## Development

Install backend dependencies:

```bash
npm ci
```

Install frontend dependencies:

```bash
npm ci --prefix frontend
```

Build the frontend:

```bash
npm run build --prefix frontend
```

Verify product authority:

```bash
node qa/product-authority.mjs
```

Verify the approved product bottle assets:

```bash
npm run qa:product-assets
```

Check whether the final catalogue intake is complete and its static asset paths resolve:

```bash
npm run qa:catalogue
```

This command is read-only and must pass before any product-only replacement.

The repository CI workflow is the authoritative integrated QA path while the modernisation is in progress.

## Final documentation

A full public README with final screenshots, architecture, features, setup, deployment and portfolio case-study information will replace this interim notice after the final catalogue and release QA are complete.
