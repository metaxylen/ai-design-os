# Implementation Plan

## Scope
Part 3 will implement the AI Video Factory Control Room web app. This plan is pre-implementation only. No code, components, routes, styles, or dependencies are created in Part 2.

## Task Classification
Strict pre-implementation planning after design-system audit. This combines Design System Update, Project-Specific File Compliance Review, Anti-AI-Aesthetic Pre-Check, Component Map Validation, Page Architecture Validation, and Page Implementation Planning. Full implementation remains blocked until Part 3 starts with the required pre-implementation plan.

## Stack Detection / Setup
- Existing frontend stack: none found. No `package.json`, `src/`, Vite config, Next config, or app source exists.
- Planned stack for Part 3: Vite + React + TypeScript.
- Styling approach: centralized token-driven CSS custom properties plus component CSS modules or scoped CSS files following project convention established in Part 3. No raw visual values in components.
- UI library: none planned. Use native HTML and lightweight custom components. Add a dependency only if it materially improves accessibility or chart behavior and is explicitly justified during implementation planning.
- Routing: Prefer `react-router-dom` only if installed or added intentionally in Part 3. If avoiding router dependency, simulate routes through local state and document the limitation.

## Planned File Architecture
If creating a fresh Vite app in Part 3:

```txt
src/
  app/
    App.tsx
    routes.ts
  components/
    primitives/
    layout/
    domain/
    state/
  data/
    fixtures/
  hooks/
  pages/
  styles/
    tokens.css
    globals.css
  utils/
```

Rules:
- Primitives stay separate from domain components.
- Layout components stay separate from page components.
- State components are reusable and centralized.
- Mock/fixture data lives in `src/data/fixtures/`, never inside visual components.
- Token system is centralized in `src/styles/tokens.css`.
- Business/data transformation logic lives in hooks or utils, not presentational components.

## Data Model Plan

### VideoBatch
- `id`
- `name`
- `status`: queued, rendering, paused, failed, completed, approved
- `priority`
- `targetPlatform`
- `accountId`
- `providerId`
- `model`
- `videoCount`
- `completedCount`
- `failedCount`
- `progress`
- `estimatedCost`
- `actualCost`
- `createdAt`
- `estimatedCompletion`

### RenderJob
- `id`
- `batchId`
- `title`
- `status`: queued, rendering, failed, completed, retrying, approved, rejected
- `providerId`
- `model`
- `duration`
- `aspectRatio`
- `cost`
- `progress`
- `qualityScore`
- `failureReason`
- `retryCount`
- `createdAt`
- `estimatedCompletion`

### Provider
- `id`
- `name`
- `status`: healthy, degraded, offline, rateLimited
- `latencyMs`
- `failureRate`
- `queueDepth`
- `costPerMinute`
- `supportedModels`
- `lastIncidentAt`
- `fallbackProviderId`

### CostRecord
- `id`
- `date`
- `providerId`
- `batchId`
- `totalCost`
- `costPerUsableVideo`
- `budgetLimit`
- `guardrailStatus`: normal, warning, critical
- `renderMinutes`
- `usableVideoCount`

### ModerationItem
- `id`
- `renderJobId`
- `riskType`: prompt, output, platform, brand
- `severity`: low, medium, high, blocked
- `status`: flagged, needsReview, approved, rejected, escalated
- `reason`
- `reviewerNote`
- `createdAt`

### PublishingSlot
- `id`
- `renderJobId`
- `platform`
- `accountId`
- `scheduledAt`
- `status`: draft, scheduled, collision, ready, posted, failed
- `collisionReason`
- `readinessIssues`

### AccountChannel
- `id`
- `platform`
- `handle`
- `status`: healthy, warning, blocked
- `dailyCapacity`
- `scheduledCount`
- `lastPublishedAt`

### AlertIncident
- `id`
- `type`: provider, queue, cost, moderation, publishing
- `severity`: info, warning, critical
- `title`
- `message`
- `status`: active, acknowledged, resolved
- `createdAt`
- `actionRoute`

### SystemRule
- `id`
- `group`: queue, retry, provider, cost, moderation, publishing
- `name`
- `description`
- `enabled`
- `value`
- `threshold`
- `status`: valid, invalid, overridden
- `updatedAt`

## Page Implementation Plan

### `/` — Control Room Dashboard
- Layout: Command Center + Dashboard.
- Components: AppShell, CommandHeader, QueueHealthStrip, StatusRail, BatchStatusRail, ProviderHealthPanel, CostBurnRatePanel, ThroughputChartPanel, ProductionQueueTable, Alert/Toast.
- Data: VideoBatch, RenderJob, Provider, CostRecord, AlertIncident.
- States: loading, partial, stale, empty, error, provider degraded/offline, queue paused, cost warning.
- Desktop: dense summary and incident-first grid.
- Tablet: reduced grid, rails stack or drawer.
- Mobile: urgent alerts, target progress, failed jobs, provider incidents, retry/approve sheets.
- Accessibility: dashboard landmarks, chart summaries, status text/icons, keyboard actions.
- Complexity: high; depends on primitives, layout, state, and major domain components.

