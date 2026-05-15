# Page Architecture

## Global App Shell
- **Desktop:** Persistent left `SidebarNav`, `TopCommandBar`, main content area, optional contextual `InspectorPanel`, and status/incident affordance.
- **Tablet:** Sidebar collapses to icon rail or drawer; contextual panels become drawers.
- **Mobile:** Labeled `MobileBottomNav` with 4-6 primary sections plus overflow. Urgent production alerts appear before secondary content.
- **Navigation rule:** No icon-only primary navigation. Active state must be visible at every breakpoint.

## 1. Control Room Dashboard
- **Route suggestion:** `/control-room`
- **Page purpose:** Show global production health and immediate operational risks.
- **Primary user goal:** Decide what needs intervention now.
- **Layout model:** Dashboard + Command Center.
- **Desktop layout:** Health strip across top; KPI/status summary; active render queue and bottleneck panel; provider/cost/moderation side rail; recent incidents.
- **Tablet layout:** Reduced KPI grid; side rail stacks below; filters move into top command controls.
- **Mobile layout:** Urgent alerts, daily target progress, failed jobs, provider incidents, approve/retry actions; charts condensed to key metrics.
- **Main sections:** Queue health, daily target, failed jobs, cost burn, provider status, platform readiness, moderation warnings, bottleneck alerts.
- **Primary actions:** Launch batch, retry failed jobs, open recovery center.
- **Secondary actions:** Pause queue, filter incidents, open provider details, export health report.
- **Components used:** QueueHealthStrip, ProviderStatusPanel, CostBurnPanel, ThroughputChartPanel, BatchTable, ProviderOfflineBanner, PartialDataBanner.
- **Required interaction states:** Hover/focus on all actions, selected incident, disabled actions during pending operations.
- **Required data states:** Loading, partial, stale, empty first-run, error, provider offline, critical alert.
- **Empty/error/loading behavior:** Skeletons match KPI/queue/chart shapes; empty explains no active production and offers launch batch; errors include retry and incident details.
- **Accessibility considerations:** Landmarked dashboard regions; chart text summaries; status labels not color-only; keyboard access to incident actions.
- **Anti-AI-aesthetic risks:** Generic KPI cards and decorative dashboard glow. Mitigation: every metric must have operational context and action.
- **Page differentiation notes:** Command-center overview with cross-system health, not a generic analytics grid.

## 2. Batch Production Queue
- **Route suggestion:** `/batches`
- **Page purpose:** Scan, filter, compare, prioritize, and recover all production batches.
- **Primary user goal:** Keep the render queue moving and resolve blocked batches.
- **Layout model:** Data-heavy List Page / Table.
- **Desktop layout:** Header with create/import action; persistent filter bar; dense `BatchTable`; right-side selected batch quick inspector.
- **Tablet layout:** Filter bar becomes drawer/top selector; quick inspector becomes drawer.
- **Mobile layout:** Priority columns first; horizontal table scroll for advanced view or stacked batch rows with expandable metadata.
- **Main sections:** Search/filter toolbar, batch table, selected quick inspector, pagination/load more, no-results state.
- **Primary actions:** Create batch, retry selected, change priority.
- **Secondary actions:** Bulk pause, provider fallback, export CSV, clear filters.
- **Components used:** DataGridShell, BatchTable, BatchCard, RenderJobRow, InspectorPanel, EmptyQueueState, RetryFailedState.
- **Required interaction states:** Row hover, selected row, sortable header, expanded row, bulk selection, disabled bulk actions.
- **Required data states:** Loading rows, empty queue, no filter results, error, partial data, stale data.
- **Empty/error/loading behavior:** Distinguish no batches from filters returning no results; errors include reload and preserved filters.
- **Accessibility considerations:** Real table semantics, `aria-sort`, caption/label, keyboard row selection, visible focus.
- **Anti-AI-aesthetic risks:** Turning dense data into oversized cards. Mitigation: table-first desktop, mobile condensation only.
- **Page differentiation notes:** Scan-and-act table surface, not a dashboard.

