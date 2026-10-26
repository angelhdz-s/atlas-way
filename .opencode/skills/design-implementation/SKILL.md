---
name: design-implementation
description: Implement and translate interfaces from Figma into the project while maintaining visual fidelity, consistency, accessibility, and clean code. The project already contains a `DESIGN.md` file. Keep it as clean, concise, and maintainable as possible. Do not duplicate design rules, implementation details, or lengthy instructions that belong in this skill.
---

# Design Implementation Skill

## Core Principles

- **Tailwind CSS first:** Always use Tailwind CSS utility classes for styling.
- **Design fidelity:** Follow the source design in Figma as closely as possible.
- **Relative units:** Use `rem` or `em` for arbitrary values whenever applicable.
- **Minimal design documentation:** Keep `DESIGN.md` focused on essential design tokens, conventions, and project-specific decisions.
- **Consistency:** Reuse existing components, utilities, design tokens, and Tailwind configuration before introducing new ones.
- **No unnecessary custom CSS:** Prefer existing Tailwind utilities over custom styles, inline styles, or additional stylesheets.

## 1. Tailwind CSS Requirements

Always prioritize Tailwind CSS utility classes when implementing or modifying interface styles.

### Rules

- Use standard Tailwind utilities whenever an equivalent exists.
- Use arbitrary values only when the design requires a value that cannot be represented adequately by an existing utility or configured design token.
- Before introducing an arbitrary value, check whether the project already defines an equivalent utility, theme value, or custom Tailwind variable.
- Prefer semantic, reusable design tokens over repeated arbitrary values.
- Do not introduce custom CSS when an equivalent Tailwind utility can achieve the same result.
- Do not modify the existing Tailwind configuration or design tokens unnecessarily.
- Preserve the project's existing naming conventions, component architecture, and styling patterns.

### Examples

```tsx
// Preferred: existing Tailwind utilities
<div className="mt-4 rounded-lg p-6" />

// Allowed: arbitrary values expressed in relative units
<div className="mt-[1.125rem] rounded-[0.625rem] p-[1.375rem]" />

// Avoid: arbitrary pixel values
<div className="mt-[18px] rounded-[10px] p-[22px]" />
```

Use standard utilities whenever possible.

## 2. Arbitrary Value Unit Policy

All arbitrary numeric CSS values expressed through Tailwind classes must use `rem` or `em` whenever applicable.

Never use arbitrary pixel values (`px`) for dimensions, spacing, typography, positioning, or other properties for which relative units are appropriate.

### Allowed units

- `rem`: Preferred for dimensions and spacing that should scale with the root font size.
- `em`: Use when a value should scale relative to the element's font size.

### Exceptions

Pixel values or other appropriate units are permitted only when required for the following exceptions:

1. **SVG strokes:** Stroke widths may use the units supported by the SVG implementation and source design.
2. **Borders:** Border widths may use pixel values when necessary to preserve the intended visual result.
3. **Outlines:** Outline widths may use pixel values when necessary.
4. **Rings and box shadows:** Ring widths and box-shadow values may use pixel values when required to reproduce the intended effect.
5. **Custom Tailwind components and variables:** Values defined through project-specific Tailwind components, utilities, theme variables, or custom properties may use the units appropriate to their implementation.

These exceptions are limited to the specified properties and cases. They do not permit arbitrary pixel values for unrelated properties.

### Examples

```tsx
// Preferred
<div className="w-[12.5rem] gap-[0.75rem] text-[0.875rem]" />

// Allowed exception: border width
<div className="border-[1px] border-solid" />

// Allowed exception: ring width
<div className="ring-[1px] ring-black/10" />

// Avoid
<div className="w-[200px] gap-[12px] text-[14px]" />
```

When an existing Tailwind utility provides the required result, use it instead of an arbitrary value.

## 3. Figma-to-Tailwind Unit Conversion

When translating Figma designs, components, variables, or styles into the project, convert pixel-based values into appropriate relative units whenever applicable.

### Conversion rules

- Convert dimensions, spacing, padding, margins, gaps, typography sizes, and positioning values from pixels to `rem` or `em`.
- Use `rem` by default unless a value needs to scale relative to the element's font size, in which case `em` may be more appropriate.
- Preserve the original visual proportions and intended appearance.
- Do not copy pixel values from Figma directly into arbitrary Tailwind classes unless an explicitly permitted exception applies.
- Prefer an existing Tailwind utility or configured design token when it represents the converted value.
- When a Figma value maps exactly to an existing utility, use that utility instead of defining a new arbitrary value.

### Conversion formula

