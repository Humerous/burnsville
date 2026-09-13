# Burnsville

> **Modernisation in progress**
>
> The active development source for the modernised Burnsville application is `modernise/burnsville-v2`. The approved three-block visual UI is implemented and verified. Product identity authority is locked; final product facts, asset roles, runtime catalogue replacement and public release inputs remain incomplete. Historical setup, seeding, product and deployment information previously stored in this README is no longer authoritative.

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

CI runs `qa/product-authority.mjs` to prevent accidental product-identity drift and tests the read-only final-catalogue readiness validator.

## Important current boundaries

- `main` is not the active development branch.
- The current visual UI is approved implementation authority and must not be redesigned without a newer explicit instruction.
- `BURNSVILLE-MASTER-AUTHORITY.md` is the sole current product-identity authority unless the owner explicitly approves a newer change.
- The current runtime catalogue still contains temporary legacy third-party sample products pending the approved Burnsville replacement catalogue.
- Historical catalogue/asset filenames are evidence only and cannot rename products or approve product facts.
- Do not run the legacy destructive seeder for catalogue replacement.
- Do not mutate shared Preview/Production catalogue data without explicit approval and a reviewed rollback procedure.
- Do not infer missing product facts, commercial values, asset roles or visual decisions.

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

Check whether the final catalogue intake is complete and its static asset paths resolve:

```bash
npm run qa:catalogue
```

This command is read-only. It is expected to report blockers until every required product fact and runtime asset has been approved.

The repository CI workflow is the authoritative integrated QA path while the modernisation is in progress.

## Final documentation

A full public README with final screenshots, architecture, features, setup, deployment and portfolio case-study information will replace this interim notice after the final catalogue and release QA are complete.
