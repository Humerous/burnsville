# BURNSVILLE — ARCHITECTURE

## APPLICATION SHAPE

Burnsville is a MERN ecommerce application modernised to a Vite frontend while retaining an Express/Mongoose backend.

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

Primary admin surfaces:

- Product list
- Product edit
- User list/edit
- Order list

The current visual implementation is provisional and must not be treated as final design authority.

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

## PRODUCT DATA FLOW

Current flow:

MongoDB Product → Product API → React product surfaces → Cart → Checkout → Order

The current Product model supports one required `image` string plus product metadata such as name, brand, category, description, heat level, flavour profile, pairings, ingredients, reviews, rating, price and stock.

The single-image model is a known constraint, not a final architecture decision.

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

- build
- isolated MongoDB test runtime
- seeded QA database
- API integration tests
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

Browser-level E2E and final responsive/accessibility visual QA remain future work after the final UI is implemented.

## DEPLOYMENT

The project is linked to Vercel and receives preview deployments from development branches.

Preview deployment success is not equivalent to final production release approval.

## LEGACY BOUNDARY

The runtime catalogue still contains historical third-party sample products/assets. They remain temporarily to preserve a functioning application while the approved Burnsville replacement catalogue is prepared.

Do not remove them until replacement catalogue integration and rollback QA pass.
