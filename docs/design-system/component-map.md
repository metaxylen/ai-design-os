# Component Map

## Component Architecture Principles
This inventory defines the implementation contract. Part 3 implements the listed layers through `src/components/primitives/`, `src/components/layout/`, `src/components/state/`, `src/components/domain/`, and `src/pages/`. Components must use semantic tokens from `design-tokens.md`, follow the five-layer taxonomy from `09-component-architecture-rules.md`, declare supported states, and meet accessibility requirements from `12-accessibility-rules.md`.

## Layer 1 — Primitive UI Components

| Component | Purpose | Key Variants | Required States | Accessibility | Responsive Behavior | Token Dependencies |
|---|---|---|---|---|---|---|
| Button | Trigger actions | primary, secondary, ghost, destructive, icon-only; sm/md/lg | default, hover, active, focus-visible, disabled, pending | Native button; `aria-label` for icon-only | 44px min touch target on mobile | action, text-on-action, radius-md, focus-ring |
| IconButton | Compact icon-only or icon-priority action | primary, secondary, ghost, destructive; sm/md/lg | default, hover, active, focus-visible, disabled, pending | Required `aria-label`; tooltip may supplement only | 44px min touch target on mobile | action, focus-ring, radius-md |
| Input | Text/numeric entry | default, error, disabled, read-only; sm/md/lg | default, focus, error, disabled, read-only | Visible label; help/error via `aria-describedby` | 16px input text on mobile | surface-nested, border-default, text-primary |
| Textarea | Multi-line prompt, notes, rejection reason, rule descriptions | default, error, disabled, read-only, autosize | default, focus, error, disabled, read-only | Visible label; help/error via `aria-describedby` | Full-width mobile; no placeholder-as-label | surface-nested, border-default, text-primary |
| Select | Single/multi choice | single, multi, error, disabled | default, open, selected, focus, disabled, error | Keyboard listbox/combobox pattern | Full-width or sheet on mobile | surface-raised, border-strong, focus-ring |
| Checkbox | Binary selection | default, indeterminate, error | checked, unchecked, focus, disabled | Native input preferred; label required | 44px row target on mobile | action-primary, border-default |
| Switch | Toggle setting/state | on, off, disabled | default, active, focus, disabled | Button/switch semantics with label | 44px touch target | action-primary, surface-nested |
| Tabs | Switch local views | text, icon+text, segmented | default, active, hover, focus, disabled | `tablist`, `tab`, arrow-key navigation | Scrollable or sheet selector on mobile | border-default, action-primary |
| Badge | Compact category marker | neutral, success, warning, danger, info; solid/soft | default | Text must communicate meaning | Wrap only in controlled contexts | status tokens, radius-sm |
| StatusPill | Operational state label | queue, provider, moderation, publishing, cost | default, critical, warning, success | Text/icon plus color; no color-only status | Compact but readable at 320px | status/domain status tokens |
| ProgressBar | Batch/render progress | linear, segmented, indeterminate | loading, partial, complete, failed | Accessible label/value | Condenses with label on mobile | queue-active, status-failed |
| Tooltip | Contextual help | top/bottom/left/right | open, closed, focus trigger | Tooltip must not repeat visible label | Avoid hover-only on mobile | z-tooltip, shadow-sm |
| Popover | Lightweight contextual panel | info, actions, filters | open, closed, focus, dismissed | Focus behavior based on interactive content | Sheet replacement on mobile if complex | surface-raised, shadow-sm |
| Modal/Dialog | Focused decision | standard, destructive, full-screen mobile | open, close, pending, error | Focus trap, `aria-modal`, labelled title | Full-screen or bottom sheet on mobile | z-modal, shadow-lg |
| Drawer/Sheet | Secondary workflow panel | left/right, filter, inspector, action sheet | open, close, loading, error | Focus trap; Escape/close button | Bottom sheet or full-screen on mobile | z-overlay, shadow-md |
| Toast/Alert | System feedback | success, warning, danger, info; dismissible/persistent | shown, dismissed, timeout | `role=status` or `alert` | Stacked or top/bottom safe area | status tokens, z-toast |
| TablePrimitives | Accessible table foundation | table, header, row, cell, sortable header, selectable row | hover, selected, expanded, loading, empty, error | Caption/label; `aria-sort`; keyboard row activation | Horizontal scroll or priority columns | text-label, border-default, state-selected-surface |
| Skeleton | Loading placeholder | text, row, card, table, preview | loading | Mark busy region where needed | Match mobile content shape | state-loading-surface |
| Spinner | Inline activity | sm/md | loading | Accessible label for non-decorative use | Use only for small targeted waits | action-primary |

