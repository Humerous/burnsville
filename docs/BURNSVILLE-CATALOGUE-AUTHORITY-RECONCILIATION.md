# BURNSVILLE CATALOGUE AUTHORITY RECONCILIATION

## STATUS

PRODUCT IDENTITY CONFLICT RESOLVED / PRODUCT FACTS AND FINAL ASSET ROLES STILL PENDING.

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

The preserved card set is 1122 × 1402 portrait. The later approved product-card standard is 1254 × 1254 square. This geometry question remains unresolved and separate from product identity.

## UNRESOLVED PRODUCT DATA

Do not infer or fabricate:

- Limited / Vintage descriptive display names, if any
- additional SKU/identifier conventions
- descriptions
- heat values
- flavour profiles
- ingredients
- pairings
- prices
- stock
- final card/bottle/gallery/supporting asset roles
- final product image/gallery architecture

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
- Final product facts and asset roles: PENDING.

## NEXT IMPLEMENTATION GATE

After unresolved product facts and asset roles are explicitly approved:

ASSET → DATA → VALIDATOR → ISOLATED API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN → MIGRATION REVIEW
