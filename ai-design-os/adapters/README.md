# AI Design OS — Adapters

Adapter files package the AI Design OS core behavior into each AI agent's native persistent-instruction format. Instead of manually telling the agent to read the router before every task, the adapter handles this automatically.

---

## Which Adapter To Use

| Agent | File to install | Format |
|-------|----------------|--------|
| Claude Code | `claude/CLAUDE.md` | Auto-read by Claude Code |
| Cursor | `cursor/.cursorrules` | Auto-read by Cursor IDE |
| OpenAI Codex | `codex/AGENTS.md` | Auto-read by Codex agent |
| Antigravity | `antigravity/AGENTS.md` | Auto-read by Antigravity |
| Blackbox AI | `blackbox/.blackboxhints` | Auto-read by Blackbox (or use `system-prompt.md`) |
| MiniMax | `minimax/system-prompt.md` | Paste manually at session start |

---

## What Adapters Do

Every adapter instructs the agent to:

1. Read `runtime-packs/00-mini-router.md` before any UI-related task
2. Classify the task type and identify which pack (or core files) to read
3. For implementation/review/polish tasks: read the appropriate pack instead of individual core files
4. For setup tasks and design system updates: read core files per the mini-router table
5. Write a pre-implementation plan before writing code (format is inside each pack)
6. Stop and report if any Blocker-level project file is missing

Adapters do not contain design rules. Design rules live in the core files. Adapters are routing and behavior triggers only.

---

## What Adapters Do Not Do

- Adapters do not replace the core files — they reference them
- Adapters do not define visual rules, token systems, or component architecture
- Adapters do not override core file rules
- Adapters do not make the agent skip pre-implementation planning

---

## Required Setup Before Using Any Adapter

1. Place the `/ai-design-os/` directory in or adjacent to your project repository so the agent can access it.
2. Install the adapter for your agent (see each adapter's `install.md`).
3. Before major UI implementation, create the required project design-system files for your task type. See `core/00-skill-router.md` for which files each task requires.

---

## Project Design-System Files (Created Per Project)

These are not part of AI Design OS — they are created in your project:

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
  final-polish-report.md
```

---

## Adapter Maintenance

Adapters are lightweight — they contain only routing behavior and behavioral non-negotiables. If core rules change, adapters do not need to be updated unless the routing behavior itself changes.

If you update core files significantly, verify that the adapter's quick-reference task list still matches the router's task numbering in `00-skill-router.md`.
