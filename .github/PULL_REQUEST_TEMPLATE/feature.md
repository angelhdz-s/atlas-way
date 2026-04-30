## 🌟 New Feature: [Feature Name]

### 📝 Overview

<!-- What is the goal of this feature? Provide a brief summary. -->

- **Ticket:** #
- **Main Goal:**
- **User Impact:** (e.g., "Users can now filter exercises by muscle group")

### 🏗️ Architectural Impact

<!-- How does this fit into your Clean Architecture layers? -->

- [ ] **Domain:** (Entities, Value Objects, Domain Services)
- [ ] **Application:** (Use Cases, Port Definitions)
- [ ] **Infrastructure:** (Prisma Repositories, External APIs, Mappers)
- [ ] **Presentation:** (Next.js Pages, Server/Client Components, Server Actions)

### 🛠️ Technical Implementation Details

- **Logic Placement:** Explain why logic was placed in a specific layer (e.g., "Validation kept in Domain Entity to ensure consistency").
- **State Management:** (e.g., "Using `useOptimistic` for immediate feedback").
- **Data Fetching:** (e.g., "Server-side fetching in Page component, passed down to Client components").

### 📸 Visual Evidence

<!-- Essential for Frontend changes. Screenshots or Screen Recordings are preferred. -->

| Desktop         | Mobile         |
| --------------- | -------------- |
| ![Desktop](url) | ![Mobile](url) |

### 🧪 Verification & Quality

- [ ] **Unit Tests:** Business logic in `Domain` and `Application` layers is 100% tested.
- [ ] **Integration:** Server Actions correctly update the database via the Repository.
- [ ] **Types:** No `any` used. All Prisma models are correctly mapped to Domain Entities.
- [ ] **Performance:** (e.g., "Implemented `Suspense` for heavy data loading").
- [ ] **Accessibility:** Semantic HTML used + ARIA labels where necessary.

### 🚩 Checklist

- [ ] My code follows the project's style guidelines.
- [ ] I have performed a self-review of my own code.
- [ ] I have commented on my code, particularly in hard-to-understand areas.
- [ ] New and existing unit tests pass locally.

---

_Created by [YourName/Team]_
