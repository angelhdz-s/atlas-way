---
name: unit-testing
description: Create and maintain focused unit tests for files in a Clean Architecture codebase. Use when adding or modifying unit tests, fixing unit test failures, or reviewing unit test quality. Prioritize single responsibility, relevant behavior coverage, minimal representative cases, and avoiding redundant combinations.
---

# Unit Testing

## 1. Core Principles

Follow these principles whenever creating or modifying unit tests:

- **Single Responsibility Principle (SRP):** Each production file should have a clear responsibility. Tests must focus on that responsibility, not on the behavior of unrelated files or the entire application.
- **Behavior over implementation:** Verify observable behavior and meaningful outcomes, not incidental implementation details.
- **Minimal sufficient coverage:** Cover meaningful behaviors and relevant boundaries without exhaustively testing every possible combination of inputs and outcomes.
- **One reason to fail:** Each test should primarily verify one behavior or one closely related expectation.
- **No speculative testing:** Do not create tests for hypothetical scenarios that are not supported by the file's responsibility, contract, or dependencies.
- **No redundant cases:** If multiple inputs exercise the same behavior through the same logical path, one representative case is generally sufficient.
- **Preserve architectural boundaries:** Test the unit in isolation from unrelated layers and external systems.

## 2. Identify the Unit's Responsibility First

Before writing tests:

1. Read the entire target file.
2. Identify its role in the Clean Architecture structure.
3. Determine its primary responsibility and public contract.
4. Inspect directly relevant dependencies, interfaces, types, and existing tests.
5. Identify the meaningful behaviors implemented by the target file.
6. Determine which behaviors belong to the target and which belong to collaborators.

Do not automatically expand the scope to every dependency or every possible downstream outcome.

The target file defines the initial testing scope. Expand that scope only when necessary to understand its contract or verify its own behavior.

If the file contains multiple unrelated responsibilities, test each relevant behavior separately. Do not use the test suite to justify or preserve an unnecessarily broad responsibility.

## 3. Define the Minimum Sufficient Test Set

For each meaningful behavior, ask:

- What must this file guarantee?
- What is the most representative case that demonstrates this behavior?
- Is there a relevant boundary or failure condition that could change the behavior?
- Does this case verify something not already established by another test?

Create a test only when it adds meaningful confidence.

### Prioritize

1. **Main behavior:** Verify the primary responsibility works as expected.
2. **Meaningful alternatives:** Cover distinct logical paths that produce materially different behavior.
3. **Relevant boundaries:** Test boundary values when they affect the contract or decision logic.
4. **Relevant failures:** Verify error handling when the target file is responsible for it.
5. **Important invariants:** Verify conditions that must always remain true for the unit.

Not every file needs all five categories. Select only those applicable to the target's actual responsibilities.

### Avoid Exhaustive Combinations

Do not automatically combine every possible:

- Input value.
- Dependency response.
- Success or failure result.
- Optional parameter.
- Conditional branch.
- State or configuration.

Use representative cases when they exercise the same meaningful behavior.

Add another test when it verifies a distinct branch, responsibility-relevant boundary, invariant, or error-handling behavior that the existing tests do not cover.

Do not omit a meaningful case merely to minimize the number of tests.

## 4. Apply Clean Architecture Boundaries

Choose the test strategy according to the role of the target file.

### Domain

For entities, value objects, domain services, and domain policies:

- Focus on business rules, invariants, calculations, and domain decisions.
- Test meaningful valid and invalid states.
- Cover relevant boundary conditions in business rules.
- Avoid infrastructure, database, framework, and network dependencies.
- Prefer real domain objects over mocks.

### Application

For use cases, application services, and command or query handlers:

- Verify the orchestration and application-level decisions owned by the unit.
- Verify relevant inputs passed to collaborators.
- Verify meaningful outcomes and error propagation.
- Mock or fake external collaborators when appropriate.
- Do not retest the internal business rules of domain objects or the implementation of repositories.

Test the use case's responsibility, not every possible behavior of every dependency.

### Infrastructure

