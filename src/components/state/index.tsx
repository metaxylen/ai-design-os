import type { ReactNode } from 'react';
import { Alert, Button, Skeleton, Toast } from '../primitives';

export function LoadingSkeleton({ label = 'Loading operational data' }: { label?: string }) {
  return (
    <section className="panel" aria-busy="true" aria-label={label}>
      <div className="workspace-grid">
        <Skeleton height="28px" />
        <Skeleton height="88px" />
        <Skeleton height="44px" />
      </div>
    </section>
  );
}

export function EmptyState({ title, message, action }: { title: string; message: string; action?: ReactNode }) {
  return (
    <div className="state-box">
      <strong>{title}</strong>
      <span>{message}</span>
      {action}
    </div>
  );
}

export function EmptyQueueState() {
  return <EmptyState title="No render jobs match this view" message="The current queue filter has no jobs. Clear filters or launch a batch to refill production." action={<Button variant="primary">Launch Batch</Button>} />;
}

export function ErrorState({ title = 'Data feed failed', message = 'The control room could not refresh this section. Retry keeps current filters and selected context.' }: { title?: string; message?: string }) {
  return (
    <div className="state-box state-error" role="alert">
      <strong>{title}</strong>
      <span>{message}</span>
      <Button variant="secondary">Retry Refresh</Button>
    </div>
  );
}

export function PartialDataState() {
  return <Alert tone="warning" title="Partial provider data" message="Kilo Motion and Sable Clips did not return complete telemetry. Available values remain visible." action={<Button variant="secondary" size="sm">Reload Feeds</Button>} />;
}

export function OfflineProviderState() {
  return <Alert tone="critical" title="Provider offline" message="Kilo Motion is unavailable. Fallback routing is recommended for queued high-fidelity jobs." action={<Button variant="primary" size="sm">Activate Fallback</Button>} />;
}

export function PermissionDeniedState() {
  return <EmptyState title="Permission required" message="This operator profile can monitor the section but cannot change protected automation rules." action={<Button variant="secondary">Request Access</Button>} />;
}

export function QueuePausedState() {
  return <Alert tone="warning" title="Queue paused" message="Batch 1841 is paused while provider fallback is checked. No new jobs will start for this batch." action={<Button variant="primary" size="sm">Resume Queue</Button>} />;
}

export function RenderFailedState() {
  return <Alert tone="critical" title="Render failure requires recovery" message="Scene-level failures are grouped by provider, prompt constraint, and moderation block." action={<Button variant="primary" size="sm">Open Recovery</Button>} />;
}

export function CostWarningState() {
  return <Alert tone="warning" title="Cost guardrail warning" message="Current burn rate is projected to exceed the daily guardrail if retries continue unchanged." action={<Button variant="secondary" size="sm">Adjust Guardrail</Button>} />;
}

export function ModerationBlockedState() {
  return <Alert tone="critical" title="Moderation blocked scheduling" message="Unsafe product-use cue must be rejected or repaired before this item can publish." action={<Button variant="primary" size="sm">Review Item</Button>} />;
}

export function SavedSuccessToast({ message = 'System rules saved and active.' }: { message?: string }) {
  return (
    <div className="toast-region">
      <Toast tone="success" title="Saved" message={message} />
    </div>
  );
}

export function UnsavedChangesBanner() {
  return <Alert tone="warning" title="Unsaved changes" message="Draft edits are local to this workspace until saved or launched." action={<Button variant="primary" size="sm">Save Draft</Button>} />;
}
