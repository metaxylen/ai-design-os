# Claude Code Adapter — Installation

## Option A: Project-Level (Recommended for most cases)

Installs the adapter for one specific project only.

1. Copy `CLAUDE.md` to your project root:
   ```
   cp ai-design-os/adapters/claude/CLAUDE.md ./CLAUDE.md
   ```

2. Verify the path in `CLAUDE.md` matches where `ai-design-os/` lives relative to your project root. The default assumes `ai-design-os/` is at the project root.

3. Claude Code will automatically read `CLAUDE.md` at the start of every session in this project.

That's it. No additional configuration needed.

---

## Option B: Global (Applies to all projects)

Installs the adapter once and activates it across every project you work on.

1. Copy `CLAUDE.global.md` to your Claude global config:
   ```
   cp ai-design-os/adapters/claude/CLAUDE.global.md ~/.claude/CLAUDE.md
   ```
   If `~/.claude/CLAUDE.md` already exists, append the content rather than overwriting.

2. The adapter checks whether `/ai-design-os/` exists in the current project before activating. If the directory is absent, the adapter is inactive for that project.

3. For each project, ensure `ai-design-os/` is placed at the project root (or adjust the path reference in the global file).

---

## Verifying Installation

After installing, open a new Claude Code session in your project and run:
```
Read ai-design-os/core/00-skill-router.md and tell me what task types are available.
```

If Claude reads and reports the task types, the adapter path is correct and the system is active.

---

## Updating

When a new version of AI Design OS is released, the adapter file itself rarely changes — only the core files update. Pull the new core files and the adapter continues to work without modification.

---

## Notes

- `CLAUDE.md` is project-level — committed to the repo, shared with the team.
- `CLAUDE.local.md` is Claude Code's gitignored variant if you need project-local overrides that shouldn't be shared.
- Multiple `CLAUDE.md` files can exist at different directory levels — Claude reads all of them and concatenates, with closer files taking precedence.
