# BURNSVILLE — ARCHITECTURE

## APPLICATION SHAPE

Burnsville is a MERN ecommerce application modernised to a Vite frontend while retaining an Express/Mongoose backend.

## AUTHORITY LAYER

`BURNSVILLE-MASTER-AUTHORITY.md` is the product-identity source of truth. `qa/product-authority.mjs` verifies the master authority and final catalogue intake remain aligned before integrated CI continues.

Historical catalogue and asset mappings are evidence only and do not participate in runtime identity authority.

## FRONTEND

Location: `frontend/`

Core technologies:

- React
- React Router
- Redux
- Axios
- Vite

Primary customer surfaces:

- Home
- Shop
- Product detail
- Cart
- Login/Register
- Profile
- Shipping
- Payment
- Place Order
- Order detail
- Packs
- Journal
- Contact

Primary admin surfaces:

- Product list
- Product edit
- User list/edit
- Order list

The current visual implementation is the approved three-block UI authority from commit `8d3403ce4be7f221ea9e5862b9965ba915ed2957`.

## BACKEND

Location: `backend/`

Core technologies:

- Node.js
- Express
- Mongoose
- JWT authentication
- Multer
- MongoDB GridFS for uploaded product imagery

Primary API groups:

- `/api/products`
- `/api/users`
- `/api/orders`
- `/api/upload`

Uploaded GridFS product images are served through `/uploads/:filename`.

The product API supports server-side search, heat filtering and pagination.

## PRODUCT DATA FLOW

Current flow:

Master identity authority → approved replacement data → MongoDB Product → Product API → React product surfaces → Cart → Checkout → Order

The current Product model supports one required `image` string plus product metadata such as name, brand, category, description, heat level, flavour profile, pairings, ingredients, reviews, rating, price and stock.

The single-image model is approved through REVIEW 1 under decision D-019. Any post-REVIEW 1 gallery or multi-image expansion requires a separate explicit architecture decision.

## ORDER INTEGRITY

Order creation uses authoritative server-side product records for item identity and price. Client-submitted prices are not trusted as the source of truth.

Stock is updated during order creation with insufficient-stock rejection.

## AUTHORIZATION

Authentication uses JWTs.

Administrative product, user and upload operations require authenticated admin access.

## IMAGE UPLOAD

Current upload behaviour:

- admin-only
- one file per request
- JPEG/PNG only
- 5 MB maximum
- binary signature verification
- random generated filename
- GridFS storage
- `/uploads/...` serving route

This system should be preserved unless an approved architecture change replaces it deliberately.

## QA

Repository QA currently covers:

- product-identity authority consistency
- build
- isolated MongoDB test runtime
- seeded QA database
- API integration tests
- search/heat-filter behaviour
- user/auth boundaries
- authoritative pricing
- stock handling
- order ownership
- payment input/authorization boundaries
- admin upload authorization
- binary image validation
- review consistency
- production static serving
- production dependency audit at the configured severity gate
- repository diff checks

Browser-level customer E2E, targeted keyboard checks and responsive/accessibility visual QA were completed for the approved UI. Product-specific release QA must run again after the final Burnsville catalogue is integrated.

## DEPLOYMENT

The project is linked to Vercel and receives preview deployments from development branches.

Preview deployment success is not equivalent to final production release approval.

## LEGACY BOUNDARY

The runtime catalogue still contains historical third-party sample products/assets. They remain temporarily to preserve a functioning application while the approved Burnsville replacement catalogue is prepared.

Do not remove them until replacement catalogue integration and rollback QA pass.
