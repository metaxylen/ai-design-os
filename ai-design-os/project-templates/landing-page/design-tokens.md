# Design Tokens — [YOUR PROJECT: Product Name] Landing Page

**Template:** landing-page  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use

Landing page note: this token set is focused on marketing page needs. It is lighter than the full SaaS token set. If this product also has a web app, the landing page tokens should be derived from or consistent with the app token system — not a separate system.

---

## Token Philosophy

[YOUR PROJECT: How tokens express this landing page's visual direction. Example: "Tokens express a structured, credibility-forward marketing page. The palette is predominantly neutral with brand color appearing only on primary actions and key conversion moments. Typography tokens create the page hierarchy — scale and weight, not color, establish importance."]

---

## Color Tokens

### Base
```
background:         [YOUR PROJECT: Page background — typically white or very light neutral]
foreground:         [YOUR PROJECT: Primary body text]
```

### Surfaces (landing page section backgrounds)
```
surface-default:    [YOUR PROJECT: Section background — e.g., white]
surface-subtle:     [YOUR PROJECT: Alternate section background — e.g., very light gray for rhythm]
surface-dark:       [YOUR PROJECT: Dark section for contrast moments — e.g., testimonials]
```

### Text
```
text-primary:       [YOUR PROJECT: Primary heading and body text]
text-secondary:     [YOUR PROJECT: Subheadings, supporting text]
text-muted:         [YOUR PROJECT: Captions, metadata — verify WCAG AA at body size]
text-on-dark:       [YOUR PROJECT: Text on dark surface sections]
text-on-brand:      [YOUR PROJECT: Text on primary brand color backgrounds]
```

### Brand / Action
```
primary:            [YOUR PROJECT: Brand color — primary CTA background]
primary-hover:      [YOUR PROJECT: Hover state for primary CTA]
primary-foreground: [YOUR PROJECT: Text/icon on primary CTA]
```

### Accent (if applicable)
```
accent:             [YOUR PROJECT: Secondary brand color for pull-quotes, highlights]
accent-foreground:  [YOUR PROJECT: Text on accent]
```

### Borders
```
border-subtle:      [YOUR PROJECT: Section dividers — subtle]
border-default:     [YOUR PROJECT: Card borders where used]
```

---

## Typography Tokens

Landing page note: display sizes are larger here than in app contexts. Heading scale creates hierarchy that works on both desktop and mobile.

```
font-sans:       [YOUR PROJECT: Body and UI font]
font-display:    [YOUR PROJECT: Display heading font — may differ from body if brand supports it]
font-mono:       [YOUR PROJECT: Code or technical values if referenced on page]

text-display-xl: [YOUR PROJECT: Hero headline — e.g., 56px / 60px / 700 — desktop]
text-display-lg: [YOUR PROJECT: Section heroes — e.g., 40px / 48px / 700]
text-h1:         [YOUR PROJECT: Primary section headings — e.g., 32px / 40px / 600]
text-h2:         [YOUR PROJECT: Secondary headings — e.g., 24px / 32px / 600]
text-h3:         [YOUR PROJECT: Subsection headings — e.g., 18px / 24px / 600]
text-body-lg:    [YOUR PROJECT: Lead paragraph / intro text — e.g., 18px / 28px / 400]
text-body:       [YOUR PROJECT: Standard body — e.g., 16px / 24px / 400]
text-small:      [YOUR PROJECT: Captions, fine print — e.g., 14px / 20px / 400]
text-label:      [YOUR PROJECT: Button labels, nav — e.g., 15px / 20px / 500]
```

---

## Spacing Scale

```
space-1:  [YOUR PROJECT: 4px]
space-2:  [YOUR PROJECT: 8px]
space-3:  [YOUR PROJECT: 12px]
space-4:  [YOUR PROJECT: 16px]
space-6:  [YOUR PROJECT: 24px]
space-8:  [YOUR PROJECT: 32px]
space-10: [YOUR PROJECT: 40px]
space-12: [YOUR PROJECT: 48px]
space-16: [YOUR PROJECT: 64px]
space-20: [YOUR PROJECT: 80px]
space-24: [YOUR PROJECT: 96px]
space-32: [YOUR PROJECT: 128px — section vertical padding on desktop]
```

---

## Radius Scale

```
radius-none: 0
radius-sm:   [YOUR PROJECT: value]
radius-md:   [YOUR PROJECT: value — for cards and feature blocks]
radius-lg:   [YOUR PROJECT: value — for CTA blocks or feature illustrations]
radius-full: [YOUR PROJECT: pill shape — for tags and badges]
```

---

## Shadow Scale

Landing page note: use shadows sparingly. Feature cards and testimonial cards may use light shadows. Avoid decorative heavy shadows.

```
shadow-none: none
shadow-sm:   [YOUR PROJECT: subtle card elevation]
shadow-md:   [YOUR PROJECT: testimonial cards or feature block elevation]
```

---

## Motion Tokens

```
duration-fast:     [YOUR PROJECT: 100ms — hover transitions]
duration-base:     [YOUR PROJECT: 200ms — standard]
duration-scroll:   [YOUR PROJECT: 150ms — scroll-triggered section fades]
easing-standard:   [YOUR PROJECT: default easing]
easing-decelerate: [YOUR PROJECT: elements entering viewport]
```

---

## Breakpoint Tokens

```
bp-sm: 375px
bp-md: 768px
bp-lg: 1024px
bp-xl: 1440px
```

Landing page content max-width: [YOUR PROJECT: e.g., 1200px — define the max content container width]

---

## Focus Tokens

```
focus-ring:        [YOUR PROJECT: focus outline color — visible against both light and dark sections]
focus-ring-width:  [YOUR PROJECT: 2px]
focus-ring-offset: [YOUR PROJECT: 2px]
```

---

## Implementation Notes

[YOUR PROJECT: Stack-specific token delivery. Example: "Next.js + Tailwind. Tokens implemented as Tailwind theme extension in tailwind.config.js. CSS custom properties for any runtime-dynamic values (e.g., theme color overrides)."]

---

## Token Usage Rules

[YOUR PROJECT: Landing page specific rules. Example:
- Primary CTA color (`primary`) used only for the main conversion action — not for decorative elements
- `text-muted` verified at WCAG AA contrast before use — landing page visitors include people in varied environments
- Section background alternates: `surface-default` → `surface-subtle` → `surface-default`; `surface-dark` used once only
- No gradient values in any token — gradients require explicit visual-direction.md approval]
