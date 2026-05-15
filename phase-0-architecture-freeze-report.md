# Phase 0 — Architecture Freeze Report

**Status:** Binding. All future phases must conform to this document.
**Language:** English only.
**Date:** 2026-05-14

---

## 1. Executive Summary

AI Design OS is a permanent, reusable, agent-agnostic design-engineering control system. Its job is to force AI coding agents to produce product-specific, design-system-aware, component-based, state-complete, responsive, accessible, and production-polished UI — consistently across any project type and any capable agent platform.

The system is organized into two categories of files:

- **Core skill files** — universal operating rules that travel across all projects
- **Project design system files** — project-specific decisions consumed by the core layer at runtime

The current production cycle builds the `core/` layer and `workflow/` documentation only. Adapters and project templates are deferred to later phases.

This report freezes the exact architecture, file responsibilities, responsibility boundaries, routing logic, escalation behavior, anti-bloat rules, and phase-by-phase build plan before any production file is written.

**Key constraint:** No file in `core/` may contain project-specific decisions. No project-specific file may be bundled into the core system. This separation is absolute and must be enforced in every phase.

---

## 2. Final Folder Architecture

```
/ai-design-os/
│
├── README.md                          Phase 4
│
├── core/
│   ├── 00-skill-router.md             Phase 1
│   ├── 01-agent-operating-protocol.md Phase 1
│   ├── 02-design-principles.md        Phase 1
│   ├── 03-anti-ai-aesthetic-rules.md  Phase 1
│   ├── 04-reference-analysis-rules.md Phase 2
│   ├── 05-visual-identity-rules.md    Phase 2
│   ├── 06-design-token-rules.md       Phase 2
│   ├── 07-typography-rules.md         Phase 2
│   ├── 08-layout-system-rules.md      Phase 2
│   ├── 09-component-architecture-rules.md  Phase 3
│   ├── 10-interaction-state-rules.md  Phase 3
│   ├── 11-responsive-design-rules.md  Phase 3
│   ├── 12-accessibility-rules.md      Phase 3
│   ├── 13-frontend-implementation-rules.md Phase 3
│   ├── 14-design-review-checklist.md  Phase 1
│   └── 15-final-polish-rules.md       Phase 3
│
├── workflow/
│   └── full-workflow.md               Phase 4
│
├── adapters/                          LATER PHASE — do not create
│   ├── claude-code.md
│   ├── cursor.md
│   ├── windsurf.md
│   ├── codex.md
│   ├── cline-roo.md
│   └── v0-lovable-bolt.md
│
└── project-templates/                 LATER PHASE — do not create
    ├── saas-dashboard/
    ├── landing-page/
    ├── mobile-app/
    ├── desktop-app/
    └── data-heavy-dashboard/
```

**Project-specific files the system expects to find (NOT part of this repo):**

```
/docs/design-system/
    product-brief.md
    visual-direction.md
    design-tokens.md
    component-map.md
    page-architecture.md

/docs/references/
    reference-analysis.md

/docs/reviews/
    design-review.md
    responsive-review.md
    accessibility-review.md
    anti-ai-aesthetic-review.md
    final-polish-report.md
    visual-qa-report.md
```

---

## 3. Production Phase Plan

| Phase | Name | Files Produced | Status |
|---|---|---|---|
| **0** | Architecture Freeze | No files. This report. | Complete |
| **1** | Control Layer | `00`, `01`, `02`, `03`, `14` | Next |
| **2** | Design System Layer | `04`, `05`, `06`, `07`, `08` | After P1 |
| **3** | Implementation Layer | `09`, `10`, `11`, `12`, `13`, `15` | After P2 |
| **4** | README + Full Workflow | `README.md`, `workflow/full-workflow.md` | After P3 |
| **5** | Whole-System Ruthless Audit | No new files | After P4 |
| **6** | Final Patch + Packaging | Targeted patches from audit | After P5 |
| — | Adapters | `adapters/*.md` | Later cycle |
| — | Project Templates | `project-templates/*/` | Later cycle |

**Phase rules (binding for all phases):**

1. Create only the files assigned to that phase.
2. Do not create future-phase files.
3. Do not rewrite previous-phase files unless a phase explicitly authorizes it (Phase 5 audit → Phase 6 patches).
4. Preserve responsibility boundaries established here.
5. All files in English only.
6. No file may be stack-locked or agent-locked.
7. No file may contain project-specific decisions.

---

## 4. Core File Responsibility Map

---

### `README.md`

**Purpose:** Human-readable and agent-readable entry point to the entire AI Design OS system.

**When To Read:** Once at system introduction, at project onboarding. Not read per-task.

**Owns:**
- System overview and mission statement
- Folder architecture explanation
- Distinction between core / project / reference / review / workflow / adapter / template layers
- How to connect the system to a new project
- How an agent should initialize the system
- Quickstart instructions
- What is out of scope

**Does Not Own:**
- Individual skill rules (those live in `core/`)
- Workflow step details (those live in `workflow/full-workflow.md`)
- Project-specific decisions
- Agent-specific adapter instructions

**Required Inputs:** All core files and `workflow/full-workflow.md` must exist first (written in Phase 4).

**Expected Outputs:** None. Informational only.

**Depends On:** All `core/` files, `workflow/full-workflow.md`

**Expected Agent Behavior:** Read once when encountering the system for the first time.

**Common Failure This File Prevents:** Agent not knowing how to initialize the system; agent confusing core rules with project files.

---

### `core/00-skill-router.md`

**Purpose:** Route agents to the correct skill files based on task type. First file read for every UI task.

**When To Read:** Before any other skill file, at the beginning of every UI-related task.

**Owns:**
- Task type taxonomy (canonical list)
- Per-task routing tables (core files required, project files required)
- Do-not-start conditions
- Fallback behavior when required project files are missing
- Visual QA routing

**Does Not Own:**
- The rules themselves (those live in the routed files)
- Workflow narrative (that lives in `workflow/full-workflow.md`)
- Agent behavioral protocol (that lives in `01`)

**Required Inputs:** Task description from agent or user.

**Expected Outputs:** A precise list of files to read and prerequisites to check before proceeding.

**Depends On:** All other `core/` files (routes to them).

**Expected Agent Behavior:** Read router → identify task type → read listed files → check prerequisites → produce pre-implementation plan per `01`.

**Common Failure This File Prevents:** Agent reading all 16 files for a simple component fix; agent reading no files; agent proceeding without required project context.

---

### `core/01-agent-operating-protocol.md`

**Purpose:** Define the behavioral contract for all agents. Specifies what agents must do before, during, and after every UI task.

**When To Read:** With every UI task, immediately after `00-skill-router.md`.

**Owns:**
- Agent role definition
- Pre-implementation planning requirements and output format
- During-implementation rules
- Post-implementation reporting format
- Escalation / missing-file protocol
- Quality bar definition
- Refusal conditions

**Does Not Own:**
- Design rules (those live in `02`–`15`)
- Routing logic (that lives in `00`)
- Project-specific file creation instructions

**Required Inputs:** Task description, output of routing step, relevant project files.

**Expected Outputs:** Pre-implementation plan (before coding), implementation report (after coding).

**Depends On:** `00-skill-router.md` routes into it.

**Expected Agent Behavior:** Identify task type → produce structured pre-implementation plan → implement within stated constraints → produce structured post-implementation report → escalate if required project files are missing.

**Common Failure This File Prevents:** Agent immediately generating code without planning; agent not reporting changes; agent silently inventing design decisions when project files are missing.

---

### `core/02-design-principles.md`