## Layer 2 — Layout Components

| Component | Purpose | Key Variants | Required States | Accessibility | Responsive Behavior | Token Dependencies |
|---|---|---|---|---|---|---|
| AppShell | Global product frame | sidebar+topbar, mobile bottom nav | nav expanded/collapsed | Landmarks, skip link | Sidebar desktop, drawer/tablet, bottom nav/mobile | surface-canvas, border-subtle |
| SidebarNav | Primary desktop navigation | expanded, compact, item groups | active, hover, focus, disabled | `nav` landmark, labelled links | Drawer or hidden behind toggle on tablet/mobile | surface-panel, action-primary |
| TopCommandBar | Search/status/actions strip | command, status, account | focused, loading, alert | Keyboard shortcut discoverability | Compact command trigger on mobile | surface-panel, border-default |
| CommandHeader | Page-level command and context header | page, entity, analytics, settings | focused, loading, alert, action pending | Heading relationship and keyboard shortcut help | Stacks command controls on mobile | surface-panel, text-h1, action-primary |
| WorkspaceGrid | Dense dashboard/editor layout grid | dashboard, editor, analytics | loading, partial, error | Section landmarks | Collapses columns per breakpoint | spacing, surface-panel |
| SectionHeader | Title/action/filter header | page, panel, compact | action disabled/pending | Correct heading level | Stacks actions on mobile | text-h*, spacing |
| Section | Landmarked content section | default, dense, critical, form group | loading, empty, error | Labelled by heading | Single-column mobile | spacing, surface-panel |
| Toolbar | Persistent action/filter toolbar | command, filters, editor, table | focus, disabled, pending | Keyboard order and labelled controls | Wraps or becomes sheet trigger mobile | action, border-default |
| Panel | Bordered surface container | default, nested, raised, critical | selected, loading, error | Region labelled by heading | Stacks and collapses predictably | surface-panel, border-default |
| SideRail | Secondary status/action rail | provider, cost, moderation, settings nav | selected, loading, error | Labelled `aside` | Drawer/tablet, hidden behind sheet mobile | surface-panel, border-subtle |
| StatusRail | Persistent incident/status rail | alerts, providers, costs | critical, warning, stale, offline | Status text/icon required | Top alert stack mobile | status tokens |
| DataGridShell | Table/data frame | table, virtualized, selectable | loading, empty, error, selected | Caption/label, sortable headers | Horizontal scroll/column priority/mobile cards | border, typography, status |
| SplitPane | Resizable two-pane structure | inspector, master-detail | resized, collapsed, selected | Keyboard-accessible divider | Detail becomes separate screen/sheet on mobile | border-strong, surface-panel |
| InspectorPanel | Context details/actions | right panel, drawer, sheet | loading, error, empty | Labelled aside/region | Drawer tablet, sheet mobile | surface-raised, border-default |
| TimelineLayout | Scene/progress sequence | horizontal, vertical, compact | selected, failed, current | Keyboard traversable segments | Vertical/accordion on mobile | queue/status tokens |
| MobileBottomNav | Mobile primary navigation | 4-6 labelled items | active, pressed, focus | Labels required; no icon-only tabs | Mobile only | surface-panel, action-primary |
| MobileActionSheet | Mobile contextual actions | standard, destructive, filter | open, pending, error | Focus trap, visible close | Mobile primary overlay pattern | z-modal, shadow-md |
| BottomSheet | Mobile sheet primitive for filters/actions/details | standard, filter, action, destructive | open, close, pending, error | Focus trap, visible close, Escape equivalent | Mobile only or narrow viewport | z-overlay, shadow-md |

