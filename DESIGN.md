# Atlas Way Design System

This document records the visual foundations and usage rules for Atlas Way. Figma is the source of truth for the token values; the semantic guidance below explains how to apply them consistently in the product.

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

## 2. Token collections

The Figma file organizes local variables into these collections:

| Collection     | Purpose                                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Brand`        | Brand foundations and source color ramps.                                                                                                          |
| `Alias`        | Reusable aliases for color ramps, spacing, border widths, and font families.                                                                       |
| `Mapped`       | Semantic color tokens for product surfaces, text, icons, and borders. Use these in UI components.                                                  |
| `Responsive`   | Type-scale size, line-height, and paragraph-spacing values. The collection currently has one mode; no breakpoint-specific values are defined here. |
| `Components`   | Component-specific values, including button dimensions.                                                                                            |
| `Dark Colors`  | Dark theme base colors and status colors.                                                                                                          |
| `Light Colors` | Light color values. Their presence does not, by itself, define a complete light-mode experience.                                                   |

The local Figma file has no Boolean variables.

## 3. Color

### Semantic mapped colors

Use `Mapped` tokens in product UI rather than choosing a palette shade directly. Hex values below are the resolved values of the Figma variables.

#### Surfaces

| Token                    | Value     | Usage                                                                             |
| ------------------------ | --------- | --------------------------------------------------------------------------------- |
| `Surface/page`           | `#0A0A0A` | Application background.                                                           |
| `Surface/default`        | `#0E0D0C` | Default raised surface, closer and more prominent than `page`.                    |
| `Surface/default-subtle` | `#151210` | The next raised surface, closer and more prominent than `default`.                |
| `Surface/action`         | `#BD1E01` | Primary action surface.                                                           |
| `Surface/action-hover`   | `#991A03` | Hovered primary action surface.                                                   |
| `Surface/accent`         | `#8E6825` | Accent surface.                                                                   |
| `Surface/accent-hover`   | `#8E6825` | Hovered accent surface; currently resolves to the same value as `Surface/accent`. |
| `Surface/success`        | `#082013` | Success surface.                                                                  |
| `Surface/information`    | `#0D2732` | Informational surface.                                                            |
| `Surface/warning`        | `#3A2A08` | Warning surface.                                                                  |
| `Surface/danger`         | `#310E0E` | Danger surface.                                                                   |

#### Text

| Token                  | Value     |
| ---------------------- | --------- |
| `Text/heading`         | `#FAFAFF` |
| `Text/body`            | `#CECDD0` |
| `Text/placeholder`     | `#A19FA0` |
| `Text/caption`         | `#757372` |
| `Text/action`          | `#BD1E01` |
| `Text/on-action`       | `#FAFAFF` |
| `Text/on-action-hover` | `#CECDD0` |
| `Text/accent`          | `#E6A737` |
| `Text/on-accent`       | `#FAFAFF` |
| `Text/success`         | `#007A39` |
| `Text/on-sucess`       | `#64AD88` |
| `Text/information`     | `#1899D3` |
| `Text/on-information`  | `#72BFE4` |
| `Text/warning`         | `#F9A801` |
| `Text/on-warning`      | `#F9B834` |
| `Text/danger`          | `#CD1F1D` |
| `Text/on-danger`       | `#DF7777` |
| `Text/disabled`        | `#494543` |

#### Icons

| Token                  | Value     |
| ---------------------- | --------- |
| `Icon/top`             | `#FAFAFF` |
| `Icon/default`         | `#CECDD0` |
| `Icon/placeholder`     | `#A19FA0` |
| `Icon/caption`         | `#757372` |
| `Icon/disabled`        | `#494543` |
| `Icon/action`          | `#BD1E01` |
| `Icon/on-action`       | `#FAFAFF` |
| `Icon/on-action-hover` | `#CECDD0` |
| `Icon/accent`          | `#E6A737` |
| `Icon/on-accent`       | `#FAFAFF` |
| `Icon/success`         | `#007A39` |
| `Icon/on-sucess`       | `#64AD88` |
| `Icon/information`     | `#1899D3` |
| `Icon/on-information`  | `#72BFE4` |
| `Icon/warning`         | `#F9A801` |
| `Icon/on-warning`      | `#F9C867` |
| `Icon/danger`          | `#CD1F1D` |
| `Icon/on-danger`       | `#DF7777` |

