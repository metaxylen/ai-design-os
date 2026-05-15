# Full Workflow — AI Design OS

This file documents the 15-step workflow from project brief to final visual QA. Each step maps to specific core files and produces a specific output.

Steps must be completed in order. Do not skip steps. Do not begin implementation before the design-system files required for the current task type exist.

This file does not replace the core skill files. It describes what happens at each step and which core files govern it. For the rules, read the referenced core files directly.

---

## Step 1 — Product UI Brief

### Purpose
Define product context before any visual work. No implementation may begin without knowing what product is being built, who uses it, and what the primary user goals are.

### Required Inputs
- Project description from the user or product team.
- Target users, core screens, primary goals, and constraints if available.
- If inputs are incomplete: list missing fields as blockers and request them. Do not fill gaps with generic defaults.

### Relevant Core Files
- `00-skill-router.md` (Task 2 route)
- `01-agent-operating-protocol.md`
- `02-design-principles.md`
- `03-anti-ai-aesthetic-rules.md`

### Expected Output
`/docs/design-system/product-brief.md`

Must include: product name, product type, product summary, target users, primary user goals, core user flows, core screens, information priority, desired feeling, design constraints, functional requirements, UI state requirements, responsive requirements, accessibility requirements, and quality bar.

### Quality Gate
No visual direction, no token creation, and no implementation may begin before product type, target users, core screens, primary user tasks, and constraints are defined and documented in `product-brief.md`.

### Common Failure Prevented
Agent designs a generic dashboard or landing page without knowing what product it is building, who will use it, or what the primary user tasks are.

---

## Step 2 — Reference Analysis

### Purpose
Extract reusable design principles from external references. Translate quality into applicable principles without copying any visual identity, color, layout, or proprietary pattern from the reference.

### Required Inputs
- Reference material: URL, screenshot, design file, UI kit, component library, or CSS snippet.
- `/docs/design-system/product-brief.md` — required to contextualize relevance. If missing: Major Risk. Create a minimal brief before analyzing any reference.

### Relevant Core Files
- `00-skill-router.md` (Task 3 route)
- `01-agent-operating-protocol.md`
- `04-reference-analysis-rules.md`
- `03-anti-ai-aesthetic-rules.md`

### Expected Output
`/docs/references/reference-analysis.md`

Each reference must be analyzed across all applicable dimensions defined in `04-reference-analysis-rules.md`. Output must include extracted principles, adaptation strategy, token implications, component implications, layout implications, interaction implications, responsive implications, accessibility implications, and explicit anti-copying boundaries.

### Quality Gate
Every extracted principle is stated as a principle — not as a copied value. No exact CSS, hex colors, layout measurements, brand-specific decisions, or proprietary assets appear in the output. The output feeds `visual-direction.md` — it is not the visual direction itself.

### Common Failure Prevented
Agent copies another product's color palette, layout structure, or visual identity instead of extracting and adapting principles.

---

## Step 3 — Visual Direction

### Purpose
Define this product's specific visual identity and direction before any token or implementation work. Prevent agents from defaulting to generic SaaS aesthetics during implementation.

### Required Inputs
- `/docs/design-system/product-brief.md` — Blocker. Cannot proceed without it.
- `/docs/references/reference-analysis.md` — Major Risk if missing. Direction created without references is not reference-informed; flag this explicitly.

### Relevant Core Files
- `00-skill-router.md` (Task 4 route)
- `01-agent-operating-protocol.md`
- `05-visual-identity-rules.md`
- `03-anti-ai-aesthetic-rules.md`
- `02-design-principles.md`

### Expected Output
`/docs/design-system/visual-direction.md`

Must include all 14 required fields defined in `05-visual-identity-rules.md`: design direction paragraph, personality attributes, anti-personality, visual keywords, visual density, surface style, color mood, typography mood, motion feel, platform feel, reference inspirations, anti-references, design decision rules, and exception approvals.

### Quality Gate
The direction is product-specific — it would fail if applied to a different product with different users and goals. Generic language (modern, clean, beautiful, premium, minimal, sleek) without concrete product-specific expansion is rejected. Anti-personality and anti-references are defined.

