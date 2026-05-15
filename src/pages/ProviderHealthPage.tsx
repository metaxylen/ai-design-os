import { Button } from '../components/primitives';
import { CommandHeader, Panel, WorkspaceGrid } from '../components/layout';
import { IncidentRail, ProviderHealthPanel, ThroughputChartPanel } from '../components/domain';
import { ErrorState, OfflineProviderState, PartialDataState } from '../components/state';
import { incidents, providers } from '../data/fixtures/videoFactory';

export function ProviderHealthPage() {
  return (
    <>
      <CommandHeader
        eyebrow="PROVIDER HEALTH / ROUTING"
        title="Provider Health"
        description="Monitor provider latency, failure rate, quota, incident status, and fallback readiness before queue bottlenecks spread."
        actions={<><Button variant="primary">Activate Fallback</Button><Button variant="secondary">Retry Checks</Button></>}
      />
      <PartialDataState />
      <WorkspaceGrid variant="dashboard">
        <ProviderHealthPanel providers={providers} />
        <div className="workspace-grid">
          <OfflineProviderState />
          <Panel title="Provider Incidents"><IncidentRail incidents={incidents.filter((incident) => incident.type === 'provider')} /></Panel>
          <ErrorState title="Provider telemetry error" message="The provider comparison stream failed. Retry keeps current provider filters." />
        </div>
      </WorkspaceGrid>
      <ThroughputChartPanel title="Provider Queue Pressure" values={providers.map((provider) => ({ label: provider.name, value: provider.queueDepth }))} />
    </>
  );
}