## Layer 3 — Domain Components

| Component | Purpose | Key Variants | Required States | Accessibility | Responsive Behavior | Token Dependencies |
|---|---|---|---|---|---|---|
| QueueHealthStrip | Global queue health and blockers | compact, expanded, critical | loading, partial, degraded, critical | Status text plus icon | Becomes top summary stack on mobile | queue/provider/status tokens |
| BatchCard | Summary of one batch | active, delayed, failed, completed | hover, selected, loading, error | Button/link semantics for selection | Mobile condensation only | surface-panel, status tokens |
| BatchTable | Dense batch list | sortable, selectable, expandable | loading rows, empty, error, selected | Accessible table semantics | Horizontal scroll or priority cards | DataGridShell tokens |
| ProductionQueueTable | Main queue table for `/queue` | active, paused, failed, selected, bulk action | loading, empty, error, selected, paused | Accessible table semantics and keyboard selection | Horizontal scroll/priority rows mobile | queue/status/table tokens |
| BatchStatusRail | Batch health rail and counts | compact, expanded, critical | loading, partial, critical, paused | Status text plus icon | Top summary stack mobile | queue/status tokens |
| BatchTimeline | Batch-level progress timeline | scenes, videos, compact | selected, current, failed, completed | Keyboard traversal and labelled steps | Vertical/accordion mobile | queue/status tokens |
| RenderJobRow | Per-job row | video, scene, provider grouped | queued, rendering, failed, retrying | Keyboard row selection | Condensed row with detail link mobile | queue/status tokens |
| ProviderStatusPanel | Provider health/capacity | healthy, degraded, offline | loading, partial, error | Status not color-only | Collapses into incident cards mobile | provider tokens |
| ProviderHealthPanel | Provider detail, latency, rate-limit, incidents | healthy, degraded, offline, fallback | loading, partial, error, selected | Status text/icon; chart summaries | Cards/table hybrid mobile | provider/data tokens |
| CostBurnPanel | Cost and budget guardrail | normal, warning, critical | loading, partial, error | Chart summary required | KPI-first mobile card | cost/data tokens |
| CostBurnRatePanel | Cost velocity and guardrail detail | normal, warning, critical | loading, partial, error | Numeric labels and chart summary | KPI-first mobile | cost/data tokens |
| PromptVersionCard | Prompt version summary | draft, current, archived | selected, hover, unsaved | Button/link distinction | List item on mobile | surface/status tokens |
| ScenePromptEditor | Scene prompt construction | text, constraints, validation | dirty, validating, invalid, valid, disabled | Labelled fields and errors | Single-column mobile | input/status tokens |
| PromptStudioEditor | Full prompt workspace composition | draft, validation, launch-ready | dirty, validating, invalid, valid, pending | Labels, fieldsets, error summary | Step/sections on mobile | form/action/status tokens |
| ScenePromptBlock | Reusable scene prompt block | scene, constraint, locked, invalid | selected, dirty, invalid, disabled | Labelled textarea and controls | Stacked mobile | input/status tokens |
| SceneTimeline | Scene-level sequence | compact, detailed, failed | selected, current, failed, completed | Keyboard traversable steps | Vertical mobile | queue/status tokens |
| RenderPreviewStage | Video preview placeholder/player area | empty, loading, preview, failed | loading, error, selected | Media alt/labels; controls keyboard accessible | Full-width mobile | surface-preview |
| ModerationFlagCard | Risk review item | prompt risk, output risk, platform risk | flagged, approved, rejected, escalated | Decision buttons labelled | Compact queue card mobile | status-moderation/danger |
| PublishSlotCard | Calendar slot with readiness | empty, scheduled, collision, posted | hover, selected, error | Time/platform labels | Agenda list on mobile | publishing tokens |
| PublishingCalendarGrid | Schedule grid by day/time/platform | week, day, platform lane | loading, empty, collision, selected, dragging | Labelled time/platform cells; keyboard drag alternative | Agenda list mobile | publishing/status tokens |
| DistributionChannelCard | Account/channel readiness summary | ready, missing asset, collision, failed | loading, error, selected | Status text/icon | Compact mobile cards | publishing/provider tokens |
| AccountHealthCard | Per-account health and schedule density | healthy, warning, blocked | loading, partial, error | Status text/icon | Mobile summary list | status/publishing tokens |
| FailureReasonGroup | Grouped failures | provider, prompt, moderation, timeout | expanded, collapsed, selected | Accordion semantics | Accordion mobile | status-danger/warning |
| RecoveryActionPanel | Retry/fallback/repair actions | retry, fallback, prompt repair | pending, success, error, disabled | Action labels and confirmations | Bottom sheet mobile | action/status tokens |
| FailureRecoveryPanel | Recovery actions and grouped failure decisions | retry, fallback, repair, partial recovery | pending, success, error, disabled | Action labels and confirmations | Bottom sheet mobile | action/status tokens |
| ThroughputChartPanel | Operational chart wrapper | cost, failure, render time, provider | loading, empty, error, selected | Text summary or data table | Summary-first mobile | data-series tokens |
| QualityScorePanel | Output quality score and review guidance | score, trend, risk, provider comparison | loading, partial, error | Numeric label and non-color status | Summary mobile | data/status tokens |