### Common Failure Prevented
Agent defaults to the current dominant SaaS aesthetic because no product-specific direction exists to constrain it.

---

## Step 4 — Design Tokens

### Purpose
Translate visual direction into a semantic token system. Lock all visual values before implementation begins so agents cannot hardcode arbitrary colors, spacing, radius, or shadow values.

### Required Inputs
- `/docs/design-system/visual-direction.md` — Blocker. Tokens must express the project's visual direction, not defaults.
- `/docs/design-system/product-brief.md` — Blocker.
- `/docs/references/reference-analysis.md` — if available.

### Relevant Core Files
- `00-skill-router.md` (Task 5 route)
- `01-agent-operating-protocol.md`
- `06-design-token-rules.md`
- `07-typography-rules.md`
- `05-visual-identity-rules.md`

### Expected Output
`/docs/design-system/design-tokens.md`

Must include all 12 required token categories defined in `06-design-token-rules.md`: color tokens, typography tokens, spacing scale, radius scale, shadow/elevation scale, motion tokens, z-index scale, breakpoint tokens, component state tokens, theme/dark mode tokens (or explicit deferral), focus/accessibility tokens, and data visualization tokens (if the product includes data displays).

### Quality Gate
All token names are semantic — they express role and intent, not color or measurement. Token values are consistent with `visual-direction.md`. No raw hex, arbitrary spacing, or one-off radius values appear in any implementation that follows.

### Common Failure Prevented
Agent hardcodes visual decisions inside components, causing design drift and inconsistency across the product.

---

## Step 5 — Component Map

### Purpose
Inventory all reusable components before implementation begins. Prevent agents from creating duplicate buttons, cards, modals, and navigation systems across different pages.

### Required Inputs
- `/docs/design-system/product-brief.md` — Blocker.
- `/docs/design-system/visual-direction.md` — Blocker.
- `/docs/design-system/design-tokens.md` — Blocker.
- `/docs/design-system/page-architecture.md` — Major Risk if missing. Create component map based on known screens from `product-brief.md` and flag incomplete coverage.

### Relevant Core Files
- `00-skill-router.md` (Task 6 route)
- `01-agent-operating-protocol.md`
- `09-component-architecture-rules.md`
- `10-interaction-state-rules.md`
- `12-accessibility-rules.md`

### Expected Output
`/docs/design-system/component-map.md`

Must cover all five component layers defined in `09-component-architecture-rules.md`: primitive UI components, layout components, domain components, state components, and composition components. Each component must document purpose, variants, required states, accessibility requirements, and responsive behavior.

### Quality Gate
The component inventory exists before major implementation begins. Components are classified into the correct layer. No component invents its own visual system separate from the token system established in Step 4.

### Common Failure Prevented
Agent creates a new button for every page, a new card for every domain context, and a new modal for every feature — producing an unmaintainable and visually inconsistent system.

---

## Step 6 — Page Architecture

### Purpose
Define the layout model, section structure, responsive behavior, and visual character of every major page before implementation. Ensure pages are distinct from each other by purpose and layout.

### Required Inputs
- `/docs/design-system/product-brief.md` — Blocker.
- `/docs/design-system/visual-direction.md` — Major Risk if missing.
- `/docs/design-system/component-map.md` — Major Risk if missing.

### Relevant Core Files
- `00-skill-router.md` (Task 7 route)
- `01-agent-operating-protocol.md`
- `08-layout-system-rules.md`
- `11-responsive-design-rules.md`
- `02-design-principles.md`

### Expected Output
`/docs/design-system/page-architecture.md`

Each major page must define: purpose, primary user goal, layout model, desktop layout, tablet layout, mobile layout, sections, primary action, secondary actions, components used, required states, and distinctive visual traits.

### Quality Gate
Every major page uses a layout model appropriate to its purpose from the catalog in `08-layout-system-rules.md`. No two major pages share the same layout model unless they are the same page type. Mobile behavior is explicitly defined per page — not assumed.

