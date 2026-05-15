# 14 — Design Review Checklist

## Purpose

Quality gate that audits completed or in-progress UI across all design and engineering dimensions. This file audits against the rules defined in individual skill files — it does not re-teach those rules.

---

## When To Read

- After any significant implementation task.
- On redesign or cleanup tasks — audit before and after changes.
- Before marking any UI task as complete.
- After a responsive pass, accessibility pass, or anti-AI-aesthetic review.

---

## Required Inputs

- The implementation to be reviewed.
- Relevant project files: `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md` (use whichever exist).
- All relevant Phase 1 skill files.

---

## Severity Levels

**Critical**
Breaks usability, accessibility, or product correctness. Triggers a do-not-ship condition. Must be fixed before shipping.

**Major**
Significantly degrades quality, consistency, or user experience. Should be fixed before shipping unless a documented exception exists.

**Minor**
Noticeable quality issue but does not block core functionality. Should be addressed in the current or next polish pass.

---

## Do-Not-Ship Conditions

Any of the following triggers a do-not-ship decision. The implementation must be fixed before marking the task complete.

1. Missing primary navigation on a multi-screen product.
2. No visible primary action on a key action screen.
3. Hardcoded visual system (colors, spacing, radius) where project tokens exist.
4. Missing loading, empty, and error states on data-driven UI sections.
5. No keyboard focus state on interactive elements.
6. Desktop-only layout with no defined mobile behavior.
7. Severe contrast or readability failure affecting primary content.
8. Duplicate component system introduced alongside existing components.
9. AI-generic visual treatment that contradicts the project's `visual-direction.md`.
10. Implementation uses invented visual, layout, token, or component decisions while required project files exist but were not read or applied — regardless of whether assumptions were marked as temporary.

---

## Review Categories and Pass / Fail Checklist

---

### 1. Product Fit

Rules governed by: `02-design-principles.md`, `product-brief.md`

- [ ] Does the UI match the stated product type and target users?
- [ ] Does the layout and interaction model serve the primary user goals?
- [ ] Does the screen communicate its purpose in under five seconds?
- [ ] Does the primary action match what users are expected to do on this screen?

**Fail condition:** Screen purpose is unclear, or the layout does not serve the stated user goals.

---

### 2. Visual Identity

Rules governed by: `03-anti-ai-aesthetic-rules.md`, `visual-direction.md`

- [ ] Does the UI match the project's `visual-direction.md`?
- [ ] Is the visual treatment product-specific — not generic SaaS, not template-like?
- [ ] Are forbidden patterns from `03-anti-ai-aesthetic-rules.md` absent?
- [ ] Is the visual tone consistent across components and sections?

**Fail condition:** UI looks generic, AI-generated, or contradicts `visual-direction.md`.

---

### 3. Information Architecture

Rules governed by: `02-design-principles.md`

- [ ] Is the primary action visible and dominant on the screen?
- [ ] Is navigation present and functional?
- [ ] Are sections grouped logically with clear visual relationships?
- [ ] Does the screen answer all five questions from the screen communication test?
- [ ] Is content prioritized — most important information is most prominent?

**Fail condition:** Primary action is buried. Navigation is absent or decorative. Screen purpose is ambiguous.

---

### 4. Layout

Rules governed by: `08-layout-system-rules.md`

- [ ] Is the layout model appropriate for this page type?
- [ ] Is the page more than unstructured vertical stacking?
- [ ] Is spacing consistent and grid-aligned?
- [ ] Is this page visually distinguishable from other pages in the product?
- [ ] Are sections clearly delineated with appropriate grouping?

**Fail condition:** Flat vertical stacking. Every page uses the same layout regardless of purpose.

---

### 5. Typography

Rules governed by: `07-typography-rules.md`

- [ ] Is the type hierarchy clear — headings, body, labels, and metadata are visually distinct?
- [ ] Are semantic type tokens used from `design-tokens.md`?
- [ ] Is line-height sufficient for readable body text?
- [ ] Does text behave correctly at mobile breakpoints — no overflow, no illegible sizing?
- [ ] Are dashboard numbers or data values given appropriate numeric hierarchy?

