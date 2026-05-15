# 12 — Accessibility Rules

## Purpose

Enforce accessibility requirements across all UI — semantic structure, keyboard navigation, visible focus, accessible forms, color contrast, and ARIA usage. These rules are non-negotiable.

---

## When To Read

- All implementation tasks (Tasks 8, 9, 17, 18, 19, 20, 21, 23).
- Accessibility review tasks (Task 13).
- Interaction state pass tasks (Task 11) — focus states.
- Design review tasks — Category 10 Accessibility.

---

## Required Inputs

None — accessibility rules are universal. They apply regardless of which project files exist.

---

## Non-Negotiable Rule

An interface that cannot be operated by keyboard, has no visible focus states, or communicates status by color only is not production-ready. There are no exceptions to the base requirements in this file.

---

## 1. Semantic Structure

1. Use heading elements (`h1`–`h6`) for page and section headings. Do not use styled `div` or `span` as headings.
2. Use exactly one `h1` per page. Multiple `h1` elements flatten the document hierarchy.
3. Use landmark elements: `main`, `nav`, `header`, `footer`, `section`, `aside`, `article`. These communicate document structure to assistive technologies.
4. Use lists (`ul`, `ol`, `li`) for groups of related items. Do not use `div` for list-like structures.
5. Use tables for tabular data with proper `th`, `caption`, and `scope` attributes. Do not use tables for layout.
6. Use `blockquote` for quotations. Use `figure` and `figcaption` for captioned images or charts.
7. Do not use `div` or `span` for elements that have a correct semantic HTML equivalent.

---

## 1a. Data Table Accessibility

For interactive or data-driven tables, the following requirements apply in addition to the semantic structure rules above.

1. **Sortable columns:** Use `aria-sort="ascending"`, `aria-sort="descending"`, or `aria-sort="none"` on sortable `<th>` elements. Update `aria-sort` dynamically on user interaction — the value must reflect the current sort state, not a static default.
2. **Complex headers:** When column or row headers span multiple cells, use `id` and `headers` attributes to associate data cells with their headers. Do not rely on `scope` alone for spanning header relationships.
3. **Row selection:** Selectable rows must be keyboard accessible — activatable via Space or Enter. Selected state must not be communicated by background color alone; use `aria-selected="true"` on the row element.
4. **Expandable rows:** Expose expanded/collapsed state via `aria-expanded` on the trigger control within the row. Do not communicate expansion state through icon change alone.
5. **Table captions:** Provide a `<caption>` describing the table's purpose, or use `aria-labelledby` to associate a visible heading with the table element.
6. **Charts and data visualizations:** Every chart or data visualization must have a text alternative — a visible description, a linked accessible data table, or a summary of the key data points. Color-only or icon-only charts with no text alternative are not accessible.

---

## 2. Buttons vs. Links

**Rule:** Buttons perform actions. Links navigate.

| Use | When |
|---|---|
| `<button>` | Opens modal, submits form, toggles state, triggers action, deletes item |
| `<a href>` | Navigates to a different URL, route, or anchor within the page |

**Forbidden:**
- `<div onClick>` or `<span onClick>` as primary interactive controls — use `<button>` or implement full `role="button"` with `tabindex="0"` and `onKeyDown` handling for Enter and Space.
- `<a>` with no `href` used as a button.
- `<a href="#">` used as a button.

**Default preference:** Always prefer native HTML elements over ARIA workarounds. A `<button>` is always correct over `<div role="button">`.

---

## 3. Forms

1. Every form input must have an associated `<label>`. The label must be visible.
2. `placeholder` text is not a label. Placeholder disappears when the user types.
3. `aria-label` or `aria-labelledby` may supplement visible labels but must not replace them for standard form inputs.
4. Help text must be associated with its field via `aria-describedby`.
5. Error messages must be associated with their field via `aria-describedby`. Programmatic association is required — not just visual proximity.
6. Required fields must be indicated visually (asterisk with a legend explaining the convention) and programmatically (`required` or `aria-required="true"`).
7. Do not rely on color alone to indicate field errors — the error message text must be present.
8. After form submission error: move focus to the error summary or the first invalid field.
9. Use `fieldset` and `legend` to group related checkboxes or radio buttons.
10. Disabled fields: communicate the purpose. Do not silently hide unavailable options without explanation.

---

