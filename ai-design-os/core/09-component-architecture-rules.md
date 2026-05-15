# 09 — Component Architecture Rules

## Purpose

Enforce component layering, reuse discipline, and creation standards. Prevent component duplication, inline component systems, monolithic page files, and component sprawl.

---

## When To Read

- Component implementation tasks (Task 8).
- Page implementation tasks (Task 9).
- Component map creation tasks (Task 6).
- Component library creation tasks (Task 23).
- Redesign or cleanup tasks that involve components (Task 10).

---

## Required Inputs

- Project's `component-map.md` — **check before creating any component**.
- Project's `design-tokens.md` — all components must use semantic tokens.

If `component-map.md` is missing during **full page implementation (Task 9)** or **component library creation (Task 23)**: **Blocker** per `00-skill-router.md` and `01-agent-operating-protocol.md`. Do not proceed. Create or request the file before starting implementation.

If `component-map.md` is missing during a **small isolated component patch** or **limited local UI cleanup** where no reusable component decision is required: **Major Risk**. Document the assumption. Do not create new reusable components without confirming the existing inventory first.

If `design-tokens.md` is missing: **Blocker** per `01-agent-operating-protocol.md`.

---

## Component Layer Taxonomy

Every component belongs to exactly one layer. Do not mix responsibilities across layers.

---

### Layer 1 — Primitive UI Components

**Purpose:** Single-responsibility UI elements. The atomic foundation of the component system.

**Examples:** Button, Input, Select, Checkbox, Radio, Switch, Badge, Avatar, Icon, Skeleton, Spinner, Tooltip, Popover, Divider, Tag.

**Rules:**
- No product domain knowledge.
- No business logic.
- Fully token-driven. No hardcoded visual values.
- Must support all required variants and states.
- Reused everywhere in the product.

**Common failure prevented:** New button written inline in a feature page when a Button primitive already exists.

---

### Layer 2 — Layout Components

**Purpose:** Structural containers that define how other components are arranged.

**Examples:** Container, Grid, Stack, Flex, Section, Card (as a container), Panel, Drawer, Modal, Sheet, Dialog, PageHeader, Resizable.

**Rules:**
- No product domain knowledge.
- Accept any content as children or slots.
- Governed by the project's spacing token scale.
- Must define responsive behavior at each breakpoint.
- Do not own business logic or data fetching.

**Common failure prevented:** Responsive layout logic duplicated inside every page component.

---

### Layer 3 — Domain Components

**Purpose:** Components that combine primitives and layouts to represent product-specific concepts.

**Examples:** UserCard, InvoiceRow, ProjectHeader, ActivityFeed, TaskItem, MetricTile, NotificationBadge.

**Rules:**
- May contain product-specific logic and naming.
- Must still use primitive components — do not reinvent buttons, inputs, or modals inside domain components.
- Must remain composable, not monolithic.
- Documented in `component-map.md` with clear scope and usage.

**Common failure prevented:** Domain component that redefines its own button or card instead of using existing primitives.

---

### Layer 4 — State Components

**Purpose:** Components that represent specific async or data states. Reusable across domain contexts.

**Examples:** LoadingSkeleton, EmptyState, ErrorState, PermissionDenied, OfflineIndicator, UnsavedChangesBanner.

**Rules:**
- Accept content via props or slots to be context-specific.
- Do not hardcode product-specific messages — accept copy as configuration.
- Every state component must support an optional primary action.
- Accessible: role, messaging, and focus behavior per `12-accessibility-rules.md`.

**Common failure prevented:** Each data-driven section defining its own empty state layout independently.

---

### Layer 5 — Composition / Page Components

**Purpose:** Assemble primitives, layouts, domain components, and state components into full screens or major sections.

**Examples:** DashboardPage, UserListPage, SettingsSection, OnboardingFlow.

**Rules:**
- Coordinate data and state — delegate rendering to lower-layer components.
- Must not define visual systems inline. No raw style values, no one-off visual patterns.
- Do not define new buttons, cards, or inputs inside page components.
- Must not grow large — if a page file is growing unwieldy, extract sections into domain or sub-composition components.

