---
name: pull-request-description
description: Generate a ready-to-paste pull request description in Markdown from committed changes on the current branch, using the matching documentation or Clean Architecture template in .github/PULL_REQUEST_TEMPLATE. Use for PR descriptions or branch summaries; never create or submit a pull request.
---

# Pull Request Description

Generate a concise Conventional Commit-style pull request title and a Markdown pull request body from changes committed on the current branch. Select and follow the project template that matches the primary Clean Architecture layer affected.

## Scope and Safety

- Include only changes present in commits on the current branch relative to the intended PR base branch.
- Never include unstaged changes, staged-but-uncommitted changes, or untracked files, even if they appear in `git status`.
- Do not create, edit, or submit a pull request, call a GitHub MCP, or create a description file. Return the Markdown body in the conversation for the user to copy.
- Do not commit, amend, stash, reset, or otherwise change the user's worktree.
- Do not invent issue numbers, screenshots, test results, implementation details, or user-facing behavior.

## Procedure

1. **Identify the branch and base.**
   - Inspect the current branch, configured upstream, and available default branches.
   - Use the intended target branch as the base. Prefer the configured upstream when it identifies the intended PR target; otherwise use the repository's default branch when it is clear.
   - If the intended base is unclear, ask the user which branch the PR targets. Do not silently use `main` if that would include unrelated work from a branch the current branch was created from.
   - Calculate the merge base and inspect the committed PR scope, for example:
     ```sh
     git merge-base <base-branch> HEAD
     git diff --name-status <base-branch>...HEAD
     git diff --find-renames <base-branch>...HEAD
     git log --oneline <base-branch>..HEAD
     ```
     Replace `<base-branch>` with the verified target branch. The three-dot diff compares the committed branch changes since the merge base; do not use a plain worktree diff as the PR scope.
   - Check `git status` only to know whether local changes exist and explicitly exclude them. If there are no committed changes relative to the base, say so instead of describing local changes.

2. **Understand the committed changes.**
   - Review the changed paths and relevant committed diffs; use commit messages as supporting context, not as the only evidence.
   - Identify the purpose, affected components/services, architectural layers, and any linked issue that is explicitly present in the committed work.
   - Distinguish documentation that is the primary purpose of the branch from documentation that supports an implementation change.
   - Use the Documentation template when the committed changes are documentation-only, including project guides, `DESIGN.md`, skills, agents, sub-agents, and other agent customization.
   - When documentation accompanies a product or architectural implementation, treat it as supporting context and choose the template based on the primary implementation change.

3. **Choose exactly one template.**
   Read the current template from the repository and use the one that best matches the primary committed change:
   - `.github/PULL_REQUEST_TEMPLATE/documentation.md` for documentation-only changes, including project documentation, design guidance, skills, agents, sub-agents, and other agent customization.
   - `.github/PULL_REQUEST_TEMPLATE/presentation.md` for UI, presentation components, pages, styling, and user interaction.
   - `.github/PULL_REQUEST_TEMPLATE/domain_logic.md` for domain entities/services and application use cases or business rules.
   - `.github/PULL_REQUEST_TEMPLATE/infrastructure.md` for persistence, repositories/adapters, database schema/migrations, and external services or APIs.

   Classify by actual purpose and responsibilities, not merely filenames. Documentation is not automatically a documentation PR when it supports implementation changes. If substantial implementation changes cross layers and no primary purpose is clear, ask which implementation template should lead instead of combining templates or choosing arbitrarily.

4. **Fill the template without changing its contract.**
   - Preserve the selected template's headings, comments, checklist items, ordering, and closing note. Do not substitute a generic PR format.
   - Replace examples and placeholders with concise, evidence-based details from the committed diff.
   - Describe what changed and why; avoid claiming completed behavior that the diff does not support.
   - Include a related issue only when it is explicitly linked by the committed work or user. If none is known, use `N/A`.
   - Do not invent visual proof. Use supplied, committed screenshots if available; otherwise state that screenshots were not provided in the visual-proof section.
   - Keep checklist boxes unchecked unless the associated verification or responsibility is supported by evidence. Do not claim tests, responsive checks, accessibility checks, or other validation passed unless results are available.
   - Report only validation results actually observed. Do not run `pnpm safe-fixes` just to fill the PR template; it can modify files. If validation was not run or its result is unknown, leave its checkbox unchecked and state that honestly.
   - For a mixed change, explain the cross-layer impact in the description or technical nuances while retaining the single selected template.

5. **Return the result.**
   - First provide a concise title using the project's commit format: `<type>(<scope>): <short description>` or `<type>: <short description>` when no scope fits.
   - Always use an appropriate commit type, such as `docs`, `feat`, `fix`, `refactor`, `test`, or `chore`, based on the primary purpose of the committed changes.
   - Add a short, relevant scope when the changes form a cohesive feature or area. Omit the scope when the branch spans unrelated or broad changes and no single scope describes it accurately.
   - Keep the title description simple and easy to scan. Prefer a short summary; do not pack multiple changes into a long or complex title.
   - Then output the completed, ready-to-paste Markdown PR body, optionally in a fenced Markdown block.
   - Do not call GitHub tools or offer to submit the PR.
