# Implementation Pack — AI Design OS

**For:** Tasks 8, 9, 10, 17, 18 — Component Implementation, Page Implementation, Redesign/Cleanup, Mobile App UI, Desktop App UI.

This pack replaces reading core files 02, 03, 06, 08, 09, 10, 11, 12, 13 for implementation tasks. Read this + `01-agent-operating-protocol.md` + required project files. Do not read the individual core files separately — that defeats the purpose.

---

> **Pack Maintenance Metadata** (human-facing — agents: continue past this block)
> - Synthesizes: `02-design-principles.md`, `03-anti-ai-aesthetic-rules.md`, `06-design-token-rules.md`, `08-layout-system-rules.md`, `09-component-architecture-rules.md`, `10-interaction-state-rules.md`, `11-responsive-design-rules.md`, `12-accessibility-rules.md`, `13-frontend-implementation-rules.md`
> - Last verified against core files: 2026-05-15
> - Re-verify when any listed core file is modified. Run `ai-design-os/scripts/check-pack-sync.sh` from project root to detect drift.

---

## 1 — Pre-Implementation Plan

Produce this plan before writing any code. Do not abbreviate it.

```
Task Understanding: [What is being built or changed — 1–3 sentences]
Task Type: [Per 00-mini-router.md or 00-skill-router.md]
Files Read: [This pack + 01-agent-operating-protocol.md + all project files read]

Required Project Files:
  design-tokens.md: [found / missing]
  component-map.md: [found / missing]
  visual-direction.md: [found / missing — required for Task 9, 10, 17, 18]
  page-architecture.md: [found / missing — required for Task 9, 17, 18]
  product-brief.md: [found / missing — required for Task 17, 18]

Relevant Design Constraints: [Key rules from project files and this pack that apply]
Component Plan: [Which existing components are reused? Which new components are needed and why?]
State Plan: [Which interaction and data states must be implemented per section?]
Responsive Plan: [How does the layout behave at 320px / 375px / 768px / 1024px / 1440px?]
Accessibility Plan: [Semantic structure, keyboard, ARIA, and label requirements]
File Plan: [Which files will be created? Which files will be modified?]
Risks / Missing Information: [Blockers, Major Risks, or missing project files]

PROCEED — all required files confirmed present, plan complete.
  OR
BLOCKED — [specific file] missing. [Explain what is needed and why.]
```

Do not write implementation code before outputting PROCEED or BLOCKED.

---

## 2 — Design Principles (Applied During Implementation)

**Screen communication test — every screen must answer:**
1. Where am I? (product, section, page)
2. What is this screen for? (primary purpose immediately clear)
3. What matters most? (most important info visually dominant)
4. What can I do next? (primary action clear and reachable)
5. What changed or needs attention? (status, errors, new info surfaced)

If any question fails: fix information architecture before visual polish.

**Decision tie-breakers (apply in order when two options appear equal):**
1. Better serves the user's primary task on this screen
2. More consistent with existing design system
3. Performs better at smallest breakpoint
4. More accessible
5. Simpler — complexity requires justification

---

## 3 — Layout Selection

Match page type to layout model. Verify against `page-architecture.md`. Do not default to vertical stacking.

