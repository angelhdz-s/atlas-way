## Bug Fix: [Short Description]

### Problem Analysis

- **The Issue:** What was happening? (Link to issue # if available).
- **Root Cause:** Why was this happening? (e.g., "Prisma mapper was missing a field," or "Race condition in Server Action").
- **Impact:** Who or what was affected?

### The Fix

- **Changes:** Describe the logical fix.
- **Layer:** Where was the fix applied? (`Domain` | `Infrastructure` | `Presentation`)
- **Strategy:** (e.g., "Added a missing `await`," or "Updated Zod schema to allow nulls").

### How to Verify

1. **Steps to Reproduce:**
   - [ ] Step 1...
   - [ ] Step 2...
2. **Expected Behavior:** What should happen now?
3. **Evidence:** (Screenshot of fixed UI or console output of successful test run).

### Regression Prevention

- [ ] **Regression Test:** Have you added a test case that specifically fails without this fix?
- [ ] **Static Analysis:** `pnpm tsc` and `pnpm safe-fixes` pass.
- [ ] **Side Effects:** Does this change affect other parts of the system? (e.g., "Shared repository method modified").

### Technical Notes

> [!TIP]
> If the fix involved a **Chain of Responsibility** error handler or a specific mapper adjustment, explain the logic here to help the reviewer.

---
