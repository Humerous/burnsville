# BURNSVILLE — RISK REGISTER

| Risk | Control |
| --- | --- |
| Current project reconnects to an archived Burnsville database | Keep a dedicated current database URI and verify database name before initialization/deployment. |
| Old product fixtures/assets are copied back into the repository | Current-only QA and product authority checks; no old fixture files in the working tree. |
| Product card or bottle assets drift | SHA-256 asset QA for all approved runtime assets. |
| Product identity drifts from authority | `qa/product-authority.mjs` and Master Authority. |
| Missing runtime assets produce broken UI images | `qa/product-assets.mjs`, `qa/product-card-assets.mjs`, frontend build and visual QA. |
| Database contains unrelated products | `npm run data:bootstrap` refuses non-current product state. |
| Visual work expands into unrelated architecture changes | Active V1.1 authority and controlled workflow. |
| Unapproved database/deployment mutation | Explicit owner approval gate. |
