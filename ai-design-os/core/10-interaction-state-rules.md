# 10 — Interaction State Rules

## Purpose

Make UI statefulness mandatory. Prevent static-only UI by requiring all interactive and data-driven UI to define and implement the full state matrix.

---

## When To Read

- All component implementation tasks (Task 8).
- All page implementation tasks (Task 9).
- Interaction state pass tasks (Task 11).
- Form-heavy UI tasks (Task 21).
- Data-heavy dashboard tasks (Task 20).
- Mobile app UI tasks (Task 17).
- Design review tasks — Category 8 Interaction States.

---

## Required Inputs

- Project's `component-map.md` — identifies which components need which states.
- Project's `design-tokens.md` — state visual treatment uses semantic state tokens.

If `design-tokens.md` is missing: **Blocker** per `01-agent-operating-protocol.md`.

---

## Non-Negotiable Rule

Do not ship interactive or data-driven UI with only a default state.

A component that only renders its default state is not a production component. Every interactive element and every data-driven section has a state matrix. That matrix must be fully implemented.

---

## State Category 1 — Interactive States

Required for every interactive element: button, link, input, select, checkbox, switch, nav item, tab, and equivalent controls.

| State | When Required | Visual Requirement | Behavioral Requirement | Accessibility Requirement |
|---|---|---|---|---|
| Default | Always | Token-based styling | Receives focus and click/tap | Correct semantic role |
| Hover | Desktop web, desktop app | Visually distinct from default | Cursor feedback | Not required on mobile touch |
| Active (pressed) | All platforms | Distinct from hover; immediate feedback | Visual response on press/tap | Expected but not ARIA-mandated |
| Focus-visible | Always | Visible focus ring using focus-ring tokens | Keyboard can reach and activate | Required — never suppress without replacement |
| Disabled | When applicable | Reduced opacity or muted; cursor: not-allowed on web | Not interactive; cannot be submitted | `disabled` or `aria-disabled`; visually distinct from default |

**Focus-visible rule:** The focus ring must be visible. Use `focus-ring`, `focus-ring-width`, and `focus-ring-offset` tokens from `design-tokens.md`. Do not set `outline: none` without providing a replacement focus indicator.

**Disabled rule:** A disabled state must be visually distinct from default. It must not look identical to the active state. It must not appear clickable.

---

## State Category 2 — Async / Data States

Required for every section that loads, fetches, or displays data that may be absent or fail.

---

### Loading State

**Required when:** Any data is fetched asynchronously.

**Rules:**
- Do not show a blank page or white space while loading.
- Use a skeleton for content areas where the shape of the expected content is known.
- Use a spinner for smaller elements or targeted reload actions.
- Do not use a global full-page spinner for loads expected to exceed 500ms.
- Skeleton shapes must match the expected content shape — not generic uniform rectangles.

**Skeleton vs. Spinner guidance:**

| Use Skeleton | Use Spinner |
|---|---|
| Full data sections: lists, tables, dashboards, cards | Single-item reload, submit in progress, inline action |
| Initial page load of content area | Loading inside a button after user action |
| When content shape is known | When content shape is unknown |
| Perceived performance is critical | Action feedback is the goal |

**Additional loading patterns:**
- Progress bar: for long, measurable operations (file upload, multi-step process).
- Inline loading text: for small contextual loads where space is constrained.
- Optimistic UI: apply result immediately for high-confidence reversible actions; confirm asynchronously.
- Disabled pending state: disable the trigger control while an action is in progress.

---

### Empty State

Empty states have different causes. Each requires different copy and a different action.

| Type | Cause | Required Elements |
|---|---|---|
| New user / no content | User has not yet created anything | Explanation + creation action + optional guide |
| Filtered / no results | Active filters returned nothing | Explain filters are active + clear or adjust filter action |
| Permission block | User cannot see content due to role | Explain access level + contact or upgrade action |
| Data source unavailable | External feed or integration is disconnected | Explain connection status + reconnect action |
| Partial setup | Feature requires configuration before content appears | Explain what is missing + setup action |

**Rule:** "No data" is not an empty state message. Every empty state must explain the specific reason and provide a specific next action.

---

### Error State

Errors have different causes. Each requires a different recovery path.

| Type | Cause | Required Elements |
|---|---|---|
| User-fixable error | User input, missing field, format issue | Explain what is wrong + specific correction instruction |
| System error | Internal failure the user cannot fix | Plain language explanation + retry action |
| Network error | Connection lost or request timed out | Connection status indication + retry action |
| Permission error | Insufficient access to perform action | Explain access requirement + contact or upgrade action |
| Validation error | Form submitted with invalid data | Field-level inline error + optional form-level summary |
| Destructive action error | Irreversible operation failed partially | Explain current state + support contact or recovery path |