| Layout Model | Use For | Key Rule |
|---|---|---|
| App Shell | Multi-screen products | Persistent nav + main content; sidebar collapses on mobile |
| Dashboard | Overview, monitoring, decisions | KPIs above fold; metric tiles need label + value + trend + action |
| List Page | Scan, search, filter, navigate | Match content type: table=dense data, rows=scannable, cards=visual, feed=time-ordered |
| Detail Page | Inspect one entity deeply | Primary action in entity header; metadata visible but not dominant |
| Settings Page | Safe configuration | No decoration; destructive settings differentiated; save sticky |
| Editor / Builder | Create and manipulate | Toolbar + canvas + inspector; keyboard-first; unsaved state persistent |
| Onboarding | Guide step by step | Single task per step; progress visible; no outside navigation |
| Landing Page | Convert and communicate | Anti-AI rules at max severity; every section maps to real product claim |
| Mobile App Screen | Mobile-first tasks | 44px+ touch targets; labeled tabs; content re-prioritized for mobile |
| Desktop App Screen | Keyboard-first productivity | Multi-pane; persistent panels; every action keyboard-reachable |
| Data-Heavy Dashboard | Analyze, explore data | Filters visible + persistent; every chart needs title + axes + baseline |
| Master-Detail | List + focused detail split | Selected item must have clear selection state; mobile=separate screens |
| Split View | Side-by-side compare | Degrades to one primary panel on mobile; divider keyboard-accessible |
| Command Center | Keyboard-first search | Results within 200ms; arrow keys navigate; Enter executes |
| Form-Heavy Page | Multi-field input | Field groups with headings; submit sticky; errors inline per field |
| Empty / Error / Loading Page | Full-page state | Different messaging for each: loading=skeleton, empty=why+action, error=what+retry |

**Page differentiation rule:** Every major page must use a distinct layout model. Identical layout applied to every page = Do-Not-Ship.

---

## 4 — Token Discipline

**All visual values must be semantic tokens. No hardcoded values.**

Forbidden in components and pages:
- Raw hex, RGB, HSL, RGBA values not from a token (`#3b82f6`, `rgba(0,0,0,0.5)`)
- Arbitrary spacing values not from the spacing scale
- Arbitrary border-radius, shadow, or z-index values outside the token system
- Raw framework utility classes that bypass the project token system
- Hardcoded status colors (`color: red`) when a semantic token exists
- Gradients not explicitly approved in `visual-direction.md`
- Light-mode-only values in a project with dark mode tokens
- Component-local CSS variables separate from the project token system

**Token naming rule:** Names express role, not value. `text-muted` not `gray-400`. `primary` not `blue`. `surface-1` not `white-card`.

---

## 5 — Component Architecture

**Before creating any component:**
1. Check `component-map.md` — does it already exist?
2. Can an existing component be extended with a new variant? → Add variant, not new component
3. Can existing primitives be composed? → Compose at page or domain level
4. Is this reusable across more than one page? → Create new component, update `component-map.md`
5. Is this a one-off section that will never repeat? → Keep local, do not extract

**Layer taxonomy:**
- Layer 1 — Primitive: Button, Input, Select, Badge, Avatar, Tooltip, Skeleton, Spinner. No domain knowledge. Fully token-driven.
- Layer 2 — Layout: Container, Grid, Stack, Panel, Modal, Drawer, PageHeader. No business logic. Responsive behavior defined.
- Layer 3 — Domain: UserCard, InvoiceRow, ProjectHeader, MetricTile. Product-specific. Still uses primitives — does not reinvent buttons or inputs.
- Layer 4 — State: LoadingSkeleton, EmptyState, ErrorState. Accepts copy as props. Every state component supports an optional primary action.
- Layer 5 — Composition: DashboardPage, UserListPage. Coordinates data. Delegates rendering. No raw visual values inline.

**Forbidden component patterns:**
- Duplicate button, card, or modal implementations
- Inline visual systems inside page components (raw hex, spacing, radius in page files)
- Giant page files with reusable component definitions inside them
- Domain components that reinvent their own button or input
- Custom interactive controls with no keyboard support or ARIA attributes
- Component APIs that accept raw visual values (`backgroundColor="#fff"`)

**After creating a new reusable component:** Update `component-map.md` in the same task. The task is not complete until the inventory is accurate.

---

## 6 — State Matrix

**Implement all states before marking any component or section complete.**

### Interactive States (required for every interactive element)

