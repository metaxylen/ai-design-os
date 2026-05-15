# Product Brief

## Product Name
AI Video Factory Control Room

## Product Type
High-density operational web application with mobile monitoring support. The product is an internal production control surface for managing AI-generated short-form video pipelines across generation, review, recovery, scheduling, moderation, and analytics.

## Product Summary
AI Video Factory Control Room helps a solo AI content operator run a creator-scale video production factory. The operator manages prompt batches, render queues, model/provider routing, costs, failed generations, content moderation risk, platform readiness, and publishing schedules from one command-center interface. The product must feel powerful, controlled, operational, cinematic, and production-grade. It is not a toy generator, marketing page, generic SaaS dashboard, neon cyberpunk demo, crypto interface, or purple-blue AI landing page.

## Target Users
- Solo AI content operator producing large batches of short-form videos.
- Creator-operator managing automation-heavy social media output.
- Small production lead monitoring model providers, queue throughput, review risk, and publishing readiness.
- Mobile operator checking urgent queue issues and approving/retrying time-sensitive jobs away from desktop.

## Primary User Goals
1. Monitor global production health and intervene before output targets slip.
2. Understand queue bottlenecks, failed jobs, provider degradation, and moderation risk quickly.
3. Create and validate prompt batches with provider/model, style, aspect ratio, duration, and output constraints.
4. Inspect individual batches and scene-level failures without losing operational context.
5. Recover failed generations through retry, provider fallback, prompt repair, or partial recovery.
6. Schedule approved videos across platforms and detect publishing collisions or content gaps.
7. Track cost burn, cost per usable video, throughput trend, provider performance, and budget guardrails.

## Secondary User Goals
- Compare model/provider quality, cost, failure rate, and render time.
- Preserve prompt and style consistency across large batches.
- Review brand-safety and platform-policy warnings before distribution.
- Keep repetitive manual work minimal through batch actions, filters, and keyboard-first operations.
- Maintain confidence in system state through complete loading, empty, error, partial, stale, and success states.

## Core Workflows
1. **Monitor production:** open Control Room Dashboard, read health strip, inspect active queue, identify bottleneck, take recovery or prioritization action.
2. **Create batch:** open Prompt Studio, enter idea prompt, build scene prompts, select model/provider, validate constraints, save prompt version, launch batch.
3. **Manage queue:** filter Batch Production Queue by status, provider, priority, retry count, cost, ETA, or failed scenes; change priority or retry failed work.
4. **Inspect batch:** open Batch Detail / Render Inspector, review per-video and per-scene status, check logs, approve/reject outputs, retry failed scenes.
5. **Schedule publishing:** open Publishing Calendar, place approved videos into platform/account time slots, resolve collisions, fill content gaps.
6. **Analyze throughput:** review cost, failure rate, average render time, provider comparison, throughput trend, and budget guardrails.
7. **Recover failures:** group failures by reason, apply retry options, provider fallback, prompt repair suggestions, or partial recovery.
8. **Review safety:** process flagged outputs and risky prompts, approve/reject, record rejection reason, and clear platform policy warnings.
9. **Mobile monitoring:** check daily target progress, urgent alerts, provider incidents, and approve/retry urgent items from Mobile Operator View.

## Major Screens
1. Control Room Dashboard
2. Batch Production Queue
3. Prompt Studio
4. Batch Detail / Render Inspector
5. Publishing Calendar
6. Cost & Throughput Analytics
7. Failed Job Recovery Center
8. Moderation & Brand Safety Review
9. Mobile Operator View

## Part 2 Implementation Screen Set
Part 3 implementation will focus on nine web-app routes while preserving the broader product scope above:

1. Control Room Dashboard
2. Prompt Studio
3. Render Queue
4. Batch Detail
5. Provider Health
6. Cost Analytics
7. Moderation Review
8. Publishing Calendar
9. Settings / System Rules

Failed recovery remains a core workflow but is implemented through the Render Queue, Batch Detail, and Provider Health surfaces in the Part 3 route plan rather than as a standalone route. Mobile Operator View remains a responsive behavior target across the main routes rather than a separate route in Part 3.

## Information Priority
1. Production blockers: failed jobs, provider incidents, moderation warnings, missed schedule risk.
2. Queue health: active renders, delayed batches, retry pressure, throughput against daily target.
3. Cost control: cost burn, budget guardrail, cost per usable video, provider cost anomalies.
4. Operational actions: retry, pause, reprioritize, approve, reject, schedule, repair prompt, switch provider.
5. Context and diagnostics: logs, scene breakdown, provider/model metadata, prompt version history.
6. Secondary insights: trends, historical analytics, non-urgent recommendations.

