# 00 — Skill Router

## Purpose

Route agents to the correct skill files and project files based on task type. This is the first file every agent reads before any UI-related task.

The router does not contain design rules. It routes to the files that do.

---

## When To Read

Read this file before every UI-related task, before reading any other skill file.

---

## How To Use The Router

1. Identify the task type from the list below.
2. Read all listed Required Core Files.
3. Verify all listed Required Project Files exist.
4. If required project files are missing, follow the Fallback Behavior and the escalation protocol in `01-agent-operating-protocol.md`.
5. Produce a pre-implementation plan per `01-agent-operating-protocol.md` before writing any code.
6. If the task type is ambiguous, classify it before proceeding. When uncertain, use the stricter route.
7. If the task matches multiple types, use the route with the stricter prerequisites.

---

## Task Type Identification Rules

- Match task intent to the closest task type below.
- If the task involves both design setup and implementation, treat it as two sequential tasks: setup first, then implementation.
- If the task is a review or audit of existing UI, route to the relevant review task type.
- If the task is a fix or cleanup, route to Redesign / Cleanup (Task 10) unless the scope is limited to states, responsive, or accessibility only.

---

## Severity Reference

Severity levels are defined in `01-agent-operating-protocol.md`. Summary:

- **Blocker** — Cannot safely proceed. Stop and resolve before continuing.
- **Major Risk** — Can proceed with a documented assumption. Flag prominently.
- **Minor Risk** — Can proceed. Note the missing file and recommend creating it.

---

## Task Routing Table

For fast routing without reading this full file, use `runtime-packs/00-mini-router.md`.

---

### — SETUP TASKS —

### Task 1 — New Project Design Setup

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `04-reference-analysis-rules.md`, `05-visual-identity-rules.md`, `06-design-token-rules.md`, `07-typography-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`
**Required Project Files:** None — this task creates them.

**Expected Output:**
`/docs/design-system/product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md`, `/docs/references/reference-analysis.md` (if references are provided or selected during setup)

**Do-Not-Start Condition:** None — this is the initialization task.

**Fallback Behavior:** If project description is incomplete, create `product-brief.md` first with available information, list missing fields as blockers, and request them before proceeding to subsequent design system files.

---

### Task 2 — Product Brief Creation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`

**Required Project Files:** None — this task creates `product-brief.md`.

**Expected Output:** `/docs/design-system/product-brief.md`

**Do-Not-Start Condition:** None.

**Fallback Behavior:** If the project description provided is incomplete, list all missing fields as blockers and request them before producing the file. Do not fill missing fields with generic defaults.

---

### Task 3 — Reference Analysis

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `03-anti-ai-aesthetic-rules.md`, `04-reference-analysis-rules.md`
**Required Project Files:** `product-brief.md` *(Major Risk if missing)*

**Expected Output:** `/docs/references/reference-analysis.md` (created or updated)

**Do-Not-Start Condition:** None blocking. Missing `product-brief.md` is a Major Risk.

**Fallback Behavior:** If `product-brief.md` is missing, create a minimal brief covering product type and target users before analyzing any reference. Do not analyze references without product context.

---

### Task 4 — Visual Direction Creation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `05-visual-identity-rules.md`
**Required Project Files:** `product-brief.md` *(Blocker)*, `reference-analysis.md` *(Major Risk if missing)*

**Expected Output:** `/docs/design-system/visual-direction.md`

**Do-Not-Start Condition:** Missing `product-brief.md` is a **Blocker**.

**Fallback Behavior:** If `reference-analysis.md` is missing, proceed with `product-brief.md` only. Flag that visual direction is not reference-informed. Do not default to generic SaaS aesthetics.

---

### Task 5 — Design Token Creation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `05-visual-identity-rules.md`, `06-design-token-rules.md`, `07-typography-rules.md`
**Required Project Files:** `visual-direction.md` *(Blocker)*, `product-brief.md` *(Blocker)*, `reference-analysis.md` *(if available)*

**Expected Output:** `/docs/design-system/design-tokens.md`, platform token files (CSS variables, Tailwind config, or equivalent)

**Do-Not-Start Condition:** Missing `visual-direction.md` is a **Blocker** — tokens must express the project's visual direction, not defaults.

