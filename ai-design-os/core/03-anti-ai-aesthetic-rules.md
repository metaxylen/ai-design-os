# 03 — Anti-AI-Aesthetic Rules

## Purpose

Identify, prevent, and repair generic AI-generated visual patterns. This file enforces that every UI looks product-specific, intentional, and production-ready — not template-like, trend-following, or generated.

---

## When To Read

Read for all implementation tasks, all review tasks, and all redesign or cleanup tasks. Apply the forbidden pattern check before finishing any UI output.

---

## Required Inputs

`visual-direction.md` (to confirm which patterns are project-approved vs. universally forbidden). If `visual-direction.md` does not exist, apply all universally forbidden patterns without exception.

---

## Exception Approval Format

A normally forbidden pattern may only be used if `visual-direction.md` explicitly documents all of the following:

1. **Pattern name** — the exact pattern being approved (e.g., "radial gradient on hero background").
2. **Product reason** — the specific product or brand rationale for using it.
3. **Usage scope** — where the pattern is allowed and where it remains forbidden.
4. **Constraints** — visual limits on the pattern (e.g., "one gradient, opacity ≤ 30%, behind content only, never inside components").
5. **Anti-abuse rule** — what would constitute overuse or misuse of the approved exception.

If any of these five fields is missing, vague, or only implied, treat the pattern as forbidden.

Verbal or general approvals ("gradients are fine here") are not valid. Written and specific approval in `visual-direction.md` is required.

---

## What Is AI Aesthetic

AI aesthetic is the visual signature produced by generative AI tools responding to generic prompts without product context. It manifests as:

- Visual patterns copied from the current dominant SaaS template.
- Decorative elements added without functional purpose.
- Layouts that prioritize visual impressiveness over usability.
- UI that looks like a product but does not behave like one.
- Consistent visual style applied across all pages regardless of different purposes.

AI aesthetic is not a style. It is the absence of product-specific design thinking.

---

## Hard Forbidden Patterns

Do not use any of the following unless explicitly approved in `visual-direction.md` with a specific product-justified reason following the Exception Approval Format above.

### Color and Surface Patterns

1. Generic purple-to-blue gradient as the primary visual treatment or background.
2. Random radial gradients used as background decoration without structural purpose.
3. Glowing orbs, blobs, or amorphous radial light effects behind content.
4. Fake glassmorphism panels — blurred transparent backgrounds applied without a real layering system.
5. Multi-color gradient text without specific brand justification documented in `visual-direction.md`.
6. Hardcoded hex colors in components outside the token system.
7. Low-contrast muted gray text used at body size without verified sufficient contrast ratio.

### Layout and Composition Patterns

8. Unstructured vertical stacking — sections placed one after another with no grid, grouping, or information architecture.
9. Every page using the same layout model regardless of different purposes.
10. Huge hero sections with vague marketing copy on application screens.
11. Identical rounded card grids filling every page regardless of content type.
12. Navigation absent or decorative — no clear way to move between sections.
13. Primary action absent or buried — no dominant next step visible on key screens.

### Component and Visual Patterns

14. Over-rounded components — excessive border radius applied uniformly to every element.
15. Excessive drop shadows used on non-elevated surfaces for decoration.
16. Random decorative icons — icons placed for visual rhythm without action or recognition purpose.
17. Meaningless dashboard metrics — KPI cards with no label clarity, no trend context, no actionable relationship.
18. Dribbble-style visual noise — complex layered effects, overlapping cards, perspective transforms that sacrifice readability.
19. Style-first design — visual treatment applied before information architecture or user task is clear.

### State and Completeness Patterns

20. Missing hover, focus-visible, active, and disabled states on interactive elements.
21. Missing loading, empty, and error states on data-driven sections.
22. Desktop-only layouts — mobile behavior undefined or simply a shrunken desktop.

### Anti-Pattern Combinations

23. Generic SaaS landing page composition — dark gradient background, glowing feature cards, three-column icon grid, testimonials, CTA button.
24. Generic dashboard composition — gradient header card, identical metric tiles, chart with no context, recent items list with no states.

