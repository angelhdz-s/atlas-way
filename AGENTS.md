# AGENTS.md - Atlas Way Development Guide

This file provides guidelines for agentic coding agents working in this repository.

## Build Commands

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking (no emit)
pnpm typecheck

# Format code with Prettier
pnpm format

# Run Biome linter with auto-fix
pnpm safe-fixes
```

## Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run a single test file
pnpm test -- path/to/test.test.ts

# Run tests matching a pattern
pnpm test -- --testPathPattern="user"
```

## Linting & Code Quality

- **Linter**: Biome (configured in `biome.json`)
- **Formatter**: Prettier (configured in `.prettierrc`)
- Run `pnpm safe-fixes` to auto-fix Biome issues
- Run `pnpm format` to format with Prettier

## Code Style Guidelines

### Formatting (Prettier)

- 2-space indentation, no tabs
- Semicolons required
- Single quotes for strings
- Trailing commas in ES5 contexts
- Print width: 100 characters

### TypeScript & Type Safety

- Strict mode enabled in `tsconfig.json`
- Use explicit types over `any`
- Avoid `as` type assertions; use proper type guards
- Enable `noUncheckedIndexedAccess`, `noImplicitOverride`, `exactOptionalPropertyTypes`

### Path Aliases

Use `@/` prefix for imports from `src/`:

```typescript
import { User } from '@/modules/user/domain/user.entity';
import { Failure } from '@/shared/domain/result';
```

### Import Conventions

- **Absolute imports required**: Use `@/` prefix for all imports from `src/`
- **Exception**: Only `prisma/seed.ts` may use relative imports
- All other files MUST use absolute paths
- **Type imports**: Always use `import type` for type-only imports
- **Separate imports**: When importing both types and values from the same file, use separate import statements

```typescript
// Correct - type-only import
import type { Result } from '@/shared/domain/result';

// Correct - value import
import { Success, Failure } from '@/shared/domain/result';

// Correct - separate lines for types and values
import type { UserProps } from '@/modules/user/domain/user.types';
import { User } from '@/modules/user/domain/user.entity';

// Incorrect - mixed type and value import
import { User, type UserProps } from '@/modules/user/domain/user.entity';
```

### Naming Conventions

- **Files**: kebab-case (e.g., `user-entity.ts`, `get-user-by-id.ts`)
- **Classes**: PascalCase (e.g., `GetUserById`, `User`)
- **Interfaces**: PascalCase with `I` prefix optional (e.g., `IUserRepository`)
- **Constants**: SCREAMING_SNAKE_CASE for values, PascalCase for objects
- **Use cases**: verb + noun pattern (e.g., `GetUserById`, `CreateUser`)

### Architecture & Patterns

#### Module Structure

```
src/modules/{module-name}/
├── domain/           # Entities, types, interfaces, errors
├── application/      # Use cases, DTOs
├── infrastructure/   # Repositories, mappers, external services
├── presentation/     # Actions, hooks, UI components
└── mocks/           # Test mocks
```

#### Result Pattern

Use the Result type for error handling:

```typescript
import { Success, Failure } from '@/shared/domain/result';
import type { Result } from '@/shared/domain/result';

function myFunction(): Result<User, DomainError> {
  if (failure) return Failure(new MyError());
  return Success(user);
}
```

#### Repository Pattern

- Define repository interfaces in `domain/` layer
- Implement concrete repositories in `infrastructure/` layer
- Use dependency injection via containers

#### Error Handling

- Domain errors extend `DomainError` from `@/shared/domain/errors/domain.errors`
- Use error codes (e.g., `'TECHNICAL_ERROR'`, `'USER_NOT_FOUND'`)
- Wrap database errors with appropriate domain errors

### Imports Order

1. External libraries (react, next)
2. Path aliases (@/...)
3. Relative imports (../, ./)
4. No empty line between groups

### Testing

- Test files co-located with source: `*.test.ts` next to `*.ts`
- Use `@testing-library/jest-dom` for assertions
- Mock external dependencies (repositories, services)
- Use in-memory repositories for persistence in tests

### Git Commit Conventions

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `test:` Adding/updating tests
- `docs:` Documentation

## Database

- **ORM**: Prisma
- **Database**: PostgreSQL (via Docker Compose)
- Run `pnpx prisma generate` after schema changes
- Run `pnpx prisma migrate dev` for migrations
- Seed data via `prisma/seed.ts`

## Dependencies

Key technologies:

- Next.js 16 with App Router
- React 19
- Prisma 7.4 with PostgreSQL adapter
- NextAuth.js 4.24 for authentication
- Zustand for state management
- Zod for validation
- Tailwind CSS 4 for styling