**Fallback Behavior:** If `visual-direction.md` is missing, create it first (Task 4) before creating tokens.

---

### Task 6 — Component Map Creation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `12-accessibility-rules.md`
**Required Project Files:** `product-brief.md` *(Blocker)*, `visual-direction.md` *(Blocker)*, `design-tokens.md` *(Blocker)*, `page-architecture.md` *(Major Risk if missing)*

**Expected Output:** `/docs/design-system/component-map.md`

**Do-Not-Start Condition:** Missing `product-brief.md`, `visual-direction.md`, or `design-tokens.md` is a **Blocker**. Components must reference established tokens and match the product's visual direction — none of these files can be substituted with invented values.

**Fallback Behavior:** If `page-architecture.md` is missing, create component map based on known screens from `product-brief.md`. Flag incomplete coverage.

---

### Task 7 — Page Architecture Creation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `08-layout-system-rules.md`, `11-responsive-design-rules.md`
**Required Project Files:** `product-brief.md` *(Blocker)*, `visual-direction.md` *(Major Risk if missing)*, `component-map.md` *(Major Risk if missing)*

**Expected Output:** `/docs/design-system/page-architecture.md`

**Do-Not-Start Condition:** Missing `product-brief.md` is a **Blocker**.

**Fallback Behavior:** If `component-map.md` is missing, create page architecture referencing anticipated component categories. Flag that component map must be created and page architecture updated after.

---

### — IMPLEMENTATION TASKS —

### Task 8 — Component Implementation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `06-design-token-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `design-tokens.md` *(Blocker)*, `component-map.md` *(Major Risk if missing)*

**Expected Output:** Implemented reusable component(s) with variants, states, accessibility, token usage, and implementation report.

**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Blocker**.

**Fallback Behavior:** If `component-map.md` is missing for a small isolated component patch, proceed with a documented assumption that the component will be added to `component-map.md` afterward.

---

### Task 9 — Page Implementation

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `06-design-token-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `visual-direction.md` *(Blocker)*, `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `page-architecture.md` *(Blocker)*

**Expected Output:** Assembled page using existing components with states, responsive behavior, accessibility, and implementation report.

**Do-Not-Start Condition:** Any of the four required project files missing is a **Blocker**.

**Fallback Behavior:** Do not implement the page. Create the missing file(s) first.

---

### Task 10 — Redesign / Cleanup

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `14-design-review-checklist.md`, `15-final-polish-rules.md`
**Required Project Files:** `visual-direction.md` *(Major Risk)*, `design-tokens.md` *(Major Risk)*, `page-architecture.md` *(Major Risk)*

**Expected Output:** Audited and improved UI with documented changes.

**Do-Not-Start Condition:** Do not begin visual redesign or cleanup if `visual-direction.md`, `design-tokens.md`, and `page-architecture.md` are all missing — redesigning without any reference constraints produces additional AI aesthetic drift, not a fix. If all three are missing, create them first.

**Fallback Behavior:** If project design system files are missing, create them before redesigning. Do not redesign without reference constraints — that creates more AI aesthetic drift, not less.

---

### — REVIEW TASKS —

### Task 11 — Interaction State Pass

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `10-interaction-state-rules.md`, `12-accessibility-rules.md`, `14-design-review-checklist.md`

**Required Project Files:** `component-map.md` *(Major Risk if missing)*

**Expected Output:** All missing states implemented. `/docs/reviews/state-review.md` containing: state matrix (per component/section: pass/fail), missing states found (with severity), states implemented, unresolved state risks, and do-not-ship state conditions triggered (Yes/No).

**Do-Not-Start Condition:** None blocking.

**Fallback Behavior:** If `component-map.md` is missing, audit against known components in the codebase. Flag `component-map.md` as needed.

---

### Task 12 — Responsive Review

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `08-layout-system-rules.md`, `11-responsive-design-rules.md`, `14-design-review-checklist.md`

**Required Project Files:** `page-architecture.md` *(Major Risk if missing)*, `component-map.md` *(Major Risk if missing)*

**Expected Output:** Responsive issues identified and fixed. `/docs/reviews/responsive-review.md`

**Do-Not-Start Condition:** None blocking.

