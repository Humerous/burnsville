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
| Core 08 — BIRD’S FIRE | Lychee and bird’s eye chilli come together with garlic, smoked paprika and jaggery in BIRD’S FIRE. **[C; matches A]** | **CONFLICT:** Extreme **[B]** maps to 10/10 in the implemented heat bands; historical value is 8/10 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Lychee; bird’s eye chilli; garlic; smoked paprika; jaggery **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[B/C]** | 200 **[C]** |
| Core 09 — VIOLET’S FUSE | Blueberry and rocoto come together with beetroot, shiso and rhubarb in VIOLET’S FUSE. **[C; first two match A; identity punctuation normalised]** | 6/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Blueberry; rocoto **[A]**. Beetroot; shiso; rhubarb appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[C only]** | 200 **[C]** |
| Core 10 — GHOST BLACK | Activated charcoal and ghost pepper come together with fermented black beans, black sesame and malt vinegar in GHOST BLACK. **[C; first two match A]** | 9/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Ghost pepper; charcoal **[A]**. Fermented black beans; black sesame; malt vinegar appear only in historical data **[C; OWNER CONFIRM]** | **OWNER REQUIRED**; historical list is empty **[C]** | R179.98 **[C only]** | 200 **[C]** |
| Limited / Vintage — P-X | Cape gooseberry and Pepper X come together with green cardamom, fenugreek leaf and fermented honey in P-X. **[A-derived candidate]** | **CONFLICT:** historical 15/10 is outside the current 1–10 schema **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Cape gooseberry; Pepper X; green cardamom; fenugreek leaf; fermented honey **[A]**. Historical data additionally lists Fatalii **[C; CONFLICT / OWNER DECIDE]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — CASK-13 | Smoked rooibos and Carolina Reaper come together with juniper berry, date syrup and verjus in CASK-13. **[A/C; locked identity used]** | 10/10 **[C only]** | Smoky, complex, legendary **[A]** | Smoked rooibos; Carolina Reaper; juniper berry; date syrup; verjus **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]**. Bottle `No. 042 / 100` is edition artwork, not stock authority **[A]** |
| Limited / Vintage — POT-7 | 7 Pot Douglah and sour cherry come together with Urfa biber, cacao nib, vanilla and maple syrup in POT-7. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/14 override **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | 7 Pot Douglah; sour cherry; Urfa biber; cacao nib; vanilla; maple syrup **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — TMR-200 | Prickly pear and 7 Pot Primo come together with strawberry, hibiscus and agave in TMR-200. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/11 **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Prickly pear; 7 Pot Primo; strawberry; hibiscus; agave **[A]**. Historical data additionally lists Trinidad Moruga Scorpion **[C; CONFLICT / OWNER DECIDE]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — X-666 | Tamarind, Trinidad Moruga and orange ghost pepper form the product profile of X-666. **[A/C; locked identity used]** | **CONFLICT:** historical heat is 10 but display text says 10/20 override **[C]** | **OWNER REQUIRED**; no independent flavour phrase found | Tamarind; Trinidad Moruga; orange ghost pepper **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |
| Limited / Vintage — B-42 | Purple ghost pepper and black plum come together with 7 Pot Douglah, star anise, osmanthus and birch syrup in B-42. **[A/C; locked identity used]** | 10/10 **[C only]** | **OWNER REQUIRED**; no independent flavour phrase found | Purple ghost pepper; black plum; 7 Pot Douglah; star anise; osmanthus; birch syrup **[A/C]** | **OWNER REQUIRED**; historical list is empty **[C]** | R224.98 **[C only]** | 100 **[C]** |

### OWNER APPROVAL RECORDED — 2026-09-13

The owner approved the table candidates and authorised drafting the missing heat, flavour and pairing values for review.

This records approval of:

- the 16 candidate descriptions, using the locked identities exactly as written;
- the ingredient candidates, with locked-bottle evidence controlling the P-X and TMR-200 conflicts, so historical-only Fatalii and Trinidad Moruga Scorpion additions are excluded;
- Core prices of R179.98 and Core stock counts of 200;
- Limited / Vintage prices of R224.98 and Limited / Vintage stock counts of 100.

This approval does not yet approve the editorial drafts below or authorise catalogue installation or database mutation.

## HEAT, FLAVOUR AND PAIRING DRAFTS FOR FINAL OWNER REVIEW

Heat drafts use the implemented bands: Mild 1–3, Medium 4–6, Hot 7–8, Very Hot 9 and Extreme 10. Where the approved UI supplies a band, that higher-grade evidence controls the draft. The exact value within a multi-point band retains the matching historical value. Limited / Vintage values are draft recommendations constrained to the validated 1–10 schema.

Flavour and pairing values marked **EDITORIAL DRAFT** are proposed copy derived from the approved label ingredients. They are not presented as source facts.

