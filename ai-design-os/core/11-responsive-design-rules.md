# 11 — Responsive Design Rules

## Purpose

Make responsive behavior mandatory at all breakpoints and across all platform types. Prevent desktop-only layouts, horizontal overflow, shrunken-desktop mobile, and platform-inappropriate interaction models.

---

## When To Read

- All page implementation tasks (Task 9).
- Mobile app UI tasks (Task 17).
- Desktop app UI tasks (Task 18).
- Landing page tasks (Task 19).
- Data-heavy dashboard tasks (Task 20).
- Form-heavy UI tasks (Task 21).
- Responsive review tasks (Task 12).
- Page architecture creation tasks (Task 7).

---

## Required Inputs

- Project's `page-architecture.md` — per-page responsive decisions.
- Project's `component-map.md` — component-level responsive behavior.

If `page-architecture.md` is missing during a responsive review: **Major Risk**. Review against layout model expectations from `08-layout-system-rules.md`.

---

## Breakpoints

These breakpoints apply across all web and mobile web contexts. Actual token names and implementation syntax are defined in `design-tokens.md` per `06-design-token-rules.md`.

| Name | Value | Context |
|---|---|---|
| xs | 320px | Narrow mobile — minimum supported width |
| sm | 375px | Standard mobile |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1440px | Wide desktop |

For native mobile apps: platform-specific screen sizes apply. Reference platform guidelines alongside these breakpoints.

For desktop apps (Electron, Tauri, or native): minimum window size is a product decision defined in `product-brief.md`. These breakpoints apply when the app has a responsive window.

---

## Global Rules

Apply to every implementation regardless of platform or page type:

1. **No desktop-only UI.** Mobile behavior must be defined before the task is complete.
2. **No horizontal overflow.** No element may extend beyond the viewport width without intentional, explicitly designed horizontal scroll.
3. **No shrunken-desktop mobile.** Mobile layout must re-prioritize and restructure content — not scale down the desktop.
4. **Mobile content priority is required.** Determine which content appears first on mobile. Desktop priority order does not automatically transfer.
5. **Touch targets minimum 44×44px** on all mobile interactive elements.
6. **Navigation must be explicitly defined** for every breakpoint where it changes behavior.
7. **State layouts must be responsive.** Loading, empty, and error states must work at all breakpoints.

---

## Navigation Transformation

Navigation behavior must be explicitly defined for every breakpoint where it changes.

| Desktop Pattern | Tablet Behavior | Mobile Behavior |
|---|---|---|
| Persistent left sidebar | Collapses to icon rail or toggle-accessible drawer | Bottom tab bar (4–6 sections) or hamburger drawer |
| Top navigation bar | Compact topbar, may reduce visible items | Hamburger menu or compact topbar with overflow |
| Horizontal tabs | Scrollable tabs or segmented control | Scrollable tabs or bottom sheet tab selector |
| Breadcrumbs | Shortened to last 2 levels | Back navigation only |
| Command palette | Full-width overlay | Full-screen overlay with mobile keyboard |

**Rules:**
1. Navigation labels must be visible on mobile. Icon-only primary navigation is a forbidden pattern per `03-anti-ai-aesthetic-rules.md` pattern 25.
2. The active navigation item must be visually identifiable at every breakpoint.
3. Navigation must not disappear on mobile. It must transform into a mobile-appropriate pattern.
4. Bottom tab navigation: minimum 4 items, maximum 6 items. More items require an overflow or "More" entry.

---

## Layout Transformation Per Layout Type

Responsive behavior for each layout type refers to models defined in `08-layout-system-rules.md`. This section defines how each model transforms across breakpoints — it does not redefine the models.

### App Shell
- **Desktop:** Persistent sidebar + main content area.
- **Tablet:** Sidebar collapses to icon rail or toggle-accessible drawer.
- **Mobile:** Sidebar becomes bottom tab bar or hamburger drawer. Main content fills full width.

### Dashboard
- **Desktop:** Multi-column grid with KPIs, charts, and optional side panels.
- **Tablet:** Reduced columns. Side panel moves below main content.
- **Mobile:** Single column. KPIs stack first. Charts may condense to key metrics. Secondary panels collapse to accordion or separate screen.

### List Page
- **Desktop:** Table or list rows with filter sidebar or filter bar.
- **Tablet:** Filters move to a top filter bar or are accessible via a drawer.
- **Mobile:** Filters in bottom sheet. Table becomes card list or horizontal-scroll table. Primary action sticky if critical.