## 3. Prompt Studio
- **Route suggestion:** `/prompt-studio`
- **Page purpose:** Build, validate, version, and launch AI video prompt batches.
- **Primary user goal:** Create a reliable prompt batch with validated constraints.
- **Layout model:** Editor / Builder + Form-Heavy Page.
- **Desktop layout:** Left prompt/version panel; central scene prompt editor; right inspector for model/provider/style/aspect/duration constraints; bottom validation/status bar.
- **Tablet layout:** Inspector collapses to drawer; versions panel collapses to tab.
- **Mobile layout:** Step-like builder with sections, sticky save/validate/launch action, inspector as bottom sheet.
- **Main sections:** Idea prompt, scene prompt builder, model/provider selection, style preset, aspect ratio, duration, constraints, validation, versioning.
- **Primary actions:** Validate prompt, launch batch.
- **Secondary actions:** Save draft, duplicate version, compare versions, reset constraints.
- **Components used:** ScenePromptEditor, PromptVersionCard, InspectorPanel, SplitPane, Tabs, UnsavedPromptChangesBanner, ErrorState.
- **Required interaction states:** Dirty, validating, invalid, valid, saved, unsaved, disabled launch, pending launch.
- **Required data states:** Loading presets/providers, empty version history, validation error, provider unavailable, save error.
- **Empty/error/loading behavior:** Missing presets/providers must explain setup needed; validation errors are field-level and summary-level.
- **Accessibility considerations:** Visible labels, fieldsets for grouped options, error associations, keyboard path through editor/inspector.
- **Anti-AI-aesthetic risks:** Basic toy prompt form. Mitigation: editor workspace, validation, versioning, and operational constraints.
- **Page differentiation notes:** Workspace/editor surface, distinct from monitoring and queue pages.

## 4. Batch Detail / Render Inspector
- **Route suggestion:** `/batches/:batchId`
- **Page purpose:** Inspect one batch deeply at video and scene level.
- **Primary user goal:** Approve, reject, retry, or diagnose specific outputs.
- **Layout model:** Split Pane + Detail Page.
- **Desktop layout:** Left video/job list; center preview and scene timeline; right inspector with logs, metadata, retry/approve actions.
- **Tablet layout:** Right inspector becomes drawer; timeline stacks below preview.
- **Mobile layout:** List and detail become separate screens with explicit back navigation; inspector actions in bottom sheet.
- **Main sections:** Entity header, per-video status, scene breakdown, generation logs, preview stage, retry controls, approve/reject.
- **Primary actions:** Approve output, retry failed scene.
- **Secondary actions:** Reject, export, open logs, switch provider fallback.
- **Components used:** RenderPreviewStage, TimelineLayout, RenderJobRow, InspectorPanel, RecoveryActionPanel, ErrorState.
- **Required interaction states:** Selected video/scene, expanded logs, retry pending, approve/reject pending, disabled actions.
- **Required data states:** Loading, not found, permission denied, partial scenes, error, failed preview.
- **Empty/error/loading behavior:** Not-found state explains missing batch; failed preview offers retry or logs.
- **Accessibility considerations:** Preview controls keyboard accessible; selected scene announced; logs readable and navigable.
- **Anti-AI-aesthetic risks:** Decorative preview card with hidden diagnostics. Mitigation: inspector-first operational detail.
- **Page differentiation notes:** Focused split inspector, not a grid.

## 5. Publishing Calendar
- **Route suggestion:** `/publishing`
- **Page purpose:** Schedule approved videos across platforms, accounts, and time slots.
- **Primary user goal:** Maintain schedule density without collisions or gaps.
- **Layout model:** Schedule/Grid Layout.
- **Desktop layout:** Calendar grid by day/time; platform/account lanes; readiness and collision overlays; side queue of unscheduled approved videos.
- **Tablet layout:** Week view reduces columns; unscheduled queue becomes drawer.
- **Mobile layout:** Agenda list grouped by day/platform; slot details in sheet; sticky add/schedule action.
- **Main sections:** Date range controls, platform filters, schedule grid, unscheduled queue, collision warnings, gap indicators.
- **Primary actions:** Schedule video, resolve collision.
- **Secondary actions:** Drag/reschedule, filter platforms, duplicate slot, clear gap.
- **Components used:** PublishSlotCard, DataGridShell, Panel, Drawer/Sheet, EmptyCalendarState, Toast/Alert.
- **Required interaction states:** Slot hover, selected slot, dragging, collision, platform-ready, disabled invalid slot.
- **Required data states:** Loading calendar, empty schedule, no filter results, error, partial platform data.
- **Empty/error/loading behavior:** Empty calendar offers schedule first approved video; collision errors explain affected slots.
- **Accessibility considerations:** Calendar cells labelled by date/time/platform; drag has keyboard alternative.
- **Anti-AI-aesthetic risks:** Generic calendar clone or card list. Mitigation: production-specific platform readiness and collision semantics.
- **Page differentiation notes:** Spatial schedule grid, not queue table.

