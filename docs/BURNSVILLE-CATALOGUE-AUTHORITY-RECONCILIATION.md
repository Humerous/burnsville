# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT IDENTITIES, REVIEW 1 ASSETS, DESCRIPTIONS, INGREDIENTS, PRICES, STOCK AND LIMITED HEAT RESOLVED / CORE HEAT, FLAVOUR AND PAIRINGS PENDING.

Audit date: 2026-09-14

Primary authority: `BURNSVILLE-MASTER-AUTHORITY.md`

## RESOLVED AUTHORITY

The product-identity confusion is closed.

The sole current authority is:

### Core

01 GREEN SPARK  
02 SUN GOLD  
03 CITRUS FLARE  
04 RED EMBER  
05 DARK HARVEST  
06 SALINE CURRENT  
07 CALABRIAN SUN  
08 BIRD’S FIRE  
09 VIOLET’S FUSE  
10 GHOST BLACK

### Limited / Vintage

P-X  
CASK-13  
POT-7  
TMR-200  
X-666  
B-42

For Limited / Vintage, these codes are the authoritative product identities. Historical descriptive labels do not become current product names unless explicitly approved later.

`CALABRIAN GLOW` is not the current Core 07 identity. Core 07 is `CALABRIAN SUN`.

No historical filename, screenshot transcription, catalogue map, commit, or automated reconciliation may override these identities.

## SUPPORTING ASSET EVIDENCE

Historical card and bottle files remain supporting evidence only.

Some preserved source filenames contain labels that no longer match the master identity authority. Those historical files remain unchanged as evidence and must not be interpreted as product-name authority. Corrected runtime files use the locked neutral paths in `backend/data/burnsville-product-asset-map.json`.

The preserved card set is 1122 × 1402 portrait. It remains supporting marketing evidence and is excluded from the REVIEW 1 runtime. The approved runtime uses transparent portrait bottle renders contained inside the existing square product-card media without crop or stretch.

Historical bottle renders containing visible conflicting identity text were corrected before installation. Limited / Vintage display names are code-only through REVIEW 1.

## APPROVED PRODUCT-FACT AUTHORITY

Owner approvals recorded on 2026-09-13 establish:

- all 16 descriptions;
- all 16 ingredient lists, with locked bottle evidence controlling the P-X and TMR-200 conflicts;
- Core price R179.98 and stock 200;
- Limited / Vintage price R224.98 and stock 100.

These approved values are recorded in `backend/data/burnsville-final-catalogue-intake.json`. Runtime catalogue installation and database mutation remain unauthorised.

## LIMITED / VINTAGE SOURCE HEAT EVIDENCE

Owner approval recorded on 2026-09-14. The original artwork establishes these exact source/display scales:

- P-X — **10/15 — Extreme**
- CASK-13 — **10/10 — Extreme**
- POT-7 — **10/14 — Extreme**
- TMR-200 — **10/12 — Extreme**
- X-666 — **10/20 — Extreme**
- B-42 — **10/13 — Extreme**

TMR-200 10/12 supersedes the incorrect historical 10/11 record. B-42 10/13 supersedes the historical 10/10 record.

Historical descriptive labels visible on source artwork remain historical only and do not change the six locked identities.

The current application field remains a 1–10 scale. All six products therefore use runtime `heatLevel: 10` and the Extreme band. The source denominators remain documentation evidence and do not require a new REVIEW 1 runtime field.

## CONTROL RULE

When sources conflict:

1. current explicit owner instruction
2. `BURNSVILLE-MASTER-AUTHORITY.md`
3. current approved reference documentation
4. current repository control documents
5. historical evidence

Historical evidence never promotes itself to authority.

## EXACT UNRESOLVED OWNER APPROVAL TABLE

Approve each proposed value as written or supply a correction. The heat column applies only to the 10 Core products; Limited / Vintage runtime heat is already approved and is therefore omitted.

| Identity | Core heat awaiting approval | Flavour profile awaiting approval | Pairings awaiting approval |
| --- | --- | --- | --- |
| Core 01 — GREEN SPARK | 3/10 | Crisp, green, herbal | Grilled fish; avocado toast; green salads |
| Core 02 — SUN GOLD | 6/10 | Tropical, fruity, warming | Grilled chicken; tacos; rice bowls |
| Core 03 — CITRUS FLARE | 7/10 | Aromatic, citrusy, floral | Seafood; roast chicken; noodle dishes |
| Core 04 — RED EMBER | 9/10 | Smoky, savoury, bold | Grilled meats; eggs; roasted vegetables |
| Core 05 — DARK HARVEST | 7/10 | Earthy, deep, bittersweet | Steak; mushrooms; lentils |
| Core 06 — SALINE CURRENT | 9/10 | Bright, saline, herbaceous | Oysters; grilled fish; roasted potatoes |
| Core 07 — CALABRIAN SUN | 9/10 | Smoky, savoury, tangy | Pizza; pasta; grilled vegetables |
| Core 08 — BIRD’S FIRE | 10/10 | Floral, fruity, smoky and sweet | Fried chicken; pork; stir-fries |
| Core 09 — VIOLET’S FUSE | 6/10 | Dark fruit, earthy, tart | Duck; soft cheese; roasted vegetables |
| Core 10 — GHOST BLACK | 9/10 | Smoky, fermented, nutty | Burgers; braised meats; roasted mushrooms |
| Limited / Vintage — P-X | — | Tart, floral, honeyed | Grilled fish; goat’s cheese; curries |
| Limited / Vintage — CASK-13 | — | Smoky, complex, legendary | Smoked meats; aged cheese; braised beef |
| Limited / Vintage — POT-7 | — | Dark fruit, smoky, bittersweet | Steak; game; dark chocolate |
| Limited / Vintage — TMR-200 | — | Bright, floral, fruity | Tacos; grilled prawns; fruit salsa |
| Limited / Vintage — X-666 | — | Tart, citrusy, intensely fruity | Grilled meats; curries; bean dishes |
| Limited / Vintage — B-42 | — | Dark fruit, floral, spiced | Duck; venison; aged cheese |

## FINAL PRODUCT-FACT GATE

The owner has not yet approved the proposed Core heat values, any final flavour profiles or any final pairings.

After explicit owner approval of the table above, complete the final intake, run the real catalogue validator, prepare the product-only replacement procedure, run isolated database and product-specific functional QA, and verify 1440 / 768 / 390 / 320 layouts. Do not migrate Preview or Production without a later explicit approval.

## SAFE CURRENT STATE

- Product identity authority: RESOLVED.
- General UI/backend/QA: PRESERVE.
- Runtime catalogue replacement: NOT YET AUTHORISED.
- Shared database mutation: NOT AUTHORISED.
- Review 1 image architecture and asset roles: RESOLVED.
- Corrected final bottle assets: VERIFIED AND INSTALLED.
- Descriptions, ingredients, prices and stock: APPROVED.
- Limited / Vintage runtime heat and source-scale evidence: APPROVED.
- Core heat, all flavour profiles and all pairings: PENDING.

## NEXT IMPLEMENTATION GATE

After the exact unresolved product facts above are explicitly approved:

FINAL INTAKE → REAL CATALOGUE VALIDATOR → PRODUCT-ONLY REPLACEMENT PROCEDURE → ISOLATED DATABASE QA → PRODUCT-SPECIFIC FUNCTIONAL QA → 1440 / 768 / 390 / 320 QA → PREVIEW MIGRATION READY
