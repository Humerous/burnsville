# BURNSVILLE — KNOWN ISSUES

## BLOCKING CLOSEOUT

None identified in the audited source package or verified live production read-only checks.

## ACCEPTED / NON-BLOCKING AT CLOSEOUT

1. Payment-provider choices are workflow/UI scaffolding; live gateway processing and merchant credentials are not implemented.
2. The legacy `/api/config/paypal` endpoint remains present and currently returns an empty response.
3. Admin product routes retain authorised create, edit and delete capability; catalogue integrity therefore depends on admin controls and project authority.
4. A clean Node 24 dependency reinstall/build could not be reproduced inside the audit sandbox because npm package access was unavailable; the production Vercel deployment is `READY` and compiled.
5. Full automated rendered desktop/tablet/mobile visual regression was not reproduced during this audit. Project closeout is proceeding under the current owner closeout instruction and the verified live/source checks recorded in `BURNSVILLE-CLOSEOUT.md`.

## CLOSED

- current MongoDB catalogue is connected in production and returns the approved 16 products
- third-party sample product catalogue removed from the current repository
- third-party sample product artwork removed from the current repository
- approved 16 card runtime assets present and verified
- approved 16 bottle runtime assets present and verified
- card/bottle product data contract implemented
- current catalogue authority QA passes
- production Vercel deployment responds successfully
- production catalogue API responds successfully
- `.env.example` is explicitly allowed by `.gitignore` for clean-clone setup
