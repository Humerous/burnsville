# BLOCK 11D — FINAL PRODUCT INTEGRATION CHECKLIST

## STATUS

PREVIEW MIGRATION READY FOR OWNER APPROVAL / SHARED DATA UNCHANGED.

Primary identity authority: `BURNSVILLE-MASTER-AUTHORITY.md`.
Supporting evidence: `docs/BURNSVILLE-CATALOGUE-AUTHORITY-RECONCILIATION.md`.

## RULE

Do not infer missing product facts. Do not redesign supplied artwork. Do not mutate shared Preview/Production data during preparation or validation. Do not reopen locked product identities unless the owner explicitly approves a change to the master authority.

## 1. HANDOFF INTAKE

- [x] Final product count confirmed: 16 total, 10 Core and 6 Limited / Vintage.
- [x] Every product has a locked identity/code in `BURNSVILLE-MASTER-AUTHORITY.md`.
- [x] Catalogue intake matches the master authority.
- [x] Automated product-authority QA exists and is wired into CI.
- [x] Read-only catalogue readiness validator exists and does not access a database.
- [x] Every product has an approved primary runtime visual asset.
- [x] Asset roles are explicitly classified for REVIEW 1.
- [x] Runtime card geometry is approved: portrait bottle contained inside the existing square media area.
- [x] Approved descriptions, ingredients, prices, stock and Limited / Vintage runtime heat are recorded.
- [x] Core heat, all flavour profiles and all pairings are explicitly approved.
- [x] Historical catalogue files are not used to fill missing values automatically.

## 2. ARCHITECTURE GATES

- [x] Current single `image` field is approved through REVIEW 1.
- [x] No schema/API/admin/UI image-field expansion is required for REVIEW 1.
- [x] REVIEW 1 preserves Shop page size 10.
- [x] REVIEW 1 preserves the current first-four Home showcase.
- [x] Heat uses the current 1–10 technical range and real server-side filtering.
- [x] REVIEW 1 preserves MongoDB-ID product URLs.

## 3. ASSET QA

For every delivered runtime asset:

- [x] file opens correctly
- [x] dimensions recorded
- [x] aspect ratio preserved
- [x] transparency preserved
- [x] no accidental crop/stretch/border/padding
- [x] no unapproved colour shift outside the authorised identity-text corrections
- [x] artwork/text/logo matches the approved Review 1 identity authority
- [x] runtime role explicitly approved
- [x] runtime path resolves successfully

## 4. PRODUCT DATA QA

For every replacement product:

- [x] identity/code matches `BURNSVILLE-MASTER-AUTHORITY.md`
- [x] asset mapping matches approved Review 1 source
- [x] brand/category correct
- [x] description approved
- [x] heat approved and valid
- [x] flavour profile approved
- [x] ingredients approved
- [x] pairings approved
- [x] price approved
- [x] stock approved
- [x] no legacy third-party reviews are carried over
- [x] product-authority QA passes
- [x] product-asset QA passes
- [x] read-only catalogue validator passes

## 5. CUSTOMER FLOW QA

### HOME / SHOP

- [x] correct products displayed
- [x] correct imagery/identity/price
- [x] featured-product strategy matches approval
- [x] browse/search/pagination/filter behaviour matches approval
- [x] no legacy third-party product appears

### PRODUCT

- [x] correct product loads
- [x] all approved imagery displays
- [x] description/heat/flavour/ingredients/pairings display correctly
- [x] price/stock display correctly
- [x] quantity respects stock
- [x] add to cart works
- [x] review UI works

### CART / CHECKOUT / ORDER

- [x] product identity persists
- [x] product image/path remains valid
- [x] authoritative price remains correct
- [x] quantity/stock rules hold
- [x] order creation succeeds

## 6. ADMIN QA

- [x] admin authentication required
- [x] product list loads
- [x] product edit loads
- [x] all approved editable fields persist
- [x] image upload works
- [x] invalid/non-admin uploads remain blocked
- [x] save/update returns the expected product state

## 7. RESPONSIVE / ACCESSIBILITY QA

At minimum test:

- [x] 1440px
- [x] 768px
- [x] 390px
- [x] 320px
- [x] no horizontal overflow
- [x] artwork not clipped
- [x] text readable
- [x] controls reachable/tappable
- [x] keyboard/focus behaviour works
- [x] core WCAG 2.2 AA checks pass

## 8. TECHNICAL QA

- [x] product-authority QA passes
- [x] frontend production build passes
- [x] integrated API QA passes
- [x] heat-filter API QA passes
- [x] review consistency QA passes
- [x] controlled functional API QA passes
- [x] production serving QA passes
- [x] production dependency gate passes
- [x] catalogue validator passes
- [x] product-asset integrity validator passes
- [x] no broken image requests
- [x] no unexpected console/runtime errors
- [x] `git diff --check` passes

## 9. LEGACY CLEANUP GATE

Only after sections 1–8 pass:

- [x] no runtime record references old third-party image paths in the tested replacement state
- [x] no public page exposes third-party product data in the tested replacement state
- [x] rollback evidence is preserved
- [ ] remove/supersede legacy runtime catalogue data
- [ ] remove unreferenced legacy product assets
- [ ] rewrite obsolete README catalogue/seeder references

## FINAL PASS

AUTHORITY → ASSET → DATA → VALIDATOR → API → HOME/SHOP → PRODUCT → CART → CHECKOUT/ORDER → ADMIN

must pass using approved Burnsville identities, data and artwork only.