### `/queue` — Render Queue
- Layout: Data-heavy List Page / Table.
- Components: ProductionQueueTable, RenderJobRow, BatchStatusRail, Toolbar, DataGridShell, EmptyState, ErrorState, QueuePausedState, RenderFailedState.
- Data: VideoBatch, RenderJob, Provider.
- States: queued, rendering, failed, retrying, completed, paused, selected, bulk selected, empty, no-results, error.
- Desktop: table-first with filters and quick inspector.
- Tablet: filters/inspector in drawers.
- Mobile: priority columns plus expandable rows or detail navigation.
- Accessibility: table caption, `aria-sort`, keyboard row selection, no color-only status.
- Complexity: high; table behavior and responsive strategy are critical.

### `/batch/:id` — Batch Detail
- Layout: Split Pane + Detail Page.
- Components: SplitPane, RenderPreviewStage, SceneTimeline, BatchTimeline, RenderJobRow, InspectorPanel, RecoveryActionPanel, ErrorState.
- Data: VideoBatch, RenderJob, Provider, ModerationItem.
- States: loading, not found, permission denied, selected scene/job, failed preview, retry pending, approve/reject pending.
- Desktop: list, preview/timeline, inspector.
- Tablet: inspector drawer.
- Mobile: list/detail separate screens with bottom-sheet actions.
- Accessibility: media controls keyboard accessible, selected scene announced, logs navigable.
- Complexity: high.

### `/studio` — Prompt Studio
- Layout: Editor / Builder + Form-heavy Page.
- Components: PromptStudioEditor, ScenePromptBlock, ScenePromptEditor, PromptVersionCard, InspectorPanel, Toolbar, UnsavedChangesBanner, SavedSuccessToast.
- Data: SystemRule, Provider, prompt versions stored as fixture model.
- States: draft, dirty, validating, invalid, valid, saved, unsaved, pending launch, provider unavailable.
- Desktop: version rail, editor workspace, inspector.
- Tablet: inspector drawer.
- Mobile: step-like sections with sticky validate/launch.
- Accessibility: labels, fieldsets, error summary, described-by help/error.
- Complexity: high.

### `/providers` — Provider Health
- Layout: Monitoring Dashboard + List Page.
- Components: ProviderHealthPanel, ProviderStatusPanel, ProviderOfflineBanner, DataGridShell, ThroughputChartPanel, RecoveryActionPanel.
- Data: Provider, AlertIncident, RenderJob, CostRecord.
- States: healthy, degraded, offline, rate-limited, fallback active, loading, partial, stale, error.
- Desktop: provider rail, comparison table, charts, fallback panel.
- Tablet: fallback drawer.
- Mobile: incident cards first, then provider list.
- Accessibility: status text/icon, accessible charts, keyboard fallback actions.
- Complexity: medium-high.

### `/costs` — Cost Analytics
- Layout: Data-heavy Dashboard / Table / Chart.
- Components: CostBurnRatePanel, ThroughputChartPanel, QualityScorePanel, DataGridShell, PartialDataBanner.
- Data: CostRecord, Provider, VideoBatch.
- States: loading, empty date range, partial data, stale data, cost warning/critical, error.
- Desktop: KPI strip, chart grid, provider comparison.
- Tablet: two-column charts.
- Mobile: summary cards then focused chart panels.
- Accessibility: chart summaries and data table alternatives.
- Complexity: medium.

### `/moderation` — Moderation Review
- Layout: Review Queue + Master-Detail.
- Components: ModerationReviewCard, ModerationFlagCard, RenderPreviewStage, InspectorPanel, ModerationBlockedState, Modal/Dialog.
- Data: ModerationItem, RenderJob, AccountChannel.
- States: flagged, needs review, approved, rejected, escalated, decision pending, permission denied, empty, error.
- Desktop: queue, preview, decision panel.
- Tablet: decision drawer.
- Mobile: one-card-at-a-time with sticky decision actions.
- Accessibility: labelled decisions, reason required before reject, text alternative for preview.
- Complexity: medium-high.

### `/calendar` — Publishing Calendar
- Layout: Calendar / Schedule Grid.
- Components: PublishingCalendarGrid, PublishSlotCard, DistributionChannelCard, AccountHealthCard, Drawer/Sheet, EmptyCalendarState.
- Data: PublishingSlot, AccountChannel, RenderJob.
- States: scheduled, collision, ready, posted, failed publish, empty, no-results, loading, error.
- Desktop: schedule grid and unscheduled queue.
- Tablet: reduced week view and drawer.
- Mobile: agenda list and slot sheet.
- Accessibility: date/time/platform labels; keyboard alternative to drag.
- Complexity: medium-high.

### `/settings` — Settings / System Rules
- Layout: Settings Page + Form-heavy Page.
- Components: Section, SectionHeader, Input, Textarea, Select, Checkbox, Switch, Tabs, PermissionDeniedState, UnsavedChangesBanner, SavedSuccessToast, ErrorState.
- Data: SystemRule, Provider, AccountChannel.
- States: loading, saved, unsaved, invalid, disabled, overridden, permission denied, destructive confirmation, save error.
- Desktop: settings nav, grouped forms, rule status rail.
- Tablet: top section selector.
- Mobile: list-to-detail, single-column forms, sticky save.
- Accessibility: visible labels, error summary, confirmation dialogs with focus trap.
- Complexity: medium.

