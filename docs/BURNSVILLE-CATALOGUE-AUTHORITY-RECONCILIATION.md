# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT IDENTITY, REVIEW 1 ASSET ARCHITECTURE AND CORRECTED ASSETS RESOLVED / PRODUCT FACTS STILL PENDING.

Audit date: 2026-09-13

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

For Limited / Vintage, these codes are the authoritative product identities. Historical descriptive labels such as FERMENT BLOOM, VELVET SCORCH, DESERT STATIC, FINAL BURN, NIGHT ORCHARD, or other prior labels do not become current product names unless explicitly approved later.

`CALABRIAN GLOW` is not the current Core 07 identity. Core 07 is `CALABRIAN SUN`.

No historical filename, screenshot transcription, catalogue map, commit, or automated reconciliation may override these identities.

## SUPPORTING ASSET EVIDENCE

Historical card and bottle files remain supporting evidence only.

Some preserved source filenames contain labels that no longer match the master identity authority. Those historical files remain unchanged as evidence and must not be interpreted as product-name authority. Corrected runtime files use the locked neutral paths in `backend/data/burnsville-product-asset-map.json`.

The preserved card set is 1122 × 1402 portrait. It remains supporting marketing evidence and is excluded from the REVIEW 1 runtime. The approved runtime uses transparent portrait bottle renders contained inside the existing square product-card media without crop or stretch.

Historical bottle renders containing visible conflicting identity text were corrected before installation. Limited / Vintage display names are code-only through REVIEW 1.

## UNRESOLVED PRODUCT DATA

Do not infer or fabricate:

- additional SKU/identifier conventions
- descriptions
- heat values
- flavour profiles
- ingredients
- pairings
- prices
- stock

## CONTROL RULE

When sources conflict:

1. current explicit owner instruction
2. `BURNSVILLE-MASTER-AUTHORITY.md`
3. current approved reference documentation
4. current repository control documents
5. historical evidence

Historical evidence never promotes itself to authority.

## PRODUCT-FACT APPROVAL TABLE

This table is an owner-review aid. It does not approve product facts, update the runtime catalogue, or authorise a database migration.

Evidence grades:

- **A — Locked bottle:** text visibly printed on the approved REVIEW 1 bottle asset.
- **B — Approved UI:** product text visibly shown in the approved `PASS - UI LAYOUT/ALL SAUCES.png` reference. This is supporting visual evidence, not automatic catalogue authority.
- **C — Historical catalogue:** value preserved in the historical `backend/data/burnsvilleProducts.js` checkout. This is the lowest-grade evidence and must not override a locked identity, bottle, or explicit owner decision.

`OWNER REQUIRED` means no source supplies a safe final value. `CONFLICT` means sources disagree or a historical value does not fit the current schema. Candidate descriptions use only evidence-backed words and the locked product identity; they remain unapproved copy.

