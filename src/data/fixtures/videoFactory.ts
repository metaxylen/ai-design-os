import type {
  AccountChannel,
  AlertIncident,
  CostRecord,
  ModerationItem,
  PromptVersion,
  Provider,
  RenderJob,
  ScenePrompt,
  SystemRule,
  VideoBatch,
  PublishingSlot,
} from '../types';

export const providers: Provider[] = [
  {
    id: 'prv-orion',
    name: 'Orion Render',
    status: 'healthy',
    latencyMs: 1180,
    failureRate: 3.8,
    queueDepth: 24,
    costPerMinute: 0.42,
    supportedModels: ['cinema-short-v4', 'motion-cut-v2'],
    fallbackProviderId: 'prv-nova',
    quotaRemaining: 71,
  },
  {
    id: 'prv-nova',
    name: 'Nova Frames',
    status: 'degraded',
    latencyMs: 2460,
    failureRate: 12.4,
    queueDepth: 61,
    costPerMinute: 0.36,
    supportedModels: ['nova-social-v3', 'scene-repair-v1'],
    lastIncidentAt: '2026-05-15T13:22:00Z',
    fallbackProviderId: 'prv-kilo',
    quotaRemaining: 38,
  },
  {
    id: 'prv-kilo',
    name: 'Kilo Motion',
    status: 'offline',
    latencyMs: 0,
    failureRate: 100,
    queueDepth: 0,
    costPerMinute: 0.52,
    supportedModels: ['high-fidelity-v2'],
    lastIncidentAt: '2026-05-15T12:46:00Z',
    fallbackProviderId: 'prv-orion',
    quotaRemaining: 0,
  },
  {
    id: 'prv-sable',
    name: 'Sable Clips',
    status: 'rateLimited',
    latencyMs: 1800,
    failureRate: 7.2,
    queueDepth: 18,
    costPerMinute: 0.31,
    supportedModels: ['fast-vertical-v6'],
    lastIncidentAt: '2026-05-15T14:05:00Z',
    fallbackProviderId: 'prv-orion',
    quotaRemaining: 19,
  },
];

export const accounts: AccountChannel[] = [
  { id: 'acct-tt-main', platform: 'TikTok', handle: '@factory.motion', status: 'healthy', dailyCapacity: 18, scheduledCount: 13, lastPublishedAt: '2026-05-15T11:30:00Z' },
  { id: 'acct-ig-a', platform: 'Instagram', handle: '@factory.cuts', status: 'warning', dailyCapacity: 12, scheduledCount: 11, lastPublishedAt: '2026-05-15T10:10:00Z' },
  { id: 'acct-yt-s', platform: 'YouTube Shorts', handle: '@controlroomshorts', status: 'healthy', dailyCapacity: 10, scheduledCount: 6, lastPublishedAt: '2026-05-15T08:45:00Z' },
  { id: 'acct-tt-lab', platform: 'TikTok', handle: '@motion.lab', status: 'blocked', dailyCapacity: 8, scheduledCount: 0, lastPublishedAt: '2026-05-12T17:15:00Z' },
];