### Detail Page
- **Desktop:** Main content + right metadata panel side by side.
- **Tablet:** Right panel stacks below main content.
- **Mobile:** Right panel collapses to expandable sections or a separate tab. Actions accessible from entity header.

### Settings Page
- **Desktop:** Section navigation sidebar + form content area.
- **Tablet:** Section navigation may become a top selector or accordion.
- **Mobile:** Section list-to-detail pattern. Forms single column. Save action sticky at bottom.

### Editor / Builder
- **Desktop:** Full multi-pane layout (toolbar + canvas + inspector).
- **Tablet:** Inspector collapses to a toggle-accessible drawer.
- **Mobile:** Simplified toolbar at top. Canvas fills screen. Inspector available as bottom sheet.

### Landing Page
- **Desktop:** Multi-column sections, hero with supporting visual assets.
- **Tablet:** Reduced columns, hero condensed.
- **Mobile:** Single column. CTA prominent at key scroll points. Hero copy shortened.

### Form-Heavy Page
- **Desktop:** May use two columns for groups of related fields.
- **Tablet:** Single or two-column depending on form complexity.
- **Mobile:** Always single column. Labels above fields. Submit action sticky at bottom.

### Master-Detail
- **Desktop/Tablet:** Split-pane layout (list left, detail right).
- **Mobile:** List and detail become separate screens with explicit back navigation.

### Data-Heavy Dashboard
- **Desktop:** Chart grid with filter sidebar.
- **Tablet:** Filter bar at top or accessible via drawer. Reduced chart columns.
- **Mobile:** Summary metrics first. Charts condense or become card metrics. Filters in bottom sheet. Full data tables in horizontal scroll.

---

## Tables / Data Displays / Charts

Tables and data displays require an explicit mobile strategy. Choose one:

1. **Horizontal scroll:** Wrap the table in a scrollable container with a visible scroll affordance (gradient shadow or scroll indicator). Column headers stay visible.
2. **Stacked row cards:** Convert each table row into a card showing priority columns. Use only when columns exceed 5 and data density allows.
3. **Column prioritization:** Show the 2–3 most important columns on mobile. Other columns accessible via expand or detail navigation.
4. **Summary-first mobile cards:** Show the key value and label in a card. Tap to see full detail.
5. **Expandable rows:** Show key info inline; expand to reveal additional columns.

**Chart rules on mobile:**
- Simplify to key data points only.
- Axis labels must remain readable.
- Interactive charts must support tap events, not hover.
- Do not squeeze full desktop charts into a 320px container — redesign the chart for mobile.
- Preserve chart title, value labels, and units at all sizes.

---

## Drawers / Modals / Sheets / Dialogs

| Pattern | Desktop | Mobile |
|---|---|---|
| Modal / Dialog | Centered overlay, max-width constrained | Full-screen or bottom sheet depending on content complexity |
| Drawer | Side panel, slides in from left or right | Full-screen or bottom sheet |
| Bottom Sheet | Less common on desktop; may be used for quick actions | Primary mobile pattern for contextual and secondary actions |
| Confirmation Dialog | Centered overlay | Centered overlay or bottom sheet |

**Rules:**
1. Focus must be trapped inside modal, drawer, or sheet while open — governed by `12-accessibility-rules.md`.
2. Touch targets within overlays must be ≥44px on mobile.
3. Mobile bottom sheets must account for safe area insets (iOS home indicator, Android navigation bar).
4. Scroll within a modal must be independent of page scroll.
5. Scroll lock on the page body must be applied when a full-height overlay is open.
6. Drawers must not obscure the entire viewport without providing a visible backdrop or dismiss affordance.

---

## Forms

1. **Mobile forms are always single-column.** No two-column form layouts on mobile.
2. **Labels must be visible above fields.** Inline or side labels cause accessibility issues on small screens.
3. **Validation summary placement:** At the top of the form on submit failure.
4. **Sticky submit action:** On long forms, the submit button must be visible without scrolling to the bottom — use sticky positioning or a fixed bottom action bar.
5. **Input height:** Must meet the 44px touch target minimum on mobile.
6. **Keyboard-safe layout:** Form fields must not be obscured by the virtual keyboard. Use viewport adjustment or scroll-into-view behavior.
7. **iOS auto-zoom prevention:** Input fields with `font-size` below 16px trigger auto-zoom on iOS Safari. Use 16px or above for all form inputs.

---

## Mobile App Specifics

