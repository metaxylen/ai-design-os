# AI Design OS

## 1. What This Is

AI Design OS is a reusable, agent-agnostic design engineering system. Its purpose is to force AI coding agents to produce product-specific, design-system-aware, component-based, state-complete, responsive, and accessible UI — consistently across any project type and any capable agent.

It is not just prompts. It is not just a style guide. It is not a component library. It is a rule system that enforces product context, visual direction, semantic token discipline, component architecture, page architecture, interaction states, responsive behavior, accessibility requirements, and review gates at every stage of UI work.

---

## 2. What Problem It Solves

AI agents produce generic UI when they work without:

- Persistent product context (what is this product, who uses it, what are the goals)
- Visual direction (what should it look and feel like for this specific product)
- Semantic tokens (all visual values controlled and consistent)
- Component map (reuse enforced, duplication prevented)
- Page architecture (every page distinct, layout appropriate to purpose)
- Interaction state requirements (loading, empty, error, hover, focus — not just default)
- Responsive rules (mobile behavior explicitly defined, not assumed)
- Accessibility requirements (keyboard, labels, contrast, semantics)
- Anti-AI review (generic patterns caught and replaced)
- Final polish process (production finish enforced with stopping criteria)

Without these constraints, agents default to the current dominant AI aesthetic: purple-blue gradients, identical rounded card grids, flat vertical stacking, desktop-only layouts, missing states, and UI that looks like every other AI-generated product — regardless of what is actually being built.

AI Design OS provides the constraint layer that every UI task must pass through before code is written.

---

## 3. What This Is Not

- Not a generic design inspiration library
- Not a collection of one-off prompts
- Not a replacement for product thinking
- Not a fixed visual style that applies to all products
- Not a React/Tailwind-only system
- Not Claude-only, Codex-only, Cursor-only, Antigravity-only, Blackbox-only, or MiniMax-only
- Not a license to copy references

---

## 4. Core Philosophy

The agent is not a freeform visual designer.

The agent is a design-system-aware implementation partner operating inside explicit product, visual, component, layout, state, responsive, accessibility, and review constraints.

When constraints are absent, agents default to the current dominant AI aesthetic. AI Design OS provides the constraints that prevent this by making product context, design system discipline, and review gates mandatory at every task.

---

## 5. Folder Structure

Current structure:

```
/ai-design-os/
  README.md
  core/
    00-skill-router.md
    01-agent-operating-protocol.md
    02-design-principles.md
    03-anti-ai-aesthetic-rules.md
    04-reference-analysis-rules.md
    05-visual-identity-rules.md
    06-design-token-rules.md
    07-typography-rules.md
    08-layout-system-rules.md
    09-component-architecture-rules.md
    10-interaction-state-rules.md
    11-responsive-design-rules.md
    12-accessibility-rules.md
    13-frontend-implementation-rules.md
    14-design-review-checklist.md
    15-final-polish-rules.md
  workflow/
    full-workflow.md
```

Deferred — do not create:

```
/adapters/              future adapter support per agent platform
/project-templates/     future starter design-system file sets
```

---

## 6. Core Skills vs Project Files

**Core files** live in `/ai-design-os/core/`. They define universal rules that apply to all projects and all agents. They contain no project-specific decisions. They travel with the system across every project.

**Project design-system files** live in the project repository:

```
/docs/design-system/product-brief.md
/docs/references/reference-analysis.md
/docs/design-system/visual-direction.md
/docs/design-system/design-tokens.md
/docs/design-system/component-map.md
/docs/design-system/page-architecture.md
/docs/reviews/design-review.md
/docs/reviews/final-polish-report.md
```

Rules:

- Core files define what must be done. Project files define how it applies to this specific product.
- Agents must not invent project-specific visual, token, or component decisions inside core files.
- Agents must not skip required project files when they are listed as Blockers for the current task type.
- If a required project file does not exist, the agent must stop and escalate — not invent defaults.

