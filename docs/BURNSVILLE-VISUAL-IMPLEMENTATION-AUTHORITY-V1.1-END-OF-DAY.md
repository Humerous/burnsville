# BURNSVILLE — VISUAL IMPLEMENTATION AUTHORITY V1.0

**Date:** 2026-09-22  
**Status:** END-OF-DAY CONTROL FREEZE — TECHNICAL FOUNDATION COMPLETE / VISUAL IMPLEMENTATION AUTHORITY READY FOR OWNER APPROVAL  
**Purpose:** Freeze the approved Burnsville visual system before the controlled visual implementation pass.


---

## 00 — CURRENT PROJECT STATE / COMPLETION FREEZE

This section records the verified position reached before the controlled visual implementation pass begins.

### COMPLETED / PASS

- CARD + BOTTLE product architecture implemented.
- All 16 approved product cards installed as runtime WebP assets.
- `cardImage` support added while preserving the existing bottle `image` field.
- Home and Shop use `product.cardImage || product.image`.
- Product 07 authority aligned to `CALABRIAN GLOW`.
- Core and Limited / Vintage catalogue identities preserved.
- Static targeted QA passed.
- Frontend build passed.
- Isolated product catalogue replacement QA passed.
- Replacement rerun / idempotency passed.
- Rollback passed.
- Users remained unchanged during isolated replacement / rollback QA.
- Orders remained unchanged during isolated replacement / rollback QA.
- Legacy third-party products remaining after isolated replacement: `0`.
- Isolated runtime catalogue retained for visual testing with 16 products visible.
- Approved product artwork remained protected from destructive crop, rewrite, recolour, regeneration or distortion.

### VERIFIED DATABASE SAFETY POSITION

Normal local database:

`burnsville`

Visual / migration QA database:

`burnsville_isolated`

The isolated QA process was used specifically to prevent unintended mutation of the normal local database.

No Preview or Production database migration has been approved or run as part of this completed block.

### CURRENT VISUAL POSITION

The application is working end-to-end with the approved product-card architecture.

Owner runtime review:

**“Looking good, still needs work, but we are progressing.”**

The project has therefore moved from:

`TECHNICAL PRODUCT-INTEGRATION WORK`

to:

`CONTROLLED VISUAL IMPLEMENTATION + RESPONSIVE QA`

### NOT YET COMPLETE

The following remain open:

- Home reference implementation refinement.
- Shop visual refinement.
- Limited / Vintage visual theming implementation.
- Navigation update.
- Product Detail bottle-primary / card-secondary treatment.
- Remaining page-family visual consistency.
- Desktop visual QA.
- Tablet visual QA.
- Mobile visual QA.
- Final visual acceptance.
- Final diff review.
- Removal of temporary implementation helpers.
- Roadmap completion update.
- Commit.
- Push.
- Preview.
- Preview live QA.
- Production gate.

### CONTROL RULE

Do not reopen the completed CARD + BOTTLE architecture unless a verified defect proves that a technical correction is necessary.

The next stage is visual implementation against this authority, not another product-architecture redesign.

---

## 01 — AUTHORITY AND PRECEDENCE

This document controls the visual implementation stage.

Authority order:

1. Current approved Burnsville product authority, identities, wording, artwork and CARD + BOTTLE rules.
2. This Visual Implementation Authority V1.0.
3. Approved `PASS - UI LAYOUT` visual reference package.
4. Existing implementation where it does not conflict with the authorities above.

The `PASS - UI LAYOUT` package is **visual-system authority**, not a pixel-for-pixel fixed blueprint.

It controls the overall Burnsville blend, hierarchy, rhythm, visual character and page-family consistency.

It does **not** override current approved product identities, wording, artwork or the 16-product CARD + BOTTLE architecture.

Historical or placeholder product content visible in reference images must not replace current approved catalogue content.

---

## 02 — APPROVED REFERENCE PACKAGE

Approved reference package:

`Approved Burnsville visual system./PASS - UI LAYOUT.zip`

Reference material includes:

- `8K REFERNEC.png`
- `ALL SAUCES.png`
- `HEAT LEVEL .png`
- `HEAT RANGE 1.png`
- `HEAT RANGE 2.png`
- `PASS - SIGN IN.png`
- `PASS - SHOPPING CART.png`
- `SHIPPING DETAILS.png`
- `PAYMENT METHOD.png`
- `REVIEW YOUR ORDER..png`
- `YOUR ORDER.png`
- `ADMIN PROFILE PAGE .png`

These references establish a coherent Burnsville design language across browsing, product discovery, authentication, cart, checkout, order and account experiences.

---

## 03 — OVERALL VISUAL AUTHORITY

The approved Burnsville visual character must remain recognisable throughout the site.

Preserve:

- the dark Burnsville atmosphere
- fire / heat character
- cream / light content surfaces where established
- red action emphasis
- strong hierarchy
- bold editorial composition
- handwritten / organic accents where already part of the system
- controlled spacing and rhythm
- product-led colour character
- consistent page-family styling

Do not redesign the site into a different visual language.

Do not flatten Burnsville into a generic ecommerce template.

---

## 04 — BLEND / BACKGROUND RULE

Background and hero imagery must feel integrated into the page.

Avoid:

- obvious rectangular image cut-offs
- hard image boundaries where the approved visual system intends blending
- isolated image blocks that look pasted onto the interface
- abrupt colour transitions that break the Burnsville atmosphere

Use the strongest responsive implementation that preserves the approved look, including where appropriate:

- background layering
- matching surrounding background colour
- gradients / fades
- controlled overlays
- focal-position changes by viewport
- responsive cropping only where non-destructive and visually correct

The intended result is a **continuous visual environment**, not an image sitting inside a visible box.

---

## 05 — SYMMETRY / COMPOSITION RULE

Burnsville uses structured balance rather than rigid mirroring.

Preserve:

- strong central structure
- deliberate alignment
- visual balance across the page
- clear hierarchy

Allow:

- intentional asymmetry in imagery
- organic handwritten elements
- textures
- product-specific visual variation

Rule:

**Structured symmetry + controlled organic asymmetry.**

Do not mechanically mirror every element.

---

## 06 — PROTECTED ELEMENTS

Do not randomly redesign or replace:

- approved Burnsville visual language
- hero direction
- heat selector / heat-range system
- approved product artwork
- catalogue identities
- transparent bottle assets
- CARD + BOTTLE product architecture
- cart logic
- checkout logic
- database architecture

Only alter a protected element when a verified implementation problem requires a minimum controlled change.

---

## 07 — NAVIGATION

Locked navigation direction:

**Burnsville logo = HOME**

Primary navigation:

`SHOP → ABOUT → CONTACT`

Utility navigation:

`CART → ACCOUNT`

Combined reading order:

`SHOP → ABOUT → CONTACT → CART → ACCOUNT`

Rules:

- no redundant HOME text link is required
- keep navigation visually clean
- ABOUT must sit naturally within the main navigation
- navigation must remain usable and legible on desktop, tablet and mobile
- mobile navigation may adapt structurally while preserving the same information architecture

---

## 08 — PRODUCT ARTWORK RULE

The approved 16 full product cards are customer-facing artwork.

They must not be:

- redesigned
- destructively cropped
- recoloured
- regenerated
- rewritten
- re-typeset
- stretched
- distorted
- destructively standardised

The application must accommodate the artwork.

The artwork must not be altered merely to fit an existing component.

---

## 09 — CARD + BOTTLE RULE

Existing approved architecture:

`image`
= transparent bottle / existing bottle asset

`cardImage`
= approved full product card

Locked display direction:

### HOME
Use `cardImage` as the primary product-discovery artwork.

### SHOP / FLAVOUR BROWSING
Use `cardImage` as the primary product-discovery artwork.

### PRODUCT DETAIL
**Bottle primary. Card secondary.**

### OTHER EXISTING PRODUCT SURFACES
Preserve current bottle behaviour unless a separately approved requirement or verified technical dependency requires change.

Do not replace or delete bottle assets.

---

## 10 — CORE RANGE COLOUR SYSTEM

Locked owner decision:

**The supplied product card controls the product colour character.**

