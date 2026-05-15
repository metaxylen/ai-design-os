# 07 — Typography Rules

## Purpose

Define typographic role hierarchy and apply it consistently across all platforms, page types, and content contexts. Prevent undifferentiated type, unreadable text, platform-inappropriate sizing, and hierarchy built on color alone.

---

## When To Read

- Design token creation tasks — type tokens must follow role definitions.
- Component and page implementation tasks — every text element must use a defined role.
- Design review tasks — Category 5 Typography.
- Final polish tasks — typography rhythm is a primary polish target.

---

## Required Inputs

- Project's `design-tokens.md` — type tokens providing size, weight, line-height, and font family.
- Project's `visual-direction.md` — typography mood.

If `design-tokens.md` is missing: Blocker. Do not implement type with hardcoded values. Create design tokens first.

---

## Typography Role Model

Every text element must use one of the defined roles. Roles are mapped to token values in the project's `design-tokens.md`. This file defines what each role means, when to use it, and how it must behave.

### Display
- **Purpose:** Maximum visual impact. Landing page heroes, large screen entry points, major marketing moments.
- **Character:** Largest type on screen. Usually paired with minimal supporting text.
- **Do not use in:** App dashboards, data screens, lists, tables, settings, or any dense UI.

### H1 — Page Heading
- **Purpose:** Identify the page or primary content area.
- **Character:** Dominant, clear, appears once per page or view.
- **Always paired with:** A visible primary action or clear content area.
- **Do not use:** Multiple times per screen as a decorative pattern.

### H2 — Section Heading
- **Purpose:** Identify major content sections within a page.
- **Character:** Clearly subordinate to H1. Creates scannable sections the user can navigate visually.

### H3 — Subsection Heading
- **Purpose:** Identify content groups within sections.
- **Character:** Clearly subordinate to H2. Used in sidebar panels, card headers, settings groups, detail sections.

### Body
- **Purpose:** Primary reading text for paragraphs, descriptions, and explanations.
- **Line-height rule:** Minimum 1.5× in prose contexts. Minimum 1.4× in dense UI contexts.
- **Do not use for:** Labels, metadata, or headings.

### Small
- **Purpose:** Supporting text that is secondary to body but more prominent than metadata.
- **Use for:** Help text, captions, supporting descriptions, UI hints, secondary card body.

### Label
- **Purpose:** Form labels, button text, navigation items, tab labels, badge text, table column headers.
- **Character:** Short and purposeful. Does not wrap — truncate with ellipsis if constrained.
- **Contrast:** Must meet WCAG AA against its background in all interactive states.

### Metadata
- **Purpose:** Timestamps, secondary identifiers, fine-print context, auxiliary information.
- **Character:** Lowest visual prominence. Must still meet WCAG AA contrast minimum — verify before using `text-muted` token at metadata size.
- **Do not use for:** Any text the user needs to act on, read first, or make decisions from.

### Numeric / Stat
- **Purpose:** KPI values, dashboard metrics, prices, counts, data values.
- **Hierarchy rule:** The numeric value must be visually dominant over its label. Value and label must be distinct in size and weight.
- **Character:** Strong visual weight. Use tabular-nums font feature when available to align decimal columns in data grids.
- **Do not use:** Generic body or heading tokens for stat values — they collapse into surrounding content.

### Code / Monospace
- **Purpose:** Code snippets, IDs, technical strings, log output, command-line text, hash values.
- **Character:** Fixed-width, visually distinct from surrounding content. May require tonal background differentiation.

---

## Hierarchy Rules

1. Every screen must have at most one H1. Multiple H1 elements flatten hierarchy.
2. H1, H2, H3, body, label, and metadata must be visually distinct from each other when placed in proximity.
3. Hierarchy must be established through size and weight — not through color alone. If removing color makes levels indistinguishable, the hierarchy was built incorrectly.
4. Do not apply decorative weight (bold) to non-heading roles as a styling pattern.
5. Metadata must never have the same visual prominence as body. If it does, it competes with primary content.
6. Label text must be clearly readable at the smallest size in use. Do not reduce label size to fit a layout — adjust the layout.
7. Type scale must have at least four visually distinct levels in any complex product.

---

## Readability Rules

1. **Line-height:** Body prose: minimum 1.5×. Dense UI labels and list items: minimum 1.4×. Headings: 1.1–1.3× is standard.
2. **Line length:** Body prose: 60–80 characters per line is optimal. Dense UI: shorter lines are acceptable with proportionally tighter leading.
3. **Font weight:** Do not use weights below 400 for body text. Do not use weights above 700 for body text. Weight 900 is acceptable only for display text in deliberate brand contexts.
4. **Letter-spacing:** Do not add positive tracking to lowercase body text — it degrades readability. Uppercase short labels may use moderate positive tracking. Negative tracking on body text is forbidden.
5. **All-caps:** Acceptable for short section labels and metadata at sufficient size (minimum 11px). Not acceptable for body text, headings, or strings longer than 4–5 words.
6. **Text contrast:** All text must meet WCAG AA at its applied size and weight. Use the `text-muted` token only after verifying contrast at the actual size in use.

---

## Platform-Specific Typography Behavior