**Fallback Behavior:** If `page-architecture.md` is missing, review against standard layout model expectations from `08-layout-system-rules.md`. Flag missing page architecture as risk.

---

### Task 13 — Accessibility Review

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `10-interaction-state-rules.md`, `12-accessibility-rules.md`, `14-design-review-checklist.md`

**Required Project Files:** None blocking — accessibility rules are universal.

**Expected Output:** Accessibility issues identified and fixed. `/docs/reviews/accessibility-review.md`

**Do-Not-Start Condition:** None.

**Fallback Behavior:** None — accessibility review can proceed without project design system files.

---

### Task 14 — Anti-AI-Aesthetic Review

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `14-design-review-checklist.md`

**Required Project Files:** `visual-direction.md` *(Major Risk if missing)*, `design-tokens.md` *(Minor Risk if missing)*

**Expected Output:** AI aesthetic issues identified and fixed. `/docs/reviews/anti-ai-aesthetic-review.md`

**Do-Not-Start Condition:** None blocking. Missing `visual-direction.md` is a Major Risk.

**Fallback Behavior:** If `visual-direction.md` is missing, apply universal anti-AI rules from `03-anti-ai-aesthetic-rules.md` only. Flag that project-specific approval status cannot be verified.

---

### Task 15 — Final Polish

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `03-anti-ai-aesthetic-rules.md`, `14-design-review-checklist.md`, `15-final-polish-rules.md`
**Required Project Files:** `visual-direction.md` *(Major Risk)*, `design-tokens.md` *(Major Risk)*

**Expected Output:** Targeted polish improvements. `/docs/reviews/final-polish-report.md`

**Do-Not-Start Condition:** Design review via `14-design-review-checklist.md` must have been run first. Polish does not replace review.

**Fallback Behavior:** If design review has not been run, run it first, then proceed to polish.

---

### Task 16 — Visual QA / Screenshot Review

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `14-design-review-checklist.md`

**Required Project Files:** `page-architecture.md` *(Minor Risk if missing)*

**Expected Output:** `/docs/reviews/visual-qa-report.md` with all Critical failures fixed before marking complete. Required report format:

```
Visual QA Report:
- Screens reviewed
- Breakpoints reviewed: 320px / 375px / 768px / 1024px / 1440px
- States reviewed
- Issues found by severity (Critical / Major / Minor)
- Screenshots or visual evidence location if available
- Fixes applied
- Remaining risks
- Do-not-ship conditions triggered: Yes/No
```

**Do-Not-Start Condition:** None blocking.

**Fallback Behavior:** If visual tooling (Playwright, Storybook, etc.) is unavailable, review through browser developer tools responsive mode and document findings manually.

---

### — SPECIALIZED IMPLEMENTATION TASKS —

### Task 17 — Mobile App UI Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `06-design-token-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `product-brief.md` *(Blocker)*, `visual-direction.md` *(Blocker)*, `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `page-architecture.md` *(Blocker)*

**Expected Output:** Mobile-first implementation with touch targets ≥44px, navigation transformation, mobile state feedback, mobile accessibility.