#### Borders

| Token                   | Value     |
| ----------------------- | --------- |
| `Border/default`        | `#12100E` |
| `Border/default-subtle` | `#151210` |
| `Border/default-solid`  | `#191512` |
| `Border/action`         | `#BD1E01` |
| `Border/action-hover`   | `#751604` |
| `Border/accent`         | `#E6A737` |
| `Border/accent-hover`   | `#8E6825` |
| `Border/success`        | `#06371D` |
| `Border/information`    | `#0F435A` |
| `Border/warning`        | `#6A4906` |
| `Border/danger`         | `#581211` |
| `Border/focus`          | `#FAFAFF` |

Apply surfaces and borders in this order:

1. `page` is the application background.
2. `default` is the first raised surface above `page`.
3. `default-subtle` is the next raised surface above `default`.
4. Use `Border/default` on `page` surfaces and components placed directly on `page`.
5. Use `Border/default-subtle` on `default` surfaces and components with a `default` surface.
6. Use `Border/default-solid` on `default-subtle` surfaces and components with a `default-subtle` surface.

The source variable names `Text/on-sucess`, `Icon/on-sucess`, and `Status/Comeplete Back` are spelled this way in Figma; retain the Figma names when referring to those tokens until they are renamed at the source.

### Brand and alias color ramps

The `Alias` ramps resolve to the corresponding `Brand` ramps listed below. Ramp columns are ordered from the lightest (`50`) to the darkest (`950`). `Brand/Foundation/White` is `#FAFAFF`; `Brand/Foundation/Cod Grey` is `#0A0A0A`. The `Alias` collection also exposes `Foundation/White` and `Foundation/Black`, which alias those foundations respectively.

| Brand ramp / Alias ramp            | 50        | 100       | 200       | 300       | 400       | 500       | 600       | 700       | 800       | 900       | 950       |
| ---------------------------------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| `Milano Red` / `Primary`           | `#F4E4E5` | `#EECECC` | `#E2A299` | `#D57667` | `#C94A34` | `#BD1E01` | `#991A03` | `#751604` | `#521206` | `#2E0E08` | `#1C0C09` |
| `Mineral grey` / `Secondary Light` | `#EBEBF1` | `#DCDCE6` | `#BEBECC` | `#A1A1B3` | `#838399` | `#656580` | `#535368` | `#414151` | `#2E2E39` | `#1C1C21` | `#131316` |
| `Zeus` / `Secondary Dark`          | `#E4E3E8` | `#CECDD0` | `#A19FA0` | `#757372` | `#494543` | `#1D1814` | `#191512` | `#151210` | `#12100E` | `#0E0D0C` | `#0C0B0B` |
| `Tulip tree` / `Accent`            | `#F8F2EB` | `#F6E9D7` | `#F2D9AF` | `#EEC887` | `#EAB85F` | `#E6A737` | `#BA872E` | `#8E6825` | `#62481C` | `#362913` | `#201A0E` |
| `Fun green` / `Success`            | `#E0ECEA` | `#C8E0D7` | `#96C7B0` | `#64AD88` | `#329461` | `#007A39` | `#026430` | `#044D26` | `#06371D` | `#082013` | `#09150F` |
| `Olympic blue` / `Information`     | `#E4F1FB` | `#CEE7F6` | `#A0D3ED` | `#72BFE4` | `#45ACDC` | `#1899D3` | `#157CAB` | `#126083` | `#0F435A` | `#0D2732` | `#0B181E` |
| `Yellow sea` / `Warning`           | `#F9F1E5` | `#FAEACC` | `#FAD999` | `#F9C867` | `#F9B834` | `#F9A801` | `#C98803` | `#996804` | `#6A4906` | `#3A2A08` | `#221A09` |
| `Thunderbird` / `Danger`           | `#F6E4E8` | `#F1CED2` | `#E8A2A5` | `#DF7777` | `#D64B4A` | `#CD1F1D` | `#A61B19` | `#7F1715` | `#581211` | `#310E0E` | `#1D0C0C` |

