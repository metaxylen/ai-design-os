# Review Pack — AI Design OS

**For:** Tasks 11, 12, 13, 14 — Interaction State Pass, Responsive Review, Accessibility Review, Anti-AI Aesthetic Review.

Read this + `01-agent-operating-protocol.md` + any project files required for the specific review task.

---

> **Pack Maintenance Metadata** (human-facing — agents: continue past this block)
> - Synthesizes: `03-anti-ai-aesthetic-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `14-design-review-checklist.md`
> - Last verified against core files: 2026-05-15
> - Re-verify when any listed core file is modified. Run `ai-design-os/scripts/check-pack-sync.sh` from project root to detect drift.

---

## Pre-Review Plan (Required Before Any Review Task)

```
Review Task: [Task 11 / 12 / 13 / 14]
Files Read: [This pack + 01 + project files read]
Required Project Files:
  component-map.md: [found / missing — Major Risk for Task 11 and 12]
  page-architecture.md: [found / missing — Major Risk for Task 12]
  visual-direction.md: [found / missing — Major Risk for Task 14]
  design-tokens.md: [found / missing — Blocker for Task 11]
Scope of Review: [Which components, pages, breakpoints, or features are being reviewed]
Approach: [How the review will be conducted — browser devtools, device, emulator, automated tooling]

PROCEED — all required files confirmed present, review plan complete.
  OR
BLOCKED — [specific file] missing. [Explain what is needed and why.]
```

---

## Task 11 — Interaction State Pass

### What to Audit

For every interactive element (button, link, input, select, checkbox, switch, nav item, tab, and equivalents):
- [ ] Default state
- [ ] Hover state (desktop web and desktop app; not required on mobile touch)
- [ ] Active / pressed state
- [ ] Focus-visible state — visible focus ring using focus-ring tokens; **never suppress without replacement**
- [ ] Disabled state — visually distinct from default; does not look clickable

For every data-driven section (anything that fetches or displays data that may be absent or fail):
- [ ] Loading state — skeleton for known-shape content; spinner for single-element reload
- [ ] Empty state — explains specific reason; provides specific next action
- [ ] Error state — explains what went wrong; provides recovery action

### Do-Not-Ship Conditions (States)

Block shipping until resolved:
- Any interactive element has only a default state
- Focus-visible is missing on any keyboard-reachable element
- Any data-driven section has no loading state
- Any data-driven section has no empty state
- Any data-driven section has no error state
- Any error state has no recovery action
- Any empty state has no next action
- Disabled element visually identical to default or active state
- State differentiation uses color only

### Required Output

```
State Matrix:
[For each audited component or section: state and pass / fail]

Missing States Found:
[Component or section — state — severity (Critical / Major)]

States Implemented:
[Each state added during this pass]

Unresolved State Risks:
[States not implemented and why — blocker, missing API, component API limitation]

Do-Not-Ship Conditions Triggered: [Yes — list | No]
```

Save to `/docs/reviews/state-review.md`.

---

## Task 12 — Responsive Review

### Breakpoints to Verify

320px / 375px / 768px / 1024px / 1440px — all five, every page that ships to mobile users.

### Responsive Review Checklist

**Global:**
- [ ] **[Critical]** No horizontal overflow at any breakpoint
- [ ] **[Critical]** No desktop-only layout — mobile behavior explicitly defined
- [ ] **[Critical]** Mobile content priority explicitly defined, not assumed from desktop

**Navigation:**
- [ ] **[Critical]** Navigation transforms appropriately at tablet and mobile
- [ ] **[Critical]** Navigation labels visible on mobile — no icon-only primary navigation
- [ ] **[Major]** Active navigation state visible at every breakpoint

**Layout:**
- [ ] **[Major]** Grid or panel layout collapses appropriately at tablet and mobile
- [ ] **[Major]** No content hidden on mobile without a defined mechanism to access it
- [ ] **[Major]** Side panels stack below main content or accessible via drawer or sheet

**Touch:**
- [ ] **[Critical]** All touch targets ≥44px on mobile
- [ ] **[Major]** Tap active states visible
- [ ] **[Critical]** No hover-only interactions exist on mobile

**Tables / Data:**
- [ ] **[Critical]** Tables have defined mobile strategy (scroll / stack / column prioritization)
- [ ] **[Critical]** Charts adapted for mobile — not scaled down from desktop

**Overlays:**
- [ ] **[Critical]** Modals fit within mobile screen dimensions
- [ ] **[Major]** Bottom sheets account for safe area insets
- [ ] **[Critical]** Focus managed inside overlays

**Forms:**
- [ ] **[Critical]** Forms single-column on mobile
- [ ] **[Major]** Submit action reachable without scrolling
- [ ] **[Critical]** Labels visible above fields

### Required Output

```
Breakpoint Test Summary:
[Results at each breakpoint: 320px / 375px / 768px / 1024px / 1440px — pass / fail per page]

