# Atlas Way Design System

This document records the visual foundations and semantic color tokens for Atlas Way. `theme.css` is the source of truth for mapped color values and Tailwind color names.

**Figma source:** [AtlasWay — Design](https://www.figma.com/design/KLIjXsaTyaM1jYZ4GQAQPj/AtlasWay---Design?node-id=0-1)

## 1. Identity

- **Personality:** modern, premium, athletic, confident, direct.
- **Aesthetic:** dark mode, minimalist, softly industrial, tech-inspired.
- **Composition:** modular, grid-based, aligned, dense, and organized.
- **Surfaces:** near-black, charcoal, monochromatic, and layered.
- **Color:** energetic red, cool neutrals, selective contrast.
- **Shapes:** geometric, rounded corners, subtle outlines.
- **Typography:** clean, contemporary geometric sans-serif.
- **Iconography:** simple, functional, monochrome line icons.
- **Hierarchy:** driven by typography, contrast, and scale.
- **Interaction:** action-oriented, with immediate feedback and clear states.
- **Data:** analytical, legible, compact, and focused on progress.
- **Overall feel:** focused, disciplined, powerful, and professional.

## 2. Mapped color tokens

Use these semantic `Mapped` tokens in product UI instead of choosing palette shades directly. The tables follow the order of the color variables declared after `/* DESIGN SYSTEM COLORS */` in `src/shared/ui/styles/theme.css`. Tailwind color names correspond to each CSS variable without its `--color-` prefix. Use them with the relevant property utility, such as `bg-sf-base-page`, `text-txt-base-heading`, `text-ic-base-default`, `border-bd-base-default`, or `ring-bd-accesibility-focus`.

Some source color names contain spelling errors (`statc`, `accesibility`); their Tailwind color names below intentionally match the CSS variables exactly.

### Surface

| Token                               | Value     | Tailwind color name            |
| ----------------------------------- | --------- | ------------------------------ |
| `Surface/base/page`                 | `#0a0a0a` | `sf-base-page`                 |
| `Surface/base/default`              | `#0e0d0c` | `sf-base-default`              |
| `Surface/base/subtle`               | `#151210` | `sf-base-subtle`               |
| `Surface/base/solid`                | `#1d1814` | `sf-base-solid`                |
| `Surface/base/solid-hover`          | `#191512` | `sf-base-solid-hover`          |
| `Surface/base/disabled`             | `#12100e` | `sf-base-disabled`             |
| `Surface/base/inverse`              | `#fafaff` | `sf-base-inverse`              |
| `Surface/action/default`            | `#bd1e01` | `sf-action-default`            |
| `Surface/action/default-hover`      | `#991a03` | `sf-action-default-hover`      |
| `Surface/action/subtle`             | `#751604` | `sf-action-subtle`             |
| `Surface/action/disabled`           | `#2e0e08` | `sf-action-disabled`           |
| `Surface/accent/default`            | `#e6a737` | `sf-accent-default`            |
| `Surface/accent/subtle`             | `#62481c` | `sf-accent-subtle`             |
| `Surface/success/static`            | `#007a39` | `sf-success-static`            |
| `Surface/success/default`           | `#082013` | `sf-success-default`           |
| `Surface/success/default-hover`     | `#06371d` | `sf-success-default-hover`     |
| `Surface/information/static`        | `#1899d3` | `sf-information-statc`         |
| `Surface/information/default`       | `#0d2732` | `sf-information-default`       |
| `Surface/information/default-hover` | `#0f435a` | `sf-information-default-hover` |
| `Surface/in-progress/static`        | `#c98803` | `sf-in-progress-static`        |
| `Surface/in-progress/default`       | `#221a09` | `sf-in-progress-default`       |
| `Surface/in-progress/default-hover` | `#3a2a08` | `sf-in-progress-default-hover` |
| `Surface/warning/static`            | `#f9a801` | `sf-warning-static`            |
| `Surface/warning/default`           | `#3a2a08` | `sf-warning-default`           |
| `Surface/warning/default-hover`     | `#6a4906` | `sf-warning-default-hover`     |
| `Surface/danger/static`             | `#cd1f1d` | `sf-danger-static`             |
| `Surface/danger/default`            | `#310e0e` | `sf-danger-default`            |
| `Surface/danger/default-hover`      | `#581211` | `sf-danger-default-hover`      |

### Border

| Token                              | Value     | Tailwind color name            |
| ---------------------------------- | --------- | ------------------------------ |
| `Border/base/default`              | `#12100e` | `bd-base-default`              |
| `Border/base/subtle`               | `#191512` | `bd-base-subtle`               |
| `Border/base/solid`                | `#494543` | `bd-base-solid`                |
| `Border/base/solid-hover`          | `#1d1814` | `bd-base-solid-hover`          |
| `Border/base/disabled`             | `#191512` | `bd-base-disabled`             |
| `Border/action/default`            | `#bd1e01` | `bd-action-default`            |
| `Border/action/subtle`             | `#751604` | `bd-action-subtle`             |
| `Border/accent/accent`             | `#e6a737` | `bd-accent-accent`             |
| `Border/accent/subtle`             | `#8e6825` | `bd-accent-subtle`             |
| `Border/success/default`           | `#06371d` | `bd-success-default`           |
| `Border/success/default-hover`     | `#044d26` | `bd-success-default-hover`     |
| `Border/information/default`       | `#0f435a` | `bd-information-default`       |
| `Border/information/default-hover` | `#126083` | `bd-information-default-hover` |
| `Border/in-progress/default`       | `#3a2a08` | `bd-in-progress-default`       |
| `Border/in-progress/default-hover` | `#6a4906` | `bd-in-progress-default-hover` |
| `Border/warning/default`           | `#6a4906` | `bd-warning-default`           |
| `Border/warning/default-hover`     | `#996804` | `bd-warning-default-hover`     |
| `Border/danger/default`            | `#581211` | `bd-danger-default`            |
| `Border/danger/default-hover`      | `#7f1715` | `bd-danger-default-hover`      |
| `Border/accessibility/focus`       | `#fafaff` | `bd-accesibility-focus`        |

### Text

| Token                               | Value     | Tailwind color name                |
| ----------------------------------- | --------- | ---------------------------------- |
| `Text/base/heading`                 | `#fafaff` | `txt-base-heading`                 |
| `Text/base/body`                    | `#cecdd0` | `txt-base-body`                    |
| `Text/base/placeholder`             | `#a19fa0` | `txt-base-placeholder`             |
| `Text/base/caption`                 | `#757372` | `txt-base-caption`                 |
| `Text/base/disabled`                | `#494543` | `txt-base-disabled`                |
| `Text/action/default`               | `#bd1e01` | `txt-action-default`               |
| `Text/action/on-default`            | `#fafaff` | `txt-action-on-default`            |
| `Text/action/on-default-hover`      | `#cecdd0` | `txt-action-on-default-hover`      |
| `Text/accent/default`               | `#e6a737` | `txt-accent-default`               |
| `Text/accent/on-subtle`             | `#f2d9af` | `txt-accent-on-subtle`             |
| `Text/success/default`              | `#007a39` | `txt-success-default`              |
| `Text/success/on-default`           | `#64ad88` | `txt-success-on-default`           |
| `Text/success/on-default-hover`     | `#96c7b0` | `txt-success-on-default-hover`     |
| `Text/information/default`          | `#1899d3` | `txt-information-default`          |
| `Text/information/on-default`       | `#72bfe4` | `txt-information-on-default`       |
| `Text/information/on-default-hover` | `#a0d3ed` | `txt-information-on-default-hover` |
| `Text/in-progress/default`          | `#c98803` | `txt-in-progress-default`          |
| `Text/in-progress/on-default`       | `#f9b834` | `txt-in-progress-on-default`       |
| `Text/in-progress/on-default-hover` | `#f9c867` | `txt-in-progress-on-default-hover` |
| `Text/warning/default`              | `#f9a801` | `txt-warning-default`              |
| `Text/warning/on-default`           | `#f9c867` | `txt-warning-on-default`           |
| `Text/warning/on-default-hover`     | `#fad999` | `txt-warning-on-default-hover`     |
| `Text/danger/default`               | `#cd1f1d` | `txt-danger-default`               |
| `Text/danger/on-default`            | `#df7777` | `txt-danger-on-default`            |
| `Text/danger/on-default-hover`      | `#e8a2a5` | `txt-danger-on-default-hover`      |

### Icon

| Token                          | Value     | Tailwind color name          |
| ------------------------------ | --------- | ---------------------------- |
| `Icon/base/top`                | `#fafaff` | `ic-base-top`                |
| `Icon/base/default`            | `#cecdd0` | `ic-base-default`            |
| `Icon/base/default-dark`       | `#12100e` | `ic-base-default-dark`       |
| `Icon/base/placeholder`        | `#a19fa0` | `ic-base-placeholder`        |
| `Icon/base/caption`            | `#757372` | `ic-base-caption`            |
| `Icon/base/disabled`           | `#494543` | `ic-base-disabled`           |
| `Icon/action/default`          | `#bd1e01` | `ic-action-default`          |
| `Icon/action/on-default`       | `#fafaff` | `ic-action-on-default`       |
| `Icon/action/on-default-hover` | `#cecdd0` | `ic-action-on-default-hover` |
| `Icon/accent/default`          | `#e6a737` | `ic-accent-default`          |
| `Icon/accent/on-subtle`        | `#f2d9af` | `ic-accent-on-subtle`        |
| `Icon/success/default`         | `#007a39` | `ic-success-default`         |
| `Icon/success/on-default`      | `#64ad88` | `ic-success-on-default`      |
| `Icon/success/on-static`       | `#09150f` | `ic-success-on-static`       |
| `Icon/information/default`     | `#1899d3` | `ic-information-default`     |
| `Icon/information/on-default`  | `#72bfe4` | `ic-information-on-default`  |
| `Icon/information/on-static`   | `#0b181e` | `ic-information-on-static`   |
| `Icon/in-progress/default`     | `#c98803` | `ic-in-progress-default`     |
| `Icon/in-progress/on-default`  | `#f9b834` | `ic-in-progress-on-default`  |
| `Icon/in-progress/on-static`   | `#221a09` | `ic-in-progress-on-static`   |
| `Icon/warning/default`         | `#f9a801` | `ic-warning-default`         |
| `Icon/warning/on-default`      | `#f9c867` | `ic-warning-on-default`      |
| `Icon/warning/on-static`       | `#221a09` | `ic-warning-on-static`       |
| `Icon/danger/default`          | `#cd1f1d` | `ic-danger-default`          |
| `Icon/danger/on-default`       | `#df7777` | `ic-danger-on-default`       |
| `Icon/danger/on-static`        | `#1d0c0c` | `ic-danger-on-static`        |

Use `page` for the application background, then layer `default` and `subtle` surfaces above it. Match base borders to the surface layer: use `default` on `page`, `subtle` on `default`, and `solid` on `subtle`. Use state-group tokens for actions, statuses, and their hover or disabled states.

## 3. Typography

Use the project's established typography styles and preserve their visual hierarchy. Most in-product titles use a compact heading style; reserve larger headings for content that needs stronger visual prominence. Choose semantic HTML independently from visual text styling.

## 4. Icons and interaction

- **Library:** [Lucide](https://lucide.dev/) via the `lucide-react` package.
- **Style:** simple, functional, monochrome line icons.
- **Component:** use the shared `Icon` component; its props and size/weight variants are documented in the [design implementation skill](./.opencode/skills/design-implementation/SKILL.md).
- Prefer mapped icon color names from the table; keep icon color aligned with related text or control state.
- Make actions visually distinct and provide immediate, unambiguous feedback for interactive states.
- Use mapped action, hover, focus, disabled, and status colors rather than ad hoc colors.
- Preserve clear contrast and legibility across dense, analytics-oriented layouts.
- Keep data compact and organized; use typography and selective color to emphasize progress and status without making color the only carrier of meaning.

### Icon identity

Use these icons consistently to make application concepts recognizable:

| Category | Icon | Meaning |
| --- | --- | --- |
| Main entities | `waypoints` | Routine |
| Main entities | `clipboard-list` | Session |
| Main entities | `dumbbell` | Exercise or training day |
| Main entities | `notepad-text` | Workout tracking and its related entities |
| Main entities | `bed` | Rest day |
| Supporting data and sections | `calendar-days` | Application calendar |
| Supporting data and sections | `calendar` | Dates in general |
| Supporting data and sections | `flame` | Workout streak |
| Supporting data and sections | `timer` | Measured time (hours, minutes, seconds) |
| Status | `check` | Completed |
| Status | `circle-dot` | Pending |
| Status | `circle-not-dashed` | In progress |
| Status | `triangle-alert` | Warning |
| Status | `circle-alert` | Informational |
| Status | `octagon-alert` | Danger |
| Utility | `arrow-up-right` | Large clickable items, especially full cards |
| Utility | `link` | Links |
| Utility | `grip-vertical` | Draggable items |
| Utility | `ellipsis-vertical` | Expandable action menus |
| Utility | `chevron-up`, `chevron-down` | Accordions, collapsible/expandable components, and dropdown lists |
