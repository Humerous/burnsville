# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT IDENTITY, REVIEW 1 ASSET ARCHITECTURE AND CORRECTED ASSETS RESOLVED / PRODUCT FACTS STILL PENDING.

Audit date: 2026-09-12

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

Some preserved filenames contain labels that no longer match the master identity authority. Those filenames may remain unchanged as historical file references until final asset-role decisions are made; they must not be interpreted as product-name authority.

The preserved card set is 1122 × 1402 portrait. It remains supporting marketing evidence and is excluded from the REVIEW 1 runtime. The approved runtime uses transparent portrait bottle renders contained inside the existing square product-card media without crop or stretch.

Historical bottle renders containing visible conflicting identity text must be corrected before installation. Limited / Vintage display names are code-only through REVIEW 1.

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