The surrounding UI should complement the card rather than impose a competing common colour treatment.

Rules:

- preserve individual card identity
- avoid overpowering the artwork
- use surrounding colour / background treatments to support the card
- maintain Burnsville collection cohesion through layout, typography, spacing, controls and overall atmosphere

The Core range does not require every card container to be forced into one identical colour treatment.

---

## 11 — LIMITED / VINTAGE SYSTEM

Locked owner decision:

**Each Limited / Vintage product may inherit its own individual sauce colour / theme.**

Rules:

- Limited / Vintage must remain visibly differentiated from the Core collection
- individual product identity may drive surrounding theme
- maintain the same Burnsville interface family
- do not create an unrelated visual system for each product
- use product-specific theming as controlled variation inside the approved Burnsville framework

---

## 12 — HOME — REFERENCE IMPLEMENTATION

The Home page is the **reference implementation** for today's controlled visual pass.

Home must establish the production pattern for:

- navigation
- overall spacing
- typography
- section rhythm
- image blending
- background treatment
- product-card presentation
- button treatment
- responsive behaviour
- Burnsville visual atmosphere

Once Home is approved, carry the established pattern through the remaining pages.

Do not redesign every page independently.

Home is the proving ground for the system.

---

## 13 — SHOP / ALL SAUCES

Shop must inherit the approved Home system.

Requirements:

- approved full product cards remain primary browse artwork
- artwork must remain readable
- no crop or stretch
- product identity remains visible
- product controls remain usable
- responsive layout must choose the strongest fit for the available width
- Core and Limited / Vintage products must remain distinguishable
- product-specific colour character may be supported by the surrounding container / background

Do not introduce a second unrelated product-card design.

---

## 14 — PRODUCT DETAIL

Locked owner decision:

**Bottle primary. Full product card secondary.**

Product Detail must:

- preserve the transparent bottle as the primary product image
- present the approved full card as a supporting secondary asset
- keep the relationship intentional rather than duplicative
- preserve existing product identity, wording and purchase functionality
- avoid broad product-page redesign beyond what is necessary to integrate the second approved asset cleanly

The exact responsive arrangement may change by screen size.

---

## 15 — HEAT SYSTEM

The existing Burnsville heat selector / heat-range system is protected.

Use the approved heat references to preserve:

- hierarchy
- heat progression
- visual character
- usability
- responsive readability

Do not redesign the heat system without a verified reason.

---

## 16 — SIGN-IN / ACCOUNT / ADMIN PROFILE

Pages not driven by product artwork must still feel part of the same Burnsville environment.

Use the approved reference language for:

- backgrounds
- panels
- form hierarchy
- typography
- action buttons
- spacing
- page balance
- transitions between dark atmospheric areas and light functional surfaces

Do not convert these pages into generic default forms.

---

## 17 — CART / CHECKOUT / ORDER FLOW

The approved references cover:

- shopping cart
- shipping details
- payment method
- review order
- order confirmation

Carry the same visual system through the full transactional journey.

Protect existing cart and checkout logic.

Visual work must not alter business logic unless a verified defect makes a technical correction necessary.

Maintain:

- clear progression
- readable summaries
- clear primary actions
- consistent form treatment
- consistent hierarchy
- Burnsville visual continuity

---

## 18 — RESPONSIVE AUTHORITY

Locked owner decision:

Preserve the same Burnsville visual character on all screens.

Do **not** literally shrink the desktop page.

Choose the strongest fit for:

- desktop
- tablet
- mobile

Responsive implementation may adapt:

- column count
- stacking
- spacing
- image position
- focal point
- text width
- control layout
- card size
- section height

Preserve:

- artwork readability
- aspect ratio
- visual hierarchy
- product identity
- Burnsville atmosphere
- usability

Do not repeatedly return to the owner for arbitrary pixel choices unless testing reveals a genuine design conflict.

---

## 19 — MOBILE RULE

Mobile requires a dedicated QA pass.

Mobile success means:

- no destructive artwork crop
- no distorted product card
- no unreadable text
- navigation remains usable
- buttons remain accessible
- forms remain practical
- product identity remains obvious
- visual hierarchy remains intact
- background blending remains intentional
- page does not look like a compressed desktop layout

