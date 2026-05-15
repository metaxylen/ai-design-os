# 08 — Layout System Rules

## Purpose

Define layout models and the rules for selecting them. Prevent unstructured, flat, identical, or template-like page layouts. Enforce page differentiation across all product screens.

---

## When To Read

- Page implementation tasks (Task 9).
- Page architecture creation tasks (Task 7).
- Redesign and cleanup tasks (Task 10).
- Mobile app tasks (Task 17).
- Desktop app tasks (Task 18).
- Data-heavy dashboard tasks (Task 20).
- Any task involving overall page or screen structure.

---

## Required Inputs

- Project's `page-architecture.md` — which layout model applies to which page.
- Project's `product-brief.md` — product type, primary screens, and user goals.

If `page-architecture.md` is missing for a full page implementation: Blocker per `01-agent-operating-protocol.md`. Create `page-architecture.md` first.

---

## Layout Model Selection Rules

Before implementing any page or screen:

1. Identify the page type from the Page/Screen Differentiation Model in `02-design-principles.md`.
2. Match the page type to an appropriate layout model from the catalog below.
3. Verify the model against `page-architecture.md` if it exists.
4. If no catalog model fits, define a new model with explicit justification before implementing.
5. Do not default to vertical stacking when unsure. Vertical stacking is a failure mode, not a fallback.

**Layout selection test:** "Does this layout model serve the user's primary task on this screen?" If not, select a different model.

---

## Layout Model Catalog

## Anti-Template Rule

The layout models below are not copy-paste templates.

The structure descriptions identify what each model typically includes, why the model exists, and what makes it distinct from other models. They are not mandatory component checklists.

Do not implement a page by mechanically matching the structure bullets. Implement by applying the selection test: "Does this layout serve the user's primary task on this screen?"

- If a listed structural element does not serve this product, this user, or this screen, omit it.
- If an unlisted structural element is required for the product's primary task, include it and document why in `page-architecture.md`.

The catalog defines layout models. The project's `page-architecture.md` defines the actual page structure for each specific page in the product.

---

### App Shell

**For:** Multi-screen products. The outer container wrapping all page layouts.

**Structure:**
- Persistent navigation (sidebar, topbar, or both)
- Main content area
- Optional contextual right panel
- Optional status bar

**Variants:**
- Sidebar-primary: persistent left sidebar + main content area
- Topbar-primary: fixed top navigation bar + full-width content below
- Sidebar + topbar: left sidebar for primary sections, topbar for user menu, search, context
- Dual sidebar: left navigation + right inspector or context panel (editor/builder products)

**Navigation responsive rules:**
- Desktop: sidebar persistent and visible.
- Tablet: sidebar collapses to icon rail or becomes accessible via toggle.
- Mobile: sidebar transforms to bottom tab bar or hamburger drawer.

**Forbidden:** App shell used as decorative chrome on a simple single-screen product with no navigation.

---

### Dashboard

**For:** Overview screens where the user monitors status and decides on next actions.

**Structure:**
- Page header: title, primary action, optional date range filter
- KPI / status summary area: metric tiles, status indicators, trend context
- Main content area: charts, activity, lists — arranged in a grid, not stacked vertically as identical blocks
- Optional side context panel: secondary insights, quick actions, recommendations

**Rules:**
1. The KPI/status summary must appear above the fold.
2. Metric tiles must have: label, value, trend or context, and an actionable relationship. Tiles without these are the "meaningless dashboard metrics" forbidden pattern (see `03-anti-ai-aesthetic-rules.md` pattern 17).
3. Dashboard sections must be visually differentiated by purpose — do not apply identical card styling to every section.
4. Charts require: title, axis labels, baseline or comparison period, and data source label.
5. All data-driven sections must have loading, empty, and error states.

**Mobile:** KPIs stack single-column, priority content appears first, charts may condense to key metrics only, secondary panels collapse to accordion or separate screen.

---

### List Page

**For:** Screens where users scan, search, filter, compare, and navigate to items.

**Structure:**
- Page header with title and primary action (e.g., Create, Add, Import)
- Search and filter toolbar
- Content area: table, list rows, or cards — matched to content type
- Pagination or load-more
- Empty state and no-results state (these are different conditions requiring different messaging)

**Content type selection:**
- Dense structured data with multiple attributes → table
- Scannable items needing summary view → list rows
- Content with visual identity, image, or spatial relationship → cards
- Time-ordered content → feed

**Forbidden:** Large identical cards for content that calls for a table or list. See `03-anti-ai-aesthetic-rules.md` pattern 11 (mobile) and pattern 9 (layout).

**Mobile:** Filters in drawer or bottom sheet, primary action sticky if critical, table becomes card list or horizontal-scroll table.

---

### Detail Page

**For:** Inspecting one entity deeply and taking contextual actions on it.