**Do-Not-Start Condition:** Missing any of `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, or `page-architecture.md` is a **Blocker**.

**Fallback Behavior:** Follow Task 9 blocker protocol. Mobile-specific: if no mobile nav pattern is defined in `page-architecture.md`, define one explicitly before implementing.

---

### Task 18 — Desktop App UI Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `06-design-token-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `product-brief.md` *(Blocker)*, `visual-direction.md` *(Blocker)*, `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `page-architecture.md` *(Blocker)*

**Expected Output:** Desktop-optimized implementation with multi-pane layouts, keyboard behavior, desktop focus management, high-density UI where appropriate.

**Do-Not-Start Condition:** Missing any of `product-brief.md`, `visual-direction.md`, `design-tokens.md`, `component-map.md`, or `page-architecture.md` is a **Blocker**.

**Fallback Behavior:** Follow Task 9 blocker protocol.

---

### Task 19 — Landing Page Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `05-visual-identity-rules.md`, `06-design-token-rules.md`, `07-typography-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`

**Required Project Files:** `product-brief.md` *(Blocker)*, `visual-direction.md` *(Blocker)*, `design-tokens.md` *(Blocker)*

**Expected Output:** Product-specific landing page — not a generic SaaS template — with clear hierarchy, responsive layout, accessible interaction, component reuse, and all required interaction states.

**Do-Not-Start Condition:** Missing `visual-direction.md` is a **Blocker** — landing pages are visually identity-forward.

**Fallback Behavior:** Create `visual-direction.md` first. Apply `03-anti-ai-aesthetic-rules.md` with maximum severity. Anti-AI rules are non-negotiable for landing pages.

---

### Task 20 — Data-Heavy Dashboard / Table / Chart Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `06-design-token-rules.md`, `07-typography-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `product-brief.md` *(Major Risk)*, `visual-direction.md` *(Major Risk)*, `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `page-architecture.md` *(Major Risk)*

**Expected Output:** Data display implementation with loading/empty/error states, responsive table strategy, readable numeric hierarchy, accessible data tables.

**Do-Not-Start Condition:** Missing `design-tokens.md` is a **Blocker** — strong token discipline for consistent status colors and typography is critical.

**Fallback Behavior:** Create `design-tokens.md` first. Data states (loading, empty, error) are mandatory — do not ship without them.

---

### Task 21 — Form-Heavy UI Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `06-design-token-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `design-tokens.md` *(Major Risk if missing)*, `component-map.md` *(Major Risk if missing)*

**Expected Output:** Form implementation with all validation states, accessible labels, error associations, keyboard navigation, responsive layout.

**Do-Not-Start Condition:** None blocking.

**Fallback Behavior:** If `design-tokens.md` is missing, flag as Major Risk. Accessibility form rules from `12-accessibility-rules.md` apply strictly — every input must have a label.

---

### Task 22 — Design System Update Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `06-design-token-rules.md`, `07-typography-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `14-design-review-checklist.md`, `16-change-management-rules.md`

**Required Project Files:** `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `visual-direction.md` *(Blocker)*

**Expected Output:** Updated project design system files. Change classified as Additive / Breaking / Structural per `16-change-management-rules.md`. Impact cascade audit completed for all affected files. Migration report saved to `/docs/reviews/change-migration-report.md` (Breaking and Structural changes only).

**Do-Not-Start Condition:** All three required project files must exist. Cannot update a design system that has not been created.

**Fallback Behavior:** Create all three required project files first. After any token or visual direction change, classify the change and follow the cascade audit protocol in `16-change-management-rules.md` before proceeding to implementation.

---

### Task 23 — Component Library Creation Task

**Required Core Files:**
`00-skill-router.md`, `01-agent-operating-protocol.md`, `06-design-token-rules.md`, `07-typography-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
**Required Project Files:** `design-tokens.md` *(Blocker)*, `component-map.md` *(Blocker)*, `visual-direction.md` *(Blocker)*

**Expected Output:** Organized component library following the primitive / layout / domain / state layer taxonomy, with all required variants and states.

**Do-Not-Start Condition:** Missing `component-map.md` is a **Blocker** — cannot build a library without knowing what components are needed.

**Fallback Behavior:** Create `component-map.md` first. Build in order: tokens → primitives → layout components → state components → domain components.

---

### — SYSTEM TASKS —

### Task 24 — Agent Adapter Creation Task

**Status: COMPLETE.**

Adapter files exist in `/ai-design-os/adapters/` for: Claude Code, Cursor, OpenAI Codex, Antigravity, Blackbox AI, and MiniMax. See `adapters/README.md` for installation instructions.

---

### Task 25 — Project Template Creation Task

**Status: COMPLETE.** Starter templates exist in `ai-design-os/project-templates/` for: SaaS web app, mobile app, and landing page.

---

## Ambiguous Task Protocol

If a task cannot be clearly classified:

1. Read `01-agent-operating-protocol.md` and `02-design-principles.md` as a minimum.
2. Read `03-anti-ai-aesthetic-rules.md` and `14-design-review-checklist.md` as a minimum.
3. Classify the task before proceeding.
4. When in doubt between two task types, use the stricter route.

---


## Router Quality Gate

Full checklist in `01-agent-operating-protocol.md` → Protocol Checklist section. Apply it before starting any task. Do not duplicate it here.
