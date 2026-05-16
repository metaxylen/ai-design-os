# Project Templates — AI Design OS

Starter templates for the five project design system files. Copy the relevant template folder to `/docs/design-system/` in your project and fill in all `[YOUR PROJECT: ...]` markers before running any implementation task.

---

## Available Templates

| Template | Use For | Files Included |
|---|---|---|
| `saas-web-app/` | SaaS products, admin panels, dashboards, productivity tools | All 5 project files |
| `mobile-app/` | Native or hybrid mobile applications | All 5 project files |
| `landing-page/` | Marketing pages, product landing pages, conversion pages | 3 files (product-brief, visual-direction, design-tokens) |

---

## How To Use

### Option A — Task 1 (New Project Setup)

Run Task 1 (New Project Design Setup). The agent creates all 5 project files from scratch using the core rules. Templates are not needed — they are for agents who need a starting structure, not blank files.

### Option B — Template-Assisted Setup

1. Copy the relevant template folder contents to `/docs/design-system/` in your project
2. Fill in all `[YOUR PROJECT: ...]` markers with your project's actual values
3. Remove all template markers (`[YOUR PROJECT: ...]`) from the files before using them
4. Run Task 1 to verify completeness, or proceed directly to Task 4 (Visual Direction) if the product brief is already filled

### Option C — Agent-Assisted Fill-In

Paste the template file content to the agent and say: "Fill in this template with the following project context: [describe your project]." The agent will populate the fields using the project description and flag any missing information as blockers.

---

## Template Rules

- Do not use template values as actual design decisions — `[YOUR PROJECT: ...]` markers must be replaced before any implementation task begins
- If a field is unknown: leave the marker in place and list it as a blocker before proceeding to tasks that require that file
- Templates do not contain real design values — they define the structure and required fields
- After filling in templates, run the relevant task through the AI Design OS to verify completeness and catch missing fields

---

## Mandatory Files Per Task Type

| Task | Required Files |
|---|---|
| Visual Direction (Task 4) | product-brief.md |
| Design Tokens (Task 5) | visual-direction.md + product-brief.md |
| Component Map (Task 6) | product-brief.md + visual-direction.md + design-tokens.md |
| Page Architecture (Task 7) | product-brief.md |
| Any implementation task | design-tokens.md (minimum Blocker) |
| Page implementation (Task 9) | All 4: visual-direction + design-tokens + component-map + page-architecture |