Mobile is a real implementation target, not an afterthought.

---

## 20 — OTHER PAGES

Where a page is not explicitly represented in the approved visual package:

**Extend the approved Burnsville design language. Do not invent a new one.**

Use Home and the approved PASS references as the family authority.

New page-specific composition is allowed only where required by content or function.

---

## 21 — INTERACTION RULES

Keep interaction behaviour clear and controlled.

Preserve:

- obvious clickable states
- readable buttons
- clear primary / secondary action hierarchy
- usable hover / focus / active states
- keyboard visibility where applicable
- consistent form feedback

Do not add decorative motion or interaction merely for polish.

Optional enhancements discovered during implementation must be recorded as:

`POST-LAUNCH — [short description]`

and must not block completion.

---

## 22 — ACCESSIBILITY / USABILITY

Implementation should maintain the approved design while meeting practical usability requirements.

Check:

- text contrast
- focus visibility
- keyboard operation
- button / control readability
- form labelling
- responsive text sizing
- image presentation
- no information conveyed only by colour
- no interaction blocked by decorative layers

Where visual fidelity and usability conflict, use the smallest adjustment that preserves the Burnsville character while removing the usability problem.

---

## 23 — OUT OF SCOPE FOR THIS PASS

Do not expand this visual pass into:

- product architecture redesign
- database redesign
- product artwork redesign
- new catalogue identities
- new customer-facing product wording
- Packs development
- Journal development
- unrelated feature development
- speculative animation systems
- broad component refactoring
- legacy asset deletion without reference verification
- optional cosmetic polishing after the approved result is already achieved

---

## 24 — CONTROLLED IMPLEMENTATION SEQUENCE

Use this order:

1. Home reference implementation
2. Home review
3. Carry approved system into Shop
4. Limited / Vintage theming
5. Navigation update
6. Product Detail bottle-primary / card-secondary treatment
7. Remaining page-family consistency
8. Desktop QA
9. Tablet QA
10. Mobile QA
11. Fix verified defects only
12. Full visual review
13. Final build + static QA
14. Final diff review
15. Remove temporary implementation helpers
16. Roadmap update
17. Commit
18. Push
19. Preview
20. Preview live QA
21. Production gate
22. Production release
23. Production live QA
24. Closeout / archive

---

## 25 — VISUAL QA CHECKLIST

### SYSTEM
- [ ] Burnsville visual identity remains intact
- [ ] PASS visual language is recognisable
- [ ] no unrelated redesign introduced
- [ ] page-family consistency maintained

### BACKGROUNDS / BLENDING
- [ ] hero/background imagery blends naturally
- [ ] no unintended hard image rectangles
- [ ] responsive focal points remain correct
- [ ] transitions between visual zones feel intentional

### PRODUCT CARDS
- [ ] all 16 approved cards display correctly
- [ ] no destructive crop
- [ ] no stretch
- [ ] no distortion
- [ ] correct product-to-card mapping
- [ ] catalogue identity remains visible

### CORE
- [ ] card controls product colour character
- [ ] UI complements rather than competes

### LIMITED / VINTAGE
- [ ] visually differentiated from Core
- [ ] individual sauce themes respected
- [ ] still feels part of one Burnsville system

### PRODUCT DETAIL
- [ ] bottle is primary
- [ ] card is secondary
- [ ] both assets are intentional
- [ ] purchase functionality unaffected

### NAVIGATION
- [ ] logo acts as Home
- [ ] SHOP present
- [ ] ABOUT present
- [ ] CONTACT present
- [ ] CART present
- [ ] ACCOUNT present
- [ ] responsive navigation works

### RESPONSIVE
- [ ] desktop pass
- [ ] tablet pass
- [ ] mobile pass
- [ ] typography readable
- [ ] controls usable
- [ ] no overflow
- [ ] no compressed-desktop appearance

### TRANSACTIONAL PAGES
- [ ] sign-in consistent
- [ ] cart consistent
- [ ] shipping consistent
- [ ] payment consistent
- [ ] review-order consistent
- [ ] order-confirmation consistent
- [ ] profile/account consistent