### Dark and light color collections

These are additional Figma variables, separate from the semantic `Mapped` tokens. Prefer `Mapped` for new component styling.

#### `Dark Colors`

| Variable                 | Value     |
| ------------------------ | --------- |
| `Border Card`            | `#151515` |
| `Brand/Primary`          | `#BD1E01` |
| `Brand/Primary Dark`     | `#771B0A` |
| `Brand/Secondary`        | `#BC7700` |
| `Brand/Tertiary`         | `#EB5E31` |
| `Brand/Accent`           | `#E6A737` |
| `Background/Back`        | `#0A0A0A` |
| `Background/Base`        | `#0E0E0E` |
| `Background/Middle`      | `#131313` |
| `Background/Front`       | `#171717` |
| `Background/Top`         | `#1A1A1A` |
| `Text/Strong`            | `#FAFAFA` |
| `Text/Default`           | `#C0C0C0` |
| `Text/Subtle`            | `#A0A0A0` |
| `Text/Muted`             | `#707070` |
| `Border/Strong`          | `#272727` |
| `Border/Default`         | `#202020` |
| `Border/Muted`           | `#1A1A1A` |
| `Status/Complete`        | `#00C951` |
| `Status/Complete Border` | `#0B8C3F` |
| `Status/Comeplete Back`  | `#07480F` |
| `Status/Cancel`          | `#FF3C45` |
| `Status/Cancel Border`   | `#A30A11` |
| `Status/Cancel Back`     | `#730005` |
| `Status/Unread`          | `#3694FF` |
| `Status/Unread Border`   | `#1D5BB9` |
| `Status/Unread Back`     | `#112B62` |
| `Status/Warning`         | `#EFEF1C` |
| `Status/Warning Border`  | `#BCAF20` |
| `Status/Warning Back`    | `#5C550C` |
| `Accessibility/Focus`    | `#FFFFFF` |

#### `Light Colors`

| Variable              | Value     |
| --------------------- | --------- |
| `Fill/Back`           | `#F8F8FF` |
| `Fill/Base`           | `#FDFDFF` |
| `Fill/Middle`         | `#F4F4FD` |
| `Fill/Front`          | `#EBEBF8` |
| `Fill/Top`            | `#E4E4FA` |
| `Border/Strong`       | `#D0D0D0` |
| `Border/Default`      | `#D9D9D9` |
| `Border/Muted`        | `#E0E0E0` |
| `Complete/Foreground` | `#54AC24` |
| `Complete/Border`     | `#3D912D` |
| `Complete/Fill`       | `#55D459` |
| `Danger/Foreground`   | `#9A0D0D` |
| `Danger/Border`       | `#8E0C0C` |
| `Danger/Fill`         | `#FA5858` |
| `Warning/Foreground`  | `#88910F` |
| `Warning/Border`      | `#AFAA0E` |
| `Warning/Fill`        | `#FFFF70` |
| `Info/Foreground`     | `#3262DD` |
| `Info/Border`         | `#4B4EFB` |
| `Info/Fill`           | `#7B6DFE` |
| `Text/Strong`         | `#050505` |
| `Text/Default`        | `#2A2A2A` |
| `Text/Subtle`         | `#4A4A4A` |
| `Text/Muted`          | `#6A6A6A` |

## 4. Typography

### Font families

- **Funnel Display:** heading styles H1 through H5.
- **Outfit:** H6, body text, captions, and button labels.
- The Figma variables `Font family/heading` and `Font family/body` alias the `Funnel Display` and `Outfit` font family variables, respectively.

Text styles express **visual hierarchy**, not HTML or SEO semantics. Choose the visual style that fits the content, then use the appropriate semantic HTML element independently.

- Most in-product titles use the H6 visual style. Use H5 for a stronger level and H4–H1 only when the content requires that much visual prominence.
- H3 and above are rare in product UI; the Landing page is the main exception.
- Use Body Large for emphasized copy below heading prominence.
- Use Body Medium as the default for readable copy and data.
- Use Body Small for less prominent supporting copy.
- Use Caption for low-priority small print, tags, and similar supporting labels.

