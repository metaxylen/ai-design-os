import { Button } from '../components/primitives';
import { CommandHeader, Panel, WorkspaceGrid } from '../components/layout';
import { CostBurnRatePanel, DataErrorDemo, ThroughputChartPanel } from '../components/domain';
import { CostWarningState, EmptyState, PartialDataState } from '../components/state';
import { costRecords, providers } from '../data/fixtures/videoFactory';

export function CostAnalyticsPage() {
  return (
    <>
      <CommandHeader
        eyebrow="COSTS / THROUGHPUT ANALYTICS"
        title="Cost & Throughput Analytics"
        description="Track spend, provider waste, usable-output cost, forecast risk, and throughput efficiency with accessible chart summaries."
        actions={<><Button variant="primary">Adjust Budget</Button><Button variant="secondary">Export Report</Button></>}
      />
      <CostWarningState />
      <WorkspaceGrid variant="two">
        <CostBurnRatePanel records={costRecords} />
        <ThroughputChartPanel title="Cost By Provider" values={providers.map((provider) => ({ label: provider.name, value: Math.round(provider.costPerMinute * 100) }))} />
      </WorkspaceGrid>
      <WorkspaceGrid variant="two">
        <ThroughputChartPanel title="Failure Waste" values={costRecords.map((record) => ({ label: record.providerId.replace('prv-', ''), value: Math.round(record.totalCost * (record.guardrailStatus === 'normal' ? 12 : 38)) }))} />
        <Panel title="Optimization Recommendations">
          <div className="mobile-card-list">
            <PartialDataState />
            <EmptyState title="No records for archived range" message="Choose a production date range with completed renders to compare spend and failure waste." action={<Button variant="secondary">Reset Range</Button>} />
            <DataErrorDemo />
          </div>
        </Panel>
      </WorkspaceGrid>
    </>
  );
}