1. **Bottom navigation:** Primary navigation via tab bar at screen bottom. Minimum 44px tab height. Labels required on all tabs.
2. **Safe areas:** All touch targets, navigation, and critical content must avoid safe area inset zones (notch, home indicator, navigation bar).
3. **Thumb reach:** Primary actions and navigation must be reachable in the thumb zone (bottom 60% of screen). Destructive actions may be intentionally placed outside the primary thumb zone.
4. **Sticky CTA:** On action-primary screens, the primary call-to-action must be sticky at the bottom.
5. **Sheet transitions:** Bottom sheet and full-screen overlay animations must follow platform conventions.
6. **Swipe gestures:** Must have visible affordances or discoverable onboarding. Must not conflict with platform-level system gestures.
7. **Screen orientation:** Define behavior for landscape orientation if it is not explicitly unsupported.

---

## Desktop App Specifics

1. **Dense layouts:** Desktop apps may use higher information density than web apps when `visual-direction.md` defines the product as dense.
2. **Persistent panels:** Side panels and inspector panels must remain visible by default. Do not collapse them without a mechanism to restore.
3. **Multi-pane layouts:** Define minimum panel widths and resize behavior. Panels must not collapse below a usable width without a defined behavior (hide, overlay, or lock at minimum width).
4. **Keyboard-first navigation:** Every action must be reachable by keyboard. Tab order must be logical. Custom keyboard shortcuts must be documented.
5. **Resizable panels:** Resize handles must be keyboard-accessible and must have visible affordances.
6. **Wide-screen behavior at xl (1440px+):** Do not let content stretch to fill 1440px without constraint. Define a max-width for content containers or use the panel system to fill width purposefully.

---

## Do-Not-Ship Conditions

All conditions below are **Critical**. Any single failure blocks shipping until fixed.

Do not ship if any of the following are true:

- Any page has horizontal overflow at 320px, 375px, 768px, 1024px, or 1440px — unless the overflow is part of an explicitly designed horizontal-scroll data-table strategy.
- Mobile behavior is undefined for any page or component that ships to mobile users.
- The desktop layout is merely scaled down on mobile without content reprioritization.
- Primary navigation disappears or becomes inaccessible on mobile.
- Primary mobile navigation uses icon-only items without visible labels.
- Any mobile interactive element has touch targets below 44×44px.
- Tables or data displays have no defined mobile strategy.
- Modals, drawers, or sheets do not fit within mobile viewport dimensions.
- Forms are not single-column on mobile.

---

## Responsive Review Checklist

Run before marking any implementation responsive-complete.

**Global:**
- [ ] **[Critical]** No horizontal overflow at any breakpoint (320px–1440px).
- [ ] **[Critical]** No desktop-only layout — mobile behavior is explicitly defined.
- [ ] **[Critical]** Content priority on mobile is explicitly defined, not assumed from desktop.

**Navigation:**
- [ ] **[Critical]** Navigation transforms appropriately at tablet and mobile.
- [ ] **[Critical]** Navigation labels are visible on mobile — no icon-only primary navigation.
- [ ] **[Major]** Active navigation state is visible at every breakpoint.

**Layout:**
- [ ] **[Major]** Grid or panel layout collapses appropriately at tablet and mobile.
- [ ] **[Major]** No content is hidden on mobile without a defined mechanism to access it.
- [ ] **[Major]** Side panels stack below main content or are accessible via drawer or sheet.

**Touch:**
- [ ] **[Critical]** All touch targets are ≥44px on mobile.
- [ ] **[Major]** Tap active states are visible.
- [ ] **[Critical]** No hover-only interactions exist on mobile.

**Tables / Data:**
- [ ] **[Critical]** Tables have a defined mobile strategy (scroll, stack, or column prioritization).
- [ ] **[Critical]** Charts are adapted for mobile — not scaled down from desktop.

**Overlays:**
- [ ] **[Critical]** Modals fit within mobile screen dimensions.
- [ ] **[Major]** Bottom sheets account for safe area insets.
- [ ] **[Critical]** Focus is managed inside overlays per `12-accessibility-rules.md`.

**Forms:**
- [ ] **[Critical]** Forms are single-column on mobile.
- [ ] **[Major]** Submit action is reachable without scrolling.
- [ ] **[Critical]** Labels are visible above fields.

---

## Required Output For Responsive Review Tasks

```
Breakpoint Test Summary:
[Results at each breakpoint: 320px / 375px / 768px / 1024px / 1440px]

Issues Found:
[Each issue: breakpoint, component or page affected, description]

Fixes Applied:
[Each fix: what changed and in which file]

Remaining Risks:
[Known issues not yet resolved and why they remain]

Manual Review / Testing Method:
[How the review was conducted: browser devtools, device, emulator, or automated testing]
```
