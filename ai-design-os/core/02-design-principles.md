# 02 — Design Principles

## Purpose

Universal design reasoning principles that apply across all tasks, all project types, and all platforms. Use these as the primary decision framework when choosing between design options.

These are reasoning rules, not visual style rules. They do not define colors, tokens, components, or layouts. They define how to think about design decisions.

---

## When To Read

Read for all design and UI tasks. Apply as a reasoning anchor throughout the task. Return to these principles when facing a design decision without a clear project-specific answer.

---

## Required Inputs

None. These principles are universal and require no project-specific files.

---

## Core Principles

### 1. Clarity Before Decoration

The user must understand the screen before noticing the visual treatment.

- If a user cannot identify the screen's purpose in under five seconds, the design fails regardless of how polished it looks.
- Remove visual elements that do not contribute to understanding.
- Decoration is only acceptable after clarity is achieved.

### 2. Hierarchy Before Color

Use layout, spacing, size, weight, and grouping to establish hierarchy. Do not rely on color as the primary differentiator.

- Strong hierarchy can work in grayscale.
- Color reinforces hierarchy — it does not create it.
- If removing color breaks the hierarchy, the hierarchy was never built correctly.

### 3. Structure Before Effects

A weak layout cannot be fixed with gradients, shadows, animations, or glassmorphism.

- Effects enhance structure. They do not replace it.
- Address information architecture and layout model first.
- If the structure is correct, the UI will be usable before any visual polish is applied.

### 4. Product Identity Before Trend

The UI must fit this specific product, not the current dominant SaaS aesthetic.

- Generic modern UI is not a product direction — it is the absence of one.
- Trend-following without product context produces UI that looks current for twelve months and dated for the next three years.
- Ask: does this look like it belongs to this product specifically, or could it belong to any product?

### 5. Reuse Before Reinvention

Use existing components and established patterns before introducing new UI.

- Consistency is a feature. Fragmentation is a bug.
- Every new visual pattern introduced is a maintenance burden and a source of inconsistency.
- Check the project's component inventory before creating new components.

### 6. Statefulness Before Static Beauty

A beautiful default state is an unfinished UI.

- Loading, empty, error, disabled, hover, focus-visible, and active states are not optional polish — they are the product.
- Users encounter off-states constantly. An interface that looks perfect in its default state but breaks in every other state is not production-ready.
- Design for the full state matrix before optimizing the default.

### 7. Responsiveness Before Final Polish

Desktop-only UI is incomplete UI.

- Mobile behavior must be defined before the task is considered done.
- Do not define the desktop layout perfectly and then shrink it for mobile. Define the mobile layout explicitly.
- Responsive behavior is a design decision, not a CSS afterthought.

### 8. Accessibility Before Cleverness

Interaction must be usable by keyboard, assistive technologies, and users with visual or motor limitations.

- An unusable interface is a failed interface, regardless of visual quality.
- Semantic HTML, visible focus states, keyboard navigation, and labeled controls are non-negotiable.
- Clever interactions that break accessibility are not clever.

### 9. Content, Tasks, And User Goals Before Ornament

Design surfaces exist to present content and enable user action. Every significant design decision must map to a user task or user goal.

- Every pixel is either contributing to the user's task or working against it.
- Ask: does this element help the user accomplish their goal, or does it serve the designer's preference?
- A stunning empty state that does not explain what to do next is a failure.
- A beautiful dashboard that does not surface the user's most urgent information is a failure.
- Remove elements that cannot map to a user task or user need.

---

## Screen Communication Test

Every screen must be able to answer these five questions quickly and without ambiguity.

1. **Where am I?** — The user can identify which product, which section, and which page they are on.
2. **What is this screen for?** — The screen's primary purpose is immediately apparent.
3. **What matters most?** — The most important information or action is visually dominant.
4. **What can I do next?** — The primary action is clear and reachable.
5. **What changed or needs attention?** — Status changes, alerts, errors, and new information are surfaced without requiring discovery.

If the screen cannot answer all five questions, it is not ready. Fix the information architecture and layout before proceeding to visual polish.

---

## Page / Screen Differentiation Model

Every major page type must have a distinct purpose, layout model, and visual character. Do not apply the same layout pattern to every page.

| Page Type | Primary Purpose | Layout Character |
|---|---|---|
| Dashboard | Overview, monitoring, quick decisions | Dense information summary, action-oriented, KPI-forward |
| List page | Scan, search, filter, compare, navigate | Scannable rows or cards, strong filtering, clear status |
| Detail page | Inspect one entity deeply, take contextual action | Focused, entity-forward, metadata visible but not dominant |
| Settings page | Configure preferences safely | Grouped forms, calm, minimal decoration, strong labels |
| Editor / builder | Create and manipulate | Tool-forward, workspace-centric, persistent controls |
| Onboarding | Guide step by step | Progressive, focused, distraction-minimal, progress-visible |
| Landing page | Convert and communicate value | Visual identity-forward, hierarchy-driven, action-clear |
| Mobile app screen | Mobile-first task completion | Touch-optimized, navigation-visible, content-prioritized |
| Desktop app screen | Keyboard-first productivity | Dense, multi-pane, keyboard-navigable, persistent context |
| Data-heavy screen | Analyze, compare, explore data | Table or chart-forward, filter-accessible, state-complete |
| Form-heavy screen | Input data accurately and safely | Label-first, validation-visible, field-grouped, keyboard-complete |

The same card-stack layout applied to every page type is a design failure.

---

## Decision Tie-Breakers

When two design options appear equally valid, apply these rules in order:

1. Choose the option that better serves the user's primary task on this screen.
2. Choose the option that is more consistent with the existing design system.
3. Choose the option that performs better at the smallest breakpoint.
4. Choose the option that is more accessible to keyboard and assistive technology users.
5. Choose the simpler option. Complexity requires justification; simplicity does not.

---

## Common Failures These Principles Prevent

- Screens that look polished but do not communicate their purpose.
- Hierarchy built on color alone — collapses in grayscale, fails in dark mode.
- Beautiful default states with broken loading and error states.
- Desktop-only layouts presented as complete work.
- Identical layouts applied to every page regardless of purpose.
- Decoration or visual novelty introduced without mapping to a user task or goal.
- Generic decoration added after weak information architecture instead of fixing the structure.

---

## Quality Gate

Before advancing to implementation or marking a design task complete:

- [ ] Screen passes the five-question communication test.
- [ ] Hierarchy is established through layout, spacing, and typography — not color alone.
- [ ] Page type matches its layout model — no identical layouts across different page purposes.
- [ ] All required states are planned, not just the default.
- [ ] Responsive behavior is defined, not deferred.
- [ ] Every significant design decision maps to a user task, user goal, or user need.
- [ ] No visual element added purely for trend or decoration without a functional purpose.