## 6. Cost & Throughput Analytics
- **Route suggestion:** `/analytics`
- **Page purpose:** Analyze costs, provider performance, failure rates, and throughput trends.
- **Primary user goal:** Decide provider/budget/production adjustments based on evidence.
- **Layout model:** Data-heavy Dashboard / Table / Chart.
- **Desktop layout:** Summary header with date range; KPI strip; provider comparison table; chart grid; budget guardrail panel.
- **Tablet layout:** Two-column charts; provider comparison full width.
- **Mobile layout:** Summary metrics first, charts become focused panels, provider table uses horizontal scroll or priority rows.
- **Main sections:** Daily cost, cost per usable video, provider comparison, failure rate, average render time, throughput trend, budget guardrail.
- **Primary actions:** Adjust budget guardrail, open provider details.
- **Secondary actions:** Export report, change date range, compare providers.
- **Components used:** ThroughputChartPanel, CostBurnPanel, ProviderStatusPanel, DataGridShell, PartialDataBanner.
- **Required interaction states:** Chart selection, table sort, date filter open, provider selected.
- **Required data states:** Loading charts, empty range, partial data, stale data, error.
- **Empty/error/loading behavior:** Empty range explains no production in selected dates; partial data notes missing provider feed.
- **Accessibility considerations:** Chart summaries, accessible data table, non-color-only series labelling.
- **Anti-AI-aesthetic risks:** Pretty charts without labels/baseline. Mitigation: charts require titles, units, baseline, source, and action.
- **Page differentiation notes:** Analytical decision surface.

## 7. Failed Job Recovery Center
- **Route suggestion:** `/recovery`
- **Page purpose:** Triage failed generations and apply recovery actions.
- **Primary user goal:** Recover usable output with minimal manual work.
- **Layout model:** Grouped Triage + Master-Detail.
- **Desktop layout:** Failure reason groups left/main; selected failure detail and `RecoveryActionPanel` right.
- **Tablet layout:** Detail panel becomes drawer.
- **Mobile layout:** Accordion groups; selected failure opens full-screen detail/sheet with retry options.
- **Main sections:** Failure reason groups, failed jobs, provider fallback, prompt repair suggestions, partial recovery.
- **Primary actions:** Retry selected, apply provider fallback.
- **Secondary actions:** Repair prompt, mark unrecoverable, open logs, bulk retry.
- **Components used:** FailureReasonGroup, RecoveryActionPanel, RenderJobRow, RetryFailedState, ProviderOfflineBanner.
- **Required interaction states:** Expanded group, selected failure, retrying, fallback pending, bulk selected.
- **Required data states:** Loading failures, empty failures, error, partial recovery, provider unavailable.
- **Empty/error/loading behavior:** Empty state celebrates no failures and links back to queue; errors preserve selected filters.
- **Accessibility considerations:** Accordion semantics, keyboard multi-select, action confirmation for destructive marks.
- **Anti-AI-aesthetic risks:** Treating failures as generic cards. Mitigation: grouped reasons and recovery-first actions.
- **Page differentiation notes:** Incident triage, not analytics or dashboard.

## 8. Moderation & Brand Safety Review
- **Route suggestion:** `/moderation`
- **Page purpose:** Review flagged outputs, risky prompts, and platform policy warnings.
- **Primary user goal:** Approve, reject, or escalate content safely and quickly.
- **Layout model:** Review Queue.
- **Desktop layout:** Queue list grouped by risk; central preview/context; right decision panel with reasons and policy notes.
- **Tablet layout:** Decision panel drawer; preview/context stacked.
- **Mobile layout:** One review item at a time; approve/reject actions sticky; reason picker in sheet.
- **Main sections:** Flagged outputs, risky prompts, platform warnings, manual approval queue, rejection reasons, safety status.
- **Primary actions:** Approve safe output, reject flagged output.
- **Secondary actions:** Escalate, edit prompt, request regeneration, filter risk type.
- **Components used:** ModerationFlagCard, RenderPreviewStage, InspectorPanel, StatusPill, Modal/Dialog.
- **Required interaction states:** Selected review item, decision pending, approved, rejected, escalated, disabled without reason.
- **Required data states:** Loading queue, empty review queue, error, partial moderation data, permission denied.
- **Empty/error/loading behavior:** Empty explains no flagged outputs; errors provide retry and preserve current queue position.
- **Accessibility considerations:** Decision buttons labelled; status text not color-only; preview has text alternative; reason field required.
- **Anti-AI-aesthetic risks:** Vague warning badges. Mitigation: explicit risk category, evidence, and decision action.
- **Page differentiation notes:** Decision-review queue with safety emphasis.