## Operational Constraints
- High information density is required, but dense areas must remain readable and scannable.
- Status must never rely on color alone; status labels and icons/text must accompany color.
- Metrics must be operationally meaningful: label, value, trend/context, and related action.
- Tables and data grids must support sorting, filtering, selection, loading rows, empty states, errors, and mobile strategy.
- Operator workflows must support fast decisions, low repetition, visible recovery actions, and keyboard-friendly navigation.
- The system must distinguish partial data, stale data, provider offline, permission-denied, and failed operations.

## UX Risks
- Looking like a generic AI SaaS dashboard instead of a production control room.
- Overusing decorative cinematic styling at the expense of operational clarity.
- Showing fake or meaningless metrics without actionability.
- Making every page a card grid or vertical stack.
- Hiding failures, partial data, or moderation risks behind generic status badges.
- Treating mobile as a shrunken desktop instead of a monitoring-first operator flow.
- Creating prompt-building forms without validation, unsaved changes, or accessible labels.
- Using low-contrast metadata in dense tables.

## Required States
- Interactive: default, hover, active/pressed, focus-visible, disabled.
- Async/data: loading, empty, no-results, error, success, partial data, stale data.
- Queue/job: queued, rendering, delayed, failed, retrying, completed, approved, rejected, cancelled.
- Provider: healthy, degraded, offline, rate-limited, fallback active.
- Prompt/forms: draft, validating, invalid, valid, unsaved changes, save success, save error.
- Moderation: flagged, needs review, approved, rejected, policy warning, escalation required.
- Publishing: scheduled, collision, platform-ready, missing asset, failed publish, posted.
- System rules/settings: enabled, disabled, overridden, invalid, saved, unsaved, permission-limited.
- Permission: permission denied, read-only, unavailable feature.

## Responsive Requirements
- Breakpoints: 320px, 375px, 768px, 1024px, 1440px.
- Desktop: persistent app shell, dense command-center surfaces, tables/data grids, split panes, keyboard-first workflows.
- Tablet: collapsible sidebar or drawer, reduced grid columns, inspector panels as drawers, filters as top bar or drawer.
- Mobile: monitoring-first layout, labeled bottom navigation, urgent alerts first, sticky primary actions, bottom sheets for filters/actions, no icon-only primary navigation.
- Tables: define per-page strategy: horizontal scroll with affordance, column prioritization, stacked rows, or detail navigation.
- Touch targets: minimum 44px by 44px on mobile.
- Forms: single-column on mobile with visible labels and keyboard-safe layout.

## Accessibility Requirements
- Semantic HTML: `main`, `nav`, `header`, `section`, `aside`, headings, lists, and real tables for tabular data.
- One `h1` per page.
- Buttons for actions and links for navigation.
- Visible focus states using `focus-ring` tokens.
- All controls keyboard reachable in logical visual order.
- Form labels visible and associated; help/error text connected with `aria-describedby`.
- Modals, drawers, sheets, popovers, and menus require focus management and Escape behavior.
- Data tables require captions or labelled headings, sortable header state, selected row semantics, and keyboard activation.
- Charts require text summary or linked accessible data table.
- Status, warnings, and errors must include text or icon in addition to color.
- Reduced-motion support is required.

## Quality Bar
- Product-specific command-center identity; no generic AI template.
- Distinct layout model for each major screen.
- Semantic token discipline for all future visual values.
- Five-layer component architecture documented before implementation.
- Full state matrix planned for every interactive and data-driven area.
- Responsive behavior defined before code.
- Accessibility requirements included in component and page contracts.
- No app UI, components, routes, CSS, mock data, or dev server in Part 1.

## Temporary Assumptions
- [TEMPORARY ASSUMPTION — must be validated] Initial provider examples will be treated generically as "model providers"; exact vendor list is not locked.
- [TEMPORARY ASSUMPTION — must be validated] Supported publishing platforms are generic social/video platforms until final product requirements specify exact destinations.
- [TEMPORARY ASSUMPTION — must be validated] The primary user is a single operator; multi-user roles are planned through permission states but not fully specified.
- [TEMPORARY ASSUMPTION — must be validated] Budget guardrail thresholds, daily output target, and cost formulas will be configurable rather than hardcoded.
- [TEMPORARY ASSUMPTION — must be validated] Moderation taxonomy will be product-defined later; this setup uses broad risk categories: policy, brand, prompt, output, platform.
- [TEMPORARY ASSUMPTION — must be validated] The frontend stack is not chosen in Part 1; implementation notes must stay stack-agnostic.