**Common failure prevented:** Monolithic page file with inline component definitions and raw visual values.

---

## Component Creation Decision Rules

Before creating any new component, apply this decision sequence in order:

1. **Check `component-map.md`.** Does a component already exist that serves this purpose?
   - Yes → Reuse it.
   - No → Continue.

2. **Can an existing component be extended with a new variant?**
   - Yes → Add a variant to the existing component. Do not create a parallel component.
   - No → Continue.

3. **Can existing primitives be composed to achieve this UI?**
   - Yes → Compose. Implement the composition at the page or domain level.
   - No → Continue.

4. **Is this pattern reusable across more than one page or context?**
   - Yes → Create a new reusable component in the appropriate layer. Update `component-map.md`.
   - No → Keep the implementation local to the page. Do not extract it into the component system.

5. **Is this a one-off page section that will never repeat?**
   - Yes → Keep local.

**Rule:** Do not create a new component because it is faster than finding the existing one. Check first.

---

## Component Map Connection

`component-map.md` is the canonical inventory of project components.

**Before any component or page implementation:**
- Read `component-map.md`.
- Confirm which components are available.
- Do not create a component that already exists under a different name.

**After creating a new reusable component or adding a reusable variant:**
- If `component-map.md` exists: update it in the same task. The task is not complete until the component inventory is accurate.
- If `component-map.md` cannot be edited due to tooling or permission limits:
  1. Document the exact entry required (component name, layer, purpose, variants, states).
  2. Mark it as `[REQUIRED FOLLOW-UP — component inventory incomplete]`.
  3. The task is not complete until this follow-up is resolved.
- If `component-map.md` does not exist during full page implementation or component library creation: **Blocker** — do not create components without a map. Create or request the map first.

---

## Required Variants For Common Primitives

Variant requirements define **categories** of variants — not implementation syntax.

| Component | Required Variant Categories |
|---|---|
| Button | primary, secondary, ghost/outline, destructive; sizes: sm/md/lg; icon-only |
| Input | default, error, disabled, read-only; sizes: sm/md/lg |
| Select | default, error, disabled; single and multi-select |
| Tabs | default, active, disabled; optional icon support |
| Badge | success, warning, danger, info, neutral; solid and soft/tonal |
| Card | default, interactive/clickable, selected, elevated |
| Table | row hover, selected row, sortable column header, loading row |
| Dialog / Modal | standard, destructive confirmation, full-screen (mobile) |
| Drawer | left/right, with and without overlay |
| Tooltip / Popover | top/bottom/left/right |
| Nav Item | default, active, hover, disabled; with and without icon |
| Toast / Alert | success, warning, danger, info; dismissible and persistent |
| Skeleton | block, text, avatar, card, table-row shapes |
| Empty State | with primary action, with secondary action, icon/no-icon |
| Error State | user-fixable, system error, not-found, permission-denied |

Do not implement only the most common variant and defer others indefinitely. Core variants must ship with the component.

---

## Component State Contract

Every component must explicitly declare which interactive and data states it supports.

**Interactive states (minimum required for interactive components):**
- Default
- Hover
- Active (pressed)
- Focus-visible
- Disabled

**Data / async states (required for data-driven components):**
- Loading
- Empty
- Error
- Success (where applicable)

State behavior is governed by `10-interaction-state-rules.md`. Accessibility semantics for states are governed by `12-accessibility-rules.md`.

The component contract — its API, documentation, and expected behavior — must name each supported state explicitly.

---

## Component Naming Rules

1. Names must be semantic and role-based: `ErrorMessage`, `InvoiceStatusBadge`, `LoadingSkeleton`.
2. Names must not describe visual properties: not `BlueCard`, not `RoundedContainer`, not `DarkPanel`.
3. Names must not be page-specific generics: not `Section1`, not `BottomBlock`.
4. Two components may not have the same name with different behavior.
5. Domain components should name the domain concept, not the visual pattern: `TaskItem` not `GrayRowWithBadge`.
6. Layer prefixes are optional but useful in large systems: `ui/Button`, `layout/Grid`, `domain/UserCard`.

---

## Component API Principles

