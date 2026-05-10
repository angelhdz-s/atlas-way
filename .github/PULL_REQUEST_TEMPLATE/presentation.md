## Presentation & UI

### 1. The "What" and "Why"

**Components Impacted:** (e.g., UserProfile, DashboardSidebar, CommonButton)
**Related Issue:** #

**Description:**

>

### 2. Visual Proof (Before vs. After)

| Before  | After   |
| :------ | :------ |
| [Image] | [Image] |

### 3. Presentation Checklist

- [ ] **Humble View:** Components only handle display logic and user interaction (no business logic leaked here).
- [ ] **Responsiveness:** Tested on Mobile, Tablet, and Desktop breakpoints.
- [ ] **Accessibility (A11y):** Checked for ARIA labels, semantic HTML, and keyboard navigation.
- [ ] **State Management:** Verified that local state (useState/useReducer) or global store updates correctly.
- [ ] **Next.js Patterns:** Correct usage of Client vs. Server components.

### 4. Verification Checklist

These commands **must** pass locally.

- [ ] **Type Safety:** `pnpm typecheck` passes.
- [ ] **Code Health:** `pnpm safe-fixes` has been run.
- [ ] **Visual/UI Tests:** `pnpm test` (specifically component or Snapshot tests) pass.

### 5. Technical Nuances (The "Why")

- **Style Decisions:** (e.g., "Used a CSS Grid instead of Flexbox here to maintain alignment for dynamic content heights.")
- **Client/Server Balance:** (e.g., "Marked this as 'use client' because it requires the `useGeolocation` hook.")
- **UX Trade-offs:** (e.g., "Used a skeleton loader instead of a spinner to reduce perceived latency.")

### 6. Automated Check Confirmation

| Command           | Status  |
| :---------------- | :------ |
| `pnpm typecheck`  | ✅ / ❌ |
| `pnpm safe-fixes` | ✅ / ❌ |
| `pnpm test`       | ✅ / ❌ |

---

_Note: If this PR touches Business Logic or External APIs, please use the **Domain** or **Infrastructure** templates._
