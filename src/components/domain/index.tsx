import { useMemo, useState, type CSSProperties } from 'react';
import type { AccountChannel, AlertIncident, CostRecord, ModerationItem, Provider, RenderJob, ScenePrompt, SystemRule, VideoBatch, PublishingSlot, PromptVersion } from '../../data/types';
import { formatCurrency, formatNumber, formatPercent, formatTime, humanizeStatus } from '../../utils/format';
import { Badge, Button, ProgressBar, SelectField, StatusPill, TableShell, Textarea, TextInput } from '../primitives';
import { Panel, Toolbar } from '../layout';
import { EmptyQueueState, ErrorState } from '../state';

export function StatTile({ label, value, context, tone }: { label: string; value: string; context: string; tone?: string }) {
  return (
    <article className={`stat-tile ${tone ? `status-${tone}` : ''}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      <p className="stat-context">{context}</p>
    </article>
  );
}

export function QueueHealthStrip({ batches, jobs }: { batches: VideoBatch[]; jobs: RenderJob[] }) {
  const failed = jobs.filter((job) => job.status === 'failed').length;
  const rendering = jobs.filter((job) => job.status === 'rendering').length;
  const retrying = jobs.filter((job) => job.status === 'retrying').length;
  const progress = Math.round(batches.reduce((sum, batch) => sum + batch.progress, 0) / batches.length);
  return (
    <section className="stat-strip" aria-label="Production health summary">
      <StatTile label="Factory Progress" value={`${progress}%`} context="Across active batches" tone="rendering" />
      <StatTile label="Rendering Now" value={String(rendering)} context="Jobs currently consuming provider capacity" tone="info" />
      <StatTile label="Failed Jobs" value={String(failed)} context="Need retry, repair, or rejection" tone="danger" />
      <StatTile label="Retry Pressure" value={String(retrying)} context="Provider fallback attempts active" tone="warning" />
    </section>
  );
}

export function BatchStatusRail({ batches }: { batches: VideoBatch[] }) {
  return (
    <div className="mobile-card-list">
      {batches.map((batch) => (
        <article key={batch.id} className="job-card">
          <div className="status-row">
            <strong>{batch.name}</strong>
            <StatusPill status={batch.status} label={humanizeStatus(batch.status)} />
          </div>
          <ProgressBar value={batch.progress} label={`${batch.completedCount} of ${batch.videoCount} videos complete`} tone={batch.status === 'failed' ? 'failed' : 'rendering'} />
          <span className="metadata">{batch.targetPlatform} / {batch.model} / ETA {formatTime(batch.estimatedCompletion)}</span>
        </article>
      ))}
    </div>
  );
}

export function ProductionQueueTable({ jobs, providers, selectable = true }: { jobs: RenderJob[]; providers: Provider[]; selectable?: boolean }) {
  const [sort, setSort] = useState<'status' | 'cost' | 'progress'>('status');
  const [selected, setSelected] = useState(jobs[0]?.id);
  const sortedJobs = useMemo(() => [...jobs].sort((a, b) => {
    if (sort === 'cost') return b.cost - a.cost;
    if (sort === 'progress') return b.progress - a.progress;
    return a.status.localeCompare(b.status);
  }), [jobs, sort]);

  if (!jobs.length) return <EmptyQueueState />;

  return (
    <>
      <div className="mobile-hidden">
        <TableShell caption="Render queue with sortable operational columns">
          <thead>
            <tr>
              <th scope="col">Job</th>
              <th scope="col" aria-sort={sort === 'status' ? 'ascending' : 'none'}><button className="sortable-header" onClick={() => setSort('status')}>Status</button></th>
              <th scope="col">Provider</th>
              <th scope="col" aria-sort={sort === 'cost' ? 'descending' : 'none'}><button className="sortable-header" onClick={() => setSort('cost')}>Cost</button></th>
              <th scope="col" aria-sort={sort === 'progress' ? 'descending' : 'none'}><button className="sortable-header" onClick={() => setSort('progress')}>Progress</button></th>
              <th scope="col">Recovery</th>
            </tr>
          </thead>
          <tbody>
            {sortedJobs.map((job) => {
              const provider = providers.find((item) => item.id === job.providerId);
              return (
                <tr
                  key={job.id}
                  aria-selected={selected === job.id}
                  tabIndex={selectable ? 0 : undefined}
                  onClick={() => setSelected(job.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') setSelected(job.id);
                  }}
                >
                  <td><strong>{job.title}</strong><br /><span className="metadata">{job.id} / {job.aspectRatio} / {job.duration}s</span></td>
                  <td><StatusPill status={job.status} label={humanizeStatus(job.status)} /></td>
                  <td>{provider?.name ?? job.providerId}<br /><span className="metadata">{job.model}</span></td>
                  <td>{formatCurrency(job.cost)}</td>
                  <td><ProgressBar value={job.progress} label={`${job.progress}% complete`} tone={job.status === 'failed' ? 'failed' : 'rendering'} /></td>
                  <td><Button size="sm" variant={job.status === 'failed' ? 'primary' : 'secondary'} disabled={job.status !== 'failed'}>Retry</Button></td>
                </tr>
              );
            })}
          </tbody>
        </TableShell>
      </div>
      <div className="mobile-card-list desktop-hidden" aria-label="Mobile render queue cards">
        {sortedJobs.map((job) => (
          <RenderJobRow key={job.id} job={job} provider={providers.find((provider) => provider.id === job.providerId)} />
        ))}
      </div>
    </>
  );
}

export function RenderJobRow({ job, provider }: { job: RenderJob; provider?: Provider }) {
  return (
    <article className="job-card">
      <div className="status-row">
        <strong>{job.title}</strong>
        <StatusPill status={job.status} label={humanizeStatus(job.status)} />
      </div>
      <span className="metadata">{provider?.name ?? job.providerId} / {job.model} / {job.aspectRatio}</span>
      <ProgressBar value={job.progress} label={`${job.progress}% render progress`} tone={job.status === 'failed' ? 'failed' : 'rendering'} />
      <div className="button-row">
        <Button size="sm" variant={job.status === 'failed' ? 'primary' : 'secondary'} disabled={job.status !== 'failed'}>Retry Scene</Button>
        <Button size="sm" variant="ghost">Inspect</Button>
      </div>
    </article>
  );
}

export function ProviderHealthPanel({ providers }: { providers: Provider[] }) {
  return (
    <div className="mobile-card-list">
      {providers.map((provider) => (
        <article key={provider.id} className="provider-row">
          <div className="status-row">
            <strong>{provider.name}</strong>
            <StatusPill status={provider.status} label={humanizeStatus(provider.status)} />
          </div>
          <div className="stat-strip">
            <StatTile label="Latency" value={provider.status === 'offline' ? 'Offline' : `${formatNumber(provider.latencyMs)}ms`} context="Median render response" />
            <StatTile label="Failure Rate" value={formatPercent(provider.failureRate)} context="Last 6 hours" tone={provider.failureRate > 10 ? 'warning' : 'success'} />
            <StatTile label="Queue Depth" value={String(provider.queueDepth)} context="Waiting jobs" />
            <StatTile label="Quota" value={`${provider.quotaRemaining}%`} context="Remaining account capacity" tone={provider.quotaRemaining < 20 ? 'warning' : 'success'} />
          </div>
          <div className="button-row">
            <Button size="sm" variant={provider.status === 'healthy' ? 'secondary' : 'primary'}>{provider.status === 'healthy' ? 'View Logs' : 'Activate Fallback'}</Button>
            <Button size="sm" variant="ghost">Retry Check</Button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CostBurnRatePanel({ records }: { records: CostRecord[] }) {
  const total = records.reduce((sum, record) => sum + record.totalCost, 0);
  const critical = records.find((record) => record.guardrailStatus === 'critical');
  return (
    <Panel title="Cost Burn Rate" tone={critical ? 'warning' : undefined}>
      <div className="stat-strip">
        <StatTile label="Today Spend" value={formatCurrency(total)} context="Across all render providers" tone={critical ? 'warning' : 'success'} />
        <StatTile label="Failed Cost" value={formatCurrency(records.filter((record) => record.guardrailStatus !== 'normal').reduce((sum, record) => sum + record.totalCost * .38, 0))} context="Waste from failed or rejected renders" tone="warning" />
        <StatTile label="Usable Videos" value={String(records.reduce((sum, record) => sum + record.usableVideoCount, 0))} context="Approved or publish-ready outputs" />
        <StatTile label="Avg Cost" value={formatCurrency(total / Math.max(1, records.reduce((sum, record) => sum + record.usableVideoCount, 0)))} context="Per usable video" />
      </div>
    </Panel>
  );
}

export function ThroughputChartPanel({ title, values }: { title: string; values: { label: string; value: number; tone?: string }[] }) {
  const max = Math.max(...values.map((item) => item.value), 1);
  return (
    <section className="panel" aria-labelledby={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>
      <h2 id={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>{title}</h2>
      <p className="field-help">Accessible summary: highest value is {values.reduce((a, b) => (a.value > b.value ? a : b)).label} at {formatNumber(Math.max(...values.map((item) => item.value)))}.</p>
      <div className="chart-bars" role="img" aria-label={`${title} bar chart`}>
        {values.map((item, index) => (
          <div key={item.label} className="chart-bar-row">
            <span className="metadata">{item.label}</span>
            <span className="chart-bar-track"><span className="chart-bar-fill" style={{ '--bar-value': `${(item.value / max) * 100}%`, '--bar-color': `var(--data-series-${(index % 6) + 1})` } as CSSProperties} /></span>
            <span className="metadata">{formatNumber(item.value)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PromptStudioEditor({ versions, scenes, providers }: { versions: PromptVersion[]; scenes: ScenePrompt[]; providers: Provider[] }) {
  return (
    <div className="workspace-grid grid-editor">
      <Panel title="Prompt Versions">
        <div className="mobile-card-list">
          {versions.map((version) => (
            <article key={version.id} className="job-card">
              <strong>{version.title}</strong>
              <StatusPill status={version.status === 'current' ? 'approved' : version.status === 'draft' ? 'warning' : 'info'} label={humanizeStatus(version.status)} />
              <span className="metadata">{version.sceneCount} scenes / {formatTime(version.updatedAt)}</span>
            </article>
          ))}
        </div>
      </Panel>
      <Panel title="Scene Prompt Builder">
        <Textarea label="Video idea prompt" defaultValue="A cinematic night market where ordinary objects reveal impossible production-scale stories." help="Keep visual direction consistent and avoid unsafe or policy-risk cues." />
        <div className="timeline-list">
          {scenes.map((scene) => <ScenePromptBlock key={scene.id} scene={scene} />)}
        </div>
      </Panel>
      <Panel title="Generation Constraints">
        <SelectField label="Provider" defaultValue="prv-orion">
          {providers.map((provider) => <option key={provider.id} value={provider.id}>{provider.name} / {humanizeStatus(provider.status)}</option>)}
        </SelectField>
        <SelectField label="Aspect ratio" defaultValue="9:16">
          <option>9:16</option>
          <option>1:1</option>
          <option>16:9</option>
        </SelectField>
        <TextInput label="Estimated duration" defaultValue="18 seconds" help="Generation is disabled when total scene time exceeds provider limits." />
        <div className="button-row">
          <Button variant="secondary">Validate</Button>
          <Button variant="primary" disabled>Generate Batch</Button>
        </div>
      </Panel>
    </div>
  );
}

export function ScenePromptBlock({ scene }: { scene: ScenePrompt }) {
  return (
    <article className="job-card">
      <div className="status-row">
        <strong>{scene.title}</strong>
        <StatusPill status={scene.status === 'valid' ? 'approved' : scene.status === 'invalid' ? 'failed' : 'info'} label={humanizeStatus(scene.status)} />
      </div>
      <Textarea label={`${scene.title} prompt`} defaultValue={scene.prompt} error={scene.issue} />
      <span className="metadata">{scene.duration}s target duration</span>
    </article>
  );
}

export function BatchTimeline({ jobs }: { jobs: RenderJob[] }) {
  return (
    <ol className="timeline-list" aria-label="Batch scene timeline">
      {jobs.map((job, index) => (
        <li key={job.id} className="timeline-step">
          <div className="status-row">
            <strong>Step {index + 1}: {job.title}</strong>
            <StatusPill status={job.status} label={humanizeStatus(job.status)} />
          </div>
          <ProgressBar value={job.progress} label={`${job.sceneCount} scenes tracked`} />
        </li>
      ))}
    </ol>
  );
}

export function RenderPreviewStage({ job }: { job?: RenderJob }) {
  return (
    <section className="preview-stage" aria-label="Render preview stage">
      <div>
        <h2>{job ? job.title : 'No render selected'}</h2>
        <p>{job ? `${job.aspectRatio} preview placeholder with ${job.sceneCount} scene checkpoints. Status: ${humanizeStatus(job.status)}.` : 'Select a render job to inspect preview, logs, moderation, and publishing readiness.'}</p>
        {job ? <StatusPill status={job.status} label={humanizeStatus(job.status)} /> : null}
      </div>
    </section>
  );
}

export function ModerationReviewCard({ item, job }: { item: ModerationItem; job?: RenderJob }) {
  return (
    <article className="review-card">
      <div className="status-row">
        <strong>{job?.title ?? item.renderJobId}</strong>
        <StatusPill status={item.status} label={humanizeStatus(item.status)} />
      </div>
      <Badge tone={item.severity === 'blocked' ? 'danger' : item.severity === 'high' ? 'warning' : 'info'}>{humanizeStatus(item.riskType)} risk / {item.severity}</Badge>
      <p>{item.reason}</p>
      <span className="metadata">{item.reviewerNote} / {formatTime(item.createdAt)}</span>
      <div className="button-row">
        <Button size="sm" variant="primary" disabled={item.status === 'blocked'}>Approve</Button>
        <Button size="sm" variant="destructive">Reject</Button>
        <Button size="sm" variant="secondary">Request Edit</Button>
      </div>
    </article>
  );
}

export function PublishingCalendarGrid({ slots, accounts }: { slots: PublishingSlot[]; accounts: AccountChannel[] }) {
  return (
    <section className="panel" aria-labelledby="publishing-grid-heading">
      <h2 id="publishing-grid-heading">Publishing Grid</h2>
      <div className="workspace-grid grid-three" role="list" aria-label="Publishing slots grouped by platform">
        {slots.map((slot) => {
          const account = accounts.find((item) => item.id === slot.accountId);
          return (
            <article key={slot.id} className="calendar-slot" role="listitem">
              <div className="status-row">
                <strong>{slot.platform}</strong>
                <StatusPill status={slot.status} label={humanizeStatus(slot.status)} />
              </div>
              <span>{account?.handle}</span>
              <span className="metadata">{formatTime(slot.scheduledAt)}</span>
              {slot.collisionReason ? <p className="field-error">{slot.collisionReason}</p> : null}
              <Button size="sm" variant={slot.status === 'collision' ? 'primary' : 'secondary'}>{slot.status === 'collision' ? 'Resolve Collision' : 'Move Slot'}</Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function FailureRecoveryPanel({ jobs }: { jobs: RenderJob[] }) {
  const failed = jobs.filter((job) => job.status === 'failed' || job.status === 'retrying' || job.status === 'rejected');
  if (!failed.length) return <Panel title="Recovery Actions"><p>No failed jobs in this view.</p></Panel>;
  return (
    <Panel title="Failure Recovery">
      <div className="mobile-card-list">
        {failed.map((job) => (
          <article key={job.id} className="job-card">
            <strong>{job.failureReason ?? 'Review failure details'}</strong>
            <span>{job.title}</span>
            <span className="metadata">{job.retryCount} retries / {formatCurrency(job.cost)} spent</span>
            <div className="button-row">
              <Button size="sm" variant="primary">Retry</Button>
              <Button size="sm" variant="secondary">Fallback Provider</Button>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}

export function AccountHealthCard({ accounts }: { accounts: AccountChannel[] }) {
  return (
    <div className="mobile-card-list">
      {accounts.map((account) => (
        <article key={account.id} className="provider-row">
          <div className="status-row">
            <strong>{account.platform} {account.handle}</strong>
            <StatusPill status={account.status} label={humanizeStatus(account.status)} />
          </div>
          <span className="metadata">{account.scheduledCount}/{account.dailyCapacity} slots used / last post {formatTime(account.lastPublishedAt)}</span>
        </article>
      ))}
    </div>
  );
}

export function QualityScorePanel({ jobs }: { jobs: RenderJob[] }) {
  const scored = jobs.filter((job) => job.qualityScore > 0);
  const avg = Math.round(scored.reduce((sum, job) => sum + job.qualityScore, 0) / Math.max(1, scored.length));
  return (
    <Panel title="Quality Score">
      <StatTile label="Average Quality" value={`${avg}/100`} context="Approved, completed, and rejected outputs with generated scores" tone={avg < 70 ? 'warning' : 'success'} />
    </Panel>
  );
}

export function IncidentRail({ incidents }: { incidents: AlertIncident[] }) {
  return (
    <div className="mobile-card-list">
      {incidents.map((incident) => (
        <article key={incident.id} className="job-card">
          <div className="status-row">
            <strong>{incident.title}</strong>
            <StatusPill status={incident.severity} label={humanizeStatus(incident.severity)} />
          </div>
          <p>{incident.message}</p>
          <a className="nav-link" href={incident.actionRoute}>Open {humanizeStatus(incident.type)}</a>
        </article>
      ))}
    </div>
  );
}

export function SystemRulesPanel({ rules }: { rules: SystemRule[] }) {
  return (
    <div className="settings-list">
      {rules.map((rule) => (
        <article key={rule.id} className="rule-row">
          <div className="status-row">
            <strong>{rule.name}</strong>
            <StatusPill status={rule.status === 'valid' ? 'approved' : rule.status === 'invalid' ? 'failed' : 'warning'} label={humanizeStatus(rule.status)} />
          </div>
          <p>{rule.description}</p>
          <Toolbar label={`${rule.name} controls`}>
            <TextInput label="Rule value" defaultValue={rule.value} error={rule.status === 'invalid' ? 'This rule conflicts with current publishing window.' : undefined} />
            <Button variant="secondary" disabled={!rule.enabled}>{rule.enabled ? 'Test Rule' : 'Rule Disabled'}</Button>
          </Toolbar>
        </article>
      ))}
    </div>
  );
}

export function DataErrorDemo() {
  return <ErrorState title="Analytics range unavailable" message="The selected provider comparison range returned incomplete records. Use retry or narrow the date range." />;
}