### Common Failure Prevented
Agent creates flat vertical stacks and identical card-grid layouts for every page regardless of different purposes and different user tasks.

---

## Step 7 — Implementation Plan

### Purpose
Plan before coding. Force the agent to confirm all files are read, all blockers are checked, and all constraints are understood before writing any code.

### Required Inputs
- All core files and project files required for the specific task type per `00-skill-router.md`.
- Task description.

### Relevant Core Files
- `00-skill-router.md` (task classification)
- `01-agent-operating-protocol.md` (plan format)
- `13-frontend-implementation-rules.md`

### Expected Output
Pre-implementation plan as defined in `01-agent-operating-protocol.md`, including: task understanding, task type, files read, required project files status (found / missing / assumed), relevant design constraints, component plan, state plan, responsive plan, accessibility plan, file plan, risks, and proceed/blocked decision.

### Quality Gate
No code is written before this plan is produced and output. If any Blocker-level file is missing, the plan ends with "Blocked — [specific reason]" and implementation does not begin. The plan is not a summary — it is a complete pre-flight check.

### Common Failure Prevented
Agent starts coding immediately without reading required files, checking prerequisites, or planning component reuse — producing output that contradicts the established design system.

---

## Step 8 — Component-First Coding

### Purpose
Build reusable components before assembling pages. Enforce the component layer taxonomy. Prevent inline component definitions inside page files.

### Required Inputs
- `/docs/design-system/design-tokens.md` — Blocker.
- `/docs/design-system/component-map.md` — Major Risk for isolated patches; Blocker for full page implementation and component library creation.
- Pre-implementation plan from Step 7.

### Relevant Core Files
- `00-skill-router.md` (Task 8 route)
- `01-agent-operating-protocol.md`
- `09-component-architecture-rules.md`
- `06-design-token-rules.md`
- `10-interaction-state-rules.md`
- `12-accessibility-rules.md`
- `13-frontend-implementation-rules.md`

### Expected Output
Reusable components implemented or extended in the correct layer (primitive → layout → state → domain), using semantic tokens, with all required variants and states, and with accessibility requirements met. `component-map.md` updated for any new reusable components created.

### Quality Gate
No duplicate component systems. All components use semantic tokens — no hardcoded visual values. All new reusable components are documented in `component-map.md`. Required variants and states are implemented — not deferred.

### Common Failure Prevented
Agent builds all UI inline inside page files, creating an unmaintainable system with no reuse and duplicate visual patterns per page.

---

## Step 9 — Page Assembly

### Purpose
Assemble pages from existing components and layout models. Pages are composition layers — they coordinate components. They do not define visual systems.

### Required Inputs
- `/docs/design-system/visual-direction.md` — Blocker.
- `/docs/design-system/design-tokens.md` — Blocker.
- `/docs/design-system/component-map.md` — Blocker.
- `/docs/design-system/page-architecture.md` — Blocker.

### Relevant Core Files
- `00-skill-router.md` (Task 9 route)
- `01-agent-operating-protocol.md`
- `08-layout-system-rules.md`
- `09-component-architecture-rules.md`
- `11-responsive-design-rules.md`
- `13-frontend-implementation-rules.md`

### Expected Output
Pages assembled from existing components per the layout models and section definitions in `page-architecture.md`. No raw visual values in page files. No new component systems defined inside page components.

### Quality Gate
Each page follows its defined layout model from `page-architecture.md`. No page invents a new layout or component system. Pages are visually distinguishable from each other within the product.

### Common Failure Prevented
Agent creates one-off page structures with inline visual systems instead of using the established component architecture and layout models.

---

## Step 10 — Interaction States

### Purpose
Ensure every interactive element and every data-driven section has a complete state matrix. Static-only UI is not production-ready.

### Required Inputs
- `/docs/design-system/component-map.md` — Major Risk if missing. Audit against known components in the codebase and flag the missing file.
- `/docs/design-system/design-tokens.md` — Blocker.

