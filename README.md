# Burnsville

[![Burnsville QA](https://github.com/Humerous/burnsville/actions/workflows/qa.yml/badge.svg)](https://github.com/Humerous/burnsville/actions/workflows/qa.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Burnsville is a modern MERN eCommerce portfolio project built around a curated 16-product hot sauce catalogue.

**Live demo:** https://burnsville-current.vercel.app/

## Status

**Complete.** The authoritative source is the `main` branch. Repository changes are verified by the Burnsville QA workflow.

## Product catalogue

The application contains ten Core sauces and six Limited / Vintage releases. Product identity, heat level, copy, pricing, stock and runtime asset paths are defined in `backend/data/catalogue.json`.

| Collection | Products |
| --- | --- |
| Core | GREEN SPARK, SUN GOLD, CITRUS FLARE, RED EMBER, DARK HARVEST, SALINE CURRENT, CALABRIAN GLOW, BIRD’S FIRE, VIOLET’S FUSE, GHOST BLACK |
| Limited / Vintage | P-X, CASK-13, POT-7, TMR-200, X-666, B-42 |

Each product has two verified WebP assets:

- a transparent bottle image for bottle-led product presentation
- a full product card for Home and Shop discovery

The integrity manifests in `backend/data/bottle-assets.json` and `backend/data/card-assets.json` pin filenames, dimensions and SHA-256 hashes.

## Features

- responsive Home, Shop and Product Detail experiences
- product search, heat filtering and pagination
- cart and multi-step checkout flow
- registration, authentication and profile management
- customer order history and product reviews
- admin product, user and order management
- protected image upload backed by MongoDB GridFS
- server-authoritative pricing, VAT, stock and order totals
- keyboard-accessible navigation, focus management and dialog handling
- automated catalogue, API, asset-integrity and production-serving QA

## Architecture

`MongoDB → Express API → React / Redux UI → Cart → Checkout → Order`

The frontend is a React application built with Vite. The backend is an Express API using Mongoose. Product data is stored in MongoDB while approved catalogue artwork is served as static frontend assets. Uploaded admin artwork is stored in MongoDB GridFS.

Primary API surfaces:

- `/api/products`
- `/api/users`
- `/api/orders`
- `/api/upload`
- `/uploads/:filename`

## Technology

| Layer | Technology |
| --- | --- |
| Frontend | React 16, Redux, React Router, Vite |
| UI | React Bootstrap, custom responsive CSS |
| Backend | Node.js 24, Express |
| Data | MongoDB, Mongoose, GridFS |
| Auth | JWT, bcrypt |
| CI | GitHub Actions |
| Deployment | Vercel |

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

The repository intentionally contains only runtime source, production assets, machine-readable catalogue data, QA, deployment configuration and this README.

## Local development

### Requirements

- Node.js 24.x
- npm
- MongoDB

### Install

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

Start the development environment:

```bash
npm run dev
```

## Quality assurance

Run the static catalogue and asset checks:

```bash
npm run qa:product-assets
npm run qa:product-cards
npm run qa:catalogue
npm run test:catalogue-validator
npm run build --prefix frontend
```

GitHub Actions additionally runs the application against an isolated MongoDB replica set and verifies catalogue APIs, authentication, reviews, orders, heat filtering, admin boundaries and production static serving.

## Commerce scope

The cart, checkout and order workflows are implemented. Payment-provider selection is integration scaffolding only; live merchant credentials, transaction confirmation and production payment processing are intentionally not included in this portfolio build.

## License

MIT. See [LICENSE](LICENSE).