| Identity | Description candidate | Heat evidence | Flavour evidence | Ingredient candidate | Pairings | Price candidate | Stock candidate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Core 01 — GREEN SPARK | Green apple and jalapeño come together with sorrel leaf, cilantro and celery seed in GREEN SPARK. **[C; matches A]** | Mild **[B]**; 3/10 **[C]** | Crisp, green, herbal **[A]** | Green apple; jalapeño; sorrel leaf; cilantro; celery seed **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 02 — SUN GOLD | Mango, habanero and pineapple come together with fresh ginger and coconut sugar in SUN GOLD. **[C; matches A]** | Medium **[B]**; 6/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Mango; habanero; pineapple; fresh ginger; coconut sugar **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 03 — CITRUS FLARE | Yuzu and ají amarillo form an aromatic, citrusy and floral CITRUS FLARE. **[A-derived candidate]** | Hot **[B]**; 7/10 **[C]** | Aromatic, citrusy, floral **[A]** | Yuzu; ají amarillo **[A]**. Lemongrass; sumac; quince appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 04 — RED EMBER | Roasted red pepper and Morita chilli come together with carrot, cumin seed and sherry vinegar in RED EMBER. **[C; first two match A]** | **CONFLICT:** Very Hot **[B]**; 6/10 **[C]** | Smoky, savoury, bold **[A]** | Roasted red pepper; Morita chilli **[A]**. Carrot; cumin seed; sherry vinegar appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 05 — DARK HARVEST | Porcini and ancho come together with kokum, coffee and blackstrap molasses in DARK HARVEST. **[C; matches A]** | Hot **[B]**; 7/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Porcini; ancho; kokum; coffee; blackstrap molasses **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 06 — SALINE CURRENT | Tomatillo and serrano come together with saltbush, dill and nori in SALINE CURRENT. **[C; matches A]** | **CONFLICT:** Very Hot **[B]**; 3/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Tomatillo; serrano; saltbush; dill; nori **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 07 — CALABRIAN SUN | Roasted aubergine and Calabrian chilli come together with fennel seed, oregano and pomegranate molasses in CALABRIAN SUN. **[C structure adapted to locked identity; matches A]** | **CONFLICT:** Very Hot **[B]**; 5/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Roasted aubergine; Calabrian chilli; fennel seed; oregano; pomegranate molasses **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 08 — BIRD’S FIRE | Lychee and bird’s eye chilli come together with garlic, smoked paprika and jaggery in BIRD’S FIRE. **[C; matches A]** | Extreme **[B]**; 8/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Lychee; bird’s eye chilli; garlic; smoked paprika; jaggery **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 09 — VIOLET’S FUSE | Blueberry and rocoto come together with beetroot, shiso and rhubarb in VIOLET’S FUSE. **[C; first two match A; identity punctuation normalised]** | 6/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Blueberry; rocoto **[A]**. Beetroot; shiso; rhubarb appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[C only]** | 200 **[C]** |
| Core 10 — GHOST BLACK | Activated charcoal and ghost pepper come together with fermented black beans, black sesame and malt vinegar in GHOST BLACK. **[C; first two match A]** | 9/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Ghost pepper; charcoal **[A]**. Fermented black beans; black sesame; malt vinegar appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[C only]** | 200 **[C]** |
| Limited / Vintage — P-X | Cape gooseberry and Pepper X come together with green cardamom, fenugreek leaf and fermented honey in P-X. **[A-derived candidate]** | **CONFLICT:** historical 15/10 is outside the current 1–10 schema **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Cape gooseberry; Pepper X; green cardamom; fenugreek leaf; fermented honey **[A]**. Historical data additionally lists Fatalii **[C; CONFLICT / OWNER DECIDE]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — CASK-13 | Smoked rooibos and Carolina Reaper come together with juniper berry, date syrup and verjus in CASK-13. **[A/C; locked identity used]** | 10/10 **[C only]** | Smoky, complex, legendary **[A]** | Smoked rooibos; Carolina Reaper; juniper berry; date syrup; verjus **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]**. Bottle `No. 042 / 100` is edition artwork, not stock authority **[A]** |
| Limited / Vintage — POT-7 | 7 Pot Douglah and sour cherry come together with Urfa biber, cacao nib, vanilla and maple syrup in POT-7. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/14 override **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | 7 Pot Douglah; sour cherry; Urfa biber; cacao nib; vanilla; maple syrup **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — TMR-200 | Prickly pear and 7 Pot Primo come together with strawberry, hibiscus and agave in TMR-200. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/11 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Prickly pear; 7 Pot Primo; strawberry; hibiscus; agave **[A]**. Historical data additionally lists Trinidad Moruga Scorpion **[C; CONFLICT / OWNER DECIDE]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — X-666 | Tamarind, Trinidad Moruga and orange ghost pepper form the product profile of X-666. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/20 override **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Tamarind; Trinidad Moruga; orange ghost pepper **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — B-42 | Purple ghost pepper and black plum come together with 7 Pot Douglah, star anise, osmanthus and birch syrup in B-42. **[A/C; locked identity used]** | 10/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Purple ghost pepper; black plum; 7 Pot Douglah; star anise; osmanthus; birch syrup **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |

### DECISIONS STILL REQUIRED

The table reduces the owner decision to four controlled groups:

1. Approve or correct each candidate description and ingredient list.
2. Supply a final numeric 1–10 heat level for every product, resolving the seven explicit conflicts for Core 04, Core 06, Core 07, P-X, POT-7, TMR-200 and X-666.
3. Supply an approved flavour profile where the bottle has no independent sensory phrase, and approved pairings for all 16 products.
4. Approve or replace the candidate prices and stock counts. Only Core 01–08 prices have approved-UI support; all stock counts and every other price rely on historical evidence alone.

No candidate may be copied into `backend/data/burnsville-final-catalogue-intake.json` until the owner explicitly approves it.

## SAFE CURRENT STATE

- Product identity authority: RESOLVED.
- General UI/backend/QA: PRESERVE.
- Runtime catalogue replacement: NOT YET AUTHORISED.
- Shared database mutation: NOT AUTHORISED.
- Review 1 image architecture and asset roles: RESOLVED.
- Corrected final bottle assets: VERIFIED AND INSTALLED.
- Final product facts: PENDING.

## NEXT IMPLEMENTATION GATE

After unresolved product facts and commercial values are explicitly approved:

ASSET → DATA → VALIDATOR → ISOLATED API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN → MIGRATION REVIEW
