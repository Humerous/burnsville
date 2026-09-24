# Burnsville

**Turn up the heat. Keep the flavour.**

[![Burnsville QA](https://github.com/Humerous/burnsville/actions/workflows/qa.yml/badge.svg)](https://github.com/Humerous/burnsville/actions/workflows/qa.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern MERN eCommerce portfolio application built around a curated 16-product hot sauce catalogue.

**Live:** [burnsville-current.vercel.app](https://burnsville-current.vercel.app/)  
**Stack:** React · Redux · Vite · Node.js · Express · MongoDB · Mongoose · Vercel  
**Status:** Complete · Live · Maintenance

## What it does

Burnsville combines a branded product catalogue with a complete eCommerce workflow. Customers can discover sauces by heat level, search the catalogue, manage a cart, create an account, place orders and review products. Admin users can manage products, users, orders and uploaded product artwork.

The current catalogue contains ten Core sauces and six Limited / Vintage releases.

## Core features

- Responsive Home, Shop and Product Detail experiences.
- Search, heat filtering and pagination.
- 16-product catalogue with dedicated card and bottle artwork.
- Cart and multi-step checkout flow.
- Registration, JWT authentication and profile management.
- Customer order history and product reviews.
- Admin product, user and order management.
- Protected product-image upload backed by MongoDB GridFS.
- Server-authoritative pricing, VAT, stock and order totals.
- Keyboard-accessible navigation, focus management and dialog handling.
- Automated catalogue, asset-integrity, API and production-serving QA.

## Product catalogue

Product identity, heat level, copy, pricing, stock and runtime asset paths are defined in:

`backend/data/catalogue.json`

| Collection | Products |
| --- | --- |
| Core | GREEN SPARK, SUN GOLD, CITRUS FLARE, RED EMBER, DARK HARVEST, SALINE CURRENT, CALABRIAN GLOW, BIRD’S FIRE, VIOLET’S FUSE, GHOST BLACK |
| Limited / Vintage | P-X, CASK-13, POT-7, TMR-200, X-666, B-42 |

Each product has two verified WebP assets:

- a transparent bottle image retained for catalogue, order, admin and fallback use
- a full product card used across Home, Shop and Product Detail presentation

Asset integrity is pinned by filename, dimensions and SHA-256 hash in:

- `backend/data/bottle-assets.json`
- `backend/data/card-assets.json`

## Brand assets

The canonical Burnsville secondary crest is:

`frontend/public/brand-mark.svg`

The crest uses the approved **ESTD 2024** identity and is shared by the site footer, newsletter mark and favicon.

## Architecture

`MongoDB → Express API → React / Redux UI → Cart → Checkout → Order`

The frontend is a React application built with Vite. The backend is an Express API using Mongoose. Product and order data are stored in MongoDB. Approved catalogue artwork is served as static frontend assets, while authorised uploaded artwork is stored in MongoDB GridFS.

Primary API surfaces:

- `/api/products`
- `/api/users`
- `/api/orders`
- `/api/upload`
- `/uploads/:filename`

### Stack

- React 16
- Redux
- React Router
- Vite
- React Bootstrap
- Node.js 24
- Express
- MongoDB
- Mongoose
- GridFS
- JWT
- bcrypt
- GitHub Actions
- Vercel

## Quality and release controls

The final repository is maintained on `main` and protected by the Burnsville QA workflow.

Production release:

`68b8c44a` — `Merge approved Burnsville product presentation system`

The release has passed:

- locked 16-product catalogue validation
- bottle-asset integrity and SHA-256 validation
- product-card integrity and SHA-256 validation
- Node 24 dependency installation
- Vite production build
- isolated MongoDB replica-set setup
- catalogue API verification
- integrated API QA
- heat-filter QA
- review consistency QA
- controlled functional API QA
- production-mode serving QA

Latest Lighthouse audit:

| Performance | Accessibility | Best Practices | SEO |
| ---: | ---: | ---: | ---: |
| 87 | 100 | 100 | 100 |

Core measured results included 1.5 s FCP, 1.5 s LCP, 0 ms Total Blocking Time and 0.019 CLS.

## Repository structure

```text
backend/
  config/
  controllers/
  data/
  middleware/
  models/
  routes/
  utils/
frontend/
  public/
  src/
qa/
.github/workflows/qa.yml
```

The repository intentionally contains runtime source, production assets, machine-readable catalogue data, QA, deployment configuration and this README.

## Development

Requirements:

- Node.js 24.x
- npm
- MongoDB

Install dependencies:

```bash
npm ci
npm ci --prefix frontend
```

Create the local environment file:

```bash
cp .env.example .env
```

Required environment values:

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |
| `PORT` | Express port, defaults to 5001 |
| `NODE_ENV` | Runtime mode |

Initialize an empty database with the approved catalogue:

```bash
npm run data:bootstrap
```

Start development:

```bash
npm run dev
```

Run the static QA and production build checks:

```bash
npm run qa:product-assets
npm run qa:product-cards
npm run qa:catalogue
npm run test:catalogue-validator
npm run build --prefix frontend
```

## Commerce scope

The cart, checkout and order workflows are implemented.

Payment-provider selection is integration scaffolding only. Live merchant credentials, transaction confirmation and production payment processing are intentionally not included in this portfolio build.

## License

MIT. See [LICENSE](LICENSE).

---

Built by **Chameleon Unicode Studios**.
