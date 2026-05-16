# Cursor Adapter — Installation

## Option A: Legacy Format (.cursorrules)

Works in all versions of Cursor. Simplest installation.

1. Copy `.cursorrules` to your project root:
   ```
   cp ai-design-os/adapters/cursor/.cursorrules ./.cursorrules
   ```

2. Verify the path reference inside the file matches where `ai-design-os/` lives in your project.

3. Cursor reads `.cursorrules` automatically. No additional configuration needed.

---

## Option B: Modern Format (.cursor/rules/)

Cursor's current format (2024+). Supports per-file targeting and YAML frontmatter. Recommended for new projects.

1. Create the rules directory if it doesn't exist:
   ```
   mkdir -p .cursor/rules
   ```

2. Create `.cursor/rules/ai-design-os.mdc`:
   ```
   ---
   description: AI Design OS routing and behavior rules for all UI tasks
   alwaysApply: true
   ---
   ```
   Then paste the content of `.cursorrules` below the frontmatter.

3. Cursor loads `.mdc` rules automatically.

---

## Verifying Installation

Open a new Cursor session and type:

```
Read ai-design-os/core/00-skill-router.md and tell me what task types are available.
```

If Cursor reads and reports the task types, the path is correct and the system is active.

---

## Notes

- `.cursorrules` and `.cursor/rules/` can coexist. Cursor loads both.
- The `.mdc` format supports `globs:` to target specific file types, but for this adapter `alwaysApply: true` is correct — routing behavior should apply to all UI-related prompts.
- Keep the adapter file committed to the repo so all team members use the same routing behavior.
