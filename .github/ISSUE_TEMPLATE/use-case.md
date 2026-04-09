name: "Test: Use Case"
description: "Add unit tests for a use case"
title: "[test][unit][use-case] <UseCaseName>"
labels: ["testing", "unit"]
body:

- type: input
  id: usecase
  attributes:
  label: Use Case Name
  placeholder: CreateUserUseCase
  validations:
  required: true

- type: textarea
  id: goal
  attributes:
  label: Goal
  placeholder: Add unit tests for this use case
  validations:
  required: true

- type: checkboxes
  id: acceptance
  attributes:
  label: Acceptance Criteria
  options: - label: Happy path works - label: Error handling covered - label: Uses mocks instead of real dependencies

- type: textarea
  id: testcases
  attributes:
  label: Test Cases
  placeholder: | - Happy path - Error case - Edge cases

- type: textarea
  id: mocks
  attributes:
  label: Mocks Required
  placeholder: UserRepository, Logger, etc.