---

## 7. How Agents Should Use This System

Required sequence for any UI task:

1. Read `core/00-skill-router.md` — always first, before any other file.
2. Identify the task type from the routing table.
3. Read `core/01-agent-operating-protocol.md`.
4. Read all required core files listed for this task type.
5. Locate and read all required project files for this task type.
6. If any Blocker-level project file is missing: stop and report — do not proceed with invented values.
7. Produce the pre-implementation plan defined in `01-agent-operating-protocol.md`.
8. Implement using semantic tokens, existing components, layout models, states, responsive behavior, and accessibility requirements.
9. Run `core/14-design-review-checklist.md` against the output.
10. Produce the post-implementation report defined in `01-agent-operating-protocol.md`.

Do not skip steps. Do not reorder steps. The pre-implementation plan is mandatory, not optional.

---

## 8. How Humans Should Use This System

- Place `/ai-design-os/` in or adjacent to the project repository so the coding agent can access it.
- At the start of any UI work session, instruct the agent to read `core/00-skill-router.md` first.
- Before beginning major UI implementation, ensure the required project design-system files exist for the task type. Do not start full page implementation without `visual-direction.md`, `design-tokens.md`, `component-map.md`, and `page-architecture.md` in place.
- Do not accept significant UI output that has not been run through `core/14-design-review-checklist.md`.
- Update project design-system files when the product evolves — do not attempt to correct agent behavior through repeated one-off prompts.
- Use `workflow/full-workflow.md` to understand the intended sequence from brief to final QA.

---

## 9. New Project Setup Flow

Before implementation begins, the following must exist or be created in order:

1. **Product brief** — product type, target users, core screens, primary user goals, constraints. (`product-brief.md`)
2. **Reference analysis** — principles extracted from external references; no values copied. (`reference-analysis.md`)
3. **Visual direction** — product-specific visual identity, all 14 required fields defined. (`visual-direction.md`)
4. **Design tokens** — semantic token system expressing the visual direction. (`design-tokens.md`)
5. **Component map** — inventory of primitive, layout, domain, and state components. (`component-map.md`)
6. **Page architecture** — layout model, sections, states, and responsive behavior per major page. (`page-architecture.md`)

Implementation begins only after the files required for the specific task type exist. Do not begin page implementation without all four Blocker-level project files: `visual-direction.md`, `design-tokens.md`, `component-map.md`, and `page-architecture.md`.

---

## 10. UI Task Execution Flow

For any UI implementation task:

1. Route the task via `00-skill-router.md`.
2. Check all Blocker-level prerequisites. Stop if any are missing.
3. Produce the pre-implementation plan: task type, files read, component plan, state plan, responsive plan, accessibility plan.
4. Reuse existing components from `component-map.md`. Check the inventory before creating anything new.
5. Implement using semantic tokens from `design-tokens.md`. No hardcoded visual values.
6. Implement all required interaction states: default, hover, active, focus-visible, disabled.
7. Implement all required data states for async sections: loading, empty, error.
8. Implement responsive behavior at all defined breakpoints — not just desktop.
9. Apply accessibility requirements: semantic HTML, visible labels, keyboard navigation, focus management.
10. Run `14-design-review-checklist.md`. Resolve all Critical issues before reporting complete.
11. Apply final polish only after review passes. Polish does not replace review.
12. Produce the post-implementation report.

---

## 11. Required Project Design-System Files

