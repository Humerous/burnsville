# BURNSVILLE — AGENT CONTROL

## AUTHORITY

1. Current explicit owner instruction.
2. `BURNSVILLE-MASTER-AUTHORITY.md` for product identity.
3. `docs/BURNSVILLE-VISUAL-IMPLEMENTATION-AUTHORITY-V1.1-END-OF-DAY.md` for visual implementation.
4. `docs/BURNSVILLE-DECISIONS.md` and `docs/BURNSVILLE-PROJECT-CONTROL.md`.
5. Current tested runtime behaviour.

## CURRENT REPOSITORY CONTRACT

- This repository is current Burnsville only.
- The product catalogue is the approved 16-product Burnsville catalogue.
- Third-party sample products and artwork are not valid inputs.
- `image` is the transparent bottle path.
- `cardImage` is the approved full product-card path.
- Home and Shop use `cardImage || image`.
- Product Detail remains bottle-primary and card-secondary under the active visual authority.
- Packs and Journal are out of scope.
- Node 24 is the project runtime.

## NON-NEGOTIABLE RULES

1. Do not invent product facts, names, wording, prices, stock, artwork or design decisions.
2. Do not restore archived product fixtures, archived product images or archived database content.
3. Do not point the current project at an archived Burnsville database.
4. Do not delete or rewrite approved card or bottle artwork.
5. Preserve authentication, authorization, cart, checkout, orders, reviews, uploads and admin functionality unless an approved change requires otherwise.
6. Do not expose or commit credentials.
7. Do not reset, clean, discard, commit, push, deploy or mutate a shared database without explicit approval.
8. Use `npm run data:bootstrap` only against the intended current database. It is designed for an empty/current-only catalogue state.
9. Run relevant QA before calling a material change complete.

## WORKFLOW

`DISCUSS → AGREE → COMMAND → APPROVE → EXECUTE → QA`

One authoritative version. One active stage. One next action.
