# Antigravity Adapter — Installation

Antigravity supports the cross-tool `AGENTS.md` standard, making installation identical to the Codex adapter.

## Project-Level Installation

1. Copy `AGENTS.md` to your project root:
   ```
   cp ai-design-os/adapters/antigravity/AGENTS.md ./AGENTS.md
   ```

2. Verify the path reference inside the file matches where `ai-design-os/` lives in your project.

3. Antigravity reads `AGENTS.md` automatically at session start.

---

## Global Installation

1. Copy `AGENTS.md` to the Antigravity global config:
   ```
   mkdir -p ~/.gemini
   cp ai-design-os/adapters/antigravity/AGENTS.md ~/.gemini/GEMINI.md
   ```
   If `~/.gemini/GEMINI.md` already exists, append rather than overwrite.

2. For each project, ensure `ai-design-os/` is present at the project root.

---

## Workspace Rules (Alternative)

Antigravity also supports workspace-level rules in `.agents/rules/`:

1. Create the directory:
   ```
   mkdir -p .agents/rules
   ```

2. Copy the adapter:
   ```
   cp ai-design-os/adapters/antigravity/AGENTS.md .agents/rules/ai-design-os.md
   ```

---

## Verifying Installation

Open an Antigravity session and run:

```
Read ai-design-os/core/00-skill-router.md and list the available task types.
```

If Antigravity reads and reports the task types, installation is complete.

---

## Notes

- Antigravity's `AGENTS.md` and Claude Code's `CLAUDE.md` can coexist in the same project — they are independent files read by their respective agents.
- If your project already uses `AGENTS.md` for Codex, the same file works for Antigravity as the content is cross-tool compatible.
