# 06 — Design Token Rules

## Purpose

Enforce semantic token discipline across all visual implementation. Prevent arbitrary styling, hardcoded values, design drift, and inconsistency in components and pages.

---

## When To Read

- Design token creation tasks (Task 5).
- Component implementation tasks (Task 8).
- Page implementation tasks (Task 9).
- Design system update tasks (Task 22).
- Design review — Category 6 Color / Token Usage.
- Any task where visual values are being written into code or design files.

---

## Required Inputs

- Project's `visual-direction.md` — tokens must express the project's visual direction. Tokens without visual direction produce arbitrary values.
- Project's `design-tokens.md` — consumed at implementation time.

If `design-tokens.md` is missing during implementation: this is a Blocker per `01-agent-operating-protocol.md`. Do not proceed with hardcoded values as a workaround.

---

## Semantic Token Principles

1. Every visual value used in a component or page must be a semantic token, not a raw value.
2. Semantic tokens carry meaning: `text-muted` means "secondary, deemphasized text" — not "a particular gray."
3. A token system using only color names (`blue-500`, `gray-200`) is not a semantic token system.
4. Token names must communicate role and intent, not color or measurement.
5. Tokens are defined once and used everywhere. Changing a token value propagates everywhere it is used — that is the purpose.
6. Implementation method varies by stack. Naming discipline and category coverage do not.

---

## Token Categories

These are the required categories for any project design system. Actual values belong in the project's `design-tokens.md`. This file defines which categories must exist and what each must cover.

**Token naming note:** Token names shown throughout this section are semantic naming examples — not mandatory exact names for every project. Projects may use different names provided they remain: semantic and role-based (not named after colors, measurements, or visual effects), predictable from the name alone, consistent across the entire project, and fully documented in `design-tokens.md`. Do not import all example names mechanically — define only the semantic roles the project actually needs. A simple product does not need three surface levels if it only uses one.

---

### 1. Color Tokens

*Names below are semantic naming examples for this category. Use them if they fit the project's vocabulary, or define equivalent role-based names.*

**Base:**
- `background` — page or screen background
- `foreground` — primary text color on background

**Surfaces (layered):**
- `surface-1` — primary card or panel surface
- `surface-2` — nested surface inside surface-1
- `surface-3` — deeply nested or subtle tonal surface
- `surface-inverse` — inverted surface for high-contrast situations

**Text:**
- `text-primary` — primary content text
- `text-secondary` — lower-priority text, secondary content
- `text-muted` — deemphasized text, metadata level. Verify WCAG AA contrast before using at body size.
- `text-inverse` — text on inverted background surfaces
- `text-on-primary` — text or icon placed on the primary action color

**Borders:**
- `border-subtle` — barely visible structural separation
- `border-default` — standard component border
- `border-strong` — emphasis borders, active states, focus rings

**Action / Brand:**
- `primary` — primary button and action background
- `primary-hover` — primary hover state
- `primary-foreground` — text or icon on primary action background

**Accent:**
- `accent` — secondary brand or supporting action color
- `accent-soft` — muted/tonal version for backgrounds and tags
- `accent-foreground` — text or icon on accent background

**Status:**
- `success`, `success-soft`, `success-foreground`
- `warning`, `warning-soft`, `warning-foreground`
- `danger`, `danger-soft`, `danger-foreground`
- `info`, `info-soft`, `info-foreground`

Status colors are functional — not decorative. Do not repurpose status colors for non-status UI.

---

### 2. Typography Tokens

*Names below are semantic naming examples for this category. Use them if they fit the project's vocabulary, or define equivalent role-based names.*

- `font-sans` — primary sans-serif family stack
- `font-mono` — monospace family for code, IDs, technical values
- `text-display` — largest display size (landing pages, hero moments)
- `text-h1` — page-level heading
- `text-h2` — section heading
- `text-h3` — subsection heading
- `text-body` — standard body reading text
- `text-small` — smaller body text for help text, captions
- `text-label` — form labels, button text, tab labels, badge text
- `text-metadata` — timestamps, secondary identifiers, fine-print

Each typography token must include: font-size, line-height, font-weight. Letter-spacing where applicable.

---

### 3. Spacing Tokens

A numeric spacing scale anchored to a consistent base unit (commonly 4px). Example scale:

`space-1` (4px), `space-2` (8px), `space-3` (12px), `space-4` (16px), `space-5` (20px), `space-6` (24px), `space-8` (32px), `space-10` (40px), `space-12` (48px), `space-16` (64px), `space-20` (80px), `space-24` (96px)

