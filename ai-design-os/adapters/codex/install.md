# OpenAI Codex Adapter — Installation

## Project-Level Installation

1. Copy `AGENTS.md` to your project root:
   ```
   cp ai-design-os/adapters/codex/AGENTS.md ./AGENTS.md
   ```

2. Verify the path reference inside the file matches where `ai-design-os/` lives in your project.

3. Codex reads `AGENTS.md` automatically at session start. No additional configuration needed.

---

## Global Installation (All Projects)

1. Copy `AGENTS.md` to the Codex global config directory:
   ```
   mkdir -p ~/.codex
   cp ai-design-os/adapters/codex/AGENTS.md ~/.codex/AGENTS.md
   ```
   If `~/.codex/AGENTS.md` already exists, append the content rather than overwriting.

2. For each project, ensure `ai-design-os/` is present at the project root. The global adapter references it by relative path.

---

## Verifying Installation

Open a Codex session and run:

```
Read ai-design-os/core/00-skill-router.md and list the available task types.
```

If Codex reads and reports the task types, the path is correct and the system is active.

---

## Notes

- `AGENTS.md` is Codex's equivalent of Claude Code's `CLAUDE.md`.
- Codex also checks for `AGENTS.override.md` first — use this for project-specific overrides that take priority over the main file.
- If `AGENTS.md` already exists in your project for other purposes, append the AI Design OS adapter content to the bottom of the existing file.