**Structure:**
- Entity header: name, status, primary action, key metadata
- Main content: entity details, sections, activity history
- Optional right panel: metadata summary, related actions, secondary context
- Optional related items section below main content

**Rules:**
1. Primary action must be visible in the entity header — not buried after scrolling.
2. Metadata must be visible but not visually dominant over entity content.
3. Must include: loading skeleton, not-found state, permission-denied state, error state.

**Mobile:** Entity header shows key info, right panel stacks below main content, actions accessible from header.

---

### Settings Page

**For:** Configuration screens where users adjust preferences safely.

**Structure:**
- Settings section navigation: left sidebar on desktop, or top-level section list
- Form groups: related settings grouped with clear section headings and optional descriptions
- Save/cancel action: sticky at bottom or anchored in page header

**Rules:**
1. No decorative elements. Settings are functional-only.
2. Every form group needs a clear heading.
3. Destructive settings must be visually differentiated from standard settings and require confirmation.
4. Validation errors appear inline, connected to the relevant field.

**Mobile:** Section navigation becomes a list-to-detail pattern. Forms stack single-column. Save action sticky at bottom.

---

### Editor / Builder

**For:** Creation and manipulation interfaces where the workspace is the primary focus.

**Structure:**
- Toolbar: top or left side, persistent tool and action controls
- Canvas / workspace: primary manipulation and editing area
- Inspector panel: right side, contextual controls for the selected object or state
- Optional asset or layers panel: left or collapsible, secondary navigation within the editor
- Status bar: current mode, document status, undo history

**Rules:**
1. Toolbar and inspector must be persistent. Do not hide them without a visible, accessible mechanism to restore.
2. Canvas area must be maximized. UI chrome must not compete with the workspace.
3. Keyboard shortcuts are the primary interaction model. Mouse and touch are secondary.
4. Unsaved changes must be communicated persistently in the UI.
5. Context menus on canvas objects are expected — implement them.

**Mobile:** Simplified top toolbar, full-screen canvas, inspector as bottom sheet.

---

### Onboarding

**For:** Guiding first-time users into the product step by step.

**Structure:**
- Progress indicator: step X of N, or progress bar
- Focused content area: single task or decision per step
- Primary action: Next, Continue, or step-specific action
- Optional secondary action: Back, Skip (with consequences explained)
- No navigation outside the onboarding flow

**Rules:**
1. Remove all navigation not part of the onboarding sequence.
2. Progress must be visible at all times.
3. Each step has a single, clear task. Do not bundle multiple decisions per step.

---

### Landing Page

**For:** Marketing, product communication, and conversion screens.

**Structure:**
- Hero: value proposition, primary CTA, supporting context
- Feature or benefit sections: product-specific, not generic icon-grid templates
- Social proof: testimonials, metrics, logos — contextually placed
- Secondary CTA
- Footer with navigation

**Rules:**
1. Every section must map to a real product claim or user need. No filler sections.
2. The generic SaaS landing page composition is a forbidden pattern per `03-anti-ai-aesthetic-rules.md` pattern 23: dark gradient background + glowing feature cards + three-column icon grid + testimonials + CTA button.
3. Anti-AI aesthetic rules apply with maximum severity to landing pages.
4. Primary CTA must appear early — do not reserve it only for the bottom.
5. Typography must create hierarchy, not decoration.

**Mobile:** Hero condensed, sections stack, CTA prominent at key scroll points.

---

### Mobile App Screen

**For:** Primary screens in mobile-first or mobile-native applications.

**Structure:**
- Navigation: bottom tab bar for primary navigation, or top navigation bar for secondary screens
- Content area: touch-optimized, prioritized for primary user task
- Primary action: floating action button, sticky bottom bar, or in-header action button
- Sheet / drawer: for contextual controls and secondary actions without leaving the screen

**Rules:**
1. Touch targets: minimum 44px × 44px for all interactive elements.
2. Bottom tab bar must have labels on every tab — icon-only tabs are a forbidden pattern per `03-anti-ai-aesthetic-rules.md` pattern 25. Tab count and label names must reflect the product's actual information architecture.
3. Content must be re-prioritized for mobile — not simply collapsed from desktop.
4. Horizontal overflow is forbidden. All content must fit within viewport width without horizontal scroll (unless intentional horizontal scroll is explicitly designed).
5. Swipe gestures must have visible affordances or discoverable onboarding moments.

---

### Desktop App Screen

**For:** Productivity, creative, or developer tools designed for keyboard-first, multi-panel desktop use.

**Structure:**
- Multi-pane layout: persistent navigation/tree panel (left), central workspace, optional inspector panel (right)
- Persistent toolbar or menu bar
- Status bar for context, mode, and feedback
- Panel resize handles where appropriate for user-adjustable panels

