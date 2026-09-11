# Burnsville

> **Modernisation in progress**
>
> The active development source for the modernised Burnsville application is `modernise/burnsville-v2`. The visual UI and final Burnsville product catalogue are still being finalised. Historical setup, seeding, product and deployment information previously stored in this README is no longer authoritative and has been intentionally removed from the active branch to prevent destructive or stale instructions from being followed.

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
- automated API/security/production-serving QA
- Vercel preview deployment workflow

## Repository control

Before making changes, read:

- `AGENTS.md`
- `docs/BURNSVILLE-PROJECT-CONTROL.md`
- `docs/BURNSVILLE-DECISIONS.md`
- `docs/BURNSVILLE-ROADMAP.md`
- `docs/BURNSVILLE-KNOWN-ISSUES.md`

## Important current boundaries

- `main` is not the active development branch.
- The current visual UI is provisional and will change after final reference intake.
- The current runtime catalogue still contains temporary legacy third-party sample products pending the approved Burnsville replacement catalogue.
- Do not run the legacy destructive seeder for catalogue replacement.
- Do not mutate shared Preview/Production catalogue data without explicit approval and a reviewed rollback procedure.
- Do not infer missing product facts or visual decisions.

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

The repository CI workflow is the authoritative integrated QA path while the modernisation is in progress.

## Final documentation

A full public README with final screenshots, architecture, features, setup, deployment and portfolio case-study information will replace this interim notice after the final UI, catalogue and release QA are complete.
