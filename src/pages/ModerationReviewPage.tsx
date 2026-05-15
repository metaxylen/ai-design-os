import { Button, Textarea } from '../components/primitives';
import { CommandHeader, InspectorPanel, Panel, SplitPane } from '../components/layout';
import { ModerationReviewCard, RenderPreviewStage } from '../components/domain';
import { EmptyState, ErrorState, ModerationBlockedState } from '../components/state';
import { getJob, moderationItems } from '../data/fixtures/videoFactory';

export function ModerationReviewPage() {
  const selected = moderationItems[0];
  const selectedJob = getJob(selected.renderJobId);
  return (
    <>
      <CommandHeader
        eyebrow="MODERATION / BRAND SAFETY"
        title="Moderation Review"
        description="Approve, reject, or repair generated outputs with risk evidence, required reasons, and decision history."
        actions={<><Button variant="primary">Approve Safe</Button><Button variant="destructive">Reject Blocked</Button></>}
      />
      <SplitPane>
        <Panel title="Review Queue">
          <div className="review-list">
            {moderationItems.map((item) => <ModerationReviewCard key={item.id} item={item} job={getJob(item.renderJobId)} />)}
          </div>
          <EmptyState title="Review queue empty" message="No flagged outputs match the active moderation filters. Approved items continue to publishing readiness." action={<Button variant="secondary">Clear Filters</Button>} />
        </Panel>
        <RenderPreviewStage job={selectedJob} />
        <InspectorPanel title="Decision Panel">
          <ModerationBlockedState />
          <Textarea label="Rejection reason" defaultValue="Unsafe product-use cue in generated assembly sequence." help="Required before reject or request edit." />
          <div className="button-row"><Button variant="primary">Approve</Button><Button variant="destructive">Reject</Button><Button variant="secondary">Request Edit</Button></div>
          <ErrorState title="Decision save error" message="Decision history could not be updated. Retry before moving to the next item." />
        </InspectorPanel>
      </SplitPane>
    </>
  );
}
