# BURNSVILLE — AGENT CONTROL

## AUTHORITY

1. Current explicit owner instruction.
2. `BURNSVILLE-MASTER-AUTHORITY.md` for product identity.
3. `docs/BURNSVILLE-VISUAL-AUTHORITY.md` for visual implementation.
4. `docs/BURNSVILLE-DECISIONS.md` and `docs/BURNSVILLE-PROJECT-CONTROL.md`.
5. Current tested runtime behaviour.

## CURRENT REPOSITORY CONTRACT

- This repository contains the current Burnsville application only.
- The catalogue is the approved 16-product Burnsville catalogue.
- Only approved Burnsville product artwork is valid.
- `image` is the transparent bottle path.
- `cardImage` is the approved full product-card path.
- Home and Shop use `cardImage || image`.
- Product Detail is bottle-primary and card-secondary.
- Packs and Journal are out of scope.
- Node 24 is the project runtime.

## NON-NEGOTIABLE RULES

1. Do not invent product facts, names, wording, prices, stock, artwork or design decisions.
2. Do not introduce unapproved product fixtures, product artwork or database content.
3. Do not delete or rewrite approved card or bottle artwork.
4. Preserve authentication, authorization, cart, checkout, orders, reviews, uploads and admin functionality unless an approved change requires otherwise.
5. Do not expose or commit credentials.
6. Run relevant QA before calling a material change complete.

## WORKFLOW

`DISCUSS → AGREE → COMMAND → APPROVE → EXECUTE → QA`