| State | Visual | Behavioral | Accessibility |
|---|---|---|---|
| Default | Token-based styling | Receives focus and click/tap | Correct semantic role |
| Hover | Visually distinct from default | Cursor feedback | Not required on mobile touch |
| Active | Distinct from hover; immediate | Visual response on press/tap | Expected but not ARIA-mandated |
| Focus-visible | Visible focus ring (focus-ring tokens) | Keyboard reach and activate | Required — never suppress |
| Disabled | Muted; cursor: not-allowed | Not interactive; not submittable | `disabled` or `aria-disabled` |

Focus-visible rule: Use `focus-ring`, `focus-ring-width`, `focus-ring-offset` tokens. Never `outline: none` without a replacement.

### Data / Async States (required for every data-driven section)

| State | When Required | Minimum Required Elements |
|---|---|---|
| Loading | Any async data fetch | Skeleton for known-shape content; spinner for single-element reload |
| Empty — no content | User created nothing | Explanation + creation action |
| Empty — no results | Filters returned nothing | Explain filters active + clear/adjust action |
| Empty — permission | Role can't see content | Explain access level + contact/upgrade action |
| Error — user-fixable | Input or format issue | Explain what's wrong + specific correction |
| Error — system | Internal failure | Plain language + retry action |
| Error — network | Connection lost | Connection status + retry action |
| Success | Async op result not visible in UI | Toast (low priority) or inline (form flows) |

"No data" is not an empty state. Every empty state must explain the reason and provide a next action. Every error state must include a recovery action.

### Do-Not-Ship Conditions (States)

Do not ship if any of these are true:
- Any interactive element has only a default state
- Focus-visible is missing on any keyboard-reachable element
- Any data-driven section has no loading, empty, or error state
- Any error state has no recovery action
- Any empty state has no next action
- Disabled state is visually identical to default or active state
- State differentiation uses color only — text or icon must also communicate the state

---

## 7 — Responsive Rules

**Breakpoints:** xs=320px, sm=375px, md=768px, lg=1024px, xl=1440px

**Global rules (apply to every implementation):**
1. No desktop-only UI — mobile behavior must be defined before task is complete
2. No horizontal overflow at any breakpoint
3. No shrunken-desktop mobile — mobile must re-prioritize and restructure content
4. Mobile content priority must be explicitly defined — desktop order does not auto-transfer
5. Touch targets minimum 44×44px on all mobile interactive elements
6. Navigation must be explicitly defined for every breakpoint where it changes
7. State layouts (loading, empty, error) must work at all breakpoints

**Navigation transformation:**

| Desktop | Tablet | Mobile |
|---|---|---|
| Persistent left sidebar | Icon rail or toggle-accessible drawer | Bottom tab bar (4–6 sections) or hamburger drawer |
| Top navigation bar | Compact topbar, may reduce items | Hamburger menu or compact topbar with overflow |
| Horizontal tabs | Scrollable tabs or segmented control | Scrollable tabs or bottom sheet selector |
| Breadcrumbs | Shortened to last 2 levels | Back navigation only |

Navigation labels must be visible on mobile — icon-only primary navigation is forbidden.

**Tables and data displays on mobile — choose one strategy:**
1. Horizontal scroll with visible scroll affordance
2. Stacked row cards (only when columns exceed 5 and data density allows)
3. Column prioritization (show 2–3 most important; rest accessible via expand)
4. Summary-first cards (tap to see full detail)

**Overlays on mobile:** Modals → full-screen or bottom sheet. Drawers → full-screen or bottom sheet. Account for safe area insets (iOS home indicator, Android nav bar).

**Forms on mobile:**
- Always single-column
- Labels above fields (never inline or side)
- Submit action sticky at bottom
- Input font-size ≥16px (prevents iOS Safari auto-zoom)

### Do-Not-Ship Conditions (Responsive)

Do not ship if any of these are true:
- Horizontal overflow at any breakpoint
- Mobile behavior undefined for any page or component shipping to mobile users
- Desktop layout simply scaled down on mobile
- Primary navigation disappears or is inaccessible on mobile
- Primary mobile navigation uses icon-only items without labels
- Any mobile interactive element has touch targets below 44×44px
- Tables or data displays have no defined mobile strategy
- Modals, drawers, or sheets do not fit mobile viewport dimensions
- Forms are not single-column on mobile

