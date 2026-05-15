import { Button, CheckboxField, SelectField, SwitchField, TextInput } from '../components/primitives';
import { CommandHeader, Panel, WorkspaceGrid } from '../components/layout';
import { SystemRulesPanel } from '../components/domain';
import { ErrorState, PermissionDeniedState, SavedSuccessToast, UnsavedChangesBanner } from '../components/state';
import { providers, systemRules } from '../data/fixtures/videoFactory';

export function SettingsPage() {
  return (
    <>
      <CommandHeader
        eyebrow="SYSTEM RULES / AUTOMATION GUARDRAILS"
        title="Settings / System Rules"
        description="Configure queue behavior, retry rules, provider fallback, cost guardrails, moderation thresholds, publishing constraints, and account defaults."
        actions={<><Button variant="secondary">Test Rules</Button><Button variant="primary">Save Changes</Button></>}
      />
      <UnsavedChangesBanner />
      <WorkspaceGrid variant="dashboard">
        <Panel title="Automation Rules">
          <SystemRulesPanel rules={systemRules} />
        </Panel>
        <Panel title="Rule Impact Rail">
          <PermissionDeniedState />
          <SelectField label="Preferred fallback provider" defaultValue="prv-orion">
            {providers.map((provider) => <option key={provider.id} value={provider.id}>{provider.name}</option>)}
          </SelectField>
          <TextInput label="Daily budget guardrail" defaultValue="$120" error="Current override exceeds approved test threshold." />
          <SwitchField label="Pause queue on provider outage" checked readOnly help="Stops new jobs when a provider is offline for three checks." />
          <CheckboxField label="Require moderation reason before reject" checked readOnly />
          <ErrorState title="Validation error" message="Publishing collision rule conflicts with current slot spacing. Update the threshold before saving." />
        </Panel>
      </WorkspaceGrid>
      <SavedSuccessToast message="System rule draft saved. One validation issue remains before activation." />
    </>
  );
}