### Figma text styles

All listed styles use `-3%` letter spacing in Figma (equivalent to `-0.03em` in CSS). Line heights and paragraph spacing are in pixels.

| Figma style     | Font           | Weight          | Size | Line height | Paragraph spacing | Letter spacing |
| --------------- | -------------- | --------------- | ---: | ----------: | ----------------: | -------------: |
| `Heading H1`    | Funnel Display | ExtraBold (800) | 80px |        96px |             144px |            -3% |
| `Heading H2`    | Funnel Display | Bold (700)      | 64px |        80px |             128px |            -3% |
| `Heading H3`    | Funnel Display | SemiBold (600)  | 48px |        64px |              96px |            -3% |
| `Heading H4`    | Funnel Display | Medium (500)    | 40px |        48px |              80px |            -3% |
| `Heading H5`    | Funnel Display | Regular (400)   | 32px |        40px |              64px |            -3% |
| `Heading H6`    | Outfit         | Medium (500)    | 24px |        32px |              48px |            -3% |
| `Body/Large`    | Outfit         | Regular (400)   | 20px |        24px |              40px |            -3% |
| `Body/Medium`   | Outfit         | Regular (400)   | 16px |        20px |              32px |            -3% |
| `Body/Small`    | Outfit         | Light (300)     | 16px |        20px |              32px |            -3% |
| `Caption`       | Outfit         | Light (300)     | 12px |        16px |              24px |            -3% |
| `Button/Large`  | Outfit         | Medium (500)    | 20px |        24px |              40px |            -3% |
| `Button/Medium` | Outfit         | Medium (500)    | 16px |        20px |              32px |            -3% |
| `Button/Small`  | Outfit         | Medium (500)    | 16px |        20px |              32px |            -3% |

## 5. Spacing, borders, and buttons

### Spacing scale

Values are in pixels. Use the named `Alias` spacing variables rather than introducing arbitrary spacing values.

| Token          | Value |
| -------------- | ----: |
| `Spacing/none` |   0px |
| `Spacing/2xs`  |   4px |
| `Spacing/xs`   |   8px |
| `Spacing/sm`   |  12px |
| `Spacing/md`   |  16px |
| `Spacing/lg`   |  20px |
| `Spacing/xl`   |  24px |
| `Spacing/2xl`  |  32px |
| `Spacing/3xl`  |  40px |
| `Spacing/4xl`  |  48px |
| `Spacing/5xl`  |  64px |
| `Spacing/6xl`  |  80px |
| `Spacing/7xl`  |  96px |
| `Spacing/8xl`  | 128px |
| `Spacing/9xl`  | 160px |
| `Spacing/10xl` | 192px |

### Border widths

| Token               | Value |
| ------------------- | ----: |
| `Border width/none` |   0px |
| `Border width/sm`   |   1px |
| `Border width/md`   | 1.5px |
| `Border width/lg`   |   2px |
| `Border width/xl`   |   4px |

### Button dimensions

| Size | Horizontal padding | Height | Corner radius |
| ---- | -----------------: | -----: | ------------: |
| `sm` |               12px |   32px |          20px |
| `md` |               16px |   40px |          24px |
| `lg` |               24px |   48px |          32px |

## 6. Icons

- **Library:** [Lucide](https://lucide.dev/) via the `lucide-react` package.
- **Style:** simple, functional, monochrome line icons.
- **Stroke width:** 2px.
- **Allowed sizes:** 16px (small), 20px (default), and 24px (large).
- Prefer semantic `Mapped` icon color tokens; keep icon color aligned with its related text or control state.

## 7. Interaction and data presentation

- Make actions visually distinct and provide immediate, unambiguous feedback for interactive states.
- Use the mapped action, hover, focus, disabled, and status tokens rather than ad hoc colors.
- Preserve clear contrast and legibility across dense, analytics-oriented layouts.
- Keep data compact and organized; use typography and selective color to emphasize progress and status without making color the only carrier of meaning.