For repository implementations, external service adapters, and persistence components:

- Focus on the translation between application/domain contracts and external systems.
- Use mocks for isolated unit tests when they provide meaningful verification.
- Do not mistake mocked interactions for proof that a real database, API, or integration works.
- Use integration tests when correctness depends on actual infrastructure behavior.

### Presentation

For controllers, presenters, and similar adapters:

- Verify input/output mapping, relevant validation, and translation of application results.
- Avoid retesting the underlying use case's business rules.
- Keep framework-specific behavior in scope only when the target's responsibility requires it.

## 5. Test Structure and Naming

Follow the repository's existing test conventions and framework configuration.

Unless the project specifies otherwise:

- Group tests by the unit or meaningful behavior.
- Use descriptive test names that state the condition and expected behavior.
- Prefer Arrange, Act, Assert when it improves clarity.
- Keep setup minimal and relevant to each test.
- Use shared fixtures only when they improve clarity without hiding important test inputs.
- Avoid oversized setup blocks and unrelated assertions.
- Prefer explicit test data over complicated test factories for simple cases.

Each test should make it easy to understand:

1. What condition is being tested.
2. What action is performed.
3. What observable result is expected.

Do not introduce a new naming scheme, directory structure, or test framework when the repository already establishes one.

## 6. Mocks, Stubs, and Assertions

- Mock collaborators at architectural boundaries, not every object by default.
- Prefer real implementations for simple, deterministic domain logic.
- Use stubs or fakes when the test only needs controlled responses.
- Verify interactions only when they are part of the unit's responsibility.
- Avoid asserting internal method calls that do not affect observable behavior.
- Assert meaningful results rather than implementation details.
- Avoid excessive assertions that make one test responsible for several unrelated behaviors.
- Do not add mocks or assertions merely to increase test count or apparent coverage.

If a dependency has many possible outcomes, test only those outcomes that materially affect the target unit's behavior or contract.

## 7. Avoid Over-Testing

Do not:

- Create one test for every possible input value when the behavior is equivalent.
- Repeat the same scenario with different arbitrary data without a reason.
- Test private methods independently when their behavior can be verified through the public contract.
- Reproduce the entire dependency test suite inside the target's tests.
- Test framework or library behavior that the target does not own.
- Add tests for unreachable branches without investigating whether the production code should change.
- Refactor production code solely to make a trivial implementation detail testable.
- Add tests that assert the current implementation without verifying a meaningful requirement.

Parameterize tests only when multiple examples genuinely verify the same rule and parameterization improves clarity. Do not use parameterization as an excuse to enumerate every possible combination.

## 8. Test Failures and Regressions

When fixing a bug:

1. Identify the behavior the target file is expected to guarantee.
2. Add a focused regression test that reproduces the relevant failure.
3. Verify that the test fails for the expected reason before the fix, when practical.
4. Implement or validate the fix.
5. Run the relevant tests and check for regressions.

A regression test should capture the underlying behavior, not merely reproduce a particular implementation detail.

## 9. Workflow

For each testing task:

1. Inspect the target file and relevant existing tests.
2. Identify the target's responsibility and architectural layer.
3. List the distinct meaningful behaviors to verify.
4. Select the smallest test set that provides sufficient confidence.
5. Implement tests using the repository's conventions.
6. Run the targeted test file or test cases.
7. Run additional relevant tests when the change warrants it.
8. Report the tests executed and any unresolved failures.

Do not modify production behavior simply to satisfy an incorrect test. Investigate whether the expectation, implementation, or test setup is wrong.

## 10. Completion Criteria

A unit-testing task is complete when:

- The target's meaningful responsibilities are covered.
- Distinct relevant branches and failure conditions are tested where applicable.
- Tests remain focused and understandable.
- Redundant or speculative cases have been avoided.
- Clean Architecture boundaries are respected.
- Relevant tests have been executed, and their results are reported accurately.

The goal is not the highest possible number of tests or exhaustive combinatorial coverage.

**The goal is the smallest clear, maintainable test suite that provides sufficient confidence in the responsibility of the target unit.**