## Component Implementation Order For Part 3
1. Token system and global styles: `tokens.css`, `globals.css`, theme application.
2. Primitive components: Button, IconButton, Input, Textarea, Select, Checkbox, Switch, Badge, StatusPill, Tabs, ProgressBar, Tooltip, Popover, Modal/Dialog, Drawer/Sheet, Toast/Alert, TablePrimitives, Skeleton, Spinner.
3. Layout components: AppShell, SidebarNav, CommandHeader, WorkspaceGrid, SplitPane, InspectorPanel, SideRail, StatusRail, Panel, Section, Toolbar, BottomSheet, DataGridShell.
4. State components: LoadingSkeleton, EmptyState, ErrorState, PartialDataState, OfflineProviderState, PermissionDeniedState, QueuePausedState, RenderFailedState, CostWarningState, ModerationBlockedState, SavedSuccessToast, UnsavedChangesBanner.
5. Domain components: queue, provider, cost, prompt, preview, moderation, publishing, failure recovery, account/channel, quality panels.
6. Page compositions for the nine routes.
7. Responsive pass at 320, 375, 768, 1024, 1440.
8. Accessibility pass.
9. Design review.
10. Final polish.

## State Implementation Plan
- Interactive states appear on every primitive control and nav item: default, hover, active, focus-visible, disabled.
- Loading appears through LoadingSkeleton on dashboard, queue, batch detail, analytics, moderation, calendar, settings.
- Empty appears in queue, calendar, moderation, costs date range, provider incidents, settings search/filter.
- Error appears in all data sections with recovery action.
- Success appears via SavedSuccessToast and inline confirmations for save/approve/retry/schedule.
- Partial data appears on dashboard, costs, provider health, calendar.
- Domain states:
  - queued/rendering/failed/completed/retrying: `/queue`, `/batch/:id`, dashboard.
  - paused: dashboard, `/queue`, settings.
  - approved/rejected: `/batch/:id`, `/moderation`.
  - scheduled/published/collision: `/calendar`.
  - provider degraded/offline: dashboard, `/providers`.
  - cost warning: dashboard, `/costs`.
  - unsaved changes: `/studio`, `/settings`.

## Responsive Implementation Plan
- **320px:** Single-column, no horizontal overflow except designed table scroller; bottom nav labels visible; urgent content first.
- **375px:** Same as 320 with slightly more metadata; touch targets remain at least 44px.
- **768px:** Sidebar collapses or becomes drawer; two-column only where content remains readable; inspectors become drawers.
- **1024px:** Desktop app shell begins; dense tables, split panes, and side rails active.
- **1440px:** Wide layout uses constrained content or purposeful rails; no uncontrolled stretching.

Page-specific:
- Dashboard: KPIs/alerts first on mobile, full command center desktop.
- Queue: table desktop, priority rows or horizontal table mobile.
- Prompt Studio: three-pane desktop, sectioned builder mobile.
- Batch Detail: split pane desktop, list/detail mobile.
- Moderation: master-detail desktop, one-item review mobile.
- Calendar: grid desktop, agenda mobile.
- Settings: grouped forms desktop, list-to-detail mobile.
- Overlays: drawers desktop/tablet, bottom sheets or full-screen sheets mobile; focus trapped.

## Accessibility Implementation Plan
- Use `header`, `nav`, `main`, `section`, `aside`, and correct headings.
- One `h1` per route.
- Buttons for actions; links for navigation.
- Visible labels for every form control.
- `aria-describedby` for help/error text.
- Keyboard navigation through tables, tabs, menus, drawers, dialogs, and command controls.
- Focus-visible uses `focus-ring` tokens.
- Dialogs/drawers/sheets trap focus and return focus to trigger.
- Tables use captions/labelled headings, `aria-sort`, selected row semantics, and keyboard activation.
- Status always includes text or icon beyond color.
- Icon-only buttons require `aria-label`.
- Reduced motion respected through `prefers-reduced-motion`.

## Motion Plan
Allowed functional motion:
- Route/page transitions.
- Queue status transition.
- Render progress change.
- Drawer/sheet transition.
- Toast transition.
- Chart value transition.
- Selected job transition.
- Prompt Studio panel transition.

Forbidden motion:
- Decorative floating blobs.
- Random glow animation.
- Slow "premium" motion.
- Motion that hides latency.
- Motion required to understand state.

Reduced-motion fallback: set transition durations to `duration-instant` or short fades; state changes remain visible through text, icon, border, and surface tokens.

## Part 3 Entry Gate
Part 3 may start only after:
- All six design-system files exist.
- This implementation plan exists.
- `pre-implementation-design-review.md` has no Critical documentation blockers.
- Part 3 begins with a fresh `01-agent-operating-protocol.md` pre-implementation plan before writing code.