## 4. Keyboard Navigation

1. All interactive elements must be reachable by Tab key in a logical visual order.
2. Tab order must follow the visual reading order. Unexpected tab jumps are a failure.
3. Do not remove an element from the tab order without ensuring the action it provides is available elsewhere.
4. Skip navigation link: provide a "Skip to main content" link at the top of web app pages with persistent headers.
5. **Escape:** Closes any open overlay, modal, popover, dropdown, or drawer. Exception: destructive actions require confirmation before closing.
6. **Arrow keys:** Navigate within menus, listboxes, tab lists, radio groups, sliders, and tree views.
7. **Enter:** Activates a focused button or link.
8. **Space:** Activates a focused button; toggles checkboxes and switches.
9. **Home / End:** Jump to the first or last item in a listbox, menu, or grid.
10. Custom keyboard shortcuts: document them via a visible help mechanism — tooltip, keyboard shortcut panel, or help overlay.

---

## 5. Focus Management

1. Focus must always be visible. Do not remove the browser default `outline` without providing a replacement. Use `focus-ring`, `focus-ring-width`, and `focus-ring-offset` tokens from `design-tokens.md`.
2. Focus ring must have sufficient contrast against both the element background and the surrounding content — minimum 3:1 per WCAG.
3. After route changes or view transitions: move focus to the page `h1` or the primary content area.
4. After a modal or dialog opens: move focus to the first focusable element inside, or to the dialog container if no interactive element is present.
5. After a modal or dialog closes: return focus to the trigger element that opened it.
6. After form submission error: move focus to the error summary or the first invalid field.
7. After a toast notification appears: do not move focus to the toast. Toasts should be announced via live region. Focus must not be disrupted.

---

## 6. Dialogs / Menus / Popovers / Drawers

### Dialogs and Modals

1. Focus must be trapped inside the dialog while it is open. Tabbing must not exit the dialog.
2. Escape key closes the dialog unless the action is destructive — confirm before closing in that case.
3. Use `role="dialog"` or the native `<dialog>` element.
4. `aria-labelledby` pointing to the dialog title.
5. `aria-modal="true"` to communicate modality to assistive technologies.
6. After close: return focus to the trigger element.

### Menus and Dropdowns

1. Arrow keys navigate between menu items.
2. Enter or Space activates the focused menu item.
3. Escape closes the menu and returns focus to the trigger.
4. Use `role="menu"` and `role="menuitem"`, or equivalent ARIA pattern, for custom dropdown menus.

### Popovers

1. Keyboard-triggered popovers must close on Escape.
2. If the popover contains interactive elements, focus enters the popover when it opens.
3. If the popover is informational only, focus stays on the trigger.
4. Click outside and Escape both close the popover.

### Drawers and Sheets

1. Same focus trap requirements as dialogs.
2. Swipe-to-close on mobile must have a keyboard equivalent — a visible close button or Escape.
3. Scroll lock must be applied to the page body while the drawer is open.

---

## 7. Color and Contrast

1. **Text contrast:** All text must meet WCAG AA minimum — 4.5:1 for normal text, 3:1 for large text (18px+ regular or 14px+ bold).
2. **Non-text contrast:** UI components and their states (button borders, input outlines, focus rings) must meet 3:1 against adjacent colors.
3. **Focus indicator contrast:** Focus ring must meet 3:1 against the background behind it.
4. **Disabled text:** May fall below the normal contrast ratio but must remain legible. Caution: users with low vision still need to read disabled states.
5. **Color-only communication is forbidden.** Status indicators (success, error, warning, info) must always include a text label or icon in addition to color.
6. **Verify status tokens:** Check `danger`, `warning`, `success`, and `info` token values against their backgrounds in both light and dark mode if dark mode is in scope.

---

## 8. Status and Feedback Accessibility

1. Success, error, warning, and info states must communicate meaning through text or icon — not color alone.
2. Form errors must include error text — a red border alone is insufficient.
3. Loading states for dynamic content must be announced when relevant. Use `aria-live="polite"` for non-critical updates.
4. Critical errors from async operations must be discoverable by keyboard users and announced to screen readers.
5. Success messages in toasts: use `role="status"` or `aria-live="polite"`.
6. Destructive error messages: use `role="alert"` or `aria-live="assertive"`.

---

## 9. Images, Icons, and Media