### Mobile-Specific AI Patterns

25. Generic bottom tab navigation — icon-only tabs with no product-specific labels or navigation logic, copying a four-tab pattern regardless of the product's actual sections.
26. Card-list screens where the content type calls for a list, table, or feed — identical large cards used for all content regardless of density or scanning requirements.
27. Oversized mobile cards that waste vertical space and push priority content below the fold on first interaction.
28. Touch UI with no mobile-specific state feedback — taps feel unresponsive because hover states were applied as touch states without visible active or pressed feedback.

---

## AI Smell Diagnostic Checklist

Apply this checklist to evaluate whether output has AI aesthetic issues. All questions are framed as failure indicators — a **yes** answer means an AI aesthetic risk is present and must be addressed.

**Structure diagnostics:**
- [ ] Does this layout lack product-specific identity — could it belong to any SaaS product without modification?
- [ ] Does every page use the same layout model regardless of different content types and purposes?
- [ ] Is the primary action on key screens missing, buried, or visually weaker than secondary content?
- [ ] Is navigation absent, decorative, or insufficient to orient the user?

**Visual diagnostics:**
- [ ] Are gradients, blobs, or glows present without explicit approval per the Exception Approval Format above?
- [ ] Are cards uniformly over-rounded and visually identical across different content types?
- [ ] Are shadows used decoratively on non-elevated surfaces rather than for structural elevation?
- [ ] Are icons placed for visual rhythm rather than to support recognition or action?

**State diagnostics:**
- [ ] Are loading, empty, or error states missing from data-driven sections?
- [ ] Are hover, focus-visible, or active states missing from interactive elements?
- [ ] Is the disabled state indistinguishable from the default state, or does it appear clickable?

**Identity diagnostics:**
- [ ] Would a senior product designer describe this as "a generic AI SaaS template"?
- [ ] Does the visual treatment contradict, ignore, or drift from the project's `visual-direction.md`?
- [ ] Could this UI be mistaken for a different, unrelated product?

If any answer is **yes**, the UI has an AI-aesthetic risk that must be reviewed and addressed before shipping. Record which diagnostics triggered and apply the Remediation Strategy below.

---

## Replacement Patterns

For every forbidden pattern, apply the corresponding replacement.

| Forbidden | Required Replacement |
|---|---|
| Generic purple/blue gradient | Product-specific surface strategy from `visual-direction.md`. Use semantic background and surface tokens. |
| Random radial gradients | Structured surface hierarchy using background and surface tokens. Color depth through opacity or tonal contrast, not gradient decoration. |
| Random glowing blobs | Structural layout elements — panels, borders, grouping, and spacing. |
| Fake glassmorphism | Defined surface hierarchy: background → surface-1 → surface-2 → elevated. Real layering with border separation, not frosted decoration. |
| Multi-color gradient text | Plain semantic text tokens with appropriate weight and size hierarchy. Gradient text only with explicit brand approval documented in `visual-direction.md`. |
| Low-contrast gray text | Text using semantic text tokens (`text-primary`, `text-secondary`, `text-muted`) at verified contrast ratios. Check contrast before using muted text at body size. |
| Identical rounded card grids | Page-specific layout model appropriate to content type. Content type and scanning behavior determine layout — not card-by-default. |
| Huge hero with vague copy | Page header with specific purpose, clear title, and a dominant primary action. |
| Flat vertical stacking | App shell structure with sidebar, grid, panels, and sections appropriate to the layout model. Until Phase 2 `08-layout-system-rules.md` is available, use structural grouping and grid-based arrangement. |
| Over-rounded components | Radius from the project's token radius scale. Match radius to component type — buttons, cards, and inputs may differ. Avoid maximum radius on everything. |
| Excessive drop shadows | Borders and background differentiation for surface separation. Reserve shadows for overlays, dropdowns, modals, and genuinely elevated interactive surfaces only. |
| Random decorative icons | Icons only where they support recognition or action. Every icon must justify its presence. |
| Dribbble-style visual noise | Simplified, content-forward layout with one visual hierarchy. No competing decorative layers, no perspective transforms, no overlapping elements without semantic purpose. |
| Style-first design | Define information architecture and user task first. Apply visual treatment only after structure is clear and hierarchy is established. |
| Fake metrics | Meaningful status indicators: real label, real value, real trend or context, real action. |
| Hardcoded colors | Semantic design tokens from `design-tokens.md`. |
| Missing interactive states | Full interactive state matrix: default, hover, active, focus-visible, disabled. |
| Missing data states | Full data state matrix: loading, empty, error. Add success and partial-data where relevant. |
| Desktop-only layout | Defined responsive strategy at all breakpoints. Until Phase 3 `11-responsive-design-rules.md` is available, define at minimum: mobile nav pattern, grid collapse behavior, and touch target size. |
| Generic SaaS landing page | Product-specific visual identity, hierarchy, and conversion structure. Every section maps to a real product claim or user task. |
| Generic dashboard composition | Product-specific KPI summary with real labels and values, a distinct layout model, charts with context and baseline, and complete data states (loading, empty, error). |
| Generic mobile card list | Task-appropriate layout: list for scannable items, table for structured data, feed for time-ordered content. Cards only where grouping serves the content type. |
| Generic bottom tab navigation | Product-labeled navigation mapped to real primary sections. Include labels on all tabs. Tab count and icons must reflect the product's actual information architecture. |