Assuming the project's root font size is `16px`:

`rem = px / 16`

| Figma value | Converted value |
| ----------- | --------------- |
| `4px`       | `0.25rem`       |
| `8px`       | `0.5rem`        |
| `12px`      | `0.75rem`       |
| `16px`      | `1rem`          |
| `20px`      | `1.25rem`       |
| `24px`      | `1.5rem`        |
| `32px`      | `2rem`          |
| `48px`      | `3rem`          |
| `64px`      | `4rem`          |

If the project uses a different root font size, account for that configuration when converting values.

### Important considerations

- Do not assume that every Figma dimension represents a fixed CSS dimension. Consider responsive behavior, component constraints, and the existing layout system.
- Preserve fractional values when needed for fidelity.
- Convert typography sizes and line heights independently when the source design specifies them separately.
- Avoid converting values mechanically when an existing token or utility already expresses the intended design.
- For SVGs, distinguish between geometric dimensions and stroke widths. Follow the relative-unit policy for dimensions where applicable and the SVG stroke exception for stroke widths.

## 4. Figma Stroke Alignment: Inside, Center, and Outside

When translating Figma borders or strokes into Tailwind CSS, inspect the stroke alignment setting in the source design.

Determine whether each non-icon element uses an **Inside**, **Center**, or **Outside** stroke before choosing the corresponding Tailwind utility.

### Mapping rules

| Figma stroke alignment | Tailwind implementation |
| ---------------------- | ----------------------- |
| Inside                 | `border`                |
| Center                 | `ring`                  |
| Outside / Outline      | `ring`                  |

### Inside strokes

Translate inside-aligned strokes to Tailwind border utilities.

```tsx
// Figma: Inside stroke
<div className="border border-neutral-200" />
```

Use the appropriate border width, color, style, and side-specific utilities to reproduce the source design.

### Center and outside strokes

Translate center-aligned and outside-aligned strokes to Tailwind ring utilities.

```tsx
// Figma: Center stroke
<div className="ring-1 ring-neutral-200" />

// Figma: Outside stroke
<div className="ring-2 ring-neutral-200" />
```

Choose the ring width, color, and any necessary offset to match the original appearance.

### Stroke alignment considerations

- This mapping applies to borders and strokes on non-icon interface elements.
- **Do not apply this mapping rule to icons.** Icon strokes must retain the appropriate SVG stroke implementation and styling.
- Do not assume that all Figma strokes should become borders.
- Inspect the actual Figma alignment before implementing the style.
- Consider how borders affect layout dimensions and how rings render outside an element's box.
- Use `ring-offset-*` utilities or other appropriate Tailwind utilities when necessary to reproduce the source design.
- Preserve the intended appearance without introducing unintended layout shifts.

## 5. Typography Weight Conversion

When translating font weights from Figma to Tailwind CSS, use a default rule of selecting a CSS/Tailwind font weight one standard step lighter than the weight specified in Figma, provided that the target weight is available and visually appropriate.

### Default mapping

| Figma weight | Figma numeric value | Target Tailwind utility | CSS weight |
| ------------ | ------------------: | ----------------------- | ---------: |
| Thin         |                 100 | `font-thin`             |        100 |
| Extra Light  |                 200 | `font-extralight`       |        200 |
| Light        |                 300 | `font-thin`             |        100 |
| Regular      |                 400 | `font-light`            |        300 |
| Medium       |                 500 | `font-normal`           |        400 |
| Semi Bold    |                 600 | `font-medium`           |        500 |
| Bold         |                 700 | `font-semibold`         |        600 |
| Extra Bold   |                 800 | `font-bold`             |        700 |
| Black        |                 900 | `font-extrabold`        |        800 |

The mapping represents the default one-step-lighter convention. The exact result must account for the font family, the font weights available in the project, and the rendered appearance.

### Rules

- Always inspect the font family and available font weights before selecting a utility.
- Apply the one-step-lighter rule as the default when a lighter weight is available.
- For Figma Regular (400), use `font-light` (300) by default.
- For Figma Medium (500), use `font-normal` (400) by default.
- For Figma Semi Bold (600), use `font-medium` (500) by default.
- Do not request or reference font weights that the loaded font family does not support.
- If the required lighter weight is unavailable, use the closest supported weight that preserves the intended visual hierarchy.
- If the conversion produces an obvious mismatch with the source design, prioritize visual fidelity and use the closest appropriate available weight.
- Do not change the font family, font size, line height, letter spacing, or text transformations as a side effect of changing font weight.

## 6. Design Tokens and `DESIGN.md`