**Purpose:** Universal design reasoning principles that apply across all tasks and all project types.

**When To Read:** All design and UI tasks. Referenced as a reasoning anchor throughout the system.

**Owns:**
- Core design reasoning hierarchy (clarity > decoration, hierarchy > color, structure > effects, etc.)
- Screen communication test (5 questions every screen must answer)
- Page differentiation principles
- Decision tie-breaking rules

**Does Not Own:**
- Visual identity specifics (that lives in `05` and project's `visual-direction.md`)
- Token values (that lives in `06` and project's `design-tokens.md`)
- Component rules (that lives in `09`)
- Responsive rules (that lives in `11`)
- Accessibility rules (that lives in `12`)

**Required Inputs:** None (foundational, universal).

**Expected Outputs:** Reasoning constraints applied to every decision.

**Depends On:** Nothing. All other files may reference this one.

**Expected Agent Behavior:** Use these principles as the primary decision framework when choosing between design options. Apply the screen communication test to every major page.

**Common Failure This File Prevents:** Agent prioritizing decoration over usability; agent creating unstructured pages; agent choosing trends over product identity.

---

### `core/03-anti-ai-aesthetic-rules.md`

**Purpose:** Prevent generic AI-generated visual patterns from appearing in production UI.

**When To Read:** All implementation tasks, all review tasks, all redesign/cleanup tasks.

**Owns:**
- Forbidden visual pattern list (hard prohibited)
- AI smell detection criteria
- Required replacement patterns (what to use instead)
- Audit questions for detecting generic AI output
- Remediation strategy

**Does Not Own:**
- Visual identity direction (that lives in `05` and project's `visual-direction.md`)
- Token rules (that lives in `06`)
- Layout rules (that lives in `08`)
- Full implementation rules (that lives in `13`)

**Required Inputs:** Project's `visual-direction.md` (to confirm what patterns are approved vs. universally forbidden).

**Expected Outputs:** Audit findings and specific fixes when applied in a review context.

**Depends On:** `05-visual-identity-rules.md`, `02-design-principles.md`.

**Expected Agent Behavior:** Apply forbidden pattern check before shipping any UI. Apply replacement patterns when generic patterns are detected. Use audit questions to self-evaluate output.

**Common Failure This File Prevents:** Generic purple/blue gradients; random decorative blobs; identical rounded card grids; flat vertical stacking; pages that look like a SaaS template; missing states; desktop-only layouts.

---

### `core/04-reference-analysis-rules.md`

**Purpose:** Define how external references must be analyzed and translated into design principles — preventing direct copying.

**When To Read:** Reference analysis tasks. Visual direction creation tasks that involve references.

**Owns:**
- Reference analysis methodology
- Analysis dimension framework (layout, navigation, typography, color, surface, spacing, interaction, responsive)
- Copy prohibition rules (what must never be copied)
- Required output format for `reference-analysis.md`
- Rules for analyzing websites, apps, screenshots, CSS, Figma, UI kits

**Does Not Own:**
- Visual direction decisions (those go in project's `visual-direction.md`)
- Token implications from references (go in project's `design-tokens.md`)
- The actual reference content

**Required Inputs:** Reference material (URL, screenshot, CSS snippet, design file). Project's `product-brief.md` (to contextualize relevance).

**Expected Outputs:** Produces or updates project's `/docs/references/reference-analysis.md`.

**Depends On:** `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`.

**Expected Agent Behavior:** Analyze reference through defined dimensions. Extract principles. Define adaptation strategy. Produce `reference-analysis.md`. Never copy exact visual values.

**Common Failure This File Prevents:** Agent copying exact CSS/colors/layouts from references; agent treating "inspired by" as license to clone.

---

### `core/05-visual-identity-rules.md`

**Purpose:** Define the required fields and discipline for creating project visual direction.

**When To Read:** Visual direction creation tasks. Design review tasks. Any implementation task where visual identity context is needed.

**Owns:**
- Visual direction field requirements
- Personality attribute framework
- Surface style options
- Color mood framework
- Typography mood framework
- Motion feel framework
- Platform feel guidance (SaaS, mobile app, desktop app, etc.)
- Anti-reference definition

**Does Not Own:**
- Actual project visual direction decisions (those go in project's `visual-direction.md`)
- Token values
- Component definitions
- Brand assets

**Required Inputs:** Project's `product-brief.md`, project's `reference-analysis.md` if available.

**Expected Outputs:** Constraints and field requirements for creating `visual-direction.md`.

**Depends On:** `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`.

**Expected Agent Behavior:** Use this file to structure creation of `visual-direction.md`. Check every field is filled. Reject generic defaults. Verify the direction is product-specific.

**Common Failure This File Prevents:** Agent creating visual direction without product context; agent defaulting to generic "modern SaaS" look; agent producing a vague mood board instead of actionable visual rules.

---

### `core/06-design-token-rules.md`

**Purpose:** Enforce semantic token discipline and prevent arbitrary visual values anywhere in implementation.

**When To Read:** Token creation tasks. Component implementation tasks. Page implementation tasks. Design review tasks.

**Owns:**
- Token category definitions (color, typography, spacing, radius, shadow, motion, z-index, breakpoints, component-state, theme modes)
- Semantic naming rules and naming patterns
- Forbidden hardcoded value patterns
- Stack-agnostic token principles (CSS variables, platform theme systems)
- Token-to-project-file connection rules

**Does Not Own:**
- Actual project token values (those go in project's `design-tokens.md`)
- Brand color decisions
- Font family choices
- Specific px values

**Required Inputs:** Project's `design-tokens.md` (consumed at implementation time). Project's `visual-direction.md`.

**Expected Outputs:** Token usage enforcement in all implementation output.

**Depends On:** `05-visual-identity-rules.md`.

**Expected Agent Behavior:** Verify project `design-tokens.md` exists before implementation. Use semantic token names in all components. Refuse hardcoded hex/px/spacing values. Reference token documentation when in doubt.

**Common Failure This File Prevents:** Random hex values in components; arbitrary Tailwind color classes; inconsistent radius/shadow/spacing; unmaintainable styling; design drift across components.

---

### `core/07-typography-rules.md`

**Purpose:** Define typographic role hierarchy and prevent inconsistent or unstructured type application.

**When To Read:** Token creation tasks. Component and page implementation tasks. Design review tasks. Final polish tasks.

**Owns:**
- Type role definitions (display through code/mono)
- Typographic hierarchy rules
- Line-height, weight, and contrast rules
- Role-specific usage rules (dashboard numbers, form labels, table text, metadata)
- Bad typography detection criteria
- Mobile and desktop typography behavior rules
- Truncation and wrapping rules

**Does Not Own:**
- Actual font family choices (project decision via `design-tokens.md`)
- Specific px values (project decision via `design-tokens.md`)
- Brand typography identity

**Required Inputs:** Project's `design-tokens.md` (type tokens). Project's `visual-direction.md` (typography mood).

**Expected Outputs:** Typography implementation that follows role hierarchy; type decisions consistent and readable across breakpoints.

**Depends On:** `06-design-token-rules.md`.

**Expected Agent Behavior:** Apply type roles consistently. Verify headings, body, labels, and metadata are visually distinct. Check mobile type behavior. Detect and fix typography failures.

**Common Failure This File Prevents:** All headings same size; label/metadata indistinguishable from body; text wrapping badly on mobile; dashboard numbers without hierarchy.

---

### `core/08-layout-system-rules.md`

**Purpose:** Define layout models and prevent unstructured, flat, or template-like page creation.

**When To Read:** Page implementation tasks. Page architecture creation tasks. Redesign/cleanup tasks. Any task involving overall page structure.

**Owns:**
- Layout model catalog (app shell, dashboard, list, detail, settings, editor, onboarding, landing, mobile, desktop, data-heavy, master-detail, split view, command center, modal-heavy)
- Layout model selection rules
- Density and grouping rules
- Navigation placement rules
- Side panel behavior rules
- Grid behavior rules
- Content priority rules per layout type

**Does Not Own:**
- Specific page architecture decisions per project (those go in project's `page-architecture.md`)
- Component definitions (that lives in `09`)
- Responsive detail rules (that lives in `11`)

**Required Inputs:** Project's `page-architecture.md`, project's `product-brief.md`.

**Expected Outputs:** Structured page layout that matches an appropriate layout model; page visually distinct from other pages in the project.

**Depends On:** `02-design-principles.md`.

**Expected Agent Behavior:** Identify the appropriate layout model before implementing any page. Define desktop/tablet/mobile layout. Verify the page is not a flat vertical stack. Verify it is distinguishable from other pages.

**Common Failure This File Prevents:** Every page using the same card-stack layout; no navigation; flat HTML document feel; pages identical regardless of purpose.

---

### `core/09-component-architecture-rules.md`

**Purpose:** Enforce component layering, reuse discipline, and component creation rules.

**When To Read:** All component and page implementation tasks. Component map creation tasks. Component library creation tasks.

**Owns:**
- Component layer definitions (primitive / layout / domain / state / composition)
- Component creation checklist (when to create vs. reuse vs. keep local)
- Reuse rules and anti-duplication rules
- Component naming conventions
- Required variants rules
- Required states rules
- Prop API principles
- Platform-specific component considerations (web, mobile, desktop)
- Composition vs. monolith rules

**Does Not Own:**
- Specific project component inventory (that lives in project's `component-map.md`)
- Accessibility specifics (that lives in `12`)
- Interaction state specifics (that lives in `10`)
- Implementation file organization (that lives in `13`)

**Required Inputs:** Project's `component-map.md`.

**Expected Outputs:** Component-first implementation without duplication; components with defined variants and states; project `component-map.md` updated if new components are created.

**Depends On:** `06-design-token-rules.md`, `10-interaction-state-rules.md`.

**Expected Agent Behavior:** Check `component-map.md` before creating any new component. Classify every component into the correct layer. Define all required variants and states. Keep components composable. Update `component-map.md` when new components are created.

**Common Failure This File Prevents:** New button/card/input written inline for every page; component sprawl; domain components reinventing primitives; massive monolithic page files with inline visual systems.

---

### `core/10-interaction-state-rules.md`

**Purpose:** Make state handling mandatory for all interactive and data-driven UI.

**When To Read:** All implementation tasks. Interaction state pass tasks. Component implementation tasks.

**Owns:**
- Required interactive state list (default, hover, active, focus-visible, disabled)
- Required data state list (loading, empty, error, success, partial data)
- Extended state list (selected, expanded/collapsed, dragging, uploading, syncing, offline, permission denied, unsaved changes, validation error)
- State design rules
- Skeleton vs. spinner guidance
- Error recovery rules
- Empty state action rules
- Form validation state rules
- Mobile touch feedback specifics
- Desktop keyboard/focus feedback specifics

**Does Not Own:**
- Visual token treatment of states (governed by `06` and project `design-tokens.md`)
- Accessibility semantics of states (that lives in `12`)
- Component architecture decisions (that lives in `09`)

**Required Inputs:** Project's `component-map.md` (to know which components need which states).

**Expected Outputs:** All required states implemented in every interactive and data-driven component.

**Depends On:** `06-design-token-rules.md`.

**Expected Agent Behavior:** Before finishing any component or page, audit for missing states. Apply all required interactive states to every interactive element. Apply all required data states to every async/data-driven section. Never ship static-only UI.

**Common Failure This File Prevents:** Only default state implemented; no hover/focus/active on buttons; no loading skeleton; no empty state explanation; no error recovery action; form fields with no validation feedback.

---

### `core/11-responsive-design-rules.md`

**Purpose:** Make responsive behavior mandatory across all breakpoints and platform types.

**When To Read:** All implementation tasks. Responsive review pass tasks.

**Owns:**
- Breakpoint definitions (320 / 375 / 768 / 1024 / 1440)
- Required responsive decisions per page type
- Navigation transformation rules (sidebar → drawer → bottom nav)
- Grid collapse rules
- Table and data display responsive strategies
- Touch target rules
- Overflow rules
- Modal/dialog responsive rules
- Content priority rules for mobile
- Mobile app specific rules
- Desktop app specific rules
- Responsive review checklist

**Does Not Own:**
- Responsive decisions per specific project page (those go in project's `page-architecture.md`)
- Navigation component specifics (those go in project's `component-map.md`)
- Accessibility keyboard focus specifics (that lives in `12`)

**Required Inputs:** Project's `page-architecture.md`. Project's `component-map.md`.

**Expected Outputs:** Working UI at all defined breakpoints with appropriate layout transformations.

**Depends On:** `08-layout-system-rules.md`.

**Expected Agent Behavior:** Test every page at all defined breakpoints. Define responsive behavior before implementation, not after. Transform navigation, grids, tables, and modals appropriately. Prioritize content for mobile — do not simply shrink desktop layout.

**Common Failure This File Prevents:** Desktop-only layouts; shrunken desktop UI on mobile; horizontal overflow; no mobile navigation; tables overflowing on narrow screens; touch targets too small.

---

### `core/12-accessibility-rules.md`

**Purpose:** Enforce accessibility requirements for all UI — semantic, keyboard, contrast, ARIA.

**When To Read:** All implementation tasks. Accessibility review pass tasks.

**Owns:**
- Semantic HTML requirements
- Correct button vs. anchor/link usage rules
- Form label requirements
- Error message association rules
- Keyboard navigation requirements
- Visible focus state requirements
- Dialog / menu / popover accessibility rules
- Color contrast requirements
- Non-color status indicator rules
- ARIA usage rules (when to use, when not to use)
- Screen reader clarity rules
- Reduced motion requirements
- Mobile accessibility specifics
- Desktop keyboard shortcut accessibility
- Icon-only button requirements
- Loading and disabled semantic requirements

**Does Not Own:**
- Visual state treatment (governed by tokens and `10`)
- Responsive behavior (that lives in `11`)
- Component architecture decisions (that lives in `09`)

**Required Inputs:** None — universal rules.

**Expected Outputs:** Accessible implementation with semantic HTML, visible focus, labeled inputs, keyboard navigation, and non-color-only status indicators.

**Depends On:** `10-interaction-state-rules.md` (for focus/disabled state interaction).

**Expected Agent Behavior:** Apply semantic HTML rules first. Add ARIA only where HTML semantics are insufficient. Never remove focus outlines. Always label form inputs. Always provide icon-only button labels.

**Common Failure This File Prevents:** `div` as button; missing form labels; no visible keyboard focus; keyboard traps in modals; status communicated only by color; unlabeled icon buttons.

---

### `core/13-frontend-implementation-rules.md`

**Purpose:** Define code quality and architecture standards for UI implementation. Stack-aware but not stack-locked.

**When To Read:** All implementation tasks.

**Owns:**
- File organization conventions (stack-agnostic)
- Component organization principles
- Token usage in implementation
- Variant system principles
- State handling code patterns
- Accessibility implementation patterns
- Responsive implementation patterns
- Anti-monolith rules (no giant page files)
- Anti-duplication rules (no parallel visual systems)
- Component separation rules (primitive / layout / domain / state)
- Presentation vs. data/business logic separation
- Prop API principles
- Code review expectations

**Does Not Own:**
- Design rules (those live in `02`–`12`)
- Specific framework APIs (not locked to any stack)
- Project-specific code conventions

**Required Inputs:** Project's `design-tokens.md`, project's `component-map.md`.

**Expected Outputs:** Clean, composable, token-using, accessible, responsive implementation.

**Depends On:** `06`, `07`, `08`, `09`, `10`, `11`, `12` (all feed into implementation).

**Expected Agent Behavior:** Implement using the project's existing conventions and component library. Use tokens everywhere. Keep components small. Separate concerns cleanly. Never implement state, responsive, or accessibility as afterthoughts.

**Common Failure This File Prevents:** Monolithic page files; hardcoded styles; no component separation; duplicate visual systems; ignoring mobile; ignoring accessibility.

---

### `core/14-design-review-checklist.md`

**Purpose:** Quality gate that audits completed or in-progress UI across all design and engineering dimensions.

**When To Read:** After any significant implementation. On redesign/cleanup tasks. Before marking any UI task as complete.

**Owns:**
- Review categories and criteria
- Pass/fail criteria per category
- Severity levels (critical / major / minor)
- Do-not-ship conditions
- Required remediation output format
- Anti-AI-aesthetic compliance check
- Output format for project `design-review.md`

**Does Not Own:**
- The rules themselves (those live in individual `core/` files — this file audits against them)
- Implementation instructions
- Visual direction decisions

**Required Inputs:** All relevant project design system files. The implementation to be reviewed.

**Expected Outputs:** Produces or updates project's `/docs/reviews/design-review.md`.

**Depends On:** All `core/` files (it audits against each of them).

**Expected Agent Behavior:** Run the full checklist against completed work. Record pass/fail/severity for each item. Report all critical issues before finishing. Do not ship if do-not-ship conditions are triggered.

**Common Failure This File Prevents:** Agent shipping UI without systematic review; no severity differentiation; no written record of review findings.

---

### `core/15-final-polish-rules.md`

**Purpose:** Define final production-finishing behavior. Precision refinement after functional implementation — not redesign.

**When To Read:** Final polish tasks. After design review passes. As a last step before marking UI complete.

**Owns:**
- Polish priority ordering
- Polish scope definition (what counts as polish vs. redesign)
- Anti-redesign rules (what must not be changed in polish)
- Stopping criteria (when to stop polishing)
- Polish checklist (spacing, alignment, type rhythm, hierarchy, component consistency, icons, microcopy, states, mobile, a11y)
- Output format for project `final-polish-report.md`

**Does Not Own:**
- Design principles (that lives in `02`)
- Review criteria (that lives in `14`)
- Anti-AI-aesthetic rules (that lives in `03`)
- Structural redesign authority

**Required Inputs:** Completed implementation. Project's `design-review.md` results if available. Project's `visual-direction.md`.

**Expected Outputs:** Targeted improvements. Project's `/docs/reviews/final-polish-report.md`.

**Depends On:** `14-design-review-checklist.md` (polish happens after review passes).

**Expected Agent Behavior:** Apply polish in priority order. Make precise, high-impact changes. Stop when polish would become redesign. Report every change made and any remaining recommendations.

**Common Failure This File Prevents:** Agent treating polish as "redesign everything"; agent skipping polish entirely; agent adding decoration to hide structural weakness; endless polish loops without stopping criteria.

---

### `workflow/full-workflow.md`

**Purpose:** Connect all core files into a coherent 15-step process narrative. Operational workflow guide for agents and humans starting a project.

**When To Read:** Project kickoff. Onboarding a new agent to an existing project. Phase transitions. When uncertain about process order.

**Owns:**
- Workflow step sequence (steps 1–15)
- Step-to-skill-file mapping
- Per-step: purpose, inputs, outputs, quality gate, common failure
- Workflow decision points and branching guidance
- Task handoff descriptions between steps

**Does Not Own:**
- The rules themselves (those live in `core/` files)
- Project-specific design decisions
- Agent-specific instructions (those live in `adapters/`)

**Required Inputs:** All `core/` files must exist (written last in Phase 4).

**Expected Outputs:** Process clarity — agent or human knows exactly what to do next.

**Depends On:** All `core/` files.

**Expected Agent Behavior:** Read at project start to understand the intended sequence. Navigate back to it when unsure about process order. Do not skip steps; escalate if a step cannot be completed.

**Common Failure This File Prevents:** Agent not knowing the intended sequence; agent skipping phases; implementing before design system is set up.

---

## 5. Responsibility Boundary Matrix

For each concern: one primary owner, allowed secondary references, and files that must not duplicate the full content.

| Concern | Primary Owner | Secondary References | Must Not Duplicate In |
|---|---|---|---|
| Agent task routing | `00-skill-router.md` | `01` (behavioral context), `workflow/full-workflow.md` | Any other core file. Others may reference `00` but must not define routing tables. |
| Pre-implementation planning | `01-agent-operating-protocol.md` | `00` (triggers planning), rule files (inform plan content) | `00` must not define planning format; `workflow` may reference but not redefine. |
| Post-implementation reporting | `01-agent-operating-protocol.md` | `14` (review as part of report), `15` (polish report format) | No other core file should define a reporting format. |
| Universal design principles | `02-design-principles.md` | Referenced implicitly by all other files | `03`, `08`, `09` may reference but must not restate them in full. |
| Anti-AI-aesthetic detection | `03-anti-ai-aesthetic-rules.md` | `14` (audit question), `15` (polish removes AI aesthetics) | `14` should have one section pointing to `03`, not restate all 20 forbidden patterns. |
| Reference analysis | `04-reference-analysis-rules.md` | `05` (references feed visual direction) | `05` should reference `04` for analysis methodology, not restate it. |
| Visual identity framework | `05-visual-identity-rules.md` | `03` (anti-references), `02` (reasoning) | `08` must not define visual identity; `13` should reference visual direction without restating the framework. |
| Semantic token discipline | `06-design-token-rules.md` | `07`, `08`, `09`, `13` use tokens — they reference `06` | `13` should say "use tokens per `06`" not reproduce the full token category list. |
| Typography hierarchy | `07-typography-rules.md` | `06` (type tokens), `14` (audit) | `13` should reference `07` for type rules, not re-explain font roles. |
| Layout models | `08-layout-system-rules.md` | `02` (page differentiation), `11` (layout at breakpoints) | `11` defines how layouts adapt — it must not redefine the layout models themselves. |
| Page architecture usage at runtime | `08-layout-system-rules.md` | `00` (routes page tasks), `09` (components compose the page) | `09` governs components within pages, not page layout model selection. |
| Component architecture | `09-component-architecture-rules.md` | `10` (states), `12` (accessibility), `13` (code structure) | `13` should reference `09` for component structure, not restate the layer taxonomy. |
| Interaction states | `10-interaction-state-rules.md` | `09` (states as component requirements), `12` (semantic state handling), `14` (state audit) | `12` should reference `10` for state types, not redefine the full state list. |
| Responsive behavior | `11-responsive-design-rules.md` | `08` (layout models collapse), `14` (responsive audit) | `13` should reference `11`, not restate breakpoints and behavior patterns. |
| Accessibility | `12-accessibility-rules.md` | `10` (focus/disabled state), `14` (a11y audit) | `13` should reference `12`, not reproduce semantic HTML or ARIA rule sets. |
| Frontend implementation code quality | `13-frontend-implementation-rules.md` | `06`–`12` all feed into implementation | `13` is the synthesis layer. It references other files. It does not own design rules. |
| Design review quality gate | `14-design-review-checklist.md` | All core files (audits against them) | `14` audits; it does not teach. Do not reproduce full rule sets — cite them. |
| Final polish | `15-final-polish-rules.md` | `14` (polish follows review), `03` (polish removes AI aesthetics) | `14` is not a polish guide; `03` is not a polish guide. |
| Visual QA routing | `00-skill-router.md` | `14` (visual QA is a review category), `workflow/full-workflow.md` (step 15) | No core file should define a full visual QA tooling guide. |
| Mobile app considerations | `11-responsive-design-rules.md`, `08-layout-system-rules.md` | `10` (touch feedback), `12` (mobile a11y), `09` (mobile components) | Mobile rules must not be isolated to one file and ignored elsewhere. |
| Desktop app considerations | `08-layout-system-rules.md`, `11-responsive-design-rules.md` | `12` (keyboard shortcuts), `10` (desktop focus behavior) | Desktop-app rules must be present in layout and responsive files, not siloed. |
| Data-heavy UI considerations | `08-layout-system-rules.md`, `09-component-architecture-rules.md` | `11` (responsive table strategy), `10` (loading/empty/error for data) | Data-heavy rules must not be only in `08` — `11` must cover responsive tables, `10` must cover data states. |
| Project-specific file separation | `01-agent-operating-protocol.md` | `00` (routes include project file requirements), `workflow` | No core file should contain project-specific decisions. This separation is absolute. |
| Stack-agnostic behavior | `13-frontend-implementation-rules.md` | `06` (stack-agnostic token principles), `09` (platform-aware component rules) | No core file should mandate a specific framework. Stack mentions are examples only. |
| Agent-agnostic behavior | `01-agent-operating-protocol.md` | `00` (routing works independent of platform), `README.md` | No core file should contain Claude-specific or Cursor-specific instructions. Those go in `adapters/`. |

---

## 6. Task Routing Map

---

### Task 1: New Project Design Setup

**Required Core Files:** `00`, `01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`
**Required Project Files:** None at start (these will be created)
**Expected Output:** `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md`
**Do-Not-Start Condition:** None — this is the initialization task.
**Fallback:** If only a partial project description is available, create `product-brief.md` first, then proceed step by step.

---

### Task 2: Product Brief Creation

**Required Core Files:** `00`, `01`, `02`, `03`
**Required Project Files:** None — this creates `product-brief.md`
**Expected Output:** `/docs/design-system/product-brief.md`
**Do-Not-Start Condition:** None — product brief is the first deliverable.
**Fallback:** If project description is incomplete, list all missing fields as blockers and request them before proceeding.

---

### Task 3: Reference Analysis

**Required Core Files:** `00`, `01`, `03`, `04`
**Required Project Files:** `product-brief.md` (required to contextualize relevance)
**Expected Output:** `/docs/references/reference-analysis.md` (created or updated)
**Do-Not-Start Condition:** Missing `product-brief.md` is a **Major Risk** — decontextualized analysis. Create minimal brief first.
**Fallback:** If `product-brief.md` is missing, create a minimal brief covering product type and target users before analyzing any reference.

---

### Task 4: Visual Direction Creation

**Required Core Files:** `00`, `01`, `02`, `03`, `05`
**Required Project Files:** `product-brief.md` (required), `reference-analysis.md` (strongly recommended)
**Expected Output:** `/docs/design-system/visual-direction.md`
**Do-Not-Start Condition:** Missing `product-brief.md` is a **Blocker**. Missing `reference-analysis.md` is a **Major Risk**.
**Fallback:** If `reference-analysis.md` is missing, proceed with `product-brief.md` only and note that visual direction is not reference-informed. Flag as risk.

---

### Task 5: Design Token Creation

**Required Core Files:** `00`, `01`, `05`, `06`, `07`
**Required Project Files:** `visual-direction.md` (required), `product-brief.md` (required), `reference-analysis.md` (if available)
**Expected Output:** `/docs/design-system/design-tokens.md`, platform token files (CSS variables, Tailwind config, etc.)
**Do-Not-Start Condition:** Missing `visual-direction.md` is a **Blocker** — tokens must express the project's visual direction, not defaults.
**Fallback:** If `visual-direction.md` is missing, create it first (Task 4) before creating tokens.

---

### Task 6: Component Map Creation

**Required Core Files:** `00`, `01`, `09`, `10`, `12`
**Required Project Files:** `product-brief.md` (required), `visual-direction.md` (required), `design-tokens.md` (required), `page-architecture.md` (recommended)
**Expected Output:** `/docs/design-system/component-map.md`
**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Blocker** — components must reference tokens, not invent visual values.
**Fallback:** If `page-architecture.md` is missing, create component map based on known screens from `product-brief.md`, flag incomplete coverage.

---

### Task 7: Page Architecture Creation

**Required Core Files:** `00`, `01`, `02`, `03`, `08`, `11`
**Required Project Files:** `product-brief.md` (required), `visual-direction.md` (required), `component-map.md` (recommended)
**Expected Output:** `/docs/design-system/page-architecture.md`
**Do-Not-Start Condition:** Missing `product-brief.md` is a **Blocker**. Missing `visual-direction.md` is a **Major Risk**.
**Fallback:** If `component-map.md` is missing, create page architecture referencing anticipated component categories; flag that component map must be created and page architecture updated after.

---

### Task 8: Component Implementation

**Required Core Files:** `00`, `01`, `06`, `09`, `10`, `12`, `13`
**Required Project Files:** `design-tokens.md` (required), `component-map.md` (required)
**Expected Output:** Implemented reusable component(s) with variants, states, accessibility, token usage, and implementation report.
**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Blocker**. Missing `component-map.md` is a **Major Risk** — must create or request minimal component map first.
**Fallback:** If `component-map.md` is missing for a small isolated component patch, proceed with a documented assumption that the component will be added to `component-map.md` afterward.

---

### Task 9: Page Implementation

**Required Core Files:** `00`, `01`, `02`, `03`, `06`, `08`, `09`, `10`, `11`, `12`, `13`
**Required Project Files:** `visual-direction.md` (required), `design-tokens.md` (required), `component-map.md` (required), `page-architecture.md` (required)
**Expected Output:** Assembled page using existing components with states, responsive behavior, accessibility, and implementation report.
**Do-Not-Start Condition:** Any of the four required project files missing is a **Blocker**.
**Fallback:** If any required file is missing, do not implement the page. Create the missing file(s) first.

---

### Task 10: Redesign / Cleanup

**Required Core Files:** `00`, `01`, `02`, `03`, `08`, `09`, `14`, `15`
**Required Project Files:** `visual-direction.md`, `design-tokens.md`, `page-architecture.md`
**Expected Output:** Audited and improved UI with documented changes.
**Do-Not-Start Condition:** Agent must audit before changing code. Missing project files are **Major Risk**.
**Fallback:** If project design system files are missing, create them before redesigning. Do not redesign without reference constraints — that creates more AI aesthetic drift, not less.

---

### Task 11: Interaction State Pass

**Required Core Files:** `00`, `01`, `10`, `12`
**Required Project Files:** `component-map.md`
**Expected Output:** All missing states implemented; state audit report.
**Do-Not-Start Condition:** None blocking. Proceed and report missing states.
**Fallback:** If `component-map.md` is missing, audit against known components in the codebase; flag `component-map.md` as needed.

---

### Task 12: Responsive Review

**Required Core Files:** `00`, `01`, `08`, `11`, `14`
**Required Project Files:** `page-architecture.md`, `component-map.md`
**Expected Output:** Responsive issues identified and fixed; `/docs/reviews/responsive-review.md`
**Do-Not-Start Condition:** None blocking. Review what exists.
**Fallback:** If `page-architecture.md` is missing, review against standard layout model expectations from `08`; flag missing page architecture as risk.

---

### Task 13: Accessibility Review

**Required Core Files:** `00`, `01`, `10`, `12`, `14`
**Required Project Files:** None blocking (accessibility rules are universal)
**Expected Output:** Accessibility issues identified and fixed; `/docs/reviews/accessibility-review.md`
**Do-Not-Start Condition:** None.
**Fallback:** None — accessibility review can proceed without project design system files.

---

### Task 14: Anti-AI-Aesthetic Review

**Required Core Files:** `00`, `01`, `02`, `03`, `14`
**Required Project Files:** `visual-direction.md` (required), `design-tokens.md`
**Expected Output:** AI aesthetic issues identified and fixed; `/docs/reviews/anti-ai-aesthetic-review.md`
**Do-Not-Start Condition:** Missing `visual-direction.md` is a **Major Risk** — cannot confirm approved vs. universally forbidden patterns.
**Fallback:** If `visual-direction.md` is missing, apply universal anti-AI rules from `03` only and flag that project-specific approval status cannot be verified.

---

### Task 15: Final Polish

**Required Core Files:** `00`, `01`, `03`, `14`, `15`
**Required Project Files:** `visual-direction.md`, `design-tokens.md`
**Expected Output:** Targeted polish improvements; `/docs/reviews/final-polish-report.md`
**Do-Not-Start Condition:** Design review (`14`) must have been run first. Polish does not replace review.
**Fallback:** If design review has not been run, run it first, then proceed to polish.

---

### Task 16: Visual QA / Screenshot Review

**Required Core Files:** `00`, `01`, `14`
**Required Project Files:** `page-architecture.md` (to know expected layouts per page)
**Expected Output:** Visual QA report; `/docs/reviews/visual-qa-report.md`; fixes for failed items.
**Do-Not-Start Condition:** None blocking.
**Fallback:** If visual tooling (Playwright, Storybook, etc.) is unavailable, review through browser developer tools responsive mode and document findings manually.

---

### Task 17: Mobile App UI Task

**Required Core Files:** `00`, `01`, `02`, `03`, `06`, `08`, `09`, `10`, `11`, `12`, `13`
**Required Project Files:** `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md`
**Expected Output:** Mobile-first implementation with touch targets, navigation transformation, mobile state feedback, mobile accessibility.
**Do-Not-Start Condition:** Missing `product-brief.md` or `visual-direction.md` are **Blockers**.
**Special Rules:** `11` mobile rules apply in full. Touch targets ≥ 44px. Navigation must use mobile-appropriate pattern. `12` mobile accessibility must be applied.

---

### Task 18: Desktop App UI Task

**Required Core Files:** `00`, `01`, `02`, `03`, `06`, `08`, `09`, `10`, `11`, `12`, `13`
**Required Project Files:** `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md`
**Expected Output:** Desktop-optimized implementation with multi-pane layouts, keyboard behavior, desktop focus management, high-density UI where appropriate.
**Do-Not-Start Condition:** Missing project files follow standard Task 9 rules.
**Special Rules:** `08` desktop layout models apply. `12` keyboard shortcut accessibility applies. `11` desktop breakpoint specifics apply.

---

### Task 19: Landing Page Task

**Required Core Files:** `00`, `01`, `02`, `03`, `05`, `06`, `07`, `08`, `11`, `12`, `13`
**Required Project Files:** `product-brief.md` (required), `visual-direction.md` (required), `design-tokens.md` (required)
**Expected Output:** Product-specific landing page (not generic SaaS template) with clear hierarchy, responsive layout, accessible interaction.
**Do-Not-Start Condition:** Missing `visual-direction.md` is a **Blocker** — landing pages are visually identity-forward.
**Special Rules:** `03` anti-AI rules apply with maximum severity. `08` landing page layout model applies.

---

### Task 20: Data-Heavy Dashboard / Table / Chart Task

**Required Core Files:** `00`, `01`, `02`, `03`, `06`, `07`, `08`, `09`, `10`, `11`, `12`, `13`
**Required Project Files:** `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md`
**Expected Output:** Data display implementation with loading/empty/error states, responsive table strategy, readable numeric hierarchy, accessible data tables.
**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Blocker** (strong token discipline for consistent status colors and typography).
**Special Rules:** `10` data states are critical. `11` responsive table strategy applies. `07` numeric/stat typography applies.

---

### Task 21: Form-Heavy UI Task

**Required Core Files:** `00`, `01`, `06`, `09`, `10`, `12`, `13`
**Required Project Files:** `design-tokens.md`, `component-map.md`
**Expected Output:** Form implementation with all validation states, accessible labels, error associations, keyboard navigation, responsive layout.
**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Major Risk**.
**Special Rules:** `12` form label and error association rules apply strictly. `10` validation error state applies to every field. `11` mobile form layout applies.

---

### Task 22: Design System Update Task

**Required Core Files:** `00`, `01`, `06`, `07`, `08`, `09`, `14`
**Required Project Files:** `design-tokens.md` (required), `component-map.md` (required), `visual-direction.md` (required)
**Expected Output:** Updated project design system files; impact analysis; component audit for consistency.
**Do-Not-Start Condition:** All three required project files must exist. Cannot update a design system that has not been created.
**Special Rules:** Must audit existing components for consistency after any token or visual direction change.

---

### Task 23: Component Library Creation Task

**Required Core Files:** `00`, `01`, `06`, `07`, `09`, `10`, `11`, `12`, `13`
**Required Project Files:** `design-tokens.md` (required), `component-map.md` (required), `visual-direction.md` (required)
**Expected Output:** Organized component library following the primitive/layout/domain/state layer taxonomy, with all required variants and states.
**Do-Not-Start Condition:** Missing `component-map.md` is a **Blocker** — cannot build a library without knowing what components are needed.
**Special Rules:** Follow component-first order: tokens → primitives → layout → state → domain. Do not build domain components before primitives exist.

---

### Task 24: Agent Adapter Creation Task

**Status: LATER PHASE ONLY.**
Do not route this task in the current production cycle. When this phase arrives, adapter files will translate `core/` rules into platform-specific instructions for Claude Code, Cursor, Windsurf, Codex, Cline/Roo, v0, Lovable, Bolt.

---

### Task 25: Project Template Creation Task

**Status: LATER PHASE ONLY.**
Do not route this task in the current production cycle. When this phase arrives, project templates will provide starter design system files for common project types.

---

## 7. Missing File / Escalation Protocol

### Severity Definitions

**Blocker**
Cannot safely proceed without this file or decision. Agent must stop, explain what is missing, and either create the missing file (if that is within the task scope) or request it from the user before continuing.

**Major Risk**
Can proceed with a minimal documented assumption, but the assumption must be recorded explicitly, flagged as a risk, and corrected before shipping. Agent must not silently invent design decisions.

**Minor Risk**
Can proceed. Agent should note the missing file and recommend creating it at the appropriate workflow step.

### Escalation Behavior Rules

1. Agent must not silently invent a complete visual system when project files are missing.
2. Agent must identify exactly what is missing and why it matters.
3. Agent must state the minimum decision needed to proceed.
4. Agent must create a minimal draft only if (a) the task scope covers it or (b) proceeding without it is a Blocker.
5. Agent must log all Blocker and Major Risk items in the pre-implementation plan.
6. Agent must not present invented design decisions as authoritative — they must be clearly marked as temporary assumptions pending review.

### Canonical Severity Reference

| Missing File | Context | Severity |
|---|---|---|
| `product-brief.md` | New project design setup | None — this task creates it |
| `product-brief.md` | Visual direction creation | Blocker |
| `product-brief.md` | Reference analysis | Major Risk |
| `product-brief.md` | Component implementation | Minor Risk |
| `visual-direction.md` | Design token creation | Blocker |
| `visual-direction.md` | Page implementation | Major Risk |
| `design-tokens.md` | Page or component implementation | Blocker |
| `design-tokens.md` | Final polish | Major Risk |
| `component-map.md` | Full page implementation | Blocker |
| `component-map.md` | Small isolated component patch | Major Risk |
| `page-architecture.md` | Full page implementation | Blocker |
| `page-architecture.md` | Responsive review | Major Risk |
| `reference-analysis.md` | Visual direction creation | Major Risk |
| `reference-analysis.md` | Final polish | Minor Risk |

---

## 8. Core vs Project-Specific Separation Rules

### What Core Files Own

- Universal rules for agent behavior
- Universal design reasoning
- Universal anti-pattern detection
- Universal token category and naming discipline
- Universal typography role hierarchy
- Universal layout model catalog
- Universal component layer taxonomy
- Universal state requirements
- Universal responsive breakpoint definitions
- Universal accessibility requirements
- Universal implementation code principles
- Universal review criteria and audit format

### What Project Files Own

- Product name, type, and summary
- Target users and goals
- Core screens and user flows
- Specific visual direction and personality
- Specific brand colors and accent choices
- Specific font families and type scale values
- Specific token values (hex, px, etc.)
- Specific component inventory
- Specific page layouts and section definitions
- Specific responsive decisions per page
- Review outcomes and audit logs

### Separation Enforcement Examples

| Wrong — Project-specific in core | Correct — Core rule |
|---|---|
| "Use dark navy `#0A0F1C` as background" | "Use the `background` semantic token from the project's `design-tokens.md`" |
| "Make every product feel like Linear" | "Adapt reference quality without copying visual identity, layout, colors, or proprietary patterns" |
| "Always use React, Tailwind, shadcn/ui" | "Follow the project's chosen stack. React, Tailwind, SwiftUI, Flutter may be referenced as examples" |
| "Use 16px as base body text" | "Use the `text-body` semantic token from the project's typography scale" |
| "Dashboard should have three KPI cards" | "Dashboard layout must include a KPI/status summary area. Count and content are project-specific decisions" |

---

## 9. Anti-Bloat And Duplication Rules

### File-Level Rules

1. Each file owns its domain exclusively. No two files may define the same rule.
2. If a file needs to reference another file's domain, it must cite the file by name, not restate the rule.
3. Review and checklist files audit against rules — they do not teach rules.
4. The router routes — it does not explain design theory.
5. The protocol defines behavior — it does not duplicate design rules.
6. The review checklist audits — it does not re-teach the whole system.
7. The workflow connects steps — it does not copy skill file content.

### Allowed Cross-File Reference Pattern

```
08-layout-system-rules.md may say:
"Responsive behavior for each layout model is governed by 11-responsive-design-rules.md."

13-frontend-implementation-rules.md may say:
"Token usage rules are defined in 06-design-token-rules.md."

14-design-review-checklist.md may say:
"Anti-AI-aesthetic audit criteria are defined in 03-anti-ai-aesthetic-rules.md."
```

### Prohibited Cross-File Pattern

```
PROHIBITED:
13-frontend-implementation-rules.md restating the full breakpoint list from 11.
14-design-review-checklist.md reproducing all 20 forbidden patterns from 03.
03-anti-ai-aesthetic-rules.md defining component architecture rules already in 09.
```

### Target File Length Guidance

| File | Target Length |
|---|---|
| `00-skill-router.md` | Longer — routing tables are inherently detailed |
| `01-agent-operating-protocol.md` | Longer — behavioral contract must be precise |
| `02-design-principles.md` | Compact — 8 principles + screen test + page differentiation |
| `03-anti-ai-aesthetic-rules.md` | Medium — forbidden patterns must be explicit |
| `04-reference-analysis-rules.md` | Medium — methodology + output format |
| `05-visual-identity-rules.md` | Medium — field requirements + platform examples |
| `06-design-token-rules.md` | Medium — categories + forbidden patterns |
| `07-typography-rules.md` | Compact — roles + rules + bad signs |
| `08-layout-system-rules.md` | Medium — layout model catalog |
| `09-component-architecture-rules.md` | Medium — layer taxonomy + creation checklist |
| `10-interaction-state-rules.md` | Compact to Medium — state list + rules |
| `11-responsive-design-rules.md` | Medium — breakpoints + per-type rules + checklist |
| `12-accessibility-rules.md` | Compact — required + forbidden lists |
| `13-frontend-implementation-rules.md` | Medium — principles, not full implementation guides |
| `14-design-review-checklist.md` | Medium — audit categories + pass/fail criteria |
| `15-final-polish-rules.md` | Compact — priority list + scope boundaries + checklist |
| `workflow/full-workflow.md` | Medium — 15 steps with concise per-step content |
| `README.md` | Medium — entry point, not reference manual |

### Writing Style Requirements For All Core Files

**Every file must prefer:**
- Numbered rules
- Short declarative statements
- Required / Forbidden sections
- Checklists over prose
- Decision rules over advice
- "Do" and "Do not" over "consider" and "try to"

**Every file must avoid:**
- Long explanatory paragraphs
- Repeated motivation for why a rule exists
- Generic design advice
- Duplicating content from other files in full

---

## 10. Stack-Agnostic And Agent-Agnostic Rules

### Stack-Agnostic

**Allowed in core files:**
- Reference React, Next.js, Vue, Svelte, Nuxt, Tailwind, shadcn/ui, Radix UI, SwiftUI, Flutter, Jetpack Compose, Electron, Tauri, CSS Modules, CSS-in-JS — as examples only
- Reference CSS custom properties, design token JSON, platform-specific theme systems as token implementation examples
- Describe patterns that apply across multiple stacks

**Forbidden in core files:**
- Mandating any single framework as required
- Writing rules that only work in Tailwind class syntax
- Assuming shadcn/ui is always available
- Assuming CSS variables are always the implementation method
- Using JSX or TypeScript syntax as the only code example format

**Enforcement:** When referencing a stack in a core file, always add "as an example" or "if applicable" framing.

### Agent-Agnostic

**Allowed in core files:**
- Behavioral instructions that any capable agent can follow
- Output format requirements that any agent can produce
- Decision rules that any agent can apply
- Quality gate criteria that any agent can evaluate

**Forbidden in core files:**
- Claude-specific syntax or system prompt patterns
- References to specific agent memory systems
- Cursor-specific `.cursorrules` format assumptions
- Windsurf-specific rule file assumptions
- v0-specific generation assumptions

**Enforcement:** All agent-platform-specific instructions are deferred to `adapters/` (later phase). The `core/` system must work as plain markdown instructions any agent can read and follow.

---

## 11. Web / Mobile / Desktop Coverage Plan

The system must not become SaaS-dashboard-only. Coverage is explicitly distributed across multiple files.

### Web App Coverage

**Primary files:** `08` (layout models), `11` (web breakpoints 320–1440), `12` (web accessibility and keyboard), `09` (web component architecture)

**Required in:**
- `08`: App shell, dashboard, list, detail, settings, editor/builder, landing page layout models
- `11`: Standard web breakpoints, sidebar behavior, grid collapse, overflow rules
- `12`: Web keyboard navigation, focus management, ARIA usage

### Mobile App Coverage

**Primary files:** `08` (mobile screen layout models), `11` (mobile-first rules, touch targets, navigation transformation), `10` (touch feedback states)

**Required in:**
- `08`: Full-screen content, bottom navigation, tab bar, drawer, sheet layout models
- `11`: Touch target size (≥44px), navigation transformation (sidebar → bottom nav → drawer), mobile priority content ordering
- `10`: Touch feedback states, loading states for slow network, pull-to-refresh patterns
- `12`: Mobile accessibility, screen reader considerations, reduced motion

### Desktop App Coverage

**Primary files:** `08` (desktop multi-pane layout models), `11` (desktop breakpoints, keyboard-first behavior), `12` (keyboard shortcuts, focus traversal)

**Required in:**
- `08`: Multi-pane layouts, master-detail, command center, toolbar/canvas/inspector patterns, split-view
- `11`: Desktop ≥1440px wide layouts, dense information display rules
- `12`: Keyboard navigation as primary interaction, keyboard shortcut accessibility
- `10`: Desktop hover states, keyboard focus states, context menu states

### Data-Heavy Dashboard Coverage

**Primary files:** `08` (data-heavy layout model), `09` (table/chart component architecture), `10` (data loading/empty/error states), `07` (numeric typography hierarchy)

**Required in:**
- `08`: Data-heavy dashboard layout with sidebar filters, chart grids, detail panels
- `09`: Table, chart, and data visualization component architecture
- `10`: Loading skeleton for data grids, empty state for no results vs. no data, error recovery for failed data fetch
- `07`: Numeric/stat typography — strong contrast and weight for data values vs. labels
- `11`: Responsive table strategy (horizontal scroll, stacked rows, condensed columns on mobile)

### Editor / Builder Interface Coverage

**Primary files:** `08` (editor/builder layout model), `09` (complex interactive component architecture), `10` (unsaved changes, drag states, selection states)

**Required in:**
- `08`: Editor/builder layout with distinct zones (toolbar, workspace/canvas, inspector panel, status bar)
- `10`: Unsaved changes state, drag/drop state, selection state, undo/redo state

---

## 12. Files To Create In Phase 1

```
/ai-design-os/core/00-skill-router.md
/ai-design-os/core/01-agent-operating-protocol.md
/ai-design-os/core/02-design-principles.md
/ai-design-os/core/03-anti-ai-aesthetic-rules.md
/ai-design-os/core/14-design-review-checklist.md
```

**Rationale:** `14` belongs in Phase 1 because it is a control-layer quality gate. Agents need it to evaluate output from Phase 1 onward. It governs quality standards, not design system knowledge.

---

## 13. Files To Create In Phase 2

```
/ai-design-os/core/04-reference-analysis-rules.md
/ai-design-os/core/05-visual-identity-rules.md
/ai-design-os/core/06-design-token-rules.md
/ai-design-os/core/07-typography-rules.md
/ai-design-os/core/08-layout-system-rules.md
```

**Rationale:** These files govern how agents derive design decisions from external inputs and express them through tokens, typography, and layout. They form the design system knowledge layer.

---

## 14. Files To Create In Phase 3

```
/ai-design-os/core/09-component-architecture-rules.md
/ai-design-os/core/10-interaction-state-rules.md
/ai-design-os/core/11-responsive-design-rules.md
/ai-design-os/core/12-accessibility-rules.md
/ai-design-os/core/13-frontend-implementation-rules.md
/ai-design-os/core/15-final-polish-rules.md
```

**Rationale:** These files govern production implementation behavior. `15` belongs here because it governs implementation refinement and production finishing, not review gate logic.

---

## 15. Files To Create In Phase 4

```
/ai-design-os/README.md
/ai-design-os/workflow/full-workflow.md
```

**Rationale:** README and full workflow must accurately describe the system that was actually built. Writing them before the core files would produce a speculative document. Writing them after ensures they correctly reflect the final system.

---

## 16. Later-Phase Files — Do Not Create Yet

```
/ai-design-os/adapters/claude-code.md
/ai-design-os/adapters/cursor.md
/ai-design-os/adapters/windsurf.md
/ai-design-os/adapters/codex.md
/ai-design-os/adapters/cline-roo.md
/ai-design-os/adapters/v0-lovable-bolt.md

/ai-design-os/project-templates/saas-dashboard/
/ai-design-os/project-templates/landing-page/
/ai-design-os/project-templates/mobile-app/
/ai-design-os/project-templates/desktop-app/
/ai-design-os/project-templates/data-heavy-dashboard/
```

These are explicitly out of scope for the current production cycle. Do not create placeholder files, stub files, or directory structure for these.

---

## 17. Risks Before Implementation

**Risk 1: Blueprint draft content treated as final**
Both `design-workflow.md` and `skill-files-guide.md` contain near-complete draft content in Turkish, written for human explanation — not agent execution. Every file must be rewritten as clean, operational, English rule files from scratch, informed by the blueprints but not derived verbatim from them.

**Risk 2: Skill router staleness**
`00-skill-router.md` references all other files by name. File names established in Section 2 are now frozen. If any file name must change, the router must be updated in the same patch.

**Risk 3: Stack-specific language in core files**
Blueprint files reference Tailwind, shadcn, Radix, Next.js, and TypeScript extensively and concretely. Every core file must pass a stack-agnostic review before being finalized. Any stack reference must be framed as an example.

**Risk 4: `workflow/full-workflow.md` becoming a duplicate**
If written without discipline, the workflow file will reproduce content from all 16 skill files. It must reference skill files by name — it describes what happens at each step and which files govern it, not the rules themselves.

**Risk 5: `14-design-review-checklist.md` drifting into a rule file**
The review checklist may drift into re-teaching every rule. The format must be pass/fail criteria with file citations — not explanations.

**Risk 6: Mobile and desktop coverage treated as footnotes**
The blueprint files have web/SaaS as their primary mental model. Section 11 of this report explicitly assigns mobile, desktop, and data-heavy coverage to specific files. Each Phase 2 and Phase 3 file must be reviewed for coverage gaps.

**Risk 7: File length inflation**
Production prompts ask for comprehensive, precise files. There is a natural tendency to write too much. Section 9 defines target length guidance. Phase audit prompts must explicitly check for verbosity.

---

## 18. Architecture Freeze Decision

**Decision: FROZEN.**

The architecture defined in this report is binding for all future production phases.

**Frozen elements:**
- Folder structure (Section 2)
- File names and numbering (Section 2)
- File responsibility ownership (Section 4)
- Responsibility boundary matrix (Section 5)
- Task routing map (Section 6)
- Missing file escalation severity levels (Section 7)
- Core vs. project-specific separation rules (Section 8)
- Anti-bloat and duplication rules (Section 9)
- Stack-agnostic and agent-agnostic rules (Section 10)
- Web / mobile / desktop coverage plan (Section 11)
- Phase assignment for all files (Sections 12–16)

**What is not frozen and may evolve:**
- Internal content of individual skill files (written per phase)
- Specific wording within routing tables (may be refined during Phase 1)
- Adapter content (deferred, not yet designed)
- Project template content (deferred, not yet designed)

**Change protocol:** If any frozen element must change during production, the change must be explicitly flagged, the rationale stated, and the Architecture Freeze Report noted as superseded on that specific point. Changes must not be made silently.

---

**Phase 0 is complete. The system is ready for Phase 1 — Control Layer production.**

Phase 1 will create: `00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `14-design-review-checklist.md`.