---

## 8 — Accessibility Rules

**Semantic structure:**
- Use `h1`–`h6` for headings — not styled divs or spans
- One `h1` per page
- Use landmark elements: `main`, `nav`, `header`, `footer`, `section`, `aside`, `article`
- Use `ul`/`ol`/`li` for groups of related items
- Use `<button>` for actions; `<a href>` for navigation. Never both. Never `div onClick`.

**Forms:**
- Every input must have an associated visible `<label>` — placeholder is not a label
- Help text: `aria-describedby`
- Error text: `aria-describedby` on the field — not just visual proximity
- Required fields: `required` or `aria-required="true"` + visual indicator with legend
- On submit error: move focus to error summary or first invalid field
- Use `fieldset` + `legend` for checkbox/radio groups

**Keyboard navigation:**
- All interactive elements reachable by Tab in logical visual order
- Escape: closes overlays, modals, popovers, drawers
- Arrow keys: navigate within menus, listboxes, tabs, radios, sliders
- Enter: activates focused button or link
- Space: activates button, toggles checkbox or switch

**Focus management:**
- Focus must always be visible — use `focus-ring` tokens; never `outline: none` without replacement
- Focus ring: minimum 3:1 contrast against background
- After modal opens: focus moves to first focusable element inside
- After modal closes: focus returns to the trigger element
- After route change: focus moves to page `h1` or primary content area

**Dialogs / Modals / Drawers:**
- Focus trapped inside while open — tabbing must not exit
- Escape closes (destructive: confirm first)
- `role="dialog"`, `aria-labelledby` → dialog title, `aria-modal="true"`
- After close: focus returns to trigger

**Color and contrast:**
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text (18px+ regular or 14px+ bold): 3:1 minimum
- UI components and focus rings: 3:1 against adjacent colors
- Status must be communicated by text or icon — not color alone
- Error state: red border alone is insufficient — error text is required

**Icon-only buttons:** Must have `aria-label`.

**Reduced motion:** All animations must respect `prefers-reduced-motion: reduce`.

### Do-Not-Ship Conditions (Accessibility)

Do not ship if any of these are true:
- Focus invisible on any keyboard-reachable element
- Any form input has no associated visible label
- A div or span used as primary interactive control without full keyboard + ARIA behavior
- A modal, dialog, or drawer does not trap focus while open
- A modal, dialog, or drawer does not return focus to trigger on close
- Status communicated by color only — no text or icon confirms meaning
- Primary navigation is not keyboard accessible
- Any critical error not programmatically announced or discoverable by keyboard users

---

## 9 — Anti-AI Aesthetic Rules

Apply before finishing any implementation. Every "yes" answer below requires a documented remediation plan.

### Hard Forbidden Patterns (do not use without explicit `visual-direction.md` approval)

**Color / Surface:**
1. Generic purple-to-blue gradient as primary background or visual treatment
2. Random radial gradients used as background decoration
3. Glowing orbs, blobs, or radial light effects behind content
4. Fake glassmorphism — blurred transparent backgrounds without a real layering system
5. Multi-color gradient text without brand justification
6. Hardcoded hex colors outside the token system
7. Low-contrast muted gray text at body size without verified contrast ratio

**Layout / Composition:**
8. Unstructured vertical stacking — no grid, grouping, or information architecture
9. Every page using the same layout model regardless of different purposes
10. Huge hero sections with vague marketing copy on application screens
11. Identical rounded card grids filling every page regardless of content type
12. Navigation absent or decorative
13. Primary action absent or buried

**Component / Visual:**
14. Over-rounded components — excessive border-radius applied uniformly to everything
15. Excessive drop shadows on non-elevated surfaces for decoration
16. Random decorative icons placed for visual rhythm without action or recognition purpose
17. Meaningless dashboard metrics — KPI cards with no label clarity, trend context, or actionable relationship
18. Dribbble-style visual noise — competing decorative layers, perspective transforms
19. Style-first design — visual treatment before information architecture

