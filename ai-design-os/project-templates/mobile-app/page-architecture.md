# Screen Architecture — [YOUR PROJECT: App Name]

**Template:** mobile-app  
**Status:** TEMPLATE — replace all `[YOUR PROJECT: ...]` markers before use

Mobile-app note: "page-architecture.md" is used as the file name for system consistency. This file defines screen layouts for a mobile application.

Every screen must define: purpose, primary user goal, layout model, primary action, and required states. Safe area insets must be accounted for on all screens.

---

## Navigation Structure

**Navigation pattern:** [YOUR PROJECT: Tab bar (primary) + stack navigation (within each tab) / Drawer + stack / Other]

**Tab bar sections:**
1. [YOUR PROJECT: Tab name — icon — what it contains. Example: "Jobs — briefcase icon — today's assigned jobs"]
2. [YOUR PROJECT: Tab name — icon — what it contains]
3. [YOUR PROJECT: Tab name — icon — what it contains]
4. [YOUR PROJECT: Tab name — icon — what it contains]
[Maximum 6 tabs. Labels required on every tab — icon-only tabs are forbidden.]

**Deep navigation:** [YOUR PROJECT: How users navigate within each tab. Example: "Tab 1 (Jobs): Job List → Job Detail → Job Completion → Signature Capture"]

---

## [YOUR PROJECT: Screen 1 — e.g., Today's Jobs (Tab 1 Root)]

**Purpose:** [YOUR PROJECT: What is this screen for?]  
**Primary user goal:** [YOUR PROJECT: What does the user come here to do?]  
**Layout model:** Mobile App Screen — List

**Layout:**  
[YOUR PROJECT: Describe the screen structure. Example: "Navigation header with today's date and job count badge. Full-width list of job cards below. Each card: job name (bold), customer name, time window, status badge, address. Cards are full-width with 1px bottom border separation. Primary tap area: entire card row (min 64px height)."]

**Primary action:** [YOUR PROJECT: Example: "Tap job card → navigate to Job Detail"]  
**Secondary actions:** [YOUR PROJECT: Example: "Sort/filter (top right); overflow menu per card"]

**Required states:**
- Loading: [YOUR PROJECT: Example: "Skeleton list of 5 job-card-shaped skeletons; appears immediately on screen open while data fetches"]
- Empty (no jobs today): [YOUR PROJECT: Example: "Centered empty state: calendar icon + 'No jobs scheduled for today' + 'View All Jobs' secondary action"]
- Error (sync failed): [YOUR PROJECT: Example: "Banner at top: 'Couldn't load jobs. Tap to retry.' + cached data shown below if available"]
- Offline: [YOUR PROJECT: Example: "Offline banner above list; cached jobs displayed with 'Showing cached data' label"]

**Safe area:** [YOUR PROJECT: confirm top and bottom safe area insets handled — navigation bar and home indicator]

**Distinctive visual trait:** [YOUR PROJECT: What makes this screen visually distinct. Example: "Status badge color dominates — technician scans badge color first to understand job state."]

---

## [YOUR PROJECT: Screen 2 — e.g., Job Detail]

**Purpose:** [YOUR PROJECT: Inspect one job; prepare for or complete the work]  
**Primary user goal:** [YOUR PROJECT: Understand the job and take the primary action]  
**Layout model:** Mobile App Screen — Detail

**Layout:**  
[YOUR PROJECT: describe screen structure]

**Primary action:** [YOUR PROJECT: Example: "Mark Complete (sticky button at bottom — always visible)"]  
**Secondary actions:** [YOUR PROJECT: Example: "Call customer, Navigate to address, Add note, Add photo"]

**Required states:**
- Loading:
- Error:
- [YOUR PROJECT: any other critical states]

**Safe area:**  
**Distinctive visual trait:**

---

## [YOUR PROJECT: Screen 3 — e.g., Profile / Settings]

**Purpose:**  
**Primary user goal:**  
**Layout model:** Mobile App Screen — Settings

**Layout:**  
**Primary action:**  
**Secondary actions:**

**Required states:**
- Loading:
- Error (save failed):

**Safe area:**  
**Distinctive visual trait:**

---

## [YOUR PROJECT: Add screens as needed]

Use this format for every distinct screen in the app. Every screen must define primary action and required states.

---

## Modals and Bottom Sheets

Document reusable overlays that appear across multiple screens.

### [YOUR PROJECT: Overlay name — e.g., Add Note Sheet]
- **Type:** Bottom Sheet / Modal
- **Triggered from:** [which screens]
- **Content:** [describe]
- **Primary action:** [confirm / save / etc.]
- **Secondary action:** [cancel / dismiss]
- **Keyboard behavior:** [does it adjust for keyboard? which fields are visible above keyboard?]

---

## Screen Architecture Verification

Before implementation:
- [ ] All primary navigation tabs have labels (no icon-only tabs)
- [ ] Every screen has a defined primary action
- [ ] Every data-driven screen has loading, empty, and error states defined
- [ ] Safe area insets defined for all screens
- [ ] Back navigation defined for all non-root screens
- [ ] Screens are visually distinguishable within the product
