# MiniMax Adapter — Installation

MiniMax does not currently support a project-level persistent instruction file (like CLAUDE.md or AGENTS.md). Instructions must be delivered via the API or pasted manually at the start of each session.

---

## Option A: API Integration (system instructions parameter)

When calling MiniMax via API:

```python
response = client.chat.completions.create(
    model="MiniMax-Text-01",
    messages=[...],
    # Pass the system-prompt.md content here:
    system_prompt=open("ai-design-os/adapters/minimax/system-prompt.md").read()
)
```

Or using the `instructions` field if your MiniMax API version supports it.

---

## Option B: Session Start Paste

For manual sessions (chat interface):

1. Open `system-prompt.md`.
2. Copy the full instruction block.
3. Paste it as the first message in your MiniMax session before describing your UI task.

---

## Option C: Custom Instructions (If Available)

If your MiniMax interface supports persistent custom instructions or a system prompt field:

1. Open Settings → Custom Instructions (or equivalent).
2. Paste the content from `system-prompt.md`.

This persists across sessions without requiring a manual paste each time.

---

## Verifying Setup

After loading the instructions, send:

```
Read ai-design-os/core/00-skill-router.md and tell me what task types are available.
```

If MiniMax reads and reports the task types, the path is correct and the system is active for this session.

---

## Notes

- Because MiniMax lacks a native project file format, the instructions are session-scoped rather than persistent. You must reload them for each new session.
- If MiniMax adds a native persistent instruction format in a future release, create a project file using the content of `system-prompt.md` in that format and follow the same install pattern as the Claude or Codex adapters.
