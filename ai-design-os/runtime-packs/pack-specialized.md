# Specialized Implementation Pack — AI Design OS

**For:** Tasks 19, 20, 21, 23 — Landing Page, Data-Heavy Dashboard, Form-Heavy UI, Component Library.

Read this + `pack-implementation.md` (for full implementation rules) + `01-agent-operating-protocol.md` + required project files. This pack adds task-specific rules on top of the base implementation rules in `pack-implementation.md`. Do not read this pack in isolation.

---

> **Pack Maintenance Metadata** (human-facing — agents: continue past this block)
> - Synthesizes (task-specific rules from): `03-anti-ai-aesthetic-rules.md` §Landing Page, `08-layout-system-rules.md` §Form Layout, `09-component-architecture-rules.md` §Library Build Order
> - Last verified against core files: 2026-05-15
> - Re-verify when any listed core file is modified. Run `ai-design-os/scripts/check-pack-sync.sh` from project root to detect drift.

---

## Task 19 — Landing Page

**Required project files:** product-brief + visual-direction + design-tokens *(all Blocker)*. Missing `visual-direction.md` is a Blocker — landing pages are identity-forward.

**Anti-AI rules apply at maximum severity.** Landing pages are the highest-risk surface for AI aesthetic drift. The generic SaaS landing page is a hard forbidden pattern: dark gradient bg + glowing feature cards + three-column icon grid + testimonials + CTA.

### Landing Page Specific Rules

**Structure:**
- Hero: specific value proposition, primary CTA, supporting context — not a vague tagline
- Feature or benefit sections: map to real product claims or user needs — no filler sections
- Social proof: testimonials, metrics, logos — contextually placed where they are relevant
- Secondary CTA: placed where user intent is highest after reading key content
- Footer: navigation, legal, company context

**Content rules:**
1. Every section must map to a real product claim, user need, or decision the user needs to make. Remove any section that does not.
2. The primary CTA must appear early — do not reserve it only for the bottom of the page.
3. Typography must create hierarchy, not decoration. Gradient text, multi-color text, and decorative type effects require explicit visual-direction.md approval.
4. Anti-AI aesthetic rules: no generic icon grid, no gradient overlays, no glowing card surfaces, no vague hero copy.

**Mobile rules:**
- Hero copy shortened to core value proposition
- Single-column layout
- CTA prominent at key scroll points — not only at top and bottom
- Feature sections stack; images/screenshots may be omitted or condensed on mobile

**Required states:**
- All interactive elements: hover, focus, active
- CTA buttons: hover, focus, active, loading (if form submit)
- Any form on landing page (email capture, waitlist): full validation states

### Landing Page Required Output

```
Sections implemented: [list with purpose mapping]
Anti-AI checks passed: [confirm no generic patterns used]
CTA placement: [above fold + at scroll point + section]
Mobile behavior: [how each section adapts]
Design review run: [Yes/No]
```

---

## Task 20 — Data-Heavy Dashboard / Table / Chart

**Required project files:** design-tokens + component-map *(Blocker)*; product-brief + visual-direction + page-architecture *(Major Risk)*.

### Dashboard Specific Rules

**Layout:**
- Summary header: date range, active filters, key summary metrics visible above fold
- Chart area or data grid: primary content zone
- Filter sidebar or filter bar: visible and persistent — not hidden behind a modal
- Drill-down or detail panel: revealed on selection, not on separate page if avoidable

**Metric tiles:** Every tile must have:
- Label (what the metric measures)
- Value (the current value with units)
- Trend or context (period comparison, baseline, or target relationship)
- Actionable relationship (what to do with this information or where to drill)

Tiles without these four elements are the "meaningless dashboard metrics" forbidden pattern.

**Charts:** Every chart must have:
- Title (what is being measured)
- Axis labels with units
- Baseline or comparison period
- Data source label

Do not ship a chart with only a visual representation and no supporting context.

**Every data section requires:**
- Loading state (skeleton matching expected content shape)
- Empty state (explains why empty + next action specific to the data section)
- Error state (explains what failed + retry action)

Do not use a single global page-level spinner or page-level error for all data sections. Each independent data section has its own state.

**Responsive strategy (required):**
- Mobile: summary metrics first (single column), charts condense to key metrics only, secondary panels collapse to accordion or separate screen
- Filters: bottom sheet on mobile, visible bar on desktop
- Tables: choose and implement one of — horizontal scroll / stacked row cards / column prioritization

**Status colors in data displays:** Use semantic tokens only (`success`, `warning`, `danger`, `info`). Do not invent new status colors outside the token system.

### Dashboard Required Output