**Fail condition:** All text appears the same size or weight. Labels and metadata are indistinguishable from body text.

---

### 6. Color / Token Usage

Rules governed by: `06-design-token-rules.md`, `design-tokens.md`

- [ ] Are semantic tokens used for all color values?
- [ ] Are there no hardcoded hex, RGB, or raw framework utility classes that bypass the project token system?
- [ ] Is contrast sufficient for primary text, labels, and interactive elements?
- [ ] Are status colors (success, warning, danger, info) used semantically — not decoratively?
- [ ] Is accent color used purposefully — not applied broadly as a decoration?

**Fail condition:** Hardcoded colors in components. Token system exists but is not used. Insufficient contrast on primary content.

---

### 7. Component Reuse

Rules governed by: `09-component-architecture-rules.md`, `component-map.md`

- [ ] Are existing components reused rather than re-implemented inline?
- [ ] Are component variants consistent with `component-map.md`?
- [ ] Are there no duplicate component systems (e.g., two different button implementations)?
- [ ] Are new components added to `component-map.md` if created during this task?

**Fail condition:** New button, card, or input pattern written inline when an existing component exists. Duplicate visual systems present.

---

### 8. Interaction States

Rules governed by: `10-interaction-state-rules.md`

- [ ] Default, hover, active, focus-visible, and disabled states are present on all interactive elements.
- [ ] Loading state is implemented on all async sections (skeleton or spinner with appropriate choice).
- [ ] Empty state is implemented on all data-driven sections — explains state and provides next action.
- [ ] Error state is implemented on all data-driven sections — explains error and provides recovery action.
- [ ] Success state is implemented where relevant.
- [ ] Selected, expanded/collapsed, and dragging states are present where applicable.
- [ ] Form validation error state includes visible text connected to the field.

**Fail condition:** Interactive elements have only a default state. Data sections have no loading, empty, or error states.

---

### 9. Responsive Behavior

Rules governed by: `11-responsive-design-rules.md`

- [ ] UI is functional at 320px, 375px, 768px, 1024px, and 1440px.
- [ ] No horizontal overflow at any breakpoint.
- [ ] Navigation adapts appropriately (sidebar → drawer or bottom nav on mobile).
- [ ] Grids collapse appropriately at smaller breakpoints.
- [ ] Tables have a mobile strategy — scroll, stack, or condensed columns.
- [ ] Touch targets are sufficient on mobile — minimum 44px.
- [ ] Modals and dialogs fit mobile screen dimensions.
- [ ] Content priority is re-evaluated on mobile — not simply a shrunk desktop.

**Fail condition:** Desktop-only layout. Horizontal overflow on mobile. Navigation missing on mobile.

---

### 10. Accessibility

Rules governed by: `12-accessibility-rules.md`

- [ ] Semantic HTML is used — headings, buttons, links, lists, forms are correct elements.
- [ ] Buttons are used for actions, anchors for navigation — no div-as-button.
- [ ] All form inputs have associated labels.
- [ ] Error messages are connected to their inputs.
- [ ] Focus states are visible and not removed.
- [ ] Keyboard navigation works: tab order is logical, interactive elements are reachable.
- [ ] Dialogs and menus manage focus correctly.
- [ ] Icon-only buttons have `aria-label`.
- [ ] Status is not communicated by color alone — text or icon also used.
- [ ] Color contrast meets WCAG AA minimum for all primary text and interactive elements.

**Fail condition:** No visible focus states. Form inputs without labels. Div or span used as button. Status communicated only by color.

---

### 11. Content / Microcopy

Rules governed by: `02-design-principles.md`, `01-agent-operating-protocol.md` (quality bar), and `15-final-polish-rules.md`.

- [ ] All visible text is purposeful and specific to this product.
- [ ] Empty states explain the context and provide a next action — not just "No data."
- [ ] Error states explain the issue and offer recovery — not just "Something went wrong."
- [ ] Button labels describe the action — not just "Submit" or "Click here."
- [ ] Loading states communicate what is loading.
- [ ] No placeholder text remaining in production output.

