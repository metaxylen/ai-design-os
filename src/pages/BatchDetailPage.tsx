import { Button } from '../components/primitives';
import { CommandHeader, InspectorPanel, Panel, SplitPane } from '../components/layout';
import { BatchTimeline, FailureRecoveryPanel, QualityScorePanel, RenderJobRow, RenderPreviewStage } from '../components/domain';
import { ErrorState, ModerationBlockedState, PermissionDeniedState, SavedSuccessToast } from '../components/state';
import { getBatch, jobsForBatch, providers } from '../data/fixtures/videoFactory';
import { formatCurrency } from '../utils/format';

export function BatchDetailPage({ batchId }: { batchId: string }) {
  const batch = getBatch(batchId) ?? getBatch('batch-1842');
  const jobs = jobsForBatch(batch?.id ?? 'batch-1842');
  const selected = jobs[0];
  if (!batch) return <ErrorState title="Batch not found" message="The selected batch could not be loaded. Return to the queue or retry the lookup." />;
  return (
    <>
      <CommandHeader
        eyebrow={`BATCH DETAIL / ${batch.id}`}
        title={batch.name}
        description={`${batch.completedCount}/${batch.videoCount} complete, ${batch.failedCount} failed, ${formatCurrency(batch.actualCost)} spent.`}
        actions={<><Button variant="primary">Approve Ready Outputs</Button><Button variant="secondary">Retry Failed Scenes</Button></>}
      />
      <SavedSuccessToast message="Batch decision saved. Publishing readiness updated." />
      <SplitPane>
        <Panel title="Jobs">
          <div className="mobile-card-list">
            {jobs.map((job) => <RenderJobRow key={job.id} job={job} provider={providers.find((provider) => provider.id === job.providerId)} />)}
          </div>
        </Panel>
        <div className="workspace-grid">
          <RenderPreviewStage job={selected} />
          <Panel title="Scene Timeline"><BatchTimeline jobs={jobs} /></Panel>
          <QualityScorePanel jobs={jobs} />
        </div>
        <InspectorPanel title="Render Inspector">
          <ModerationBlockedState />
          <FailureRecoveryPanel jobs={jobs} />
          <PermissionDeniedState />
        </InspectorPanel>
      </SplitPane>
    </>
  );
}
