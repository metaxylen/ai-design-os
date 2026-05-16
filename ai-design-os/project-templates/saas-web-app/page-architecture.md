# Page Architecture — [YOUR PROJECT: Product Name]

**Template:** saas-web-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use  
**Requires:** product-brief.md must be complete; visual-direction.md and component-map.md recommended

Every major page must use a distinct layout model. Identical layouts applied to every page = Do-Not-Ship condition.

---

## App Shell (Global)

**Layout model:** App Shell  
**Navigation type:** [YOUR PROJECT: sidebar-primary / topbar-primary / sidebar + topbar]

**Desktop:** [YOUR PROJECT: describe persistent navigation layout. Example: "Persistent left sidebar (240px) with product name, primary nav items, and user menu at bottom. Main content area fills remaining width."]

**Tablet (768px):** [YOUR PROJECT: how navigation adapts. Example: "Sidebar collapses to icon rail (56px). Expand via hover or toggle button."]

**Mobile (375px):** [YOUR PROJECT: how navigation transforms. Example: "Bottom tab bar with 4 primary sections (labeled). Sidebar inaccessible on mobile."]

**Active state:** [YOUR PROJECT: how current location is communicated. Example: "Left border accent + background highlight on active nav item."]

---

## [YOUR PROJECT: Screen 1 Name — e.g., Dashboard]

**Purpose:** [YOUR PROJECT: What is this page for? One sentence.]  
**Primary user goal:** [YOUR PROJECT: What does the user come here to do?]  
**Layout model:** [YOUR PROJECT: Select from 08-layout-system-rules.md catalog]

**Desktop layout (1024px+):**  
[YOUR PROJECT: Describe the desktop layout. Sections, columns, panels. What appears where? Example: "Two-column layout. Left: KPI tiles (top) + chart area (below). Right: activity feed and quick actions panel (280px fixed width)."]

**Tablet layout (768px):**  
[YOUR PROJECT: How does the layout adapt? Example: "Right panel moves below main content. KPI tiles reduce to 2-column grid."]

**Mobile layout (375px):**  
[YOUR PROJECT: Mobile layout. Example: "Single column. KPIs stack first (4 tiles). Chart area shows summary card only. Right panel content accessible via 'View all activity' link."]

**Sections:**  
1. [YOUR PROJECT: Section name — purpose — content description]
2. [YOUR PROJECT: Section name — purpose — content description]
3. [YOUR PROJECT: Section name — purpose — content description]

**Primary action:** [YOUR PROJECT: What is the main action on this page? Example: "Create Project button in page header"]  
**Secondary actions:** [YOUR PROJECT: Other actions available. Example: "Date range filter, Export"]

**Components used:**  
[YOUR PROJECT: list key components from component-map.md]

**Required states:**  
- Loading: [YOUR PROJECT: which sections have loading states and how]
- Empty: [YOUR PROJECT: empty state for each data section]
- Error: [YOUR PROJECT: error state for each data section]

**Distinctive visual traits:**  
[YOUR PROJECT: What makes this page visually distinct from other pages in the product? Example: "Only page with a multi-column dashboard grid. Metric tiles with status colors as the dominant visual element."]

---

## [YOUR PROJECT: Screen 2 Name — e.g., Project List]

**Purpose:**  
**Primary user goal:**  
**Layout model:** [YOUR PROJECT: List Page]

**Desktop layout:**  
[YOUR PROJECT: describe. Example: "Full-width table with filter bar at top. Columns: Project name, Status, Budget, Spend, PM, Last updated. Sortable headers. Row hover state with quick-action menu."]

**Tablet layout:**  
[YOUR PROJECT: adapt]

**Mobile layout:**  
[YOUR PROJECT: adapt. Example: "Table becomes card list. Each card: project name (bold) + status badge + budget vs. spend. Tap card to open project detail."]

**Sections:**  
1. [section — purpose]
2. [section — purpose]

**Primary action:** [create or add action]  
**Secondary actions:** [filter, sort, export]

**Components used:**  
**Required states:**  
**Distinctive visual traits:**

---

## [YOUR PROJECT: Screen 3 Name — e.g., Project Detail]

**Purpose:**  
**Primary user goal:**  
**Layout model:** [YOUR PROJECT: Detail Page]

**Desktop layout:**  
**Tablet layout:**  
**Mobile layout:**  

**Sections:**  
**Primary action:**  
**Secondary actions:**  
**Components used:**  
**Required states:**  
**Distinctive visual traits:**

---

## [YOUR PROJECT: Screen 4 Name — e.g., Settings]

**Purpose:**  
**Primary user goal:**  
**Layout model:** [YOUR PROJECT: Settings Page]

**Desktop layout:**  
**Tablet layout:**  
**Mobile layout:**  

**Sections:**  
**Primary action:**  
**Secondary actions:**  
**Components used:**  
**Required states:**  
**Distinctive visual traits:**

---

## [YOUR PROJECT: Add additional screens as needed]

Use the same format for every major screen. Every screen entry must define desktop, tablet, and mobile layouts. Do not leave mobile undefined.

---

## Page Differentiation Verification

Before implementation begins, verify:
- [ ] No two major pages share the same layout model (unless they are the same page type, e.g., two list pages)
- [ ] Every major page has a distinctive visual trait that makes it identifiable within the product
- [ ] Mobile behavior is defined for every page — not assumed from desktop
- [ ] Primary action is defined for every page
