# AI Design OS — Claude Code Adapter (Global)

This file is the global version of the AI Design OS adapter for Claude Code. When installed at `~/.claude/CLAUDE.md`, it applies to every project automatically.

The AI Design OS must be present in or adjacent to the project for the core files to be accessible. Adjust the path below to match where you place the system.

The AI Design OS is located at: `/ai-design-os/` relative to the project root (adjust if your layout differs)

---

## Before Every UI Task

Before writing any code for a UI-related task:

1. Read `{project-root}/ai-design-os/core/00-skill-router.md`
2. Identify the task type from the routing table
3. Read all required core files listed for that task type
4. Locate and read all required project files listed for that task type
5. Write the pre-implementation plan defined in `01-agent-operating-protocol.md`
6. Do not write code until the plan is complete

If the `/ai-design-os/` directory does not exist in the current project, skip this behavior and proceed normally. This adapter is inactive for projects that have not installed AI Design OS.

If any Blocker-level project file is missing: stop, explain what is missing and why it matters, and request it before proceeding. Do not invent values.

---

## Non-Negotiable Rules

- Do not hardcode visual values (colors, spacing, radius, shadows) — use semantic tokens from `design-tokens.md`
- Do not create a new component without checking `component-map.md` first
- Do not ship UI with only a default state — loading, empty, error, hover, and focus states are required
- Do not treat desktop-only as complete — mobile behavior must be explicitly defined
- Do not mark a task complete without running `14-design-review-checklist.md`

---

## Quick Reference — Task Types

| Task | Number | Key Blockers |
|------|--------|-------------|
| New project setup | Task 1 | None — creates project files |
| Product brief | Task 2 | None |
| Reference analysis | Task 3 | `product-brief.md` (Major Risk) |
| Visual direction | Task 4 | `product-brief.md` |
| Design tokens | Task 5 | `visual-direction.md`, `product-brief.md` |
| Component map | Task 6 | `product-brief.md`, `visual-direction.md`, `design-tokens.md` |
| Page architecture | Task 7 | `product-brief.md` |
| Component implementation | Task 8 | `design-tokens.md` |
| Page implementation | Task 9 | `visual-direction.md`, `design-tokens.md`, `component-map.md`, `page-architecture.md` |
| Redesign / cleanup | Task 10 | All three missing = Blocker |
| Interaction states | Task 11 | None blocking |
| Responsive review | Task 12 | None blocking |
| Accessibility review | Task 13 | None blocking |
| Anti-AI aesthetic review | Task 14 | `visual-direction.md` (Major Risk) |
| Final polish | Task 15 | Review must have been run first |
| Visual QA | Task 16 | None blocking |
| Mobile app UI | Task 17 | All five project files |
| Desktop app UI | Task 18 | All five project files |
| Landing page | Task 19 | `product-brief.md`, `visual-direction.md`, `design-tokens.md` |
| Data-heavy / dashboard | Task 20 | `design-tokens.md`, `component-map.md` |
| Form-heavy UI | Task 21 | None blocking |
| Design system update | Task 22 | `design-tokens.md`, `component-map.md`, `visual-direction.md` |
| Component library | Task 23 | `design-tokens.md`, `component-map.md`, `visual-direction.md` |
