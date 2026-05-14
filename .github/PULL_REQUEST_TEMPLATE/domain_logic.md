## Domain & Application Logic

### 1. The "What" and "Why"

**Intent:** [Feature | Bug Fix | Refactor]
**Related Issue:** #

**Description:**

>

### 2. Clean Architecture Alignment

- [ ] **Domain Layer:** Changes to Entities, Value Objects, or Domain Services (Pure logic).
- [ ] **Application Layer:** Changes to Use Cases (Interactors) or Input/Output ports.
- [ ] **Dependency Rule:** I confirm that no Infrastructure or UI-specific code has leaked into this PR.

### 3. Verification Checklist

These commands **must** pass locally before marking the PR as "Ready for Review."

- [ ] **Type Safety:** `pnpm typecheck` passes without errors.
- [ ] **Code Health:** `pnpm safe-fixes` has been run and resolved linting/formatting.
- [ ] **Logic Integrity:** `pnpm test` passes (specifically for the affected Use Case/Entity).

### 4. Technical Nuances

---

_Note: If this PR touches UI or Database schemas, please use the **Infrastructure** or **Presentation** templates instead._