### Relevant Core Files
- `00-skill-router.md` (Task 11 route)
- `01-agent-operating-protocol.md`
- `10-interaction-state-rules.md`
- `12-accessibility-rules.md`

### Expected Output
State matrix audit results and all missing states implemented. Interactive states: default, hover, active, focus-visible, disabled. Data states: loading, empty, error. Extended states (selected, expanded, dragging, uploading, syncing, etc.) where the product supports those conditions.

### Quality Gate
No interactive element has only a default state. No data-driven section lacks loading, empty, and error states. Every error state includes a recovery action. Every empty state includes a next action. Focus-visible is present on all keyboard-reachable elements. State differentiation does not rely on color alone.

### Common Failure Prevented
UI that looks correct in the default state but fails in every real usage scenario — no loading skeleton, no empty state explanation, no error recovery, no keyboard focus, no hover feedback.

---

## Step 11 — Responsive Pass

### Purpose
Verify and implement responsive behavior at all defined breakpoints. Desktop-only UI is unfinished UI.

### Required Inputs
- `/docs/design-system/page-architecture.md` — Major Risk if missing. Review against layout model expectations from `08-layout-system-rules.md` and flag.
- `/docs/design-system/component-map.md` — Major Risk if missing.

### Relevant Core Files
- `00-skill-router.md` (Task 12 route)
- `01-agent-operating-protocol.md`
- `11-responsive-design-rules.md`
- `08-layout-system-rules.md`
- `14-design-review-checklist.md`

### Expected Output
Responsive review results documented and all Critical fixes applied. Verified at: 320px, 375px, 768px, 1024px, 1440px.

### Quality Gate
No horizontal overflow at any breakpoint. Mobile layout is explicitly defined and implemented — not assumed from shrinking the desktop. Navigation transforms appropriately at each breakpoint. Touch targets meet the 44px minimum on mobile. Tables and data displays have a defined mobile strategy. Forms are single-column on mobile. Modals and drawers fit mobile viewport dimensions.

### Common Failure Prevented
Desktop layout simply shrunk onto mobile — overflowing content, inaccessible navigation, and unusable interactions.

---

## Step 12 — Accessibility Pass

### Purpose
Verify and fix accessibility across semantic structure, keyboard navigation, focus management, color contrast, ARIA usage, and form labeling.

### Required Inputs
None — accessibility rules are universal. They apply regardless of which project files exist.

### Relevant Core Files
- `00-skill-router.md` (Task 13 route)
- `01-agent-operating-protocol.md`
- `12-accessibility-rules.md`
- `10-interaction-state-rules.md`
- `14-design-review-checklist.md`

### Expected Output
Accessibility issues documented by severity and all Critical fixes applied. Output format defined in `12-accessibility-rules.md`.

### Quality Gate
Keyboard navigation works through all interactive elements in logical tab order. Focus is visible on all keyboard-reachable elements — never suppressed without a replacement. All form inputs have associated visible labels. Dialogs, drawers, and modals trap focus correctly and return focus to the trigger on close. Status is not communicated by color alone. Icon-only buttons have `aria-label`. No div or span used as a primary interactive control without full keyboard and ARIA behavior.

### Common Failure Prevented
UI that cannot be used by keyboard or assistive technology — invisible focus states, unlabeled inputs, inaccessible modals, color-only error indicators, unannounced status changes.

---

## Step 13 — Anti-AI-Aesthetic Review

### Purpose
Audit the implementation for generic AI-generated visual patterns. Enforce that the output looks product-specific, intentional, and production-ready — not template-like or AI-generated.

### Required Inputs
- `/docs/design-system/visual-direction.md` — Major Risk if missing. Apply universal anti-AI rules from `03-anti-ai-aesthetic-rules.md` only and flag that project-specific approval status cannot be verified.
- `/docs/design-system/design-tokens.md` — Minor Risk if missing.

### Relevant Core Files
- `00-skill-router.md` (Task 14 route)
- `01-agent-operating-protocol.md`
- `03-anti-ai-aesthetic-rules.md`
- `05-visual-identity-rules.md`
- `14-design-review-checklist.md`