### TECHNICAL
- [ ] frontend build passes
- [ ] static QA passes
- [ ] CARD + BOTTLE QA passes
- [ ] final diff contains only approved work
- [ ] no unintended database mutation
- [ ] no protected logic regression

---

## 26 — DEFINITION OF DONE

The controlled visual implementation stage is complete when:

1. Home establishes the approved reference implementation.
2. The approved Burnsville visual system is carried consistently through the required pages.
3. All 16 approved product cards are correct and undistorted.
4. Core and Limited / Vintage presentation follow the locked rules.
5. Product Detail uses bottle primary / card secondary.
6. Navigation follows the locked structure.
7. Desktop QA passes.
8. Tablet QA passes.
9. Mobile QA passes.
10. Verified visual defects are corrected.
11. No release-blocking visual or usability defect remains.
12. Frontend build passes.
13. Static / product QA passes.
14. Final diff review shows only approved changes.
15. Owner review confirms the result represents the approved Burnsville customer experience.

A first implementation pass is **not automatically final**.

However, once these criteria are satisfied, additional optional polish must not delay release.

Optional improvements become:

`POST-LAUNCH — [short description]`

---

## 27 — ANTI-PERFECTIONISM COMPLETION RULE

Stop the implementation cycle when the approved Definition of Done is satisfied.

Only continue fixing before release for:

- broken functionality
- dangerous behaviour
- misleading customer information
- accessibility blocker
- confirmed release blocker
- clear failure against this authority

Do not delay release for:

- preference-only changes
- speculative improvements
- unapproved redesign ideas
- microscopic spacing differences with no practical effect
- optional animation
- endless comparison against individual reference pixels

The objective is:

**Approved Burnsville system implemented correctly and consistently — then release.**

---

## 28 — FINAL LOCKED OWNER DECISIONS

### DECISION 01 — CORE RANGE
**LOCKED:** Card artwork controls the colour character. UI complements it.

### DECISION 02 — LIMITED / VINTAGE
**LOCKED:** Each product may inherit its individual sauce theme.

### DECISION 03 — PRODUCT DETAIL
**LOCKED:** Bottle primary. Full product card secondary.

### DECISION 04 — NAVIGATION
**LOCKED:** Logo = Home.  
`SHOP → ABOUT → CONTACT → CART → ACCOUNT`

### DECISION 05 — PASS UI LAYOUT
**LOCKED:** Visual-system authority. Responsive adaptation allowed. Not pixel-for-pixel replication.

### ADDITIONAL VISUAL RULE — BLENDING
**LOCKED:** Background / hero imagery should integrate into the surrounding page rather than terminate as an obvious hard-edged rectangle.

### ADDITIONAL VISUAL RULE — COMPOSITION
**LOCKED:** Preserve structured visual balance while allowing intentional organic asymmetry.

### ADDITIONAL IMPLEMENTATION RULE
**LOCKED:** Home is the reference implementation. Once Home is approved, carry its proven visual system through the remaining pages rather than redesigning page by page.


---

## 29 — NEXT SESSION START

Use this exact order at the next controlled work session:

1. Review this authority for genuine misunderstandings only.
2. Owner approves this document as the single visual implementation authority.
3. Save the approved file into the Burnsville documentation structure.
4. Begin **Home reference implementation** only.
5. Review Home against the approved Burnsville visual system.
6. Once Home passes, carry the proven system into Shop and the remaining page families.
7. Do not perform commit, push, Preview migration or Production work before the relevant QA and approval gates are reached.

**Single next action:** Owner approval of this authority, followed by the controlled Home reference implementation.

---

## 30 — OWNER APPROVAL GATE

Before implementation begins:

- Review this document.
- Correct only genuine misunderstandings.
- Approve it as the single visual implementation authority.
- Place the approved `.md` file in the Burnsville project documentation structure.
- Then begin the controlled Home reference implementation.

**CURRENT STATUS: TECHNICAL FOUNDATION COMPLETE — VISUAL IMPLEMENTATION AUTHORITY READY FOR OWNER APPROVAL**
