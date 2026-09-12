# BLOCK 11D — FINAL PRODUCT INTEGRATION CHECKLIST

## STATUS

PRODUCT IDENTITIES LOCKED / WAITING FOR COMPLETE PRODUCT FACTS AND ASSET HANDOFF.

Primary identity authority: `BURNSVILLE-MASTER-AUTHORITY.md`.
Supporting evidence: `docs/BURNSVILLE-CATALOGUE-AUTHORITY-RECONCILIATION.md`.

## RULE

Do not infer missing product facts. Do not redesign supplied artwork. Do not mutate shared Preview/Production data during preparation or validation. Do not reopen locked product identities unless the owner explicitly approves a change to the master authority.

## 1. HANDOFF INTAKE

- [x] Final product count confirmed: 16 total, 10 Core and 6 Limited / Vintage.
- [x] Every product has a locked identity/code in `BURNSVILLE-MASTER-AUTHORITY.md`.
- [x] Catalogue intake matches the master authority.
- [x] Automated product-authority QA exists and is wired into CI.
- [ ] Every product has approved visual assets.
- [ ] Asset roles are explicitly classified.
- [ ] Final card geometry is approved for runtime use.
- [x] Required product facts/commercial values are explicitly unresolved where not yet approved.
- [x] Historical catalogue files are not used to fill missing values automatically.

## 2. ARCHITECTURE GATES

- [ ] Confirm whether the current single `image` field is sufficient.
- [ ] If multiple structural images are required, approve schema/API/admin/UI expansion first.
- [ ] Confirm Shop browsing/pagination behaviour.
- [ ] Confirm homepage featured-product strategy.
- [x] Heat uses the current 1–10 technical range and real server-side filtering.
- [ ] Confirm whether MongoDB-ID product URLs remain acceptable or slugs are approved.

## 3. ASSET QA

For every delivered runtime asset:

- [ ] file opens correctly
- [ ] dimensions recorded
- [ ] aspect ratio preserved
- [ ] transparency preserved where applicable
- [ ] no accidental crop/stretch/border/padding
- [ ] no unapproved colour shift
- [ ] artwork/text/logo matches approved source
- [ ] runtime role explicitly approved
- [ ] runtime path resolves successfully

## 4. PRODUCT DATA QA

For every replacement product:

- [ ] identity/code matches `BURNSVILLE-MASTER-AUTHORITY.md`
- [ ] asset mapping matches approved source
- [ ] brand/category correct
- [ ] description approved
- [ ] heat approved and valid
- [ ] flavour profile approved
- [ ] ingredients approved
- [ ] pairings approved
- [ ] price approved
- [ ] stock approved
- [ ] no legacy third-party reviews are carried over
- [ ] product-authority QA passes
- [ ] read-only catalogue validator passes

## 5. CUSTOMER FLOW QA

### HOME / SHOP

- [ ] correct products displayed
- [ ] correct imagery/identity/price
- [ ] featured-product strategy matches approval
- [ ] browse/search/pagination/filter behaviour matches approval
- [ ] no legacy third-party product appears

### PRODUCT

- [ ] correct product loads
- [ ] all approved imagery displays
- [ ] description/heat/flavour/ingredients/pairings display correctly
- [ ] price/stock display correctly
- [ ] quantity respects stock
- [ ] add to cart works
- [ ] review UI works

### CART / CHECKOUT / ORDER

- [ ] product identity persists
- [ ] product image/path remains valid
- [ ] authoritative price remains correct
- [ ] quantity/stock rules hold
- [ ] order creation succeeds

## 6. ADMIN QA

- [ ] admin authentication required
- [ ] product list loads
- [ ] product edit loads
- [ ] all approved editable fields persist
- [ ] image upload works
- [ ] invalid/non-admin uploads remain blocked
- [ ] save/update returns the expected product state

## 7. RESPONSIVE / ACCESSIBILITY QA

At minimum test:

- [ ] 1440px
- [ ] 768px
- [ ] 390px
- [ ] 320px
- [ ] no horizontal overflow
- [ ] artwork not clipped
- [ ] text readable
- [ ] controls reachable/tappable
- [ ] keyboard/focus behaviour works
- [ ] core WCAG 2.2 AA checks pass

## 8. TECHNICAL QA

- [ ] product-authority QA passes
- [ ] frontend production build passes
- [ ] integrated API QA passes
- [ ] heat-filter API QA passes
- [ ] review consistency QA passes
- [ ] controlled functional API QA passes
- [ ] production serving QA passes
- [ ] production dependency gate passes
- [ ] catalogue validator passes
- [ ] no broken image requests
- [ ] no unexpected console/runtime errors
- [ ] `git diff --check` passes

## 9. LEGACY CLEANUP GATE

Only after sections 1–8 pass:

- [ ] no runtime record references old third-party image paths
- [ ] no public page exposes third-party product data
- [ ] rollback evidence is preserved
- [ ] remove/supersede legacy runtime catalogue data
- [ ] remove unreferenced legacy product assets
- [ ] rewrite obsolete README catalogue/seeder references

## FINAL PASS

AUTHORITY → ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

must pass using approved Burnsville identities, data and artwork only.
