# Component Map — [YOUR PROJECT: App Name]

**Template:** mobile-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use

Mobile-app note: all interactive components must meet the 44×44px minimum touch target. Hover states are not used on mobile — active/pressed states replace them.

---

## Layer 1 — Primitive UI Components

### Button
- **Variants:** primary, secondary, ghost/outline, destructive; sizes: sm / md / lg; icon-only
- **States:** default, active/pressed (no hover on mobile), disabled, loading
- **Minimum height:** 44px for sm and above
- **Accessibility:** `disabled` for disabled state; `aria-label` for icon-only; loading announced

### Input
- **Variants:** default, error, disabled; sizes: sm / md / lg
- **States:** default, focused, error, disabled
- **Font-size minimum:** 16px to prevent iOS Safari auto-zoom
- **Accessibility:** visible `<label>`; error via `aria-describedby`

### Select / Picker
- **Variants:** default, error, disabled
- **Mobile behavior:** opens native picker (iOS wheel / Android dialog) or custom bottom sheet
- **Accessibility:** keyboard accessible; state changes announced

### Checkbox
- **States:** unchecked, checked, indeterminate, disabled
- **Touch target:** minimum 44×44px hit area even if visual is smaller
- **Accessibility:** `fieldset` + `legend` for groups

### Radio
- **States:** unselected, selected, disabled
- **Touch target:** minimum 44×44px

### Badge / Tag
- **Variants:** success, warning, danger, info, neutral; solid and soft/tonal

### Avatar
- **Variants:** image, initials, placeholder; sizes: sm / md / lg

### Skeleton
- **Variants:** block, text, avatar, list-item, card shapes

### Spinner
- **Usage:** button loading, inline action feedback

### [YOUR PROJECT: Additional primitives specific to this app]

---

## Layer 2 — Layout Components

### Screen Container
- **Purpose:** Full-screen layout wrapper with safe area insets
- **Handles:** status bar, home indicator, keyboard avoidance

### ScrollView / FlatList Wrapper
- **Purpose:** Scrollable content container with performance optimization
- **Variants:** vertical scroll, horizontal scroll

### Bottom Sheet
- **Purpose:** Contextual actions and secondary content without leaving screen
- **Variants:** compact (snap to content height), tall (70% height), full-screen
- **Accessibility:** focus trapped inside while open; Escape / swipe-down closes; focus returns to trigger

### Modal / Dialog
- **Purpose:** Full-screen or overlay for confirmation and critical content
- **Variants:** full-screen, compact dialog, destructive confirmation
- **Accessibility:** same as Bottom Sheet

### Navigation Header
- **Purpose:** Screen-level header with back navigation, title, and header actions
- **Variants:** standard, large title (iOS), transparent (for media screens)

### Tab Bar
- **Purpose:** Primary navigation at bottom of screen
- **Rules:** labels required on all tabs; minimum 4 tabs, maximum 6; icons + labels always

### [YOUR PROJECT: Additional layout components]

---

## Layer 3 — Domain Components

### [YOUR PROJECT: Component Name]
- **Purpose:** [what it displays]
- **Variants:** [list]
- **States:** default, active/pressed, [data states if applicable]
- **Minimum touch target:** [44px or larger]
- **Used in:** [screens]

### [YOUR PROJECT: Component Name]
- **Purpose:**
- **Variants:**
- **States:**
- **Minimum touch target:**
- **Used in:**

[YOUR PROJECT: Add an entry for every product-specific reusable component]

---

## Layer 4 — State Components

### LoadingSkeleton
- **Shapes:** list-item / card / screen-section / avatar

### EmptyState
- **Required elements:** icon (optional), heading, body text, primary action
- **Context-specific:** message and action must match the specific reason for empty state

### ErrorState
- **Variants:** network error (retry), system error (contact), permission denied (explain)
- **Required:** every error state has a recovery action

### OfflineIndicator
- **Purpose:** Persistent banner when offline; does not block use of cached content
- **Behavior:** auto-dismisses when connection restores; no manual dismiss needed

### [YOUR PROJECT: Additional state components]

---

## Layer 5 — Composition / Screen Components

### [YOUR PROJECT: Screen name — e.g., TodayJobsScreen]
- **Route:** [navigation route]
- **Layout model:** Mobile App Screen
- **Primary components used:** [Tab Bar, Job List, JobStatusBadge, EmptyState, LoadingSkeleton]

### [YOUR PROJECT: Screen name]
- **Route:**
- **Layout model:**
- **Primary components used:**

[YOUR PROJECT: Add an entry for each major screen]

---

## Mobile-Specific Component Rules

1. All interactive components: minimum 44×44px touch target — no exceptions
2. No hover states — use active/pressed states for touch feedback
3. Tab Bar: labels on every tab; icons alone are not sufficient (forbidden pattern)
4. Bottom Sheet used for: contextual actions, secondary flows, confirmations — not for primary content
5. Swipe gestures: every swipe must have a visible affordance or a tap alternative
6. After creating a new reusable component: update this file before marking the task complete