**Fail condition:** Generic error and empty state copy. Placeholder text in final output.

---

### 12. Production Polish

Rules governed by: `03-anti-ai-aesthetic-rules.md`, `01-agent-operating-protocol.md` (quality bar), and `15-final-polish-rules.md`.

- [ ] Spacing is consistent — no arbitrary gaps between sections or elements.
- [ ] Alignment is precise — elements align to a consistent grid or baseline.
- [ ] Visual noise is controlled — no unnecessary decorative elements.
- [ ] Icons are consistent in style and size.
- [ ] No unfinished or placeholder UI visible in the output.
- [ ] Interactions are smooth — transition timing is appropriate and not jarring.

**Fail condition:** Misaligned elements. Inconsistent spacing. Visible placeholder UI.

---

### 13. Anti-AI-Aesthetic Compliance

Rules governed by: `03-anti-ai-aesthetic-rules.md`

- [ ] No generic purple/blue gradient as primary visual treatment.
- [ ] No random glowing blobs or radial gradient decorations.
- [ ] No fake glassmorphism panels.
- [ ] No over-rounded identical card grids across all pages.
- [ ] No huge hero section with vague copy on application screens.
- [ ] No decorative icons without purpose.
- [ ] No meaningless dashboard metrics without label, value, and context.
- [ ] AI smell diagnostic from `03-anti-ai-aesthetic-rules.md` passes all structure and identity checks.

**Fail condition:** Any hard forbidden pattern from `03-anti-ai-aesthetic-rules.md` is present.

---

### 14. Project-Specific File Compliance

- [ ] Implementation uses `visual-direction.md` as the binding visual reference.
- [ ] Implementation uses `design-tokens.md` for all visual values.
- [ ] Implementation uses `component-map.md` to guide component decisions.
- [ ] Implementation uses `page-architecture.md` for layout structure.
- [ ] Any design decisions made without project files are marked `[TEMPORARY ASSUMPTION]`.

**Fail condition:** Project files exist but were not applied. Invented visual system used instead of project tokens.

---

### 15. Stack / Implementation Consistency

Rules governed by: `13-frontend-implementation-rules.md`

- [ ] File organization follows project conventions.
- [ ] Component files are small and composable — no massive page files.
- [ ] Business logic is separated from presentation components.
- [ ] No parallel visual systems introduced.
- [ ] No new CSS patterns introduced that duplicate existing token-based styling.

**Fail condition:** Monolithic page files with inline visual systems. Parallel styling approach introduced alongside existing token system.

---

## Remediation Format

For every issue found during review, record:

```
Issue:
[Describe the specific problem]

Severity:
[Critical | Major | Minor]

Evidence:
[Where exactly — file, component, page, breakpoint]

Related Rule File:
[Which skill file governs this rule]

Recommended Fix:
[Specific action to resolve the issue]

Required Before Shipping:
[Yes | No]
```

---

## Design Review Report Format

Produce a review report in this format:

```
# Design Review Report

## Review Summary
[One to three sentences: what was reviewed, overall quality assessment]

## Critical Issues
[List each critical issue using the remediation format above. If none: "None."]

## Major Issues
[List each major issue using the remediation format above. If none: "None."]

## Minor Issues
[List each minor issue using the remediation format above. If none: "None."]

## Passed Checks
[List review categories that passed with no issues]

## Do-Not-Ship Triggered
[Yes — list triggered conditions | No]

## Required Fixes
[Numbered list of changes that must be made before shipping]

## Recommended Follow-ups
[Numbered list of improvements recommended for the next pass]
```

Save the report to: `/docs/reviews/design-review.md`

---

## Quality Gate

This checklist is complete when:

- [ ] All 15 review categories have been evaluated.
- [ ] All critical issues are documented with remediation format.
- [ ] All major issues are documented with remediation format.
- [ ] Do-not-ship conditions have been checked — none triggered, or triggered conditions are logged and assigned for fix.
- [ ] A design review report has been produced.
- [ ] Required fixes have been completed if any do-not-ship condition was triggered.
