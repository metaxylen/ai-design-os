# Design Tokens — [YOUR PROJECT: App Name]

**Template:** mobile-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use  
**Requires:** visual-direction.md must be complete

Mobile-app token note: this template uses the same structure as the SaaS template but includes mobile-specific reminders. Minimum touch target sizes are enforced through spacing and component design, not tokens — document the sizing rules in Token Usage Rules.

---

## Token Philosophy

[YOUR PROJECT: How tokens express this mobile app's visual direction. Example: "Tokens express a high-contrast, touch-optimized visual system. Spacing values are generous by default — minimum component height is set at space-11 (44px) to meet touch target requirements. Color tokens are status-forward. Motion tokens are minimal and respect platform conventions."]

---

## Color Tokens

### Base
```
background:        [YOUR PROJECT: App background — typically system background on iOS/Android]
foreground:        [YOUR PROJECT: Primary text on background]
```

### Surfaces
```
surface-1:         [YOUR PROJECT: Card or list item surface]
surface-2:         [YOUR PROJECT: Nested surface or grouped section background]
surface-inverse:   [YOUR PROJECT: Inverted surface — e.g., for dark nav bar]
```

### Text
```
text-primary:      [YOUR PROJECT: Primary content text — verify contrast in bright light scenarios]
text-secondary:    [YOUR PROJECT: Secondary text]
text-muted:        [YOUR PROJECT: Metadata level — verify WCAG AA contrast; avoid at small sizes]
text-inverse:      [YOUR PROJECT: Text on dark/inverted surfaces]
text-on-primary:   [YOUR PROJECT: Text on primary action color]
```

### Borders
```
border-subtle:     [YOUR PROJECT: Structural separation]
border-default:    [YOUR PROJECT: Standard separator]
border-strong:     [YOUR PROJECT: Active state or emphasis]
```

### Action / Brand
```
primary:           [YOUR PROJECT: Primary button and CTA background]
primary-hover:     [YOUR PROJECT: Active/pressed state (mobile uses active, not hover)]
primary-foreground:[YOUR PROJECT: Text on primary]
```

### Status (critical for mobile — communicate meaning clearly)
```
success:           [YOUR PROJECT: Complete, confirmed, healthy]
success-soft:      [YOUR PROJECT: Muted success for backgrounds]
success-foreground:[YOUR PROJECT: Text on success]

warning:           [YOUR PROJECT: In progress, attention needed]
warning-soft:      [YOUR PROJECT: Muted warning]
warning-foreground:[YOUR PROJECT: Text on warning]

danger:            [YOUR PROJECT: Error, overdue, critical]
danger-soft:       [YOUR PROJECT: Muted danger]
danger-foreground: [YOUR PROJECT: Text on danger]

info:              [YOUR PROJECT: New, informational]
info-soft:         [YOUR PROJECT: Muted info]
info-foreground:   [YOUR PROJECT: Text on info]
```

---

## Typography Tokens

Mobile minimums: body text ≥14px, labels ≥12px, nothing below 11px.

```
font-sans:     [YOUR PROJECT: Primary font — system font recommended for mobile performance]
font-mono:     [YOUR PROJECT: Monospace for IDs, codes, numeric values]

text-display:  [YOUR PROJECT: Large heading moments — screen titles, splash]
text-h1:       [YOUR PROJECT: Primary screen heading — minimum 20px recommended]
text-h2:       [YOUR PROJECT: Section heading — minimum 17px]
text-h3:       [YOUR PROJECT: Subsection heading — minimum 15px]
text-body:     [YOUR PROJECT: Body text — minimum 15px on mobile; 16px prevents iOS auto-zoom on inputs]
text-small:    [YOUR PROJECT: Help text, captions — minimum 13px]
text-label:    [YOUR PROJECT: Button labels, tab labels, form labels — minimum 13px]
text-metadata: [YOUR PROJECT: Timestamps, secondary IDs — minimum 11px]
```

---

## Spacing Scale

Mobile note: minimum interactive height = 44px. Ensure spacing supports touch targets.

```
space-1:  [YOUR PROJECT: 4px]
space-2:  [YOUR PROJECT: 8px]
space-3:  [YOUR PROJECT: 12px]
space-4:  [YOUR PROJECT: 16px]
space-5:  [YOUR PROJECT: 20px]
space-6:  [YOUR PROJECT: 24px]
space-8:  [YOUR PROJECT: 32px]
space-10: [YOUR PROJECT: 40px]
space-11: [YOUR PROJECT: 44px — minimum touch target]
space-12: [YOUR PROJECT: 48px]
space-16: [YOUR PROJECT: 64px]
```

---

## Radius Scale

```
radius-none: 0
radius-xs:   [YOUR PROJECT: value]
radius-sm:   [YOUR PROJECT: value]
radius-md:   [YOUR PROJECT: value]
radius-lg:   [YOUR PROJECT: value]
radius-xl:   [YOUR PROJECT: value — for cards and sheets]
radius-full: [YOUR PROJECT: pill shape]
```

---

## Shadow Scale

Mobile note: use sparingly — shadows less effective on OLED screens.

```
shadow-none: none
shadow-sm:   [YOUR PROJECT: for elevated cards]
shadow-md:   [YOUR PROJECT: for popovers and context menus]
shadow-lg:   [YOUR PROJECT: for bottom sheets and modals]
```

---

## Motion Tokens

Mobile note: follow platform conventions. Avoid custom timing that conflicts with iOS/Android system transitions.

```
duration-fast:     [YOUR PROJECT: micro-feedback — 100ms]
duration-base:     [YOUR PROJECT: standard — 200ms]
duration-slow:     [YOUR PROJECT: sheet entry/exit — 300ms]
easing-standard:   [YOUR PROJECT: default curve]
easing-decelerate: [YOUR PROJECT: elements entering — match platform spring if native]
easing-accelerate: [YOUR PROJECT: elements leaving]
```

---

## Z-Index Scale

```
z-base:     [YOUR PROJECT: 0]
z-overlay:  [YOUR PROJECT: 100]
z-modal:    [YOUR PROJECT: 200]
z-toast:    [YOUR PROJECT: 300]
```

---

## Breakpoint Tokens

```
bp-sm: 375px
bp-md: 390px
bp-lg: 430px
```

Mobile app note: breakpoints are less critical than on web. Define primary screen size (375px standard iPhone) and larger variants.

---

## Component State Tokens

```
[YOUR PROJECT: State-specific tokens.
Mobile-specific additions:
  button-active-bg: [pressed state — replaces hover for mobile]
  list-item-pressed-bg: [tap feedback for list rows]
  Define token-level state differentiation for interactive elements.]
```

---

## Theme / Dark Mode Tokens

[YOUR PROJECT: Mobile apps commonly support system dark mode. Either:
1. List dark mode values for all color tokens
2. OR write: "Dark mode deferred. System dark mode not supported in v1."]

---

## Focus Tokens

Mobile note: focus rings are primarily for keyboard/accessibility navigation on connected keyboards.

```
focus-ring:        [YOUR PROJECT: focus outline color]
focus-ring-width:  [YOUR PROJECT: 2px recommended]
focus-ring-offset: [YOUR PROJECT: 2px]
```

---

## Data Visualization Tokens

[YOUR PROJECT: Required if app includes any charts or data displays. Otherwise: "No data visualization tokens required."]

---

## Implementation Notes

[YOUR PROJECT: Stack-specific token delivery. Example: "React Native: tokens delivered as JavaScript constants in src/theme/tokens.ts. Colors as hex strings. Spacing as numeric pixel values (React Native uses unitless numbers). Typography as StyleSheet definitions."]

---

## Token Usage Rules

[YOUR PROJECT: Mobile-specific rules. Example:
- Minimum interactive element height: 44px (space-11) — never smaller
- `text-muted` only used at text-small size or above; never at text-metadata size for critical information
- Active/pressed state replaces hover everywhere on mobile — no hover states in tap interactions
- Form input font-size minimum: 16px (text-body) — smaller triggers iOS Safari auto-zoom]