```
Data sections and their states: [each section: loading/empty/error implemented: yes/no]
Chart requirements met: [each chart: title/axes/baseline/source: yes/no]
Metric tiles: [each tile: label/value/trend/action: yes/no]
Filter strategy: [visible and persistent on desktop; mobile behavior defined]
Responsive strategy: [which mobile strategy chosen for tables/charts]
```

---

## Task 21 — Form-Heavy UI

**Required project files:** design-tokens + component-map *(Major Risk each — proceed with documented assumption if missing)*

### Form-Heavy Specific Rules

**Field structure (required for every input):**
- Visible `<label>` above the field — placeholder text is not a label
- Help text: below label or below field, associated via `aria-describedby`
- Error message: below field, associated via `aria-describedby`, uses `danger` token
- Required indicator: asterisk (*) with a visible legend at form top explaining the convention

**Grouping:**
- Related fields grouped under a named section heading
- Use `<fieldset>` + `<legend>` for checkbox or radio groups
- Progressive disclosure (multi-step or collapsible sections) for forms exceeding ~8 fields

**Validation:**
- Validate on blur (leaving field) or on form submit — not on every keystroke
- On submit failure: move focus to error summary or first invalid field
- Form-level error summary at top of form for long forms
- Disable submit while submission in progress; re-enable with error state if failure
- Preserve user-entered data on validation failure — never clear the form on error

**Submit action:**
- Sticky at bottom or clearly positioned in the viewport — not buried after long field lists
- Loading state while in progress
- Success state after completion (describes what happened specifically)

**Mobile:**
- Always single-column
- Labels above fields
- Submit action sticky at bottom
- Input font-size ≥16px (prevents iOS Safari auto-zoom)
- Virtual keyboard: fields must not be obscured; use scroll-into-view or viewport adjustment

### Form Required Output

```
Fields implemented: [list with label/help/error each confirmed]
Required field indicators: [legend present yes/no]
Validation behavior: [on blur / on submit — documented]
Submit state: [loading/success/error implemented]
Mobile behavior: [single-column, labels above, sticky submit confirmed]
Keyboard navigation: [Tab order logical through entire form — verified]
```

---

## Task 23 — Component Library Creation

**Required project files:** design-tokens + component-map + visual-direction *(all Blocker)*

### Build Order (Follow Strictly)

1. Tokens — verify design-tokens.md is complete before building any component
2. Primitive UI components (Layer 1) — Button, Input, Select, Checkbox, Radio, Badge, Avatar, Icon, Skeleton, Spinner, Tooltip, Tag
3. Layout components (Layer 2) — Container, Grid, Stack, Panel, Modal, Drawer, Sheet, PageHeader
4. State components (Layer 4) — LoadingSkeleton, EmptyState, ErrorState, PermissionDenied
5. Domain components (Layer 3) — product-specific, after primitives and layouts are stable

Do not build domain components before primitives are established. Do not skip ahead.

### Required Variants Per Primitive (Minimum)

| Component | Required Variants |
|---|---|
| Button | primary, secondary, ghost/outline, destructive; sizes: sm/md/lg; icon-only |
| Input | default, error, disabled, read-only; sizes: sm/md/lg |
| Select | default, error, disabled; single and multi-select |
| Badge | success, warning, danger, info, neutral; solid and soft/tonal |
| Card | default, interactive/clickable, selected, elevated |
| Dialog/Modal | standard, destructive confirmation, full-screen (mobile) |
| Drawer | left/right, with and without overlay |
| Tooltip | top/bottom/left/right |
| Nav Item | default, active, hover, disabled; with and without icon |
| Toast/Alert | success, warning, danger, info; dismissible and persistent |
| Skeleton | block, text, avatar, card, table-row shapes |
| EmptyState | with primary action, with secondary action, icon/no-icon |
| ErrorState | user-fixable, system error, not-found, permission-denied |

Do not ship a primitive with only the most common variant and defer others — core variants ship with the component.

### Every Primitive Must

- Use semantic tokens for all visual values — no hardcoded colors, spacing, radius, or shadow
- Support all required interactive states: default, hover, active, focus-visible, disabled
- Have keyboard interaction built in
- Have accessibility attributes: `aria-label` for icon-only controls, correct semantic role
- Be documented in `component-map.md` with variants and states listed

### Component Library Required Output

```
Components built: [list by layer]
Variants per component: [list with count]
States per component: [interactive + data states]
component-map.md updated: [Yes — all new components documented]
Token coverage: [confirm no hardcoded values in any component]
Accessibility: [keyboard tested, ARIA verified, focus-visible confirmed for each interactive component]
```
