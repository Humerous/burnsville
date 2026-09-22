# BURNSVILLE — CURRENT ARCHITECTURE

## APPLICATION

Burnsville is a Vite/React frontend with an Express/Mongoose backend.

## PRODUCT AUTHORITY

- `BURNSVILLE-MASTER-AUTHORITY.md`
- `backend/data/burnsville-final-catalogue-intake.json`
- `backend/data/burnsville-product-asset-map.json`
- `backend/data/burnsville-product-card-asset-map.json`

## PRODUCT DATA FLOW

`MongoDB Product → /api/products → React product surfaces → Cart → Checkout → Order`

MongoDB stores product data and asset paths. Product artwork is served as static runtime assets from the frontend public directory.

## PRODUCT IMAGE CONTRACT

`image` = approved transparent bottle asset.

`cardImage` = approved full product card.

Home and Shop render `cardImage || image`.

Product Detail follows the active visual authority: bottle primary, full product card secondary.

## RUNTIME ASSETS

- `frontend/public/images/products/bottles/`
- `frontend/public/images/products/cards/`

Exactly 16 approved bottle assets and 16 approved card assets are expected.

## FRONTEND SURFACES

Customer:

- Home
- Shop
- Product Detail
- Cart
- Contact
- Login / Register
- Profile
- Shipping
- Payment
- Place Order
- Order Detail

Admin:

- Products
- Users
- Orders

Packs and Journal are not part of the current implementation scope.

## BACKEND

Primary APIs:

- `/api/products`
- `/api/users`
- `/api/orders`
- `/api/upload`

Authentication uses JWTs. Admin upload uses MongoDB GridFS through `/uploads/:filename`.

## DATABASE INITIALIZATION

`npm run data:bootstrap` initializes an empty/current-only database with the approved 16-product catalogue. If unrelated product records already exist, bootstrap fails instead of mixing catalogues.

## QA

The repository validates product identity, catalogue completeness, bottle/card asset integrity, frontend build, current catalogue API behaviour, authentication, ordering, reviews, uploads and production serving.
