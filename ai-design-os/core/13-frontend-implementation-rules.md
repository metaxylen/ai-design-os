# 13 — Frontend Implementation Rules

## Purpose

Define implementation discipline for all frontend UI work. Enforce token usage, component reuse, separation of concerns, anti-monolith structure, and integration of design rules across all implementation tasks. Stack-aware but not stack-locked.

---

## When To Read

- All implementation tasks (Tasks 8, 9, 17, 18, 19, 20, 21, 23).
- Redesign and cleanup tasks (Task 10).
- Design review tasks — Category 15 Stack / Implementation Consistency.

---

## Required Inputs

- Project's `design-tokens.md` — **Blocker** if missing. All styling requires tokens.
- Project's `component-map.md` — **Major Risk** if missing. Reuse cannot be verified without it.

For full pre-implementation planning requirements, see `01-agent-operating-protocol.md`.

---

## Stack Stance

This file is stack-aware but not stack-locked.

Examples in this file may reference React, Vue, Svelte, Next.js, Nuxt, Tailwind, shadcn/ui, Radix UI, CSS Modules, CSS-in-JS, SwiftUI, Flutter, Jetpack Compose, Electron, or Tauri. These are examples only. No single framework is mandated. Apply the principles in this file using the project's chosen stack.

---

## Pre-Implementation Requirements

Before writing any code, verify the following and produce a plan per `01-agent-operating-protocol.md`.

| Item | Status To Verify |
|---|---|
| Task type identified | Per `00-skill-router.md` |
| Relevant skill files read | Per routing table |
| `design-tokens.md` | Found — or Blocker |
| `component-map.md` | Found — or Major Risk |
| `visual-direction.md` | Found for page or style tasks — or Major Risk |
| `page-architecture.md` | Found for full page tasks — or Blocker |
| Component plan produced | Which exist, which are new, and why |
| State plan produced | Which states each section requires |
| Responsive plan produced | Behavior at each breakpoint |
| Accessibility plan produced | Semantic structure, keyboard, and ARIA requirements |
| File plan produced | Which files to create or modify |

Do not begin implementation without this plan. The full plan format is in `01-agent-operating-protocol.md`.

---

## File Organization

Stack-agnostic organizational principles. Apply to the project's file and folder conventions.

1. **Primitives separate from domain components.** Layer 1 and Layer 2 components live in a different location from Layer 3 domain components per `09-component-architecture-rules.md`.
2. **Layout components separate from page routes.** Layout wrappers and structural containers do not live inside page or route files.
3. **State components are reusable and centralized.** LoadingSkeleton, EmptyState, and ErrorState are not implemented inline per page.
4. **Mock and fixture data separate from presentation.** Seed or fake data does not live inside visual components.
5. **Data transformation logic separate from rendering.** Formatters, normalizers, and selectors belong in utility or helper files — not embedded in component render logic.
6. **Styles and tokens centralized.** Token values and theme configuration live in a single authoritative location, not scattered across component files.
7. **Hooks, composables, and controllers separate where applicable.** Business logic that drives UI state belongs in a dedicated layer — not mixed into component rendering code.
8. **Page files must not become component libraries.** If a page file is growing because it defines reusable components, those components belong in the component system.

---

## Component Implementation Discipline

Full rules in `09-component-architecture-rules.md`. Summary for implementation context:

1. Check `component-map.md` before creating any component.
2. Reuse existing components first. Extend with a new variant second. Create new components only when neither option works.
3. Compose components — do not build monolithic implementations.
4. All components must use semantic tokens for all visual values per `06-design-token-rules.md`.
5. All components must include required accessibility attributes per `12-accessibility-rules.md`.
6. All components must implement their required state matrix per `10-interaction-state-rules.md`.
7. Do not define reusable components inside page or feature files when they belong in the component system.

---

## Styling Discipline

Full token rules in `06-design-token-rules.md`. Summary for implementation:

1. Use semantic token names for all styling — `var(--text-primary)`, `theme.colors.surface2`, or the equivalent for the project's stack.
2. Do not use raw hex, RGB, HSL, or RGBA values not derived from a token.
3. Do not use arbitrary spacing values not in the spacing scale from `design-tokens.md`.
4. Do not use arbitrary border-radius, shadow, or z-index values outside the token system.
5. Do not use raw framework utility values that bypass the project token system — for example, a hardcoded color utility when a semantic `text-secondary` token exists and the stack supports it.
6. Do not create component-local CSS or styling systems parallel to the project token system.
7. Gradients must be explicitly approved in `visual-direction.md` per `03-anti-ai-aesthetic-rules.md`. Do not add gradients without documented approval.

---

## State Implementation

Full state rules in `10-interaction-state-rules.md`. Summary for implementation:

1. Implement the full interactive state matrix: default, hover, active, focus-visible, disabled.
2. Implement data states for every section that fetches data: loading, empty, error.
3. Implement form validation states: field-level inline error, form-level summary on submit failure.
4. Use skeleton for loading states of content sections with known shape.
5. Use spinner for single-element loading feedback.
6. Every error state must include a recovery action.
7. Every empty state must include a next action.

---

## Responsive Implementation

Full responsive rules in `11-responsive-design-rules.md`. Summary for implementation:

1. Define mobile behavior before finalizing desktop implementation.
2. Test at 320px, 375px, 768px, 1024px, and 1440px.
3. No horizontal overflow at any breakpoint.
4. Navigation transformation must be explicitly implemented — not left to default browser behavior.
5. Tables and data displays must have a defined mobile strategy.
6. Overlays (modals, drawers, sheets) must work at mobile dimensions.
7. Form inputs must use font-size ≥16px to prevent iOS Safari auto-zoom.

---

## Accessibility Implementation

Full accessibility rules in `12-accessibility-rules.md`. Summary for implementation:

1. Use semantic HTML first. Add ARIA only where HTML semantics are insufficient.
2. Never use `div` or `span` as primary interactive elements without full keyboard and ARIA behavior.
3. Every form input must have a visible associated label.
4. Implement focus management for modals, drawers, route changes, and error recovery flows.
5. Never suppress the focus outline without providing a replacement focus indicator.
6. Status indicators must use text or icon in addition to color.
7. Icon-only buttons must have an `aria-label`.

---

## Data and Business Logic Separation

1. Presentation components must not own unrelated business logic. A card component renders — it does not validate, format, or calculate data.
2. Page or container components coordinate data: they fetch, transform, and pass to presentational children.
3. Reusable UI components stay domain-light unless they are intentionally Layer 3 domain components.
4. Mock data does not live inside component files.
5. API calls do not live inside primitive or layout components.
6. Formatters and data transformers belong in dedicated utility or helper files — not embedded in component templates or JSX.

---

## Anti-Monolith Rules

**Forbidden:**
1. A single page component file that contains the full UI for a screen, including reusable sub-components.
2. Inline component definitions inside page files that are used more than once.
3. Duplicated style blocks across multiple component files.
4. Parallel design systems — introducing a second set of styled components alongside the existing token system.
5. Component logic deeply tangled with unrelated business logic.
6. Components that render more than one clearly distinct responsibility.

**Required:**
1. Extract repeated UI into components at the appropriate layer per `09-component-architecture-rules.md`.
2. Keep components focused on a single responsibility.
3. Keep file sizes manageable. If a file is growing unwieldy, it is doing too much — extract.
4. Prefer composition trees over large single-component implementations.

---

## Implementation Report

`01-agent-operating-protocol.md` owns the canonical post-implementation report format. Produce the full report defined there.

For frontend implementation tasks, include the following additional fields at the end of the `01` report:

```
Tokens Used / Added:
[List any new tokens consumed during implementation, or tokens proposed for addition to design-tokens.md]

Tests / Build Commands Run:
[See Minimum Verification Standard below — list each command run and its result]

Existing Project Conventions Followed:
[Describe how the implementation matches the existing codebase's file organization, component patterns, naming conventions, and stack choices]

Mock Data / Fixtures Used:
[List any mock or fixture data used, its file location, and whether it must be replaced before shipping]
```

Do not replace the `01` report with this report. The `01` report is required. The fields above extend it.

---

## Minimum Verification Standard

Before reporting any implementation as complete, run the following in order:

1. **Type checking** — if the stack supports static types (TypeScript, Flow, Swift, Dart, Kotlin), run the type checker. Report any errors explicitly. Do not claim success if the type checker fails.
2. **Lint** — run the project linter if configured. Fix errors before reporting complete. Warnings may be documented without blocking.
3. **Production build** — run the production build command, not only the development server. A build that passes in dev and fails in production is not complete.
4. **Existing test suite** — if the project has a test suite, run it. Report any failures explicitly. Do not mark the task complete if existing tests fail.
5. **Manual verification** — if no automated tests exist, document the manual steps taken to verify the implementation: which pages were opened, which interactions were tested, which breakpoints were checked.

If any command fails: report it explicitly in "Tests / Build Commands Run." Do not claim success. Do not omit failed commands.

---

## Mock Data and Fixtures

1. Mock and fixture data must not live inside primitive, layout, or reusable visual components.
2. Mock data belongs in a dedicated directory following existing project conventions — typically named `fixtures/`, `mocks/`, `seed/`, or `__fixtures__/`. If no convention exists, establish one and document it in the implementation report.
3. Mock files must be named clearly as mock or fixture data — not named as if they were production data files.
4. Any mock or fixture data used during implementation must be listed in the "Mock Data / Fixtures Used" field of the implementation report.
5. Production tasks must not leave mock data connected to presentation components as if it were real data, unless the task is explicitly scoped as a prototype or demo. This must be documented if it applies.
6. Before marking a production implementation complete, verify that all data-driven sections are connected to real data sources or clearly marked stubs — not fixture files silently left in place.

---

## Quality Gate

Do not mark a task complete if:

- [ ] Implementation uses hardcoded visual values instead of design tokens.
- [ ] Component duplication was introduced alongside existing components.
- [ ] Responsive behavior was not tested or defined.
- [ ] Accessibility requirements were ignored or deferred.
- [ ] Data states (loading, empty, error) are missing from any data-driven section.
- [ ] A monolithic page file was created with inline visual systems.
- [ ] Project design system files were available but were not applied.
- [ ] `14-design-review-checklist.md` was not run.