export const batches: VideoBatch[] = [
  {
    id: 'batch-1842',
    name: 'Night Market Micro Stories',
    status: 'rendering',
    priority: 'urgent',
    targetPlatform: 'TikTok',
    accountId: 'acct-tt-main',
    providerId: 'prv-orion',
    model: 'cinema-short-v4',
    videoCount: 36,
    completedCount: 19,
    failedCount: 3,
    progress: 58,
    estimatedCost: 42.8,
    actualCost: 29.7,
    createdAt: '2026-05-15T09:08:00Z',
    estimatedCompletion: '2026-05-15T16:20:00Z',
  },
  {
    id: 'batch-1841',
    name: 'Fast Myth Explainers',
    status: 'paused',
    priority: 'high',
    targetPlatform: 'YouTube Shorts',
    accountId: 'acct-yt-s',
    providerId: 'prv-nova',
    model: 'nova-social-v3',
    videoCount: 28,
    completedCount: 11,
    failedCount: 6,
    progress: 39,
    estimatedCost: 31.2,
    actualCost: 22.4,
    createdAt: '2026-05-15T07:32:00Z',
    estimatedCompletion: '2026-05-15T17:55:00Z',
  },
  {
    id: 'batch-1839',
    name: 'Impossible Product Demos',
    status: 'failed',
    priority: 'normal',
    targetPlatform: 'Instagram',
    accountId: 'acct-ig-a',
    providerId: 'prv-kilo',
    model: 'high-fidelity-v2',
    videoCount: 18,
    completedCount: 9,
    failedCount: 7,
    progress: 50,
    estimatedCost: 35.4,
    actualCost: 38.9,
    createdAt: '2026-05-14T18:40:00Z',
    estimatedCompletion: '2026-05-15T13:10:00Z',
  },
  {
    id: 'batch-1837',
    name: 'Calm Productivity Shorts',
    status: 'approved',
    priority: 'normal',
    targetPlatform: 'TikTok',
    accountId: 'acct-tt-main',
    providerId: 'prv-sable',
    model: 'fast-vertical-v6',
    videoCount: 24,
    completedCount: 24,
    failedCount: 0,
    progress: 100,
    estimatedCost: 22.4,
    actualCost: 21.8,
    createdAt: '2026-05-14T11:20:00Z',
    estimatedCompletion: '2026-05-14T15:15:00Z',
  },
];

export const renderJobs: RenderJob[] = [
  { id: 'job-901', batchId: 'batch-1842', title: 'Lantern vendor opens portal', status: 'rendering', providerId: 'prv-orion', model: 'cinema-short-v4', duration: 18, aspectRatio: '9:16', cost: 1.94, progress: 72, qualityScore: 86, retryCount: 0, createdAt: '2026-05-15T10:00:00Z', estimatedCompletion: '2026-05-15T15:52:00Z', sceneCount: 4 },
  { id: 'job-902', batchId: 'batch-1842', title: 'Rain reflection chase', status: 'failed', providerId: 'prv-nova', model: 'scene-repair-v1', duration: 16, aspectRatio: '9:16', cost: 1.66, progress: 48, qualityScore: 42, failureReason: 'Scene 3 prompt exceeded motion constraint', retryCount: 2, createdAt: '2026-05-15T10:12:00Z', estimatedCompletion: '2026-05-15T15:58:00Z', sceneCount: 5 },
  { id: 'job-903', batchId: 'batch-1842', title: 'Midnight noodle counter', status: 'queued', providerId: 'prv-orion', model: 'cinema-short-v4', duration: 14, aspectRatio: '9:16', cost: 1.48, progress: 0, qualityScore: 0, retryCount: 0, createdAt: '2026-05-15T10:18:00Z', estimatedCompletion: '2026-05-15T16:12:00Z', sceneCount: 3 },
  { id: 'job-904', batchId: 'batch-1841', title: 'Why sailors feared green flashes', status: 'retrying', providerId: 'prv-sable', model: 'fast-vertical-v6', duration: 22, aspectRatio: '9:16', cost: 1.88, progress: 34, qualityScore: 61, failureReason: 'Provider fallback after rate limit', retryCount: 1, createdAt: '2026-05-15T08:20:00Z', estimatedCompletion: '2026-05-15T16:30:00Z', sceneCount: 6 },
  { id: 'job-905', batchId: 'batch-1841', title: 'Three myths about old maps', status: 'completed', providerId: 'prv-nova', model: 'nova-social-v3', duration: 21, aspectRatio: '9:16', cost: 1.72, progress: 100, qualityScore: 91, retryCount: 0, createdAt: '2026-05-15T08:35:00Z', estimatedCompletion: '2026-05-15T14:10:00Z', sceneCount: 5 },
  { id: 'job-906', batchId: 'batch-1839', title: 'Floating desk assembly', status: 'rejected', providerId: 'prv-kilo', model: 'high-fidelity-v2', duration: 19, aspectRatio: '9:16', cost: 2.34, progress: 100, qualityScore: 38, failureReason: 'Brand safety rejection: unsafe assembly visual', retryCount: 0, createdAt: '2026-05-14T19:10:00Z', estimatedCompletion: '2026-05-15T12:00:00Z', sceneCount: 4 },
  { id: 'job-907', batchId: 'batch-1837', title: 'One minute desk reset ritual', status: 'approved', providerId: 'prv-sable', model: 'fast-vertical-v6', duration: 17, aspectRatio: '9:16', cost: 1.18, progress: 100, qualityScore: 94, retryCount: 0, createdAt: '2026-05-14T12:05:00Z', estimatedCompletion: '2026-05-14T14:20:00Z', sceneCount: 4 },
];

