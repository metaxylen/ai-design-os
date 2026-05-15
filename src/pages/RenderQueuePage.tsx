import { useState } from 'react';
import { Button, SelectField, TextInput } from '../components/primitives';
import { CommandHeader, InspectorPanel, Panel, SplitPane, Toolbar } from '../components/layout';
import { FailureRecoveryPanel, ProductionQueueTable, RenderJobRow } from '../components/domain';
import { EmptyQueueState, ErrorState, QueuePausedState, RenderFailedState } from '../components/state';
import { emptyQueue, providers, renderJobs } from '../data/fixtures/videoFactory';

export function RenderQueuePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showEmpty, setShowEmpty] = useState(false);
  const selected = renderJobs[1];
  const jobs = showEmpty ? emptyQueue : renderJobs;
  return (
    <>
      <CommandHeader
        eyebrow="RENDER QUEUE / SCAN + RECOVER"
        title="Render Queue"
        description="Sort, filter, retry, pause, and inspect active render jobs without leaving queue context."
        actions={<><Button variant="primary" onClick={() => onNavigate('/studio')}>Create Batch</Button><Button variant="secondary" onClick={() => setShowEmpty((value) => !value)}>{showEmpty ? 'Show Jobs' : 'Show Empty State'}</Button></>}
      />
      <QueuePausedState />
      <SplitPane>
        <Panel title="Queue Filters">
          <Toolbar label="Queue filters">
            <TextInput label="Search jobs" defaultValue="night market" />
            <SelectField label="Status" defaultValue="all"><option value="all">All statuses</option><option>Failed</option><option>Rendering</option></SelectField>
            <Button variant="secondary">Apply Filters</Button>
          </Toolbar>
        </Panel>
        <Panel title="Production Queue">
          {showEmpty ? <EmptyQueueState /> : <ProductionQueueTable jobs={jobs} providers={providers} />}
          <ErrorState title="Queue error state" message="If the queue API fails, filters remain preserved and retry is available." />
        </Panel>
        <InspectorPanel title="Selected Job Inspector">
          <RenderJobRow job={selected} provider={providers.find((provider) => provider.id === selected.providerId)} />
          <RenderFailedState />
          <FailureRecoveryPanel jobs={renderJobs} />
        </InspectorPanel>
      </SplitPane>
    </>
  );
}
