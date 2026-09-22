# Burnsville Product Catalogue

## Status

Current product identity and product-fact authority for the final Burnsville catalogue.

## Core range

| # | Product |
| --- | --- |
| 01 | GREEN SPARK |
| 02 | SUN GOLD |
| 03 | CITRUS FLARE |
| 04 | RED EMBER |
| 05 | DARK HARVEST |
| 06 | SALINE CURRENT |
| 07 | CALABRIAN GLOW |
| 08 | BIRD’S FIRE |
| 09 | VIOLET’S FUSE |
| 10 | GHOST BLACK |

## Limited / Vintage range

| Identifier | Approved display wording |
| --- | --- |
| P-X | FERMENT BLOOM |
| CASK-13 | CASK 13 |
| POT-7 | VELVET SCORCH |
| TMR-200 | TMR-200 |
| X-666 | FINAL BURN |
| B-42 | NIGHT ORCHARD |

CASK-13 may display the printed product code `R-13` on its approved card. The immutable runtime identifier remains `CASK-13`.

## Runtime heat levels

| Identifier | Heat level |
| --- | ---: |
| 01 | 3 |
| 02 | 6 |
| 03 | 7 |
| 04 | 9 |
| 05 | 7 |
| 06 | 9 |
| 07 | 9 |
| 08 | 10 |
| 09 | 6 |
| 10 | 9 |
| P-X | 10 |
| CASK-13 | 10 |
| POT-7 | 10 |
| TMR-200 | 10 |
| X-666 | 10 |
| B-42 | 10 |

The approved Limited / Vintage artwork contains these source scales:

- P-X — 10/15 — Extreme
- CASK-13 — 10/10 — Extreme
- POT-7 — 10/14 — Extreme
- TMR-200 — 10/12 — Extreme
- X-666 — 10/20 — Extreme
- B-42 — 10/13 — Extreme

These source scales are artwork evidence only. The application stores the normalized 1–10 `heatLevel` values above.

## Runtime data

The complete approved descriptions, ingredients, flavour profiles, pairings, prices, stock values, collections and asset paths are stored in:

`backend/data/burnsville-final-catalogue-intake.json`

## Product artwork contract

- `image` is the approved transparent bottle asset.
- `cardImage` is the approved full product card.
- Home and Shop use `cardImage || image`.
- Product Detail uses the bottle as primary artwork and the full product card as secondary artwork.
- Approved product artwork must not be regenerated, recoloured, rewritten, distorted or replaced without explicit approval.