**Rules:**
1. Keyboard is the primary interaction. Every action must be reachable by keyboard.
2. Information density is higher than web app defaults. Users expect more content per viewport.
3. Panels must be persistent. Do not collapse context panels on a desktop app the way you would on mobile.
4. Multiple windows or split views may be appropriate depending on the product type.
5. Context menus are expected; implement them with keyboard access.

---

### Data-Heavy Dashboard / Table / Chart

**For:** Analytics, monitoring, reporting, and data exploration screens.

**Structure:**
- Summary header: date range, active filters, key summary metrics
- Chart area or data grid: primary content
- Filter sidebar or filter bar: persistent and visible, not hidden behind a modal
- Drill-down panel or detail row: revealed on selection
- Full loading, empty, and error states per data section (not just a global page state)

**Rules:**
1. Every chart needs: title, axis labels, baseline or comparison, and data source attribution.
2. Every table needs: column headers, sort/filter controls where applicable, row hover, loading state, empty state, error state.
3. Filters must be visible and persistent — not buried in a modal that hides the data.
4. Status colors in data displays follow semantic token discipline. Do not invent new status colors outside the token system.
5. Responsive table strategy must be defined: horizontal scroll, stacked rows, or column prioritization for mobile.

---

### Master-Detail

**For:** List and focused detail in a split-panel view. Email clients, document lists, conversation interfaces, item management.

**Structure:**
- Left panel: list or navigation with visible selection state
- Right panel: detail view for the selected item
- Empty right panel state: shown when nothing is selected

**Rules:**
1. Selected item in the list must have a clear, distinct selection state.
2. Empty right panel must prompt next action: "Select an item to view details."
3. Mobile: list and detail become separate screens with back navigation.

---

### Split View

**For:** Comparing two pieces of content side by side, or editing alongside a live preview.

**Structure:**
- Two side-by-side independent panels, each with independent scroll
- Panel resize control where appropriate
- Optional: synchronized scroll or linked state between panels

**Rules:**
1. Must degrade on small screens: one panel becomes primary, the other is accessible via a toggle.
2. The divider must be draggable and keyboard-accessible where panel sizing is user-controlled.

---

### Command Center

**For:** Keyboard-driven, search-first interfaces. Command palettes, launcher tools, developer productivity tools.

**Structure:**
- Command input: prominent, always accessible via keyboard shortcut
- Result list with categories, groupings, and optional previews
- Detail preview panel: optional, right or bottom of results

**Rules:**
1. Keyboard-first. Every action must work without a mouse.
2. Arrow keys must navigate within results. Enter must execute the selected action.
3. Results must appear within perceived 200ms of input.

---

### Modal-Heavy Interface

**For:** Interfaces where primary tasks happen in modals, drawers, sheets, or dialogs rather than page navigation.

**Structure:**
- No fixed page-level structure by itself.
- A modal-heavy interface must identify a base layout model first: List Page, Detail Page, Dashboard, Editor / Builder, Form-Heavy Page, or another appropriate model from this catalog.
- Modals, drawers, sheets, and dialogs layer on top of that base model.
- The base model still governs navigation, content priority, and overall page structure.

**Rules:**
1. Focus must be trapped inside the modal while it is open.
2. Escape key closes the modal unless the action is destructive — then confirm first.
3. Modals must not open inside other modals, except for lightweight confirmation dialogs.
4. Scroll within a modal must be independent of page scroll behind it.
5. Mobile: modals become bottom sheets or full-screen overlays depending on content complexity.

---

### Form-Heavy Page

**For:** Multi-field input screens, application forms, and configuration wizards.

**Structure:**
- Form heading and purpose statement above the form
- Grouped field sections with section headings
- Progressive disclosure (multi-step or collapsible sections) for long forms
- Sticky or clearly positioned submit/cancel actions
- Validation error summary at the top (for long forms) and inline error per field

**Rules:**
1. Every field must have a visible label. Placeholder text is not a label.
2. Error text must appear below the field and be connected semantically.
3. Grouping must be logical — related fields together within a named section.
4. Keyboard navigation through the entire form must flow in logical order.

---

### Empty / Error / Loading Page Layouts

**For:** Full-page state screens when content is unavailable, failed, or loading.

**Structure:**
- Centered content area (vertically and horizontally within the viewport)
- Icon or purposeful illustration (optional, not decorative)
- Heading: describe the specific state — not a generic title
- Body text: explain why and what the user can do next
- Primary action: give the user a clear next step

**Rules:**
1. Empty, error, and loading states have different structures and different messaging. Do not use one template for all three.
2. Loading: use skeleton layouts matching the expected content shape. Do not use a spinner on a blank white page for loads over 500ms.
3. Empty: explain why it is empty. Provide the creation or import action. "You haven't created anything yet" is better than "No data."
4. Error: explain what went wrong in plain language. Provide a retry or contact action.