1. Prop and option names must be consistent across the system. Use the same name for the same concept everywhere: `variant`, not `type` in one component and `kind` in another.
2. Variants must be a discrete set — not arbitrary strings.
3. Status props must use semantic values: `status="success"`, not `color="green"`.
4. Size props use named sizes: `size="sm"`, not `size={12}`.
5. Do not accept visual-value props that bypass the token system: no `borderColor="#333"`, no `padding={20}`.
6. Accessibility props must be included where needed: `aria-label` for icon-only controls, `aria-describedby` for error text.
7. Avoid prop explosion. If a component requires more than 8 props to function normally, review its scope.
8. Prefer composition over configuration for complex layouts. Accept children or slots — do not expose 15 props to control every possible slot.

---

## Platform Coverage

### Web App Components
- Support all five layers.
- Every interactive component must support keyboard interaction.
- Focus management required for overlays, drawers, and modals per `12-accessibility-rules.md`.

### Mobile App Components
- Touch targets: minimum 44×44px for all interactive primitives.
- Drawer and sheet components must support swipe-to-close where platform conventions allow.
- Bottom sheets are valid modal replacements on mobile.
- All interaction must be expressible through tap, press, and swipe — no hover-only states.

### Desktop App Components
- Components should support keyboard shortcut binding.
- Panel components must support resize behavior where user-controlled sizing is expected.
- Context menu components required for workspace and canvas elements.
- Tooltip delays may differ on desktop — visible on hover, not on tap.

### Data-Heavy Components
- Table and data grid must support: sortable columns, row selection, expandable rows, sticky header.
- Chart wrapper components must accept: title, axis labels, loading state, empty state, error state.
- Data visualization components must use `data-series-*` tokens from `design-tokens.md`.

### Form-Heavy Components
- Every input primitive must be partnered with a Label, HelpText, and ErrorMessage component that associate correctly via accessibility attributes.
- Form group component must handle label-input-help-error layout consistently across the product.

### Editor / Builder Components
- Workspace canvas component must isolate user-authored content from product chrome.
- Inspector panel components must update in real time based on selection state.
- Toolbar button components must support keyboard-shortcut disclosure.

---

## Forbidden Component Patterns

1. Duplicate button implementations — two different button components with different visual styles both in use.
2. Duplicate card implementations — multiple card components with similar structure but slightly different styling.
3. Duplicate modal implementations — multiple dialog implementations.
4. Inline visual systems inside page components — raw color, spacing, or radius values directly in page files.
5. Giant page files containing component definitions that belong in lower layers.
6. Raw visual values inside components — hex colors, pixel spacing, specific shadow values outside the token system.
7. Page-specific variants that should be system variants — a `button-checkout-primary` when `button-primary` exists.
8. Domain components reinventing primitives — a `TaskCard` with its own internal button component.
9. Inaccessible custom controls — custom toggle, dropdown, or slider with no keyboard support or ARIA attributes.
10. Component APIs that expose raw visual values — a `Card` that accepts `backgroundColor="#FFF"` instead of a semantic variant.

---

## Required Output For Component Implementation Tasks

```
Components Reused:
[List components from component-map.md used without changes]

Components Created:
[List new components, their layer, and the justification for creation]

Components Extended:
[List components with new variants added]

component-map.md Updates Needed:
[List new components to add, or confirm map was updated]

Variants Implemented:
[List which variants were built for each new or modified component]

States Supported:
[List which interactive and data states each component supports]

Accessibility Requirements Considered:
[Keyboard support, focus behavior, ARIA, label association]
```

---

## Quality Gate

- [ ] All components are classified into the correct layer.
- [ ] `component-map.md` was checked before creating any new component.
- [ ] No duplicate component systems are present.
- [ ] All components use semantic tokens — no hardcoded visual values.
- [ ] Required variants are implemented for new or modified primitive components.
- [ ] All components declare their supported interactive and data states.
- [ ] Component names are semantic and role-based, not visual-value-based.
- [ ] Component APIs do not expose raw visual values.
- [ ] `component-map.md` has been updated or update has been proposed for any new reusable components.
- [ ] Platform-specific requirements are met for the target platform.
