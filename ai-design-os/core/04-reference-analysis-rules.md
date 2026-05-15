# 04 — Reference Analysis Rules

## Purpose

Define how external references must be analyzed and translated into design principles — without copying visual identity, colors, layouts, or proprietary patterns.

---

## When To Read

- Reference analysis tasks (Task 3).
- Visual direction creation tasks that involve references (Task 4).
- Any task where a reference is provided as input material.

---

## Required Inputs

- Reference material: URL, screenshot, CSS snippet, design file, UI kit, or component library.
- Project's `product-brief.md` — to contextualize relevance of the reference.

If `product-brief.md` is missing: create a minimal brief covering product type and target users before analyzing any reference. Do not analyze references without product context — analysis without context produces principles that may be irrelevant or contradictory to the product's needs.

---

## Reference Analysis Principles

1. A reference is a starting point for understanding quality, not a source to copy.
2. The correct process: observe → explain why it works → extract principles → translate for this product.
3. Every extracted principle must be re-evaluated for fit with the product's context and users.
4. A reference that is excellent for one product type may be wrong for another.
5. Multiple references should complement each other — they should not produce a mixed clone.
6. Reference quality must be adapted, not adopted.
7. When multiple references conflict on a design dimension — density, visual personality, layout model, surface style, typography approach, navigation model, or color strategy — do not average them into a blended middle. Record the conflict explicitly in `reference-analysis.md`. Resolve it by deferring to product type, target users, primary user goals, and `product-brief.md`. The product brief takes priority over any reference.

---

## Supported Reference Types

This file applies when analyzing any of the following:

- Websites and web applications
- SaaS products and dashboards
- Mobile apps (iOS, Android, cross-platform)
- Desktop apps (macOS, Windows, Electron, native)
- Landing pages and marketing sites
- Admin panels and internal tools
- Screenshots (static or annotated)
- CSS snippets and stylesheets
- Figma files and design files
- UI kits and component libraries
- Design systems (Material Design, Carbon, Ant, Primer, etc.)

**Design system references:** Extract structural and naming principles, not visual values. Component taxonomy, token naming conventions, and hierarchy patterns are valid to study. Specific color values, spacing values, and brand decisions are not to be copied.

---

## Anti-Copying Rules

Do not copy any of the following from references. Copying is defined as reproducing something directly without translation into a product-specific principle.

1. **Exact CSS** — Do not inspect-and-copy CSS values, class names, or style declarations.
2. **Exact colors** — Do not copy hex, RGB, HSL, or any specific color values.
3. **Exact layout structure** — Do not reproduce grid dimensions, sidebar widths, or column configurations without independent justification for this product.
4. **Exact brand identity** — Do not copy the reference's visual personality, art direction, or identity signals as a whole.
5. **Logo, illustrations, iconography** — Do not copy branded or proprietary visual assets.
6. **Proprietary component designs** — Do not reproduce the visual treatment of specific UI components.
7. **Exact copywriting** — Do not copy labels, microcopy, taglines, or error messages.
8. **Clone-by-inspect behavior** — Do not use browser developer tools to extract and replicate visual values. Inspect only to understand structure and behavior, not to copy measurements.

**Violation consequence:** Using copied visual values without adaptation means the project has no independent design system. It also creates IP risk and produces UI that will break when the reference product updates.

---

## Reference Analysis Dimensions

Analyze every reference across all applicable dimensions below. Record findings and extracted principles — not copied values.

### 1. Product Type And Target User Fit
- What type of product is this?
- Who uses it and in what context?
- Is this reference relevant to this project's users and primary tasks?
- What is context-specific to this reference that does not transfer?

### 2. Visual Personality
- What is the emotional character of this product?
- How do density, color, form language, and typographic choices contribute to that character?
- Is this personality appropriate for the product being built?

### 3. Information Architecture
- How is information organized and prioritized?
- What is the hierarchy between primary, secondary, and tertiary content?
- How does the structure guide the user to the next action?

### 4. Navigation Model
- What navigation pattern is used: sidebar, topbar, bottom nav, tabs, command menu, breadcrumbs?
- How does navigation communicate the user's current location?
- How does the active state appear?
- How does navigation behave on smaller screens?

### 5. Layout Model
- What layout model does each major screen use?
- How are panels, grids, and content areas organized?
- How does the layout reinforce content hierarchy?
- What makes the layout appropriate for this content type and user task?

### 6. Typography Hierarchy
- How are display, heading, body, label, and metadata levels distinguished?
- What role do weight, size, and contrast play in creating hierarchy?
- How does typography handle dense data vs. editorial content?
- How readable is text at small sizes and on mobile?

### 7. Color Strategy
- How many distinct color roles are used?
- How are status, action, neutral, and brand colors differentiated?
- How restrained or expressive is the color usage?
- How is contrast applied — for hierarchy, accessibility, or emphasis?

