# Mini-Router — AI Design OS

Use this instead of `00-skill-router.md` for fast task routing. For fallback behavior, blocker details, and full task definitions, read `00-skill-router.md`.

---

> **Pack Maintenance Metadata** (human-facing — agents: continue past this block)
> - Synthesizes: `00-skill-router.md` (routing table distilled to pack-level routing)
> - Last verified against core files: 2026-05-15
> - Re-verify when `00-skill-router.md` task list or blocker assignments change. Run `ai-design-os/scripts/check-pack-sync.sh` from project root to detect drift.

---

## Read Order For Any Task

1. This file → identify task category and which pack to read
2. Pack file → all implementation rules (replaces reading 7–11 core files)
3. Project files required for the task type
4. Write the pre-implementation plan (format is inside the pack)

**Do not write code before outputting PROCEED or BLOCKED.**

---

## Setup Tasks — Read Core Files Directly (No Pack)

These tasks create the project files that implementation tasks require.

| Task | Core Files | Required Project Files |
|------|-----------|------------------------|
| Task 1 — New Project Setup | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12 | None — creates them |
| Task 2 — Product Brief | 01, 02, 03 | None |
| Task 3 — Reference Analysis | 01, 03, 04 | product-brief *(Major Risk)* |
| Task 4 — Visual Direction | 01, 02, 03, 05 | product-brief *(Blocker)* |
| Task 5 — Design Tokens | 01, 05, 06, 07 | visual-direction + product-brief *(Blocker)* |
| Task 6 — Component Map | 01, 09, 10, 12 | product-brief + visual-direction + design-tokens *(Blocker)* |
| Task 7 — Page Architecture | 01, 02, 03, 08, 11 | product-brief *(Blocker)* |

---

## Implementation Tasks → `runtime-packs/pack-implementation.md`

Read the pack instead of reading the 11 individual core files.

| Task | Required Project Files |
|------|------------------------|
| Task 8 — Component Implementation | design-tokens *(Blocker)*, component-map *(Blocker for full impl; Major Risk for isolated patch)* |
| Task 9 — Page Implementation | visual-direction + design-tokens + component-map + page-architecture *(all Blocker)* |
| Task 10 — Redesign / Cleanup | visual-direction + design-tokens + page-architecture *(Major Risk each; all missing = Blocker)* |
| Task 17 — Mobile App UI | All 5 project files *(Blocker)* |
| Task 18 — Desktop App UI | All 5 project files *(Blocker)* |

---

## Specialized Implementation Tasks → `runtime-packs/pack-specialized.md`

| Task | Required Project Files |
|------|------------------------|
| Task 19 — Landing Page | product-brief + visual-direction + design-tokens *(Blocker)* |
| Task 20 — Data-Heavy Dashboard | design-tokens + component-map *(Blocker)*, product-brief + visual-direction + page-architecture *(Major Risk)* |
| Task 21 — Form-Heavy UI | design-tokens + component-map *(Major Risk each)* |
| Task 23 — Component Library | design-tokens + component-map + visual-direction *(Blocker)* |

---

## Review Tasks → `runtime-packs/pack-review.md`

| Task | Required Project Files |
|------|------------------------|
| Task 11 — Interaction States | component-map *(Major Risk)*, design-tokens *(Blocker)* |
| Task 12 — Responsive Review | page-architecture + component-map *(Major Risk each)* |
| Task 13 — Accessibility Review | None blocking |
| Task 14 — Anti-AI Aesthetic Review | visual-direction *(Major Risk)* |

---

## Polish and QA Tasks → `runtime-packs/pack-polish.md`

| Task | Required Project Files |
|------|------------------------|
| Task 15 — Final Polish | visual-direction + design-tokens *(Major Risk each)*; design review must be run first |
| Task 16 — Visual QA | page-architecture *(Minor Risk)* |

---

## Design System Update — Read Core Files Directly

| Task | Core Files | Required Project Files |
|------|----------|------------------------|
| Task 22 — Design System Update | 01, 06, 07, 08, 09, 14, 16 | design-tokens + component-map + visual-direction *(Blocker)* |

**Always run `16-change-management-rules.md` before any change. Classify: Additive / Breaking / Structural. Run cascade audit. Produce migration report for Breaking and Structural changes.**

---

## PROCEED / BLOCKED Declaration

After completing the pre-implementation plan, output exactly one of:

```
PROCEED — all required files confirmed present, plan complete.
```

```
BLOCKED — [specific file] missing. [Explain what is needed and why.]
```

Do not write any implementation code before outputting this declaration.