export const costRecords: CostRecord[] = [
  { id: 'cost-1', date: '2026-05-15', providerId: 'prv-orion', batchId: 'batch-1842', totalCost: 29.7, costPerUsableVideo: 1.56, budgetLimit: 70, guardrailStatus: 'normal', renderMinutes: 72, usableVideoCount: 19 },
  { id: 'cost-2', date: '2026-05-15', providerId: 'prv-nova', batchId: 'batch-1841', totalCost: 22.4, costPerUsableVideo: 2.04, budgetLimit: 45, guardrailStatus: 'warning', renderMinutes: 61, usableVideoCount: 11 },
  { id: 'cost-3', date: '2026-05-15', providerId: 'prv-kilo', batchId: 'batch-1839', totalCost: 38.9, costPerUsableVideo: 4.32, budgetLimit: 35, guardrailStatus: 'critical', renderMinutes: 54, usableVideoCount: 9 },
  { id: 'cost-4', date: '2026-05-14', providerId: 'prv-sable', batchId: 'batch-1837', totalCost: 21.8, costPerUsableVideo: 0.91, budgetLimit: 40, guardrailStatus: 'normal', renderMinutes: 46, usableVideoCount: 24 },
];

export const moderationItems: ModerationItem[] = [
  { id: 'mod-1', renderJobId: 'job-902', riskType: 'prompt', severity: 'high', status: 'needsReview', reason: 'Prompt repair introduced disallowed crowd panic cue.', reviewerNote: 'Needs safer wording before retry.', createdAt: '2026-05-15T13:38:00Z' },
  { id: 'mod-2', renderJobId: 'job-906', riskType: 'brand', severity: 'blocked', status: 'blocked', reason: 'Generated assembly sequence implies unsafe product usage.', reviewerNote: 'Reject or regenerate with safety constraints.', createdAt: '2026-05-15T12:05:00Z' },
  { id: 'mod-3', renderJobId: 'job-907', riskType: 'platform', severity: 'low', status: 'approved', reason: 'Caption uses acceptable productivity claim.', reviewerNote: 'Approved for scheduled release.', createdAt: '2026-05-14T16:35:00Z' },
  { id: 'mod-4', renderJobId: 'job-905', riskType: 'output', severity: 'medium', status: 'rejected', reason: 'Map label hallucination in final scene.', reviewerNote: 'Regenerate scene 5 only.', createdAt: '2026-05-15T14:00:00Z' },
];

export const publishingSlots: PublishingSlot[] = [
  { id: 'slot-1', renderJobId: 'job-907', platform: 'TikTok', accountId: 'acct-tt-main', scheduledAt: '2026-05-15T18:00:00Z', status: 'scheduled', readinessIssues: [] },
  { id: 'slot-2', renderJobId: 'job-905', platform: 'YouTube Shorts', accountId: 'acct-yt-s', scheduledAt: '2026-05-15T19:30:00Z', status: 'collision', collisionReason: 'Two Shorts scheduled within same 15 minute slot.', readinessIssues: ['Caption review pending'] },
  { id: 'slot-3', renderJobId: 'job-901', platform: 'Instagram', accountId: 'acct-ig-a', scheduledAt: '2026-05-16T09:00:00Z', status: 'ready', readinessIssues: [] },
  { id: 'slot-4', renderJobId: 'job-907', platform: 'TikTok', accountId: 'acct-tt-main', scheduledAt: '2026-05-14T17:45:00Z', status: 'posted', readinessIssues: [] },
];

