import { Button } from '../components/primitives';
import { CommandHeader, Panel, StatusRail, WorkspaceGrid } from '../components/layout';
import { BatchStatusRail, CostBurnRatePanel, IncidentRail, ProviderHealthPanel, ProductionQueueTable, QueueHealthStrip, ThroughputChartPanel } from '../components/domain';
import { CostWarningState, LoadingSkeleton, OfflineProviderState, PartialDataState, QueuePausedState } from '../components/state';
import { batches, costRecords, incidents, providers, renderJobs } from '../data/fixtures/videoFactory';

export function ControlRoomDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <CommandHeader
        eyebrow="CONTROL ROOM / GLOBAL PRODUCTION HEALTH"
        title="AI Video Factory Control Room"
        description="Monitor throughput, provider health, cost burn, moderation bottlenecks, and publishing readiness from one operator surface."
        actions={<><Button variant="primary" onClick={() => onNavigate('/studio')}>Launch Batch</Button><Button variant="secondary" onClick={() => onNavigate('/queue')}>Recover Failures</Button></>}
      />
      <PartialDataState />
      <QueueHealthStrip batches={batches} jobs={renderJobs} />
      <WorkspaceGrid variant="dashboard">
        <div className="workspace-grid">
          <Panel title="Active Render Queue">
            <ProductionQueueTable jobs={renderJobs.slice(0, 5)} providers={providers} />
          </Panel>
          <ThroughputChartPanel title="Throughput Trend" values={[{ label: '06:00', value: 12 }, { label: '09:00', value: 25 }, { label: '12:00', value: 41 }, { label: '15:00', value: 58 }]} />
          <LoadingSkeleton label="Dashboard loading state demonstration" />
        </div>
        <StatusRail title="Incident Rail">
          <div className="mobile-card-list">
            <OfflineProviderState />
            <CostWarningState />
            <QueuePausedState />
            <IncidentRail incidents={incidents} />
          </div>
        </StatusRail>
      </WorkspaceGrid>
      <WorkspaceGrid variant="two">
        <BatchStatusRail batches={batches} />
        <div className="workspace-grid">
          <ProviderHealthPanel providers={providers.slice(0, 3)} />
          <CostBurnRatePanel records={costRecords} />
        </div>
      </WorkspaceGrid>
    </>
  );
}
