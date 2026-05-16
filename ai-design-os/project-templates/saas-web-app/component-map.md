# Component Map — [YOUR PROJECT: Product Name]

**Template:** saas-web-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use  
**Requires:** design-tokens.md must be complete before building any component

This file is the canonical inventory of all reusable components. Read it before creating any component. Update it after creating any new reusable component.

---

## Layer 1 — Primitive UI Components

Single-responsibility elements. No domain knowledge. Fully token-driven.

### Button
- **Variants:** primary, secondary, ghost/outline, destructive; sizes: sm / md / lg; icon-only
- **States:** default, hover, active, focus-visible, disabled, loading
- **Accessibility:** `disabled` attr when disabled; `aria-label` for icon-only; loading state announced

### Input
- **Variants:** default, error, disabled, read-only; sizes: sm / md / lg
- **States:** default, focus, error, disabled
- **Accessibility:** always paired with Label; error text via `aria-describedby`

### Select
- **Variants:** default, error, disabled; single-select and multi-select
- **States:** default, focus, error, disabled, open
- **Accessibility:** keyboard navigable; `aria-expanded` on trigger

### Checkbox
- **Variants:** default, indeterminate
- **States:** unchecked, checked, indeterminate, disabled
- **Accessibility:** `fieldset` + `legend` when used in groups; keyboard: Space to toggle

### Radio
- **Variants:** default
- **States:** unselected, selected, disabled
- **Accessibility:** `fieldset` + `legend`; arrow keys navigate within group

### Badge / Tag
- **Variants:** success, warning, danger, info, neutral; solid and soft/tonal
- **States:** default (static — no interactive states required unless clickable)

### Avatar
- **Variants:** image, initials, placeholder; sizes: sm / md / lg
- **States:** default, [YOUR PROJECT: any additional states needed]

### Tooltip
- **Variants:** top / bottom / left / right
- **Accessibility:** triggered by keyboard focus and mouse hover; not required on mobile touch

### Skeleton
- **Variants:** block, text, avatar, card, table-row shapes
- **Usage:** matches expected content shape — not generic rectangles

### Spinner
- **Usage:** single-element loading feedback or button loading state

### [YOUR PROJECT: Additional primitives]

---

## Layer 2 — Layout Components

Structural containers. No business logic. No domain knowledge.

### Container
- **Purpose:** Max-width wrapper with responsive padding
- **Responsive:** centers content; padding adjusts per breakpoint

### Grid
- **Purpose:** Column-based layout grid
- **Responsive:** column count reduces at tablet and mobile

### Stack
- **Purpose:** Vertical or horizontal flex container with consistent gap
- **Variants:** vertical (default), horizontal

### Panel
- **Purpose:** Content grouping container with defined surface and border
- **Variants:** default, elevated
- **Usage:** wraps related content sections; use border not shadow for standard panels

### PageHeader
- **Purpose:** Consistent page-level title, breadcrumb, and primary action area
- **Slots:** title, breadcrumb, primary-action, secondary-action

### Modal / Dialog
- **Variants:** standard, destructive confirmation, full-screen (mobile)
- **States:** open, closing
- **Accessibility:** focus trapped inside; Escape closes; focus returns to trigger; `role="dialog"`, `aria-labelledby`, `aria-modal="true"`

### Drawer
- **Variants:** left / right; with overlay / without overlay
- **Accessibility:** same focus requirements as Modal

### [YOUR PROJECT: Additional layout components]

---

## Layer 3 — Domain Components

Product-specific components that combine primitives and layouts.

### [YOUR PROJECT: Component Name]
- **Purpose:** [what it displays or does]
- **Variants:** [list variants]
- **States:** [interactive and data states]
- **Uses primitives:** [which Layer 1/2 components it uses]
- **Used in:** [which screens]

### [YOUR PROJECT: Component Name]
- **Purpose:**
- **Variants:**
- **States:**
- **Uses primitives:**
- **Used in:**

[YOUR PROJECT: Add a domain component entry for every product-specific reusable component]

---

## Layer 4 — State Components

Reusable async and data state components. Accept content as props or slots.

### LoadingSkeleton
- **Shapes:** block / text / avatar / card / table-row
- **Usage:** wrap any data section that has a known content shape

### EmptyState
- **Variants:** with primary action / with secondary action / icon present / no icon
- **Required props:** reason (why it's empty), action (what to do next)
- **Types to handle:** no content yet / filtered no results / permission block / data source unavailable / partial setup

### ErrorState
- **Variants:** user-fixable / system error / network error / not-found / permission-denied
- **Required props:** message, recovery-action
- **Rule:** every error state must have a recovery action

### [YOUR PROJECT: Additional state components]

---

## Layer 5 — Composition / Page Components

Assemble lower-layer components into screens. Coordinate data. No raw visual values.

### [YOUR PROJECT: Page name — e.g., DashboardPage]
- **Screens:** [which route or screen]
- **Layout model:** [from 08-layout-system-rules.md]
- **Primary components used:** [list key domain and layout components]

### [YOUR PROJECT: Page name]
- **Screens:**
- **Layout model:**
- **Primary components used:**

[YOUR PROJECT: Add an entry for each major page or screen]

---

## Component Creation Rules

Before creating a new component:
1. Check this file — does it already exist?
2. Can an existing component be extended with a new variant?
3. Can existing primitives be composed?
4. Is this pattern reusable across more than one screen?
5. If yes to 4: create and update this file. If no: keep local.

After creating a new reusable component: add it to this file before the task is marked complete.
