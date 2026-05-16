# Blackbox AI Adapter — Installation

Blackbox AI's project-level persistent instruction format uses `.blackboxhints`. This format is not fully documented publicly, so two options are provided.

---

## Option A: .blackboxhints File (Native Format)

1. Copy `.blackboxhints` to your project root:
   ```
   cp ai-design-os/adapters/blackbox/.blackboxhints ./.blackboxhints
   ```

2. Verify the path reference inside the file matches where `ai-design-os/` lives in your project.

3. If Blackbox reads `.blackboxhints` automatically in your version, setup is complete.

---

## Option B: Custom Instructions Paste (Reliable Alternative)

If `.blackboxhints` is not auto-read in your Blackbox version:

1. Open Blackbox settings → Custom Instructions (or equivalent).
2. Copy the content from `system-prompt.md` and paste it into the custom instructions field.

This method works regardless of the file format Blackbox supports.

---

## Option C: Session Start Paste

For one-off sessions without persistent instructions:

1. Open `system-prompt.md`.
2. Copy the instruction block.
3. Paste it at the beginning of the Blackbox conversation before describing your UI task.

---

## Verifying Installation

After installing, send this message to Blackbox:

```
Read ai-design-os/core/00-skill-router.md and tell me what task types are available.
```

If Blackbox reads and reports the task types, the path is correct and the system is active.

---

## Notes

- The `.blackboxhints` format may vary across Blackbox versions. If it is not recognized, use the system-prompt paste method.
- The system-prompt.md content is functionally identical to the `.blackboxhints` file — same rules, different delivery method.