export const incidents: AlertIncident[] = [
  { id: 'inc-1', type: 'provider', severity: 'critical', title: 'Kilo Motion offline', message: 'High-fidelity jobs cannot start. Fallback to Orion is available.', status: 'active', createdAt: '2026-05-15T12:46:00Z', actionRoute: '/providers' },
  { id: 'inc-2', type: 'cost', severity: 'warning', title: 'Cost per usable video rising', message: 'Nova Frames failure retries pushed myth batch above target.', status: 'active', createdAt: '2026-05-15T13:10:00Z', actionRoute: '/costs' },
  { id: 'inc-3', type: 'moderation', severity: 'warning', title: 'Two items need review', message: 'Blocked brand-safety item prevents publishing readiness.', status: 'acknowledged', createdAt: '2026-05-15T13:42:00Z', actionRoute: '/moderation' },
  { id: 'inc-4', type: 'queue', severity: 'info', title: 'Queue paused for batch 1841', message: 'Operator pause active while fallback route is checked.', status: 'active', createdAt: '2026-05-15T14:02:00Z', actionRoute: '/queue' },
];

export const systemRules: SystemRule[] = [
  { id: 'rule-queue-1', group: 'queue', name: 'Pause on provider outage', description: 'Stop new jobs for a provider after sustained offline status.', enabled: true, value: 'auto-pause', threshold: 3, status: 'valid', updatedAt: '2026-05-15T09:00:00Z' },
  { id: 'rule-retry-1', group: 'retry', name: 'Retry failed scene twice', description: 'Retry scene-level failures before marking a video unrecoverable.', enabled: true, value: '2 retries', threshold: 2, status: 'valid', updatedAt: '2026-05-15T09:12:00Z' },
  { id: 'rule-cost-1', group: 'cost', name: 'Daily burn guardrail', description: 'Warn when daily generation spend approaches the operator limit.', enabled: true, value: '$120/day', threshold: 80, status: 'overridden', updatedAt: '2026-05-15T12:18:00Z' },
  { id: 'rule-mod-1', group: 'moderation', name: 'Block unsafe product use', description: 'Prevent scheduling for generated content with unsafe usage cues.', enabled: true, value: 'strict', threshold: 1, status: 'valid', updatedAt: '2026-05-14T18:30:00Z' },
  { id: 'rule-pub-1', group: 'publishing', name: 'Prevent slot collisions', description: 'Flag two videos from the same account inside a short publish window.', enabled: true, value: '15 minutes', threshold: 15, status: 'invalid', updatedAt: '2026-05-15T13:40:00Z' },
];

export const promptVersions: PromptVersion[] = [
  { id: 'prompt-v7', title: 'Night Market v7 / texture restrained', status: 'current', updatedAt: '2026-05-15T13:05:00Z', sceneCount: 5 },
  { id: 'prompt-v6', title: 'Night Market v6 / saturated rain', status: 'archived', updatedAt: '2026-05-15T11:52:00Z', sceneCount: 5 },
  { id: 'prompt-draft', title: 'Myth Explainers draft / repaired hook', status: 'draft', updatedAt: '2026-05-15T14:10:00Z', sceneCount: 6 },
];

export const scenePrompts: ScenePrompt[] = [
  { id: 'scene-1', title: 'Hook', prompt: 'Open on a compact night market stall, one impossible object moving naturally, vertical crop, no text overlays.', duration: 4, status: 'valid' },
  { id: 'scene-2', title: 'Reveal', prompt: 'Follow the vendor hands preparing a glowing ingredient with realistic reflections and no crowd panic.', duration: 5, status: 'valid' },
  { id: 'scene-3', title: 'Tension', prompt: 'Camera glides past rain puddles; motion must remain slow enough for compression clarity.', duration: 4, status: 'invalid', issue: 'Motion cue conflicts with provider limit.' },
  { id: 'scene-4', title: 'Payoff', prompt: 'End on a close-up transformation suitable for looped short-form replay.', duration: 5, status: 'valid' },
];

export const emptyQueue: RenderJob[] = [];

export const getProvider = (id: string) => providers.find((provider) => provider.id === id);
export const getBatch = (id: string) => batches.find((batch) => batch.id === id);
export const getJob = (id: string) => renderJobs.find((job) => job.id === id);
export const getAccount = (id: string) => accounts.find((account) => account.id === id);
export const jobsForBatch = (batchId: string) => renderJobs.filter((job) => job.batchId === batchId);