### 8. Surface And Card System
- How are background, surface, card, and panel layers distinguished?
- What creates separation between layers: borders, shadows, tonal difference, opacity?
- What radius and shadow treatment is used, and what does it communicate about elevation?

### 9. Spacing Rhythm
- What is the underlying spacing cadence — tight, balanced, or airy?
- How does spacing change between page sections, card contents, and list items?
- How does spacing adapt on mobile?

### 10. Density
- How much content is visible without scrolling on primary screens?
- Is density consistent or varied by page type?
- Does the density match the user's task intensity?

### 11. Border, Radius, And Shadow Treatment
- What radius is applied and is it consistent across component types or varied by role?
- Are shadows used for structural elevation or decoration?
- How do borders contribute to surface separation?

### 12. Interaction States
- Are hover, active, focus, and disabled states visible and differentiated?
- How are loading, empty, and error states handled?
- Does interaction feedback feel immediate and clear?

### 13. Responsive Behavior
- How does navigation change at smaller breakpoints?
- How do grids and panels collapse?
- How are tables or data displays handled on mobile?
- What content is deprioritized on smaller screens?

### 14. Accessibility Clues
- Are keyboard interactions visible?
- Does contrast appear sufficient across text sizes?
- Are focus states visible?
- Is status communicated beyond color alone?

### 15. Content And Microcopy Style
- How specific and purposeful is the language?
- How are empty states, error states, and help text written?
- Does microcopy contribute to the product's personality?

### 16. What Makes It Feel Premium Or Production-Grade
- List specific observable qualities that create a sense of quality.
- These are candidate principles for adaptation.

### 17. What Should Not Be Copied
- Identify elements that are proprietary, brand-specific, context-specific, or inappropriate for the target product.

---

## Required Output Format

For every reference analyzed, produce output in this format and save to `/docs/references/reference-analysis.md` (create or append).

```
# Reference Analysis

## Reference Metadata
- Reference name:
- Source (URL, screenshot path, or file name):
- Product type:
- Why this reference was selected:

## What Works
[What is effective about this reference? List specific, observable qualities.]

## Why It Works
[Explain the design reasoning behind what works. Connect to principles, not aesthetics.]

## What Should Not Be Copied
[Explicit list: proprietary, brand-specific, or context-inappropriate elements.]

## Extracted Principles
[Numbered list of reusable, product-agnostic principles derived from this reference.]

## Reference Conflicts
[If multiple references are being analyzed together and they disagree on a design dimension — density, visual personality, layout model, surface style, navigation approach, typography, or color strategy — document the conflict here. State which direction wins and why, based on product type, target users, and `product-brief.md`. If only one reference is being analyzed, write: "Single reference — no conflicts."]

## Adaptation For This Product
[How should these principles be applied specifically to this project? Connect each principle to the product context from product-brief.md.]

## Token Implications
- Background and surface approach:
- Border approach:
- Shadow approach:
- Radius approach:
- Color strategy:
- Typography approach:
- Spacing approach:
- Accent usage:
- Motion feel:

## Typography Implications
[What typography patterns suggest about hierarchy, density, and type role treatment for this project.]

## Component Implications
[What structural or behavioral component patterns from this reference are relevant to this project's component needs.]

## Layout Implications
[What layout models or structural decisions from this reference are candidates for this project.]

## Interaction Implications
[What state patterns, feedback behaviors, or interaction quality signals from this reference should inform this project.]

## Responsive Implications
[What responsive behavior from this reference can inform how this project handles breakpoints.]

## Accessibility Implications
[What accessibility patterns observed in the reference should be considered for this project.]

## Anti-Copying Boundaries
[Explicit statement: what must not be used directly from this reference under any circumstances.]

## Open Questions
[Unresolved questions about this reference or its relevance to this project.]
```

---

## Adaptation Rules

1. Every extracted principle must be evaluated against `product-brief.md` before being applied.
2. Principles that fit the product context are candidates for `visual-direction.md`.
3. Token implications inform `design-tokens.md` creation — as directional guidance, not as copied values.
4. Component implications inform `component-map.md` — as structural insights, not as copied visual patterns.
5. Layout implications inform `page-architecture.md` — as layout model candidates.
6. A reference is valid input even when most of it does not apply. Extract what fits; explicitly discard what does not.

**Critical rule:** References are inputs to `visual-direction.md`. References are not the design direction by themselves. The agent must synthesize multiple references against the product context — not adopt one reference's direction wholesale.

---

## Quality Gate

Before marking a reference analysis task complete:

- [ ] All applicable analysis dimensions have been completed.
- [ ] No exact CSS, color values, or brand-specific decisions appear in the output.
- [ ] Extracted principles are stated as principles, not as copied values.
- [ ] Adaptation section connects each principle to the specific product context.
- [ ] Token, component, layout, interaction, responsive, and accessibility implications are documented.
- [ ] Anti-copying boundaries are explicitly stated.
- [ ] Output has been saved to `/docs/references/reference-analysis.md`.
- [ ] Missing `product-brief.md` has been flagged if absent.