**States / Completeness:**
20. Missing hover, focus-visible, active, disabled states on interactive elements
21. Missing loading, empty, error states on data-driven sections
22. Desktop-only layouts — mobile behavior undefined or just shrunken desktop

**Anti-pattern combinations:**
23. Generic SaaS landing page: dark gradient bg + glowing feature cards + three-column icon grid + testimonials + CTA
24. Generic dashboard: gradient header card + identical metric tiles + chart with no context + recent items list with no states

**Mobile-specific:**
25. Generic bottom tab: icon-only tabs with no product-specific labels
26. Card-list screens where content type calls for list, table, or feed
27. Oversized mobile cards that push priority content below the fold
28. Touch UI with no mobile-specific state feedback — hover states applied as touch states

### AI Smell Diagnostic (each "yes" = risk to address)

- Does this layout lack product-specific identity — could it belong to any SaaS product?
- Does every page use the same layout model regardless of different content types?
- Is the primary action on key screens missing, buried, or visually weaker than secondary content?
- Is navigation absent, decorative, or insufficient to orient the user?
- Are gradients, blobs, or glows present without explicit visual-direction.md approval?
- Are cards uniformly over-rounded and visually identical across different content types?
- Are shadows used decoratively on non-elevated surfaces?
- Are icons placed for visual rhythm rather than recognition or action?
- Are loading, empty, or error states missing from data-driven sections?
- Are hover, focus-visible, or active states missing from interactive elements?
- Would a senior product designer describe this as "a generic AI SaaS template"?
- Does the visual treatment contradict or drift from `visual-direction.md`?

### Remediation Order (when AI aesthetic issues are found)

1. Fix information architecture first — what the screen is for, what matters most, primary action
2. Replace flat stacking with appropriate layout model
3. Establish typography hierarchy
4. Replace one-off visual patterns with existing components
5. Replace hardcoded values with tokens
6. Add missing interaction and data states
7. Define and implement responsive behavior
8. Verify accessibility
9. Remove decoration, tighten spacing, remove visual noise — restrained polish last

---

## 10 — Implementation Discipline

**File organization:**
- Primitives separate from domain components
- Layout components separate from page routes
- State components (LoadingSkeleton, EmptyState, ErrorState) reusable and centralized — not inline per page
- Mock data does not live inside component files
- Data transformation logic in utility files, not embedded in component render code

**Anti-monolith:**
- Do not create a single page component file with the full UI inline including reusable sub-components
- Do not define inline components inside page files that are used more than once
- Keep files focused on a single responsibility
- If a file is growing — it is doing too much, extract

**Before marking any implementation complete:**
1. Type check (TypeScript, etc.) — report any failures explicitly
2. Lint — fix errors; document warnings
3. Production build — not only dev server
4. Existing test suite — report any failures
5. Manual verification — document which pages, interactions, breakpoints tested

---

## 11 — Post-Implementation Report

Produce after completing the task.

```
Files Changed: [All files created or modified]
Components Created / Updated: [With brief description of what changed]
States Implemented: [All interaction and data states per component/section]
Responsive Behavior: [How UI behaves at mobile / tablet / desktop]
Accessibility Considerations: [Semantic structure, keyboard, focus, labels]
Design Review Result: [AI smell diagnostic results; do-not-ship conditions triggered: Yes/No; issues found by severity]
Tokens Used / Added: [Any new tokens consumed or proposed for addition to design-tokens.md]
Tests / Build Commands Run: [Each command and its result]
Assumptions Made: [Design decisions made without full project file support — mark each TEMPORARY]
Remaining Risks: [Unresolved issues, missing states, known gaps]
Next Recommended Step: [Review pass, responsive audit, design system update, etc.]
```