Issues Found:
[Breakpoint — component or page — description — severity]

Fixes Applied:
[What changed and in which file]

Remaining Risks:
[Known issues not resolved and why]

Do-Not-Ship Conditions Triggered: [Yes — list | No]
```

Save to `/docs/reviews/responsive-review.md`.

---

## Task 13 — Accessibility Review

### What to Audit

**Semantic structure:**
- One `h1` per page; heading hierarchy logical
- Landmark elements present: `main`, `nav`, `header`, `footer`
- Lists use `ul`/`ol`; tables use `th` + `caption` or `aria-labelledby`
- No `div`/`span` as primary interactive element without full keyboard + ARIA behavior

**Forms:**
- Every input has a visible associated `<label>` — placeholder is not a label
- Error text associated with field via `aria-describedby`
- Help text associated via `aria-describedby`
- Required fields: `required` or `aria-required="true"` + visual indicator

**Keyboard navigation:**
- All interactive elements reachable by Tab in logical visual order
- Escape closes overlays
- Arrow keys navigate within menus, listboxes, tab lists, radios
- Custom widgets implement full keyboard interaction pattern for their ARIA role

**Focus:**
- Focus visible on all keyboard-reachable elements — never `outline: none` without replacement
- Focus ring minimum 3:1 contrast against background
- Modal opens → focus moves inside; modal closes → focus returns to trigger
- Route changes → focus moves to `h1` or primary content

**Color and contrast:**
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Focus ring: 3:1 against background
- Status communicated by text or icon — not color alone

**Dialogs / Modals / Drawers:**
- Focus trapped inside while open
- Escape closes (destructive: confirm first)
- `role="dialog"`, `aria-labelledby`, `aria-modal="true"`

**Icon-only buttons:** `aria-label` present on every one.

### Do-Not-Ship Conditions (Accessibility)

Block shipping until resolved:
- Focus invisible on any keyboard-reachable element
- Any form input has no associated visible label
- Div or span used as primary interactive control without keyboard + ARIA
- Modal, dialog, or drawer does not trap focus while open
- Modal, dialog, or drawer does not return focus to trigger on close
- Status communicated by color only
- Primary navigation not keyboard accessible
- Critical error not programmatically announced or keyboard-discoverable

### Required Output

```
Issues Found:
[Description — severity (Critical / Major / Minor) — file or component]

Fixes Applied:
[What changed and where]

Remaining Risks:
[Unresolved issues and why]

Do-Not-Ship Conditions Triggered: [Yes — list | No]
```

Save to `/docs/reviews/accessibility-review.md`.

---

## Task 14 — Anti-AI Aesthetic Review

If `visual-direction.md` is missing: apply universal rules only and flag that project-specific approval status cannot be verified.

### AI Smell Diagnostic (each "yes" = risk to address before shipping)

**Structure:**
- [ ] Does this layout lack product-specific identity — could it belong to any SaaS product without modification?
- [ ] Does every page use the same layout model regardless of different content types and purposes?
- [ ] Is the primary action on key screens missing, buried, or weaker than secondary content?
- [ ] Is navigation absent, decorative, or insufficient to orient the user?

**Visual:**
- [ ] Are gradients, blobs, or glows present without explicit `visual-direction.md` approval?
- [ ] Are cards uniformly over-rounded and visually identical across different content types?
- [ ] Are shadows used decoratively on non-elevated surfaces?
- [ ] Are icons placed for visual rhythm rather than recognition or action?

**States:**
- [ ] Are loading, empty, or error states missing from data-driven sections?
- [ ] Are hover, focus-visible, or active states missing from interactive elements?
- [ ] Is the disabled state indistinguishable from default or active?

**Identity:**
- [ ] Would a senior product designer describe this as "a generic AI SaaS template"?
- [ ] Does the visual treatment contradict or drift from `visual-direction.md`?
- [ ] Could this UI be mistaken for a different, unrelated product?

### Required Output

```
Diagnostic Results:
[Each yes answer: which diagnostic, which component or screen, severity]

Remediations Applied:
[What changed and where]

Remaining Risks:
[Issues not resolved and why]

Do-Not-Ship Conditions Triggered: [Yes — list | No]
```

Save to `/docs/reviews/anti-ai-aesthetic-review.md` (standalone) or include in `/docs/reviews/design-review.md` (combined review).