The project already has a `DESIGN.md` file. Treat it as the concise reference for the project's design system rather than a repository for implementation instructions.

### Keep `DESIGN.md` clean

- Do not duplicate this skill's rules in `DESIGN.md`.
- Keep only essential information such as color tokens, typography definitions, spacing conventions, radii, shadows, and other project-specific design decisions.
- Reference existing Tailwind theme values, CSS variables, and reusable components whenever possible.
- Avoid documenting values that can be discovered directly from the project's source code.
- Do not add lengthy explanations, repeated examples, or general Tailwind instructions.
- Update `DESIGN.md` only when an actual design-system decision or token changes.
- Preserve the existing document structure unless there is a concrete reason to improve it.

### Token reuse

Before introducing a new style value:

1. Inspect `DESIGN.md`.
2. Inspect the Tailwind configuration and theme definitions.
3. Inspect existing CSS variables and custom utilities.
4. Inspect reusable components for existing styling patterns.
5. Reuse the closest appropriate token or utility when possible.

If a new reusable design token is genuinely needed, define it in the appropriate existing configuration or token location rather than repeatedly hardcoding arbitrary values.

## 7. Component Implementation

When implementing a Figma component or modifying an existing interface:

- Reuse existing project components whenever possible.
- Maintain the established component architecture and naming conventions.
- Keep visual styling separate from business logic when consistent with the project's patterns.
- Use responsive Tailwind utilities when the design requires different layouts at different breakpoints.
- Preserve semantic HTML and accessibility.
- Use appropriate focus, hover, active, disabled, and other interactive states.
- Do not introduce unnecessary wrappers, duplicated components, or redundant utility classes.
- Avoid overriding existing styles without understanding their purpose.
- Preserve the intended behavior of existing components when modifying their appearance.

## 8. Implementation Workflow

Follow this workflow whenever translating a Figma design or implementing a visual change.

### Step 1: Inspect

Review the existing codebase, `DESIGN.md`, Tailwind configuration, reusable components, CSS variables, and typography setup.

### Step 2: Analyze the source design

Inspect the relevant Figma frames, components, variables, and styles.

Identify:

- Dimensions and spacing.
- Typography family, size, line height, and weight.
- Colors and design tokens.
- Borders, stroke widths, and stroke alignment.
- Shadows, rings, and outlines.
- Responsive behavior and component constraints.
- Interactive states and accessibility requirements.

### Step 3: Map design values

Map Figma values to existing Tailwind utilities and design tokens.

Convert pixel-based values to `rem` or `em` whenever applicable. Apply the stroke-alignment mapping and typography-weight conversion rules defined in this skill.

### Step 4: Implement

Use Tailwind utility classes as the primary styling mechanism.

Introduce arbitrary values only when necessary, follow the relative-unit policy, and reuse existing tokens and components.

### Step 5: Validate

Compare the implementation against the source design.

Check spacing, sizing, typography, stroke alignment, colors, shadows, responsive behavior, and interactive states.

### Step 6: Refine

Correct visual discrepancies without introducing unnecessary custom CSS, duplicate tokens, or arbitrary pixel values.

Keep `DESIGN.md` unchanged unless a genuine design-system decision needs to be recorded.

## 9. Final Checklist

Before considering an implementation complete, verify the following:

- [ ] Tailwind CSS utilities are used for styling.
- [ ] Existing utilities, components, and design tokens were reused where possible.
- [ ] Arbitrary values use `rem` or `em` whenever applicable.
- [ ] No unnecessary arbitrary pixel values were introduced.
- [ ] Figma pixel values were converted appropriately.
- [ ] SVG stroke widths, borders, outlines, and rings follow their specified exceptions.
- [ ] Non-icon Figma strokes were mapped correctly: Inside to `border`, Center and Outside to `ring`.
- [ ] Icon strokes were excluded from the border/ring mapping rule.
- [ ] Typography weights follow the default one-step-lighter conversion when appropriate.
- [ ] Font weights are supported by the loaded font family.
- [ ] The implementation matches the source design as closely as possible.
- [ ] Responsive behavior and accessibility have been preserved.
- [ ] `DESIGN.md` remains concise and free of duplicated implementation rules.
- [ ] No unnecessary custom CSS, design tokens, or configuration changes were introduced.

## Guiding Principle

**Translate the design, not its raw values.** Reproduce the intent and appearance of the Figma source using the project's existing Tailwind CSS system, relative units, reusable tokens, and consistent component patterns. Preserve visual fidelity while keeping the implementation and `DESIGN.md` clean and maintainable.