**Rule:** Every error state must include a recovery action. "Something went wrong" with no next step is not an error state — it is a dead end.

---

### Success State

**Required when:** An async operation completes and the result is not immediately obvious from the UI.

**Show success feedback for:**
- Form submission
- File upload completion
- Account, profile, or settings update
- Saved configuration or preference
- Destructive action completion where the result is not otherwise visible (e.g., item deleted from a list that is no longer on screen)

**Do not show separate success feedback when:**
- The result is immediately visible in the UI — for example, a new item appears in a list immediately after being added
- The UI change itself clearly confirms the action was taken
- A success indicator would create noise without adding information

**Rules:**
- Use toast notifications for low-priority confirmations.
- Use inline success messages for form flows.
- Dismiss auto-dismissible success messages after a reasonable delay unless the user must acknowledge them.

---

### Partial Data State

**Required when:** A data section loads but not all data is available.

Rules:
- Show what is available.
- Communicate clearly that data is partial.
- Provide a retry or reload action if appropriate.

---

## State Category 3 — Extended UI States

Implement only the states the component actually needs. Do not add states for conditions the product does not support.

| State | Required When |
|---|---|
| Selected | Any selectable item: list row, card, tree node, table row |
| Expanded | Accordion items, tree nodes, collapsible panels |
| Collapsed | Same as expanded — must be visually distinct from expanded |
| Dragging | Drag-and-drop implementations — visual lift or opacity change during drag |
| Uploading | File upload components — progress indicator and cancel action |
| Syncing | Auto-save or sync indicators — visual spinner or status text |
| Offline | Products with offline support — persistent offline indicator |
| Permission Denied | Role-restricted content — visible lockout, not a silent blank section |
| Unsaved Changes | Editors and forms with auto-save — persistent indicator; discard/save decision |
| Validation Error | All form fields — inline, connected to the field |
| Unavailable | Feature flagged off or temporarily down — visible indication with explanation |
| Delayed | Operation taking longer than expected — in-progress message after a defined threshold |
| Stale Data | Cached data pending refresh — staleness indicator + refresh action |
| Recalculating | Data being reprocessed after an action — visual indication, optional loading overlay |

---

## Form Validation State Rules

1. **Field-level validation:** Error message appears below the field. Uses `danger` token. Associated with the field via accessibility attributes per `12-accessibility-rules.md`.
2. **Form-level summary:** For long forms, display a summary of all validation errors at the top of the form on submit attempt.
3. **Inline errors:** Show errors adjacent to the relevant field, not in a global modal.
4. **Disabled submit:** Disable the submit button while submission is in progress. Re-enable with error state if submission fails.
5. **Success confirmation:** Show confirmation after successful submission. Describe what happened specifically.
6. **Input preservation:** Preserve user-entered data on validation failure. Do not clear the form on error.
7. **Validation timing:** Validate on blur (leaving the field) or on submit — not on every keystroke unless the validation is fast and non-intrusive.

---

## Mobile Touch Feedback

1. Tap targets must provide visible press/active feedback. Do not rely on hover states.
2. Active/pressed state must be visible within 100ms of touch.
3. Pull-to-refresh must show a loading indicator at the pull threshold.
4. Swipe gestures must show directional feedback and have a cancel threshold.
5. Long-press interactions must show a hold indicator and a timeout boundary.

---

## Desktop Keyboard And Focus Feedback

1. Focus-visible must be clearly visible on every keyboard-reachable element.
2. Hover states must be visually distinct from focus states — do not use the same treatment for both.
3. Context menu trigger (right-click) must have an equivalent keyboard mechanism.
4. Drag-and-drop must have an equivalent keyboard mechanism.
5. Multi-select via keyboard (Shift+Click equivalent) must be supported in any selectable list.

---

## Required Output For State Pass Tasks

```
State Matrix:
[For each audited component or section: state and pass/fail]

Missing States Found:
[List each missing state, its component, and severity]

States Implemented:
[List each state added during this pass]

Unresolved State Risks:
[States that could not be implemented due to missing data, component API limitations, or other blockers]
```

---

## Quality Gate

All conditions below are **Critical**. Any single failure blocks shipping until fixed or explicitly escalated with a documented plan.

Do not ship if any of the following are true:

- Any interactive element has only a default state.
- Focus-visible state is missing on any keyboard-reachable element.
- Any data-driven section has no loading state.
- Any data-driven section has no empty state.
- Any data-driven section has no error state.
- Any error state has no recovery action.
- Any empty state has no next action.
- Any disabled element looks identical to the active or default state.
- State differentiation uses color only — text or icon must also be used per `12-accessibility-rules.md`.
- Any form field has no validation error state.