## 9. Mobile Operator View
- **Route suggestion:** `/mobile`
- **Page purpose:** Compact monitoring and urgent intervention for mobile operators.
- **Primary user goal:** See what requires action now and approve/retry quickly.
- **Layout model:** Mobile App Screen.
- **Desktop layout:** Optional preview of mobile operational state; not primary.
- **Tablet layout:** Single-column monitoring with drawer details.
- **Mobile layout:** Labeled bottom nav; top urgent alert stack; daily target progress; queue incidents; provider incidents; approve/retry action sheets.
- **Main sections:** Daily target, urgent queue alerts, failed jobs, approve/retry actions, provider incidents, platform readiness.
- **Primary actions:** Retry urgent failure, approve urgent item.
- **Secondary actions:** Snooze alert, open detail, switch provider, view schedule.
- **Components used:** MobileBottomNav, MobileActionSheet, QueueHealthStrip, ProviderOfflineBanner, RetryFailedState, StatusPill.
- **Required interaction states:** Pressed, selected, pending, offline, dismissed alert, disabled action.
- **Required data states:** Loading, empty/no urgent items, error, offline, stale data.
- **Empty/error/loading behavior:** Empty says production is on track and shows daily target; offline explains last refresh and retry.
- **Accessibility considerations:** 44px targets, labels on nav, safe-area handling, screen-reader-friendly urgent alerts.
- **Anti-AI-aesthetic risks:** Generic mobile card feed. Mitigation: urgent monitoring order and action-first cards.
- **Page differentiation notes:** Mobile-first triage surface, not a responsive copy of desktop.

## Page Architecture Quality Gate
- Every page has a distinct layout model or workflow character.
- No page relies on unstructured vertical stacking.
- Mobile behavior is explicit for every page.
- Data-heavy pages define table/chart mobile strategy.
- Primary and secondary actions are visible and tied to the page purpose.
- Loading, empty, error, partial, permission, and recovery states are defined where applicable.
- Accessibility requirements are part of the page contract before implementation.

---

# Part 2 Implementation Route Architecture

The Part 3 app implementation will use these routes. Route names differ slightly from the broader product-screen names above to match the requested implementation scope.

## Route Map
| Route | Page | Layout Model |
|---|---|---|
| `/` | Control Room Dashboard | Command Center + Dashboard |
| `/queue` | Render Queue | Data-heavy List Page / Table |
| `/batch/:id` | Batch Detail | Split Pane + Detail Page |
| `/studio` | Prompt Studio | Editor / Builder + Form-heavy Page |
| `/providers` | Provider Health | Monitoring Dashboard + List Page |
| `/costs` | Cost Analytics | Data-heavy Dashboard / Table / Chart |
| `/moderation` | Moderation Review | Review Queue + Master-Detail |
| `/calendar` | Publishing Calendar | Calendar / Schedule Grid |
| `/settings` | Settings / System Rules | Settings Page + Form-heavy Page |

## Provider Health
- **Page purpose:** Monitor provider health, latency, rate limits, incidents, fallback readiness, and model performance.
- **Primary user goal:** Decide whether to keep, pause, or reroute generation traffic for a provider.
- **Desktop layout:** Provider status rail, provider comparison table, incident list, latency/failure charts, fallback action panel.
- **Tablet layout:** Status rail becomes top summary; fallback action panel becomes drawer.
- **Mobile layout:** Provider incident cards first, then compact provider list and fallback sheet.
- **Main sections:** Provider health summary, degraded/offline providers, rate-limit incidents, model performance, fallback controls.
- **Primary actions:** Activate fallback, pause provider.
- **Secondary actions:** Retry provider check, open provider logs, filter by model.
- **Components used:** ProviderHealthPanel, ProviderStatusPanel, ProviderOfflineBanner, DataGridShell, ThroughputChartPanel, RecoveryActionPanel.
- **Required states:** healthy, degraded, offline, rate-limited, fallback active, loading, partial, stale, error.
- **Distinctive visual traits:** Monitoring surface with status rail and provider comparison; not a generic KPI grid.
- **Do-not-copy / do-not-generic rule:** Do not copy cloud vendor dashboards or use provider cards as decorative tiles.

## Settings / System Rules
- **Page purpose:** Configure automation guardrails for queue behavior, retry rules, budget limits, moderation policy thresholds, publishing rules, and provider fallback.
- **Primary user goal:** Safely adjust rules that control automated production behavior.
- **Desktop layout:** Settings section navigation left, grouped form sections center, rule impact/status rail right, sticky save/cancel.
- **Tablet layout:** Section nav becomes top selector; status rail stacks below form.
- **Mobile layout:** List-to-detail settings sections; forms single-column; sticky save action; destructive changes require confirmation sheet.
- **Main sections:** Queue rules, retry rules, provider fallback, cost guardrails, moderation thresholds, publishing constraints, account/channel defaults.
- **Primary actions:** Save system rules, test rules.
- **Secondary actions:** Reset section, disable rule, view audit log.
- **Components used:** Section, SectionHeader, Input, Textarea, Select, Checkbox, Switch, Tabs, PermissionDeniedState, UnsavedPromptChangesBanner, SavedSuccessToast, ErrorState.
- **Required states:** loading, saved, unsaved, invalid, disabled, permission denied, destructive confirmation, save error.
- **Distinctive visual traits:** Calm configuration surface with form grouping and validation; no decorative control-room density.
- **Do-not-copy / do-not-generic rule:** Do not make settings a generic form dump; every rule must include purpose, scope, validation, and operational consequence.
