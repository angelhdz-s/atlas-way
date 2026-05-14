## Infrastructure & Adapters

### 1. The "What" and "Why"

<!-- What external system or persistence logic are you changing? -->

**Service/Tool Impacted:** (e.g., Prisma, Stripe API, Redis, AWS S3)
**Related Issue:** #

**Description:**

>

### 2. Infrastructure Checklist

- [ ] **Data Mapping:** I have ensured proper mapping between Database Models and Domain Entities.
- [ ] **Error Handling:** External failures (network timeouts, DB errors) are caught and mapped to Domain exceptions.
- [ ] **Environment Variables:** Any new `ENV` variables are added to the `.env.example` file.
- [ ] **Side Effects:** I have verified that this change doesn't trigger unintended cascading deletes or API webhooks.

### 3. Verification Checklist

These commands **must** pass locally.

- [ ] **Type Safety:** `pnpm typecheck` passes.
- [ ] **Code Health:** `pnpm safe-fixes` has been run.
- [ ] **Integration Tests:** `pnpm test` (specifically integration/repository tests) pass with a local DB/Docker.

### 4. Technical Nuances (The "Why")

<!-- Why was this specific infrastructure approach chosen? -->

- **Persistence Strategy:** (e.g., "Used a transaction here to ensure atomicity between User and Profile creation.")
- **Performance:** (e.g., "Added a database index on `email` to optimize lookup speed.")
- **Trade-offs:** (e.g., "Choosing Polling over Webhooks for now to reduce infrastructure complexity.")

### 5. Schema / External Changes

- [ ] **Migrations:** Does this PR include a database migration? (If yes, describe the impact).
- [ ] **API Contracts:** Does this change the signature of an external-facing API?

---

_Note: If this PR only touches Business Logic or UI, please use the **Domain** or **Presentation** templates._