## Layer 4 — State Components

| Component | Purpose | Variants | Required States | Accessibility | Responsive Behavior | Token Dependencies |
|---|---|---|---|---|---|---|
| LoadingSkeleton | Shared content loading | table, panel, chart, preview | loading | `aria-busy` region where needed | Shape matches breakpoint layout | state-loading-surface |
| EmptyState | Generic configurable empty state | new, filtered, permission, setup | empty | Specific reason and next action | Compact mobile | text-secondary, action-primary |
| EmptyQueueState | No queue content | new user, filters no results | empty | Specific next action | Compact on mobile | text-secondary, action-primary |
| EmptyCalendarState | No scheduled content | no scheduled videos, filtered gap | empty | Explains missing schedule context | Mobile agenda empty copy | action-primary |
| ErrorState | Recoverable/system errors | user-fixable, system, network, permission | error, retrying | `role=alert` for critical | Full/panel variants | status-danger |
| PartialDataBanner | Partial/stale data warning | partial, stale, syncing | visible, dismissed | Status text and reload action | Top sticky on mobile if critical | status-warning |
| ProviderOfflineBanner | Provider incident | degraded, offline, rate-limited | visible, retrying | Incident text and action | Condensed urgent alert mobile | provider-offline |
| OfflineProviderState | Provider-specific offline state | offline, degraded, rate-limited | visible, retrying, fallback | Incident text and fallback action | Mobile alert/card | provider-offline |
| RetryFailedState | Retry outcome state | retry available, retry running, retry failed | pending, success, error | Clear recovery action | Bottom sheet/mobile | status-danger/action |
| QueuePausedState | Queue intentionally paused | paused, resume pending | visible, pending | Explains pause and resume action | Sticky/mobile alert | queue-paused |
| RenderFailedState | Render failure state | provider, prompt, timeout, moderation | error, retrying, fallback | Recovery action required | Panel/card mobile | status-failed |
| CostWarningState | Budget or cost anomaly state | warning, critical, resolved | visible, dismissed | Cost text plus action | Top alert/mobile | cost-warning |
| ModerationBlockedState | Moderation block state | policy, brand, platform | blocked, review pending | Reason text and decision action | Review card mobile | status-moderation |
| SavedSuccessToast | Save confirmation | prompt, rules, settings | shown, dismissed | `role=status` live region | Safe-area aware | status-success |
| PermissionDeniedState | Role restriction | read-only, no access | blocked | Explains access requirement | Same content, narrower layout | text-secondary |
| UnsavedPromptChangesBanner | Prompt draft warning | dirty, saving, saved, error | visible, pending, error | Announced politely on save changes | Sticky mobile bottom/top | status-warning |