The exact values and naming convention are project decisions in `design-tokens.md`. The existence of a defined scale is required. Do not use arbitrary pixel values outside the scale.

---

### 4. Radius Tokens

- `radius-none` — 0 border-radius
- `radius-xs` — minimal curve
- `radius-sm` — small
- `radius-md` — medium
- `radius-lg` — large
- `radius-xl` — very rounded
- `radius-full` — pill or circular

Different component types reference different radii. Buttons, cards, inputs, and badges may each use different radius values. Applying `radius-full` uniformly to every element is a forbidden pattern per `03-anti-ai-aesthetic-rules.md` (pattern 14).

---

### 5. Shadow / Elevation Tokens

- `shadow-none`
- `shadow-xs` — barely perceptible, for subtle card separation
- `shadow-sm` — standard card or panel elevation
- `shadow-md` — popover, dropdown, contextual panel elevation
- `shadow-lg` — modal, dialog, drawer elevation

Shadows are structural, not decorative. Default cards should use border separation, not heavy shadows. Shadows are reserved for genuinely elevated surfaces: overlays, dropdowns, modals, drawer panels. Excessive shadows on non-elevated surfaces are a forbidden pattern per `03-anti-ai-aesthetic-rules.md` (pattern 15).

---

### 6. Motion Tokens

- `duration-fast` — micro-interactions (typically 100–150ms)
- `duration-base` — standard transitions (typically 160–200ms)
- `duration-slow` — heavier element transitions (typically 240–300ms)
- `easing-standard` — default easing curve
- `easing-emphasized` — for larger, more significant movements
- `easing-decelerate` — elements entering the screen
- `easing-accelerate` — elements leaving the screen

Motion must be functional. Do not use slow decorative motion. Hover transitions should be subtle.

---

### 7. Z-Index / Elevation Layer Tokens

- `z-base` — content layer
- `z-raised` — raised elements within the content flow
- `z-dropdown` — dropdowns and menus
- `z-sticky` — sticky headers, footers, toolbars
- `z-overlay` — modal backdrop overlays
- `z-modal` — modals and side drawers
- `z-toast` — notification toasts
- `z-tooltip` — tooltips

Z-index values must be defined as tokens, not as arbitrary numbers in components.

---

### 8. Breakpoint Tokens

- `bp-xs` — 320px (narrow mobile)
- `bp-sm` — 375px (mobile)
- `bp-md` — 768px (tablet)
- `bp-lg` — 1024px (desktop)
- `bp-xl` — 1440px (wide desktop)

Responsive behavior is governed by `11-responsive-design-rules.md` *(Phase 3)*. Breakpoint tokens must be referenced consistently across the implementation.

---

### 9. Component State Tokens

Token values that differentiate visual states. These may be defined as state-specific tokens (`input-error-border`, `button-primary-disabled-bg`) or as state-resolution patterns within the token system.

Every interactive component must have token-based state differentiation for: default, hover, active, focus, disabled. Do not hardcode state overrides.

---

### 10. Theme / Dark Mode Tokens

If the project supports dark mode or multiple themes:
- All color tokens must have values for each supported theme.
- Dark mode must not be treated as an afterthought. Define dark token values before implementation begins.
- Use the same semantic token names across themes. The theme system resolves which value applies.
- Do not create parallel token names for dark mode (e.g., `bg-dark-surface-2` alongside `surface-2`). Use a single `surface-2` token resolved to different values per theme.

If dark mode is not in scope: state this explicitly in `design-tokens.md` — "Light mode only. Dark mode deferred."

---

### 11. Focus / Accessibility Tokens

- `focus-ring` — keyboard focus outline color
- `focus-ring-width` — keyboard focus outline width
- `focus-ring-offset` — focus ring offset from the component edge

Focus tokens must never be set to `transparent` or `0` opacity. Visible keyboard focus is non-negotiable. These tokens are never optional.

---

### 12. Data Visualization Tokens

Required for products with charts, graphs, or data-driven displays:

- `data-series-1` through `data-series-8` (or more as needed) — ordered data series colors
- `data-neutral` — neutral or inactive series
- `data-highlight` — selected or emphasized data point
- Chart structural tokens: `chart-axis`, `chart-grid`, `chart-label`

