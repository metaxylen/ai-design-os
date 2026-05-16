# AI Design OS — Claude Code Adapter (Project-Level)

This file instructs Claude Code to follow the AI Design OS before any UI-related task in this project.

The AI Design OS is located at: `/ai-design-os/` (adjust path if your project structure differs)

---

## Before Every UI Task

Before writing any code for a UI-related task:

1. Read `/ai-design-os/runtime-packs/00-mini-router.md`
2. Identify the task type and which pack or core files to read
3. **Implementation tasks** (Tasks 8, 9, 10, 17, 18) → read `runtime-packs/pack-implementation.md` + required project files
4. **Specialized tasks** (Tasks 19, 20, 21, 23) → read `pack-implementation.md` + `pack-specialized.md` + required project files
5. **Review tasks** (Tasks 11, 12, 13, 14) → read `pack-review.md` + required project files
6. **Polish/QA tasks** (Tasks 15, 16) → read `pack-polish.md`
7. **Setup tasks** (Tasks 1–7) and **design system updates** (Task 22) → read core files per the mini-router table
8. Write the pre-implementation plan (format is defined inside each pack; for setup tasks use `01-agent-operating-protocol.md`)
9. Do not write code until the plan is complete

If any Blocker-level project file is missing: stop, explain what is missing and why it matters, and request it before proceeding. Do not invent values.

---

## Before Writing Any Code

After completing the pre-implementation plan, output exactly one of:

```
PROCEED — all required files confirmed present, plan complete.
```

```
BLOCKED — [specific file] missing. [Explain what is needed and why.]
```

Do not write any implementation code before outputting this declaration.
If BLOCKED: stop and wait for the user to resolve the missing requirement.
The user must see this declaration before implementation begins.

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