---

## Page Differentiation Rules

1. Every major page in the product must use a distinct layout model appropriate to its purpose.
2. A page must be visually distinguishable from other pages by at least one of: layout model, navigation treatment, content density, or visual character.
3. Do not apply the same card-stack model to every page regardless of content type or user task — this is a Do-Not-Ship condition per `14-design-review-checklist.md`.
4. When creating `page-architecture.md`, verify that no two major pages share the same layout model unless they are the same page type (e.g., two list pages may share the List model).

---

## Navigation Placement Rules

1. Primary navigation must be visible without scrolling.
2. Secondary navigation (section tabs, settings sub-nav) may scroll into view.
3. Desktop: sidebar or topbar is standard. Sidebar is preferred for products with many primary sections.
4. Tablet: sidebar collapses to icon rail or becomes accessible via a toggle control.
5. Mobile: sidebar becomes bottom tab bar (4–6 primary sections) or hamburger drawer (many sections or deep hierarchy).
6. Navigation must communicate current location at all times.
7. Navigation must not be decorative — every item must navigate somewhere meaningful.

---

## Content Priority Rules

1. The most important content for the user's primary task must appear above the fold.
2. Secondary and supporting content is below the fold or in a collapsible panel.
3. On mobile: re-evaluate what appears above the fold. Desktop priority order does not automatically apply.
4. Primary action must be reachable without scrolling on any screen where the action is the user's primary goal.

---

## Density And Grouping Rules

1. Define density in `visual-direction.md` before implementing any layout.
2. Dense layouts: tighter padding, smaller type, more content per viewport. Appropriate for productivity tools, admin panels, developer tools.
3. Airy layouts: larger padding, fewer items visible per viewport. Appropriate for consumer apps, content products, and onboarding.
4. Mixed density: sections within a page may vary in density when different content types coexist.
5. Group related content. Do not mix unrelated items in the same section without a visual separator.
6. Every section must have a clear boundary — border, background change, spacing gap, or heading.

---

## Forbidden Layout Patterns

The following anti-AI layout failures are governed by `03-anti-ai-aesthetic-rules.md`. Do not restate those rules here — apply `03-anti-ai-aesthetic-rules.md` for anti-AI-aesthetic enforcement:

- Unstructured vertical stacking — `03-anti-ai-aesthetic-rules.md` Pattern 8
- Same layout model applied to every page regardless of purpose — `03-anti-ai-aesthetic-rules.md` Pattern 9
- Marketing hero structures on application screens — `03-anti-ai-aesthetic-rules.md` Pattern 10
- Dashboards composed only of identical metric tiles with no distinct sections — `03-anti-ai-aesthetic-rules.md` Pattern 24

The following patterns are layout-system-specific and enforced by this file:

1. Pages with no visible navigation or no location context.
2. Full-viewport-width text content with no maximum width — body text spanning 1440px is unreadable.
3. Data-heavy pages without visible filters, status indicators, or context for what is being displayed.
4. Mobile screens that are desktop layout scaled to fit — mobile must re-prioritize and restructure content.
5. Desktop apps without persistent context panels where the task requires ongoing reference.
6. Pages that apply the same section structure to every page regardless of content type requirements.

---

## Relationship To Project Files

**This file defines:** Layout models and selection rules — universal across all projects.

**`page-architecture.md` defines:** Which layout model applies to each specific page in this project, including desktop, tablet, and mobile behavior, section definitions, and component usage.

Agents must read `page-architecture.md` for page-specific decisions. This file governs which options are available and how to choose between them.

---

## Responsive Behavior

Every layout model must be adapted at all breakpoints. Responsive behavior rules for each layout model are governed by `11-responsive-design-rules.md`. Required for every layout implementation:

- Define the mobile navigation pattern for every page.
- Define how the grid or panels collapse at tablet and mobile.
- Define minimum touch target sizes for any interactive element.
- Use the breakpoints: 320px, 375px, 768px, 1024px, 1440px.
- Do not ship any layout that is desktop-only.

---

## Quality Gate

- [ ] Every page being implemented has a named layout model from this catalog, or a documented justified alternative.
- [ ] The layout model is appropriate for the page's primary user task.
- [ ] The layout model is confirmed against `page-architecture.md` if it exists.
- [ ] No forbidden layout patterns are present.
- [ ] Navigation is visible, functional, and communicates current location.
- [ ] Primary action is reachable without scrolling on key action screens.
- [ ] Pages are visually distinguishable from each other within the product.
- [ ] Mobile behavior is explicitly defined — not assumed to follow from shrinking the desktop layout.
- [ ] Loading, empty, and error states are defined for every data-driven section.
- [ ] Dense pages have a defined density rationale in `visual-direction.md`.