| File | Path | Purpose |
|---|---|---|
| `product-brief.md` | `/docs/design-system/` | Product type, users, screens, goals, constraints |
| `reference-analysis.md` | `/docs/references/` | Principles extracted from references; anti-copying rules |
| `visual-direction.md` | `/docs/design-system/` | 14-field product-specific visual direction |
| `design-tokens.md` | `/docs/design-system/` | Semantic token system for all visual values |
| `component-map.md` | `/docs/design-system/` | Component inventory: primitive, layout, domain, state |
| `page-architecture.md` | `/docs/design-system/` | Per-page layout model, sections, states, responsive behavior |
| `design-review.md` | `/docs/reviews/` | Output of `14-design-review-checklist.md` (full review) |
| `final-polish-report.md` | `/docs/reviews/` | Output of final polish pass |
| `anti-ai-aesthetic-review.md` | `/docs/reviews/` | Output of standalone anti-AI aesthetic review (Task 14) |
| `state-review.md` | `/docs/reviews/` | Output of interaction state pass (Task 11) |
| `responsive-review.md` | `/docs/reviews/` | Output of responsive review pass (Task 12) |
| `accessibility-review.md` | `/docs/reviews/` | Output of accessibility review (Task 13) |
| `visual-qa-report.md` | `/docs/reviews/` | Output of visual QA / screenshot review (Task 16) |

These files are created and maintained in the project repository. They are not part of the AI Design OS core. Core files reference them by name — they do not contain their content.

---

## 12. Review and Quality Gates

`core/14-design-review-checklist.md` is the main quality gate. It must be run after every significant implementation task and before marking any UI work complete.

The checklist covers 15 review categories: Product Fit, Visual Identity, Information Architecture, Layout, Typography, Color / Token Usage, Component Reuse, Interaction States, Responsive Behavior, Accessibility, Content / Microcopy, Production Polish, Anti-AI-Aesthetic Compliance, Project-Specific File Compliance, and Stack / Implementation Consistency.

Ten Do-Not-Ship conditions are defined. Any triggered condition blocks completion until fixed. Key Do-Not-Ship conditions include:

- Missing primary navigation on a multi-screen product
- No visible primary action on a key action screen
- Hardcoded visual values where project tokens exist
- Missing loading, empty, and error states on data-driven sections
- No keyboard focus state on interactive elements
- Desktop-only layout with no defined mobile behavior
- Duplicate component system introduced alongside existing components

Final polish (governed by `15-final-polish-rules.md`) refines the implementation after review passes. It is applied after review, not instead of it. Polish cannot override Critical review findings.

Accessibility, state, and responsive failures are Critical severity — not cosmetic. They block shipping.

---

## 13. Anti-AI-Aesthetic Enforcement

`core/03-anti-ai-aesthetic-rules.md` defines hard forbidden patterns and required replacement patterns for each. The AI smell diagnostic checklist must be applied before any implementation is considered complete.

The system prevents:

- Generic purple-to-blue gradients as primary visual treatment
- Random glowing blobs or radial decoration
- Fake glassmorphism panels
- Over-rounded identical card grids across all pages
- Flat unstructured vertical stacking
- Missing navigation or decorative navigation
- Missing interaction states
- Desktop-only layouts with no mobile behavior
- Decorative icons without action or recognition purpose
- Meaningless dashboard metrics (no label clarity, no trend context)
- References used as clone sources rather than principle sources

Exception approvals — patterns normally forbidden but approved for a specific product — must be documented in `visual-direction.md` following the five-field Exception Approval Format defined in `03-anti-ai-aesthetic-rules.md`. Verbal or general approvals are not valid.

---

## 14. Stack and Agent Agnosticism

**Stack:** AI Design OS works with any capable frontend stack. No single framework is mandated. When specific technologies appear in core files (React, Vue, Svelte, Next.js, Nuxt, Tailwind, shadcn/ui, Radix UI, CSS Modules, CSS-in-JS, SwiftUI, Flutter, Jetpack Compose, Electron, Tauri), they are examples only. Token discipline, component architecture, state requirements, responsive rules, and accessibility requirements apply regardless of the implementation stack.

**Agent:** AI Design OS works with any capable AI coding agent. Core files are plain markdown that any agent can read and follow. Agent-platform-specific packaging is deferred to the adapters phase.

