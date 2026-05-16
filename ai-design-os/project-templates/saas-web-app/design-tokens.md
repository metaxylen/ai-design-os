# Design Tokens — [YOUR PROJECT: Product Name]

**Template:** saas-web-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use  
**Requires:** visual-direction.md must be filled in first

Token values must express this project's visual direction. Do not copy values from other projects. All token names are semantic — they express role, not color or measurement.

---

## Token Philosophy

[YOUR PROJECT: One paragraph explaining how the token system expresses this product's visual direction. Example: "Tokens express a neutral, functional visual system. Color tokens are predominantly neutral with status colors reserved for data communication. The spacing scale is tight, reflecting the compact density defined in visual-direction.md. Shadows are minimal — borders carry the surface separation responsibility."]

---

## Color Tokens

### Base
```
background:        [YOUR PROJECT: Page/screen background value]
foreground:        [YOUR PROJECT: Primary text on background]
```

### Surfaces
```
surface-1:         [YOUR PROJECT: Primary card or panel surface]
surface-2:         [YOUR PROJECT: Nested surface inside surface-1]
surface-3:         [YOUR PROJECT: Deeply nested or subtle tonal surface — remove if not needed]
surface-inverse:   [YOUR PROJECT: Inverted surface for high-contrast situations]
```

### Text
```
text-primary:      [YOUR PROJECT: Primary content text]
text-secondary:    [YOUR PROJECT: Lower-priority or secondary content text]
text-muted:        [YOUR PROJECT: Deemphasized text, metadata — verify WCAG AA contrast before use at body size]
text-inverse:      [YOUR PROJECT: Text on inverted background surfaces]
text-on-primary:   [YOUR PROJECT: Text or icon on primary action color]
```

### Borders
```
border-subtle:     [YOUR PROJECT: Barely visible structural separation]
border-default:    [YOUR PROJECT: Standard component border]
border-strong:     [YOUR PROJECT: Emphasis borders, active states, focus rings]
```

### Action / Brand
```
primary:           [YOUR PROJECT: Primary button and action background]
primary-hover:     [YOUR PROJECT: Primary hover state]
primary-foreground:[YOUR PROJECT: Text or icon on primary action background]
```

### Accent (remove if product uses no secondary brand color)
```
accent:            [YOUR PROJECT: Secondary brand or supporting action color]
accent-soft:       [YOUR PROJECT: Muted/tonal version for backgrounds and tags]
accent-foreground: [YOUR PROJECT: Text or icon on accent background]
```

### Status
```
success:           [YOUR PROJECT: Success color]
success-soft:      [YOUR PROJECT: Muted success for backgrounds/badges]
success-foreground:[YOUR PROJECT: Text on success background]

warning:           [YOUR PROJECT: Warning color]
warning-soft:      [YOUR PROJECT: Muted warning]
warning-foreground:[YOUR PROJECT: Text on warning background]

danger:            [YOUR PROJECT: Danger/error color]
danger-soft:       [YOUR PROJECT: Muted danger]
danger-foreground: [YOUR PROJECT: Text on danger background]

info:              [YOUR PROJECT: Info color]
info-soft:         [YOUR PROJECT: Muted info]
info-foreground:   [YOUR PROJECT: Text on info background]
```

Status colors are functional only. Do not use them for non-status decoration.

---

## Typography Tokens

```
font-sans:    [YOUR PROJECT: Primary sans-serif family stack]
font-mono:    [YOUR PROJECT: Monospace family for code, IDs, numeric values]

text-display: [YOUR PROJECT: size / line-height / weight — for largest display moments]
text-h1:      [YOUR PROJECT: size / line-height / weight — page-level heading]
text-h2:      [YOUR PROJECT: size / line-height / weight — section heading]
text-h3:      [YOUR PROJECT: size / line-height / weight — subsection heading]
text-body:    [YOUR PROJECT: size / line-height / weight — standard body reading text]
text-small:   [YOUR PROJECT: size / line-height / weight — help text, captions]
text-label:   [YOUR PROJECT: size / line-height / weight — form labels, button text, tab labels]
text-metadata:[YOUR PROJECT: size / line-height / weight — timestamps, secondary identifiers]
```

---

## Spacing Scale

Base unit: [YOUR PROJECT: 4px recommended]

```
space-1:  [YOUR PROJECT: value — e.g., 4px]
space-2:  [YOUR PROJECT: value — e.g., 8px]
space-3:  [YOUR PROJECT: value — e.g., 12px]
space-4:  [YOUR PROJECT: value — e.g., 16px]
space-5:  [YOUR PROJECT: value — e.g., 20px]
space-6:  [YOUR PROJECT: value — e.g., 24px]
space-8:  [YOUR PROJECT: value — e.g., 32px]
space-10: [YOUR PROJECT: value — e.g., 40px]
space-12: [YOUR PROJECT: value — e.g., 48px]
space-16: [YOUR PROJECT: value — e.g., 64px]
space-20: [YOUR PROJECT: value — e.g., 80px]
space-24: [YOUR PROJECT: value — e.g., 96px]
```

---

## Radius Scale

```
radius-none: 0
radius-xs:   [YOUR PROJECT: value]
radius-sm:   [YOUR PROJECT: value]
radius-md:   [YOUR PROJECT: value]
radius-lg:   [YOUR PROJECT: value]
radius-xl:   [YOUR PROJECT: value]
radius-full: [YOUR PROJECT: value — 9999px or 50%]
```

Component radius usage:
- Buttons: [YOUR PROJECT: which radius]
- Cards: [YOUR PROJECT: which radius]
- Inputs: [YOUR PROJECT: which radius]
- Badges/Tags: [YOUR PROJECT: which radius]
- Modals: [YOUR PROJECT: which radius]

---

## Shadow Scale

```
shadow-none: none
shadow-xs:   [YOUR PROJECT: barely perceptible, for subtle card separation]
shadow-sm:   [YOUR PROJECT: standard card or panel elevation]
shadow-md:   [YOUR PROJECT: popover, dropdown, contextual panel]
shadow-lg:   [YOUR PROJECT: modal, dialog, drawer elevation]
```

Usage rule: Default cards use border separation, not shadows. Shadows reserved for overlays, dropdowns, modals, drawer panels.

---

## Motion Tokens

```
duration-fast:     [YOUR PROJECT: micro-interactions, e.g., 100ms]
duration-base:     [YOUR PROJECT: standard transitions, e.g., 160ms]
duration-slow:     [YOUR PROJECT: heavier transitions, e.g., 240ms]
easing-standard:   [YOUR PROJECT: default easing]
easing-emphasized: [YOUR PROJECT: for larger movements]
easing-decelerate: [YOUR PROJECT: elements entering screen]
easing-accelerate: [YOUR PROJECT: elements leaving screen]
```

---

## Z-Index Scale

```
z-base:     [YOUR PROJECT: e.g., 0]
z-raised:   [YOUR PROJECT: e.g., 10]
z-dropdown: [YOUR PROJECT: e.g., 100]
z-sticky:   [YOUR PROJECT: e.g., 200]
z-overlay:  [YOUR PROJECT: e.g., 300]
z-modal:    [YOUR PROJECT: e.g., 400]
z-toast:    [YOUR PROJECT: e.g., 500]
z-tooltip:  [YOUR PROJECT: e.g., 600]
```

---

## Breakpoint Tokens

```
bp-xs: 320px
bp-sm: 375px
bp-md: 768px
bp-lg: 1024px
bp-xl: 1440px
```

---

## Component State Tokens

```
[YOUR PROJECT: State-specific overrides for interactive components.
Examples:
input-error-border:          value
button-primary-disabled-bg:  value
input-focus-border:          value
Define only the state tokens the project actually needs.]
```

---

## Theme / Dark Mode Tokens

[YOUR PROJECT: Either:
1. List dark mode values for all color tokens above
2. OR write: "Light mode only. Dark mode deferred to a later release."

Do not leave this section blank — explicitly state the dark mode decision.]

---

## Focus Tokens

```
focus-ring:        [YOUR PROJECT: focus outline color — must not be transparent or 0 opacity]
focus-ring-width:  [YOUR PROJECT: focus outline width, e.g., 2px]
focus-ring-offset: [YOUR PROJECT: focus ring offset, e.g., 2px]
```

These tokens are never optional. Keyboard focus must be visible.

---

## Data Visualization Tokens

[YOUR PROJECT: Required if the product includes charts, graphs, or data-driven displays.
```
data-series-1: [value]
data-series-2: [value]
data-series-3: [value]
data-series-4: [value]
data-neutral:  [value]
data-highlight:[value]
chart-axis:    [value]
chart-grid:    [value]
chart-label:   [value]
```
If the product has no data visualizations, write: "No data visualization tokens required — product has no charts or data displays."]

---

## Implementation Notes

[YOUR PROJECT: Stack-specific information on how tokens are delivered.
Example: "CSS custom properties in a global :root block. Tailwind theme extension for utility class generation. Token file: src/styles/tokens.css."]

---

## Token Usage Rules

[YOUR PROJECT: Project-specific rules, edge cases, and exceptions.
Example:
- Status colors (danger, warning, success, info) are reserved for status communication only — not used for branding or decoration
- Add a new token to this file before implementing any value not already covered
- `text-muted` is not used at body size for primary content — only for metadata and secondary labels where contrast has been verified]
