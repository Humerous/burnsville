# BURNSVILLE — RISK REGISTER

| Risk | Control |
| --- | --- |
| Runtime database points to an unapproved dataset | Use the dedicated current database URI and verify database identity before initialization/deployment. |
| Unapproved product fixtures or assets enter the repository | Current-only QA and product-authority checks. |
| Product card or bottle assets drift | SHA-256 asset QA for all approved runtime assets. |
| Product identity drifts from authority | `qa/product-authority.mjs` and Master Authority. |
| Missing runtime assets produce broken UI images | Asset QA, frontend build and production-serving QA. |
| Database contains unrelated products | `npm run data:bootstrap` refuses non-current product state. |
| Unapproved architecture changes destabilize the final build | Keep `main` authoritative and require QA for changes. |
| Unapproved database/deployment mutation | Explicit approval gate. |