| Identity | Heat draft | Flavour profile draft | Pairing draft |
| --- | --- | --- | --- |
| Core 01 — GREEN SPARK | **3/10 — FINAL APPROVAL REQUIRED**; Mild **[B]**, 3/10 **[C]** | Crisp, green, herbal **[A]** | Grilled fish; avocado toast; green salads **[EDITORIAL DRAFT]** |
| Core 02 — SUN GOLD | **6/10 — FINAL APPROVAL REQUIRED**; Medium **[B]**, 6/10 **[C]** | Tropical, fruity, warming **[EDITORIAL DRAFT]** | Grilled chicken; tacos; rice bowls **[EDITORIAL DRAFT]** |
| Core 03 — CITRUS FLARE | **7/10 — FINAL APPROVAL REQUIRED**; Hot **[B]**, 7/10 **[C]** | Aromatic, citrusy, floral **[A]** | Seafood; roast chicken; noodle dishes **[EDITORIAL DRAFT]** |
| Core 04 — RED EMBER | **9/10 — FINAL APPROVAL REQUIRED**; Very Hot **[B]** controls historical 6/10 conflict | Smoky, savoury, bold **[A]** | Grilled meats; eggs; roasted vegetables **[EDITORIAL DRAFT]** |
| Core 05 — DARK HARVEST | **7/10 — FINAL APPROVAL REQUIRED**; Hot **[B]**, 7/10 **[C]** | Earthy, deep, bittersweet **[EDITORIAL DRAFT]** | Steak; mushrooms; lentils **[EDITORIAL DRAFT]** |
| Core 06 — SALINE CURRENT | **9/10 — FINAL APPROVAL REQUIRED**; Very Hot **[B]** controls historical 3/10 conflict | Bright, saline, herbaceous **[EDITORIAL DRAFT]** | Oysters; grilled fish; roasted potatoes **[EDITORIAL DRAFT]** |
| Core 07 — CALABRIAN SUN | **9/10 — FINAL APPROVAL REQUIRED**; Very Hot **[B]** controls historical 5/10 conflict | Smoky, savoury, tangy **[EDITORIAL DRAFT]** | Pizza; pasta; grilled vegetables **[EDITORIAL DRAFT]** |
| Core 08 — BIRD’S FIRE | **10/10 — FINAL APPROVAL REQUIRED**; Extreme **[B]** controls historical 8/10 conflict | Floral, fruity, smoky and sweet **[EDITORIAL DRAFT]** | Fried chicken; pork; stir-fries **[EDITORIAL DRAFT]** |
| Core 09 — VIOLET’S FUSE | **6/10 — FINAL APPROVAL REQUIRED [C]** | Dark fruit, earthy, tart **[EDITORIAL DRAFT]** | Duck; soft cheese; roasted vegetables **[EDITORIAL DRAFT]** |
| Core 10 — GHOST BLACK | **9/10 — FINAL APPROVAL REQUIRED [C]** | Smoky, fermented, nutty **[EDITORIAL DRAFT]** | Burgers; braised meats; roasted mushrooms **[EDITORIAL DRAFT]** |
| Limited / Vintage — P-X | **10/10 — FINAL APPROVAL REQUIRED**; draft normalises invalid historical 15/10 to the schema maximum | Tart, floral, honeyed **[EDITORIAL DRAFT]** | Grilled fish; goat’s cheese; curries **[EDITORIAL DRAFT]** |
| Limited / Vintage — CASK-13 | **10/10 — FINAL APPROVAL REQUIRED [C]** | Smoky, complex, legendary **[A]** | Smoked meats; aged cheese; braised beef **[EDITORIAL DRAFT]** |
| Limited / Vintage — POT-7 | **10/10 — FINAL APPROVAL REQUIRED**; historical stored value retained and invalid 10/14 display discarded | Dark fruit, smoky, bittersweet **[EDITORIAL DRAFT]** | Steak; game; dark chocolate **[EDITORIAL DRAFT]** |
| Limited / Vintage — TMR-200 | **10/10 — FINAL APPROVAL REQUIRED**; historical stored value retained and invalid 10/11 display discarded | Bright, floral, fruity **[EDITORIAL DRAFT]** | Tacos; grilled prawns; fruit salsa **[EDITORIAL DRAFT]** |
| Limited / Vintage — X-666 | **10/10 — FINAL APPROVAL REQUIRED**; historical stored value retained and invalid 10/20 display discarded | Tart, citrusy, intensely fruity **[EDITORIAL DRAFT]** | Grilled meats; curries; bean dishes **[EDITORIAL DRAFT]** |
| Limited / Vintage — B-42 | **10/10 — FINAL APPROVAL REQUIRED [C]** | Dark fruit, floral, spiced **[EDITORIAL DRAFT]** | Duck; venison; aged cheese **[EDITORIAL DRAFT]** |

### FINAL PRODUCT-FACT GATE

The remaining owner decision is to approve or correct the 16 heat, flavour and pairing rows above. After that approval, all seven required product facts can be copied into `backend/data/burnsville-final-catalogue-intake.json`, followed by the catalogue validator and isolated product-only integration QA.

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
