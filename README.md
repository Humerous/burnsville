# Burnsville

Modernized Burnsville MERN ecommerce application preserved as a completed portfolio and learning project.

## Project status

`CLOSED — 2026-09-22`

Final closeout record: `docs/BURNSVILLE-CLOSEOUT.md`

Live reference: `https://burnsville-current.vercel.app/`

## Current catalogue

- 16 approved Burnsville products only
- full product cards for Home / Shop discovery
- transparent bottle assets retained separately
- current catalogue source: `backend/data/burnsville-final-catalogue-intake.json`
- current product identity authority: `BURNSVILLE-MASTER-AUTHORITY.md`
- current visual authority: `docs/BURNSVILLE-VISUAL-IMPLEMENTATION-AUTHORITY-V1.1-END-OF-DAY.md`

The active application contains only the current Burnsville catalogue and approved product artwork.

## Runtime data flow

`MongoDB Product → Express API → React UI → Cart → Checkout → Order`

MongoDB stores product data and asset paths. Runtime WebP assets live under:

- `frontend/public/images/products/cards/`
- `frontend/public/images/products/bottles/`

## Commerce status

The checkout/order flow is retained for the project, but payment-provider choices are integration scaffolding only. Live gateway processing and merchant credentials are not implemented and must not be presented as production payment capability.

## Setup

Use Node 24.x.

```bash
npm ci
npm ci --prefix frontend
cp .env.example .env
npm run data:bootstrap
npm run dev
```

`npm run data:bootstrap` initializes an empty database with the approved 16-product Burnsville catalogue. It refuses to mix the current catalogue into a database containing unrelated products.

## QA

```bash
npm run qa:product-assets
npm run qa:product-cards
npm run qa:catalogue
npm run test:catalogue-validator
npm run build --prefix frontend
```

The final closeout commit passed GitHub Actions.

## Repository state

`main` is the authoritative final modernized branch.

The former pre-modernization `main` state is preserved at:

`archive/old-main-before-modernised-2026-09-22`

Historical branches remain for recovery and provenance only.

## Control

Burnsville is closed. Do not reopen visual, catalogue or architecture work unless a verified defect requires corrective work.