## Layer 5 — Composition / Page Components

| Component | Purpose | Layout Model | Required States | Accessibility | Responsive Behavior | Token Dependencies |
|---|---|---|---|---|---|---|
| ControlRoomDashboardPage | Global production health | Dashboard + Command Center | loading, partial, error, critical alerts | Landmark sections, chart summaries | KPI-first mobile | all operational status tokens |
| BatchProductionQueuePage | Batch scan/filter/action | Data-heavy List/Table | loading, empty, no-results, error | Accessible table/grid | Table strategy required | queue/status tokens |
| RenderQueuePage | Production render queue route | Data-heavy List/Table | loading, empty, no-results, paused, error | Accessible table/grid | Table strategy required | queue/status tokens |
| PromptStudioPage | Build and validate prompts | Editor/Builder + Form-heavy | dirty, validating, invalid, saved, error | Labels/errors, unsaved warning | Editor becomes stacked/sheet | form/action/status |
| BatchDetailInspectorPage | Inspect one batch/video | Split Pane + Detail | loading, not-found, permission, error | Heading/detail relationship | List/detail split mobile | preview/timeline/status |
| BatchDetailPage | Inspect one batch/video | Split Pane + Detail | loading, not-found, permission, error | Heading/detail relationship | List/detail split mobile | preview/timeline/status |
| ProviderHealthPage | Provider health and fallback route | Monitoring Dashboard + List | loading, partial, offline, error | Chart/table summaries | Provider cards mobile | provider/status/data |
| PublishingCalendarPage | Schedule distribution | Schedule Grid | loading, empty, collision, error | Time/grid labelling | Agenda list mobile | publishing/status |
| CostAnalyticsPage | Cost/performance route | Data-heavy Dashboard | loading, empty, partial, error | Chart summaries/data tables | Summary-first mobile | data/cost/provider |
| CostThroughputAnalyticsPage | Analyze cost/performance | Data-heavy Dashboard | loading, empty, partial, error | Chart summaries/data tables | Summary-first mobile | data/cost/provider |
| FailedJobRecoveryPage | Failure triage and recovery | Grouped Triage | loading, empty, error, retrying | Accordion semantics, action clarity | Grouped accordions mobile | danger/warning/action |
| ModerationReviewPage | Review flagged content | Review Queue | loading, empty, error, decision pending | Decision buttons, reason labels | One-card-at-a-time mobile | moderation/status |
| MobileOperatorViewPage | Urgent mobile monitoring | Mobile App Screen | loading, empty, error, offline | Touch/label/accessibility | Mobile primary surface | mobile nav/status |
| SettingsPage | Configure system rules and guardrails | Settings Page + Form-heavy | loading, saved, unsaved, invalid, permission | Labels/errors/confirmation | List-to-detail mobile | form/rule/status |

## Component Map Quality Rules
1. Do not implement duplicate buttons, cards, modals, tables, or state components.
2. Domain components must compose primitives and layout components.
3. Page components coordinate data/state and must not define visual systems inline.
4. Every data-driven component must support loading, empty, and error states.
5. Every interactive component must support default, hover, active, focus-visible, and disabled states where platform-appropriate.
6. All mobile interactive controls must meet 44px touch target requirements.
