# BURNSVILLE — CATALOGUE MIGRATION PLAN

## STATUS

PREPARED / NO SHARED DATABASE MUTATION AUTHORISED.

## PURPOSE

Define the safe procedure for replacing the temporary legacy third-party catalogue with the final approved Burnsville catalogue.

## NON-NEGOTIABLE RULES

- Do not use `backend/seeder.js` for catalogue replacement.
- Do not delete users or orders as part of catalogue replacement.
- Do not run `backend/bootstrap.js` against a non-empty product collection.
- Do not fill missing final data from historical product maps.
- Do not mutate Preview/Production data without explicit user approval.
- Do not remove legacy rollback evidence before the new catalogue passes QA.

## REQUIRED INPUTS

Before migration work begins, the complete replacement dataset must be reviewable and contain all required approved values for the target runtime schema.

Any unresolved required value blocks migration.

## PRE-MIGRATION

1. Confirm the target environment.
2. Back up/export the current product collection.
3. Record current product IDs, names and image paths.
4. Validate the replacement catalogue offline.
5. Verify every referenced product asset exists.
6. Confirm no legacy third-party products/brands are present in the replacement dataset.
7. Confirm review/rating handling.
8. Confirm the migration changes product records only.

## ISOLATED TEST

Before any shared environment:

1. Run the replacement procedure against a disposable/local/isolated database.
2. Confirm only intended product records change.
3. Confirm users remain unchanged.
4. Confirm orders remain unchanged.
5. Test product list/detail APIs.
6. Test cart/order creation using replacement products.
7. Test admin product editing and image behaviour.
8. Confirm rerunning the procedure is controlled and does not create accidental duplicates.
9. Prove rollback using the saved product snapshot.

## PREVIEW GATE

Preview migration requires explicit approval.

After Preview migration:

- compare product count with approved handoff
- compare every product identity and asset path with approved source
- verify no legacy third-party catalogue entries are public
- run automated QA
- run browser/E2E QA
- run responsive/accessibility QA
- run cart/checkout/admin regression

## PRODUCTION GATE

Production migration remains blocked until Preview passes and production migration is explicitly authorised.

Use the same reviewed dataset and migration procedure that passed isolated and Preview testing.

## ROLLBACK

Rollback must restore the previous product collection without changing users/orders.

The legacy destructive seeder is not a rollback mechanism.

## REPOSITORY CLEANUP

Legacy third-party product data/assets may be deleted only after:

- the approved Burnsville catalogue is live in the intended environment
- all assets resolve
- customer/admin QA passes
- rollback evidence is preserved

## PASS CONDITION

Migration is complete only when the approved catalogue matches source exactly, unrelated collections are preserved, all product assets work, customer/admin flows pass, and rollback has been demonstrated.