### Mobile Typography
1. Body text minimum: 14px. Do not use 12px for any text the user reads regularly on mobile.
2. Heading sizes must be scaled down relative to desktop values. Display and H1 tokens may need platform-specific overrides.
3. Labels and metadata must not wrap on mobile at typical container widths. Truncate with ellipsis and provide accessible full-text access when needed.
4. Tappable text links must meet 44px minimum touch target height.
5. Verify text behavior at 320px width — text overflow or text smaller than 11px is a failure.

**Scope boundary:** This section governs typography-specific behavior — text size minimums, hierarchy at small viewports, and text overflow. Layout-level responsive behavior, breakpoint strategy, navigation transformation, and grid collapse are governed by `11-responsive-design-rules.md` *(Phase 3)*. Once `11` is available, apply its breakpoint rules for layout and apply this file's rules for text readability and typography at those breakpoints.

### Desktop Dense Typography
1. Dense productivity UI may use smaller base sizes (13–14px body) when contrast is sufficient and density is intentional per `visual-direction.md`.
2. Metadata at 11px is acceptable in dense data contexts when WCAG AA contrast is met.
3. Multi-column layouts must maintain consistent type scale across columns. Do not allow type scale to drift per column.

### Data-Heavy / Dashboard Typography
1. Numeric/stat values must be visually dominant over their labels. Value font size should be at minimum 1.5× label size.
2. Table cell text: use body or small role. Do not use heading tokens inside table cells.
3. Table column headers: use label role, not body.
4. Chart axis labels, chart legends, chart data labels: use metadata or small role.
5. Tabular number alignment: use `font-variant-numeric: tabular-nums` for any column of numbers that should align at decimal points.
6. KPI labels and values must be structured so the value reads before the label, not the reverse.

### Form Typography
1. Every form field must have a label using the label role. The label must be visible, not hidden or replaced by placeholder text.
2. Help text: use small role. Position below or adjacent to the field.
3. Error text: use small role, `danger` color token, and connect to the field semantically.
4. Placeholder text: informational only. Do not use placeholder as the sole labeling mechanism.
5. Disabled field text: must remain readable. Do not reduce contrast of disabled text below readability.

### Editor / Builder Typography
1. Canvas content (user-authored text) uses whatever styles the user applies — not product typography rules.
2. UI chrome (toolbar labels, inspector labels, panel headers): use label and small roles.
3. Status bar, breadcrumbs, and metadata annotations: use metadata role.
4. Keyboard shortcut labels: use code/monospace role with label styling.

---

## Truncation And Wrapping Rules

1. Single-line truncation (ellipsis at end): acceptable for list item titles, navigation labels, table cell content when width is constrained.
2. Multi-line truncation (line clamp): acceptable for card descriptions when a defined maximum line count is established.
3. Every truncated string must have an accessible mechanism to reveal the full content: tooltip, `title` attribute, expand interaction, or accessible description.
4. Do not truncate: error messages, warnings, form validation text, or any actionable instruction.
5. Do not allow uncontrolled wrapping in buttons, navigation labels, or tab labels — these must truncate or the container must expand. A two-line button label is a layout failure.
6. Long URLs and code strings: allow horizontal scroll or wrap with word-break. Do not clip without access to the full string.

---

## Bad Typography Signs

Each of the following is a failure to be corrected before shipping:

- All text on screen appears the same size or weight.
- Headings are distinguished only by color, not by size or weight difference.
- Labels have the same visual weight as body text and cannot be scanned separately.
- Metadata is as visually prominent as primary content.
- Dashboard KPI numbers have no visual distinction from their label text.
- Help text and body text appear identical.
- Mobile text overflows its container at any breakpoint.
- Body text has insufficient line-height and reads as cramped.
- All-caps applied to strings longer than 4–5 words.
- Positive letter-spacing applied to lowercase body text.
- Type scale has fewer than three visually distinct levels in a multi-section product.
- Random weight choices across components with no role logic.
- Any text does not meet WCAG AA contrast at its applied size.

---

## Remediation Rules

When typography failures are detected:

1. Identify which roles are collapsing into each other and why.
2. Adjust size, weight, or line-height to create distinction. Do not apply color as the primary fix.
3. Verify type tokens in `design-tokens.md` reflect the corrected hierarchy.
4. After token corrections, verify that affected components render correctly with the updated values. Component-level changes follow `09-component-architecture-rules.md` *(Phase 3, when available)*.
5. Re-verify hierarchy at mobile breakpoints after desktop corrections — what appears distinct on desktop may collapse on mobile.

---

## Quality Gate

- [ ] Every text element uses a defined type role token from `design-tokens.md`.
- [ ] H1, H2, H3, body, label, and metadata are visually distinct when placed in proximity.
- [ ] Hierarchy is established through size and weight — not color alone.
- [ ] Numeric/stat values are clearly dominant over their labels on data-driven screens.
- [ ] Body text line-height is minimum 1.4× in dense contexts, 1.5× in prose contexts.
- [ ] Mobile text does not overflow at 320px.
- [ ] No text element uses a hardcoded size, weight, family, or line-height value outside the token system.
- [ ] Truncated text has an accessible mechanism to reveal the full content.
- [ ] All text meets WCAG AA contrast at the applied size.
- [ ] Form labels, help text, and error text use the correct roles.
- [ ] Monospace role is used for code, IDs, and technical strings.
