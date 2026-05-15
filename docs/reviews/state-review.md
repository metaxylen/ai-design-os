# State Review

## State Matrix

Interactive states:
- Default: buttons, links, fields, table rows, nav links.
- Hover: buttons, links, table rows, nav links.
- Active: buttons and navigation interaction styles.
- Focus-visible: global focus ring via semantic token.
- Disabled: disabled retry/generate actions and unavailable settings.

Data and async states:
- Loading: `LoadingSkeleton` on dashboard.
- Empty: queue, calendar, analytics, moderation examples.
- Error: queue, providers, costs, moderation, calendar, settings.
- Success: saved toast on batch, studio, and settings.
- Partial data: dashboard, providers, costs, calendar.

Domain states:
- Queued: render jobs.
- Rendering: render jobs and active batches.
- Failed: render jobs, batch, recovery.
- Retrying: render job state.
- Completed: render job state.
- Paused: queue and batch state.
- Approved: render job, moderation, batch.
- Rejected: render job and moderation.
- Scheduled: publishing slot.
- Published/posted: publishing slot.
- Provider degraded: provider health panels.
- Provider offline: provider alert and provider panels.
- Cost warning: cost guardrail alert and analytics.
- Moderation blocked: moderation and batch inspector.
- Unsaved changes: prompt studio and settings.

## Missing States Found
- Critical before patch: overlay keyboard focus trapping/return was incomplete in reusable `Dialog` and `Drawer`.
- Major before patch: mobile small controls could render below the 44px touch target expectation.

## States Implemented / Patched
- Added overlay focus trap, Escape close, scroll lock, and focus return.
- Added mobile touch-safe height for small buttons.
- Added explicit progressbar accessible names.

## Unresolved State Risks
- State changes are static demonstrations backed by local fixtures.
- Toasts do not auto-dismiss in this prototype.

## Do-Not-Ship State Conditions Triggered
Before fixes: Yes.
After fixes: No.