1. **Meaningful images:** `alt` text must describe the content and its purpose — not the filename or "image of."
2. **Decorative images:** `alt=""` to hide from screen readers.
3. **SVG icons used meaningfully:** Use `role="img"` and `aria-label`, or a `<title>` element.
4. **Icon-only buttons:** Every icon-only button must have an accessible name via `aria-label`. Example: `<button aria-label="Close">`.
5. **Complex graphics (charts, diagrams):** Provide a text alternative — a visible description or a linked data table.
6. **Video and audio:** Captions required for video with speech. Transcripts recommended. Controls must be keyboard accessible.

---

## 10. Motion and Reduced Motion

1. All animations and transitions must respect `prefers-reduced-motion: reduce`.
2. When reduced motion is active: animations should be instant or replaced with shorter cross-fades.
3. Do not communicate essential information only through motion. State changes communicated via animation must also be reflected visually without animation.
4. Avoid flashing content — content that flashes more than 3 times per second may trigger photosensitive reactions.
5. Define reduced-motion fallbacks alongside standard animations as a design decision, not an afterthought.

---

## 11. Mobile Accessibility

1. Touch targets must be minimum 44×44px for all interactive elements.
2. Screen reader compatibility: test with VoiceOver (iOS) or TalkBack (Android) where native mobile is involved.
3. Do not use `user-scalable=no` or `maximum-scale=1` — these prevent zoom for low-vision users.
4. Do not prevent user-level font size scaling.
5. Safe areas: interactive elements and critical content must not be obscured by notch, home indicator, or navigation bar.
6. Gesture-based interactions must have a tap alternative or an explicit accessibility action.

---

## 12. Desktop App Keyboard Accessibility

1. Every action reachable by mouse must also be reachable by keyboard.
2. Custom keyboard shortcuts must be discoverable via a help overlay or keyboard shortcut list.
3. Focus traversal in multi-pane layouts: Tab must traverse panes in logical order. F6 or a custom shortcut may be used for pane switching.
4. Menu bar: keyboard-navigable with arrow keys per platform conventions.
5. Context menus: must be triggerable by keyboard (Shift+F10 on Windows; platform equivalent on other systems).
6. Resizable panels: resize handles must be keyboard-accessible with arrow keys.

---

## ARIA Anti-Patterns

Do not use ARIA when native HTML solves the problem.

**Forbidden:**
1. `role="button"` on a `<div>` or `<span>` when `<button>` is available and correct. Use `<button>`.
2. `aria-label` that overrides or duplicates visible text — if the visible label is accurate, do not add a redundant `aria-label` that changes its meaning.
3. `aria-hidden="true"` on any focusable element. Hiding a focusable element from assistive technology while it remains in the tab order creates an invisible keyboard trap.
4. Custom interactive widgets (`role="slider"`, `role="combobox"`, `role="grid"`, etc.) without implementing the full ARIA keyboard interaction pattern for that role. A role that does not match the actual behavior is worse than no role.
5. Redundant landmark nesting — for example, a `<nav>` inside another `<nav>` without a distinguishing `aria-label` on each.
6. `aria-live` regions that announce on every keystroke during typing — debounce announcements for real-time filters and search inputs to avoid announcing noise.

**Default rule:** If the UI works correctly as a native HTML element, use the native element. ARIA supplements native semantics; it does not replace them.

---

## Do-Not-Ship Conditions

All conditions below are **Critical**. Any single failure blocks shipping until fixed.

Do not ship if any of the following are true:

- Focus is invisible on any keyboard-reachable element.
- Any form input has no associated visible label.
- A `div` or `span` is used as a primary interactive control without full keyboard and ARIA behavior.
- A modal, dialog, or drawer does not trap focus while open.
- A modal, dialog, or drawer does not return focus to the trigger on close.
- Status is communicated by color only — no text or icon confirms the meaning.
- Primary navigation is not keyboard accessible.
- Any critical error is not programmatically announced or discoverable by keyboard users.

---

## Required Output For Accessibility Review Tasks

```
Issues Found:
[Each issue: description, severity (Critical / Major / Minor), file or component affected]

Fixes Applied:
[Each fix: what was changed and where]

Remaining Risks:
[Unresolved issues and why they remain]

Do-Not-Ship Conditions Triggered:
[Yes — list conditions | No]
```