The system's quality constraints do not depend on a specific agent. They depend on the agent reading and following the core files before producing output.

---

## 15. Target Agent Ecosystem

The current target agents for future adapter support are:

- Claude
- Codex
- Antigravity
- Blackbox
- MiniMax
- Cursor

Core files are shared across all agents. Adapter files do not yet exist. When created, adapters must translate the same core behavior into each agent's native persistent-instruction format — not create a separate or contradictory rule system. If a new agent is added to the roadmap later, it must be added explicitly. Adapters and core must remain in sync.

---

## 16. Current v1 Scope

The current core supports:

- Web apps (SaaS, productivity, dashboards, internal tools)
- Mobile apps (consumer, utility, enterprise)
- Desktop apps (productivity, creative, developer)
- Landing pages and marketing sites
- Dashboards and data-heavy screens
- Forms and form-heavy UI
- Data-heavy interfaces (tables, charts, analytics, monitoring)
- Editor and builder interfaces
- Responsive design across web, mobile, and desktop breakpoints
- Accessibility review
- Anti-AI-aesthetic review
- Final polish

---

## 17. Deferred Future Scope

Do not create these files now. They are intentionally deferred.

- **Agent adapters** — Claude, Codex, Antigravity, Blackbox, MiniMax, and Cursor adapter files that package core behavior into each agent's native instruction format.
- **Project templates** — Starter design-system file sets for common project types (SaaS dashboard, landing page, mobile app, desktop app, data-heavy dashboard).
- **Visual QA automation recipes** — Integration guides for Playwright, Storybook, Chromatic, Percy, or equivalent tools.
- **Framework-specific starter setups** — Stack-specific token implementation starters.
- **Component library templates** — Pre-built component maps for common UI patterns.

Adapter support for Claude, Codex, Antigravity, Blackbox, MiniMax, and Cursor is deferred. The current v1 core is intentionally agent-agnostic. Adapter files should be generated later from the same core rules, not maintained as separate rule systems.

Note: A whole-system ruthless audit (Phase 5) and a final patch cycle (Phase 6) are still pending. This system is not yet production-finalized.

---

## 18. Quickstart

Copy this to any capable coding agent before any UI task:

```
Before implementing this UI task, read `/ai-design-os/core/00-skill-router.md`, classify the task type, then follow the required core files and project files for that task type. Produce the required pre-implementation plan from `01-agent-operating-protocol.md` before writing code. Do not implement if any Blocker-level project file is missing.
```

For a new project starting from scratch:

```
Read `/ai-design-os/core/00-skill-router.md` and identify task type as "New Project Design Setup" (Task 1). Follow the required reading list. Create the required project design-system files in order: product-brief.md → reference-analysis.md → visual-direction.md → design-tokens.md → component-map.md → page-architecture.md. Do not begin implementation before these files exist.
```

---

## 19. Common Failure Modes

Failures this system is specifically designed to prevent:

- **Agent skips the router.** Reads no files, produces generic output immediately without identifying task type or checking prerequisites.
- **Agent starts implementation before product brief exists.** Invents product context and produces UI that does not match the actual product.
- **Agent hardcodes visual values.** Uses raw hex colors or arbitrary spacing instead of semantic tokens from `design-tokens.md`.
- **Agent creates duplicate components.** Writes a new button, card, or modal without reading `component-map.md`.
- **Agent ships default-only UI.** No hover, focus, loading, empty, or error states implemented.
- **Agent ignores mobile.** Delivers a desktop layout with no defined mobile behavior.
- **Agent ignores accessibility.** No keyboard navigation, no visible focus states, unlabeled form inputs.
- **Agent treats references as copy targets.** Reproduces reference colors, layouts, or CSS instead of extracting principles.
- **Agent uses final polish as redesign.** Changes visual direction, token system, or layout architecture during the polish pass.
- **Agent reports success without running the design review checklist.** Task marked complete but Critical issues remain unresolved.
