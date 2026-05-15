import { Button, SelectField } from '../components/primitives';
import { CommandHeader, Panel, WorkspaceGrid } from '../components/layout';
import { AccountHealthCard, PublishingCalendarGrid } from '../components/domain';
import { EmptyState, ErrorState, PartialDataState } from '../components/state';
import { accounts, publishingSlots } from '../data/fixtures/videoFactory';

export function PublishingCalendarPage() {
  return (
    <>
      <CommandHeader
        eyebrow="PUBLISHING / SCHEDULE GRID"
        title="Publishing Calendar"
        description="Plan video distribution across platform lanes, account capacity, slot collisions, and readiness issues."
        actions={<><Button variant="primary">Schedule Video</Button><Button variant="secondary">Resolve Collisions</Button></>}
      />
      <Panel title="Calendar Controls">
        <div className="filter-row">
          <SelectField label="Platform filter" defaultValue="all"><option value="all">All platforms</option><option>TikTok</option><option>Instagram</option><option>YouTube Shorts</option></SelectField>
          <Button variant="secondary">Suggested Windows</Button>
          <Button variant="ghost">Move Selected</Button>
        </div>
      </Panel>
      <WorkspaceGrid variant="dashboard">
        <PublishingCalendarGrid slots={publishingSlots} accounts={accounts} />
        <Panel title="Account Health"><AccountHealthCard accounts={accounts} /></Panel>
      </WorkspaceGrid>
      <WorkspaceGrid variant="two">
        <PartialDataState />
        <EmptyState title="No scheduled videos in this filtered lane" message="The selected platform/account combination has open capacity. Add an approved video or clear filters." action={<Button variant="primary">Add Slot</Button>} />
      </WorkspaceGrid>
      <ErrorState title="Calendar sync error" message="Publishing feed returned partial platform data. Retry sync before moving collision slots." />
    </>
  );
}
