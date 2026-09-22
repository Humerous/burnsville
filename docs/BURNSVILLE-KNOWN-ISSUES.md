# BURNSVILLE — KNOWN LIMITATIONS

## BLOCKING

None identified in the final repository QA.

## NON-BLOCKING

1. Payment-provider choices are workflow/UI scaffolding only; live gateway processing and merchant credentials are not implemented.
2. The legacy `/api/config/paypal` compatibility endpoint remains present and has no configured live client ID.
3. Admin product routes retain authorised create, edit and delete capability.
4. Full automated rendered desktop/tablet/mobile visual-regression coverage is not included in CI.

## VERIFIED

- current catalogue contains exactly 16 approved Burnsville products
- approved card assets pass integrity QA
- approved bottle assets pass integrity QA
- frontend production build passes on Node 24
- integrated API QA passes
- production-serving QA passes
- `.env.example` is versioned while `.env` remains ignored