### Expected Output
If run as part of a full design review (Task 14 combined with Task 15): findings included in `/docs/reviews/design-review.md`. If run as a standalone anti-AI-aesthetic review (Task 14 only): `/docs/reviews/anti-ai-aesthetic-review.md`. All forbidden pattern findings documented. All remediations applied before proceeding.

### Quality Gate
The AI smell diagnostic checklist from `03-anti-ai-aesthetic-rules.md` produces no "yes" answers without a documented remediation plan. No hard forbidden pattern is present without a valid Exception Approval documented in `visual-direction.md` following the five-field format.

### Common Failure Prevented
UI that passes functional checks but still looks like a generic AI-generated template — same gradients, same identical card grids, same flat stacking, same dashboard composition as every other AI-generated product.

---

## Step 14 — Final Polish

### Purpose
Precise, targeted production-finishing refinement. Polish tightens spacing, alignment, typography rhythm, state clarity, motion behavior, accessibility details, and removes AI-looking decoration. It does not redesign.

### Required Inputs
- Completed implementation with review results from Step 13.
- `/docs/design-system/visual-direction.md`.
- `/docs/design-system/design-tokens.md`.
- Design review must have been run first. Polish does not replace review.

### Relevant Core Files
- `00-skill-router.md` (Task 15 route)
- `01-agent-operating-protocol.md`
- `15-final-polish-rules.md`
- `14-design-review-checklist.md`
- `03-anti-ai-aesthetic-rules.md`

### Expected Output
`/docs/reviews/final-polish-report.md`

Polish applied in the order defined in `15-final-polish-rules.md`: resolve Critical issues → alignment → spacing → typography → component consistency → state polish → responsive details → accessibility details → motion → AI decoration removal → production readiness check.

### Quality Gate
Polish does not change visual direction, layout architecture, token system, or component architecture. Every change is documented in the final polish report. If continuing would require any of those structural changes: stop, document the escalation in the report, and do not continue past the system boundary.

### Common Failure Prevented
Agent uses "final polish" as a backdoor to redesign the visual direction, introduce new visual language, or add AI-looking decoration as "improvement."

---

## Step 15 — Visual Regression / Screenshot QA

### Purpose
Verify the implementation visually at all relevant breakpoints and critical user flows. Catch layout defects, overflow, broken states, and visual regressions that code review alone cannot detect.

### Required Inputs
- Completed, polished implementation.
- `/docs/design-system/page-architecture.md` — Minor Risk if missing.

### Relevant Core Files
- `00-skill-router.md` (Task 16 route)
- `01-agent-operating-protocol.md`
- `14-design-review-checklist.md`
- `11-responsive-design-rules.md`
- `12-accessibility-rules.md`
- `15-final-polish-rules.md`

### Expected Output
Visual QA report covering each major screen at: 320px, 375px, 768px, 1024px, 1440px. All failed checks documented. All Critical failures fixed before marking the task complete. Output format defined in `00-skill-router.md` Task 16.

If automated tooling (Playwright, Storybook, Chromatic, Percy, or equivalent) is unavailable: review through browser developer tools responsive mode and document findings manually.

### Quality Gate
All major screens reviewed at all defined breakpoints. No horizontal overflow. Navigation visible and functional at every breakpoint. States render correctly. Layout matches `page-architecture.md` definitions. No visual regressions introduced by the polish pass.

### Common Failure Prevented
Implementation that passes code review but fails visually in actual viewport conditions — overflowing content, broken navigation, layout defects, broken states only visible in the browser.

---

## Task Routing Shortcut

Agents must not guess which files to read. Always start with:

```
core/00-skill-router.md
```

The router identifies the task type and lists exactly which core files to read and which project files are required. Do not skip the router. Do not guess.

The routing table covers 23 active task types (Tasks 1–23). Tasks 24 (adapter creation) and 25 (project template creation) are deferred to a later phase.

---

## Minimal Agent Command

Copy this to any capable coding agent before any UI task:

```
Before starting, read `/ai-design-os/core/00-skill-router.md`, classify this task, then read all required core files and project files for that task type. Produce the pre-implementation plan from `01-agent-operating-protocol.md`. Do not write code until the plan is complete. If any Blocker-level file is missing, stop and report the missing requirement.
```

---

## Target Agent Ecosystem

The current target agents for future adapter support are:

- Claude
- Codex
- Antigravity
- Blackbox
- MiniMax
- Cursor

The workflow itself is agent-agnostic. These names represent the roadmap for adapter files — not dependencies of the core workflow. Any capable agent that can read markdown files can follow this workflow.

---

## Future Adapter Direction

Future adapters should translate the same core workflow into each agent's native persistent-instruction mechanism. Adapters must not create separate rule systems — they must package the existing core behavior in a format each agent can load automatically.

Planned adapters (do not create now):

- Claude adapter
- Codex adapter
- Antigravity adapter
- Blackbox adapter
- MiniMax adapter
- Cursor adapter

Exact adapter file formats and mechanisms will be determined during the adapter phase by reviewing each agent's official documentation. Do not assume or hardcode adapter formats in this phase.

---

## When To Stop And Escalate

Stop and report to the user before proceeding when:

- Product brief is missing and the task requires it (Blocker).
- Visual direction is missing and the task requires it (Blocker).
- Design tokens are missing and implementation has been requested (Blocker).
- Component map is missing for full page implementation or component library creation (Blocker).
- Page architecture is missing for full page implementation (Blocker).
- Any accessibility do-not-ship condition is triggered and cannot be resolved within the current task scope.
- Any responsive do-not-ship condition is triggered and cannot be resolved within the current task scope.
- Any design review do-not-ship condition is triggered and cannot be resolved within the current task scope.
- Final polish would require changes that constitute a structural redesign — changes to visual direction, layout architecture, token system, or component architecture. Stop, document the escalation in the Final Polish Report, and do not continue.

---

## What Counts As Done

A UI task is complete only when all of the following conditions are true:

- [ ] Required core files were read before implementation began.
- [ ] All Blocker-level project files were located and applied.
- [ ] Pre-implementation plan was produced and output before any code was written.
- [ ] Implementation uses semantic tokens from `design-tokens.md` — no hardcoded visual values.
- [ ] Existing components from `component-map.md` were checked and reused before creating new ones.
- [ ] Implementation follows the layout model from `page-architecture.md`.
- [ ] All required interaction states are implemented: default, hover, active, focus-visible, disabled.
- [ ] All required data states are implemented for async sections: loading, empty, error.
- [ ] Responsive behavior is defined and tested at all relevant breakpoints.
- [ ] Accessibility requirements are met: semantic HTML, visible labels, keyboard navigation, focus management.
- [ ] `14-design-review-checklist.md` was run and all Critical issues are resolved.
- [ ] Post-implementation report was produced.
- [ ] No do-not-ship conditions remain active.

---

## Common Workflow Anti-Patterns

- **Coding before routing.** Agent writes code without reading `00-skill-router.md` or identifying the task type and its required files.
- **Coding before product brief.** Agent implements UI without knowing product type, target users, or core screens — and invents context instead.
- **Using references as clone targets.** Reference colors, layouts, or CSS copied directly instead of principles extracted and adapted.
- **Writing visual values directly in components.** Hardcoded hex colors or arbitrary spacing used instead of semantic tokens from `design-tokens.md`.
- **Creating new components without checking the map.** New button, card, or modal written without reading `component-map.md` — creating duplicates.
- **Shipping only default state.** Implementation delivered without hover, focus, loading, empty, or error states implemented.
- **Treating mobile as scaled desktop.** Desktop layout shrunk to mobile width with no content reprioritization — producing overflow and unusable interactions.
- **Treating accessibility as an optional final pass.** Keyboard navigation, focus states, and form labels deferred as "improvements" instead of built in from the start.
- **Treating final polish as redesign.** Visual direction, layout architecture, or token system changed during the polish step without escalation.
- **Reporting success without running the review checklist.** Task marked complete without running `14-design-review-checklist.md` — leaving Critical issues unresolved.