---

## Remediation Strategy

When AI aesthetic issues are detected, apply fixes in this order. Do not fix generic design by adding more decoration.

1. **Information architecture first** — Clarify what the screen is for, what matters most, and what the primary action is. Fix this before any visual treatment.
2. **Layout structure second** — Replace flat stacking with appropriate layout model. Until `08-layout-system-rules.md` *(Phase 2)* is available, use structural grouping, explicit grid layout, and meaningful section separation.
3. **Typography hierarchy third** — Establish clear distinction between headings, body, labels, and metadata.
4. **Component consistency fourth** — Replace one-off visual patterns with existing components from `component-map.md`.
5. **Token discipline fifth** — Replace all hardcoded values with semantic tokens from `design-tokens.md`.
6. **Interaction states sixth** — Add all missing hover, focus, active, disabled, loading, empty, and error states.
7. **Responsive behavior seventh** — Define and implement mobile and tablet layouts. Until `11-responsive-design-rules.md` *(Phase 3)* is available, define nav pattern and grid collapse at minimum.
8. **Accessibility eighth** — Verify semantic HTML, labels, keyboard behavior, and contrast.
9. **Restrained polish last** — Remove decoration, tighten spacing, remove unnecessary visual noise.

**Phase 1 fallback:** If a referenced Phase 2 or Phase 3 file does not yet exist, apply the strongest available Phase 1 rule from `02-design-principles.md` or this file, and mark the remediation step as partial. Re-run the full remediation after the missing phase file is created.

---

## Shipping Gate

Anti-AI-aesthetic failures are reviewed and escalated through `14-design-review-checklist.md` — specifically the Anti-AI-Aesthetic Compliance category (Category 13) and the Do-Not-Ship Conditions section.

This file (`03`) identifies and remediates AI-aesthetic risk. `14-design-review-checklist.md` determines shipping severity and do-not-ship decisions.

Do not ship when the AI smell diagnostic triggers any yes answer without a documented remediation plan. Run `14-design-review-checklist.md` to confirm severity and whether the implementation can proceed.

---

## Quality Gate

Before marking any implementation task complete, apply this check:

- [ ] Every page passes at least one of: distinct layout model, distinct visual character, distinct content purpose.
- [ ] No forbidden patterns are present without explicit `visual-direction.md` approval per the Exception Approval Format.
- [ ] All interactive elements have hover, focus-visible, active, and disabled states.
- [ ] All data-driven sections have loading, empty, and error states.
- [ ] No hardcoded colors are present outside the token system.
- [ ] Mobile layout is defined, not assumed to be handled by shrinking the desktop.
- [ ] The AI smell diagnostic checklist has no yes answers, or all yes answers have a documented remediation plan.
- [ ] Shipping decision has been confirmed via `14-design-review-checklist.md`.