Data visualization colors must be accessible: distinguishable without relying solely on color. Verify that series can be told apart in grayscale or by users with color vision deficiencies.

---

## Token Naming Principles

1. Names express semantic role, not visual value. Use `text-muted` not `gray-400`.
2. Names must be predictable: an agent reading the token list must understand what each token is for without seeing its value.
3. Avoid abbreviations that reduce clarity. `surface-elevated` not `surf-elev`.
4. Be consistent with compound names. Use `{category}-{role}` or `{category}-{variant}` patterns consistently throughout the system.
5. Do not name tokens after their current value. If the value changes, the name must remain valid.

---

## Stack-Agnostic Implementation

Token discipline applies regardless of implementation method. The token categories above must be implemented in whatever system the project uses. No single method is mandated.

Examples of valid implementation methods:
- CSS custom properties: `--text-muted: hsl(220 8% 56%);`
- Design token JSON (W3C DTCG format or Style Dictionary)
- Platform theme objects (SwiftUI Color, Flutter ThemeData, React Native theme)
- Build-time token pipelines (Style Dictionary, Theo, or equivalent)
- Framework theme extensions (Tailwind theme config, CSS-in-JS theme objects, or equivalent)

When referencing token implementation in a component: use the semantic token name. Do not embed implementation syntax in component code that is not relevant to the stack.

---

## Forbidden Hardcoded Value Patterns

Do not use any of the following in components, pages, or style files:

1. Raw hex values not derived from a token: `#3B82F6`, `#1A1A2E`
2. Raw HSL, RGB, or RGBA values not defined as a token
3. Arbitrary spacing values not from the defined spacing scale
4. Arbitrary border-radius values not from the radius scale
5. One-off shadow values not from the shadow scale
6. Raw framework utility classes that bypass the project token system
7. Hardcoded status colors: `color: red` when `color: var(--danger)` exists
8. Gradient values not explicitly approved in `visual-direction.md` via the Exception Approval Format from `03-anti-ai-aesthetic-rules.md`
9. Light-mode-only color values in a project that has defined dark mode tokens
10. Component-local visual systems: a component that defines its own color variables separate from the project token system

---

## Token Creation Output Format

The project's `design-tokens.md` must include all of the following sections:

```
# Design Tokens

## Token Philosophy
[How tokens express this project's visual direction]

## Color Tokens
[All required color categories with values and any usage notes]

## Typography Tokens
[All type role tokens: size, weight, line-height, letter-spacing where applicable]

## Spacing Scale
[All spacing tokens with values]

## Radius Scale
[All radius tokens with values and which component types use each]

## Shadow Scale
[All shadow tokens with values and when each is used]

## Motion Tokens
[All motion tokens with values]

## Z-Index Scale
[All z-index tokens with values]

## Breakpoint Tokens
[All breakpoint tokens with values]

## Component State Tokens
[State-specific overrides or resolution patterns]

## Theme / Dark Mode Tokens
[Dark values for all color tokens, or explicit statement that dark mode is out of scope]

## Focus Tokens
[Focus ring color, width, offset]

## Data Visualization Tokens
[Required if product has data displays — series colors, chart structural tokens]

## Implementation Notes
[Stack-specific information on how tokens are delivered in this project]

## Token Usage Rules
[Project-specific rules, edge cases, and exceptions]
```

---

## Token Usage Rules

1. Before implementing any component or page: verify `design-tokens.md` exists. If missing, treat as Blocker.
2. Use semantic token names in all components. Never use raw values.
3. When a new visual state requires a value not yet in the token system: add the token to `design-tokens.md` first, then implement.
4. Token violations found during design review are **Critical** issues per `14-design-review-checklist.md` Do-Not-Ship Condition #3.
5. If a design decision cannot be expressed through existing tokens: define a new token. Do not hardcode a value as a workaround.

---

## Quality Gate

- [ ] All 12 required token categories are defined in `design-tokens.md`.
- [ ] All token names are semantic — they express role, not visual value.
- [ ] No raw color, spacing, radius, or shadow values appear in component or page code.
- [ ] Dark mode tokens are defined if dark mode is in scope; explicitly deferred if not.
- [ ] Focus tokens are defined and set to non-zero, non-transparent values.
- [ ] Data visualization tokens are defined if the product includes charts or data displays.
- [ ] Implementation method is documented in `design-tokens.md`.
- [ ] All token values are consistent with the project's `visual-direction.md`.
- [ ] Token naming follows a consistent pattern throughout the system.
