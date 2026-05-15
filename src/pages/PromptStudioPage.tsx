import { Button } from '../components/primitives';
import { CommandHeader, Panel } from '../components/layout';
import { PromptStudioEditor, RenderPreviewStage } from '../components/domain';
import { ErrorState, SavedSuccessToast, UnsavedChangesBanner } from '../components/state';
import { promptVersions, providers, scenePrompts } from '../data/fixtures/videoFactory';

export function PromptStudioPage() {
  return (
    <>
      <CommandHeader
        eyebrow="PROMPT STUDIO / BUILDER"
        title="Prompt Studio"
        description="Build prompt batches with scene-level constraints, provider compatibility, estimated duration, cost, and validation states."
        actions={<><Button variant="secondary">Save Draft</Button><Button variant="primary" disabled>Generate Batch</Button></>}
      />
      <UnsavedChangesBanner />
      <PromptStudioEditor versions={promptVersions} scenes={scenePrompts} providers={providers} />
      <Panel title="Preview Stage">
        <RenderPreviewStage />
      </Panel>
      <ErrorState title="Validation warning" message="Scene 3 uses motion language that is incompatible with the selected provider. Repair the scene or switch provider." />
      <SavedSuccessToast message="Prompt draft saved. Generation remains disabled until validation passes." />
    </>
  );
}
