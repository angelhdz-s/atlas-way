## 🧹 Refactor: [Short Description]

### 🎯 Intent

<!-- Why is this refactor necessary? -->

- **Goal:** (e.g., "Decouple Prisma from the Service layer" or "Simplify Repository logic")
- **Refactor Type:** `Structural` | `Readability` | `Performance` | `De-duplication`

### 🏗️ Architectural Changes

- **Before:** Describe the previous approach (e.g., "Logic lived directly in the Server Action").
- **After:** Describe the new approach (e.g., "Extracted logic into a dedicated `UseCase` and injected the `Repository`").
- **Pattern Used:** (e.g., "Chain of Responsibility", "Dependency Injection", "Mapper Pattern")

### 🛠️ Scope of Work

- [ ] **Code Cleanup:** Removed dead code/comments/logs.
- [ ] **Abstraction:** Improved interfaces or types for better reusability.
- [ ] **File Movement:** Files reorganized for better **Vertical Slice** alignment.

### 🧪 Stability & Safety

- [ ] **Behavioral Parity:** I have confirmed that the application behavior remains unchanged.
- [ ] **Existing Tests:** All existing unit and integration tests pass.
- [ ] **New Tests:** Added tests for the newly extracted logic/abstractions.
- [ ] **Static Analysis:** `pnpm tsc` and `pnpm safe-fixes` pass without warnings.

### 🔗 Technical Context

> [!NOTE]
> Mention if this refactor is a prerequisite for an upcoming feature or if it resolves technical debt identified in a previous PR.

---
