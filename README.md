# Burnsville

Modern MERN eCommerce portfolio project built around a 16-product hot sauce catalogue.

**Live demo:** https://burnsville-current.vercel.app/

## Status

**Complete**

The final application is maintained on `main` and has passed the repository CI suite on Node 24.

## Highlights

- 16-product Burnsville catalogue
- responsive Home, Shop and Product Detail experiences
- dedicated product-card and transparent bottle artwork
- cart and checkout flow
- user registration, login and profile management
- order workflow
- admin product, user and order management
- JWT authentication
- MongoDB / Mongoose data layer
- Vite production build
- automated GitHub Actions QA

## Stack

**Frontend:** React, Redux, React Router, Vite  
**Backend:** Node.js, Express, Mongoose  
**Database:** MongoDB  
**Deployment:** Vercel  
**CI:** GitHub Actions, Node 24

## Architecture

`MongoDB → Express API → React UI → Cart → Checkout → Order`

Product data and asset paths are stored in MongoDB. Approved runtime artwork is served from:

- `frontend/public/images/products/cards/`
- `frontend/public/images/products/bottles/`

The current catalogue source is:

`backend/data/burnsville-final-catalogue-intake.json`

## Local setup

Use Node 24.x.

```bash
npm ci
npm ci --prefix frontend
cp .env.example .env
npm run data:bootstrap
npm run dev
```

`npm run data:bootstrap` initializes an empty database with the approved 16-product catalogue and refuses to mix unrelated product records into the current dataset.

## QA

```bash
npm run qa:product-assets
npm run qa:product-cards
npm run qa:catalogue
npm run test:catalogue-validator
npm run build --prefix frontend
```

The GitHub Actions workflow additionally verifies the current catalogue API, integrated API behaviour, heat filters, reviews, functional flows and production static serving.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Product catalogue](docs/PRODUCT-CATALOGUE.md)
- [Visual guide](docs/VISUAL-GUIDE.md)

## Commerce scope

Checkout and order workflows are implemented. Payment-provider selections are integration scaffolding only; live merchant credentials and production gateway processing are not included in this portfolio build.
