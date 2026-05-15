export type BatchStatus = 'queued' | 'rendering' | 'paused' | 'failed' | 'completed' | 'approved';
export type RenderJobStatus = 'queued' | 'rendering' | 'failed' | 'completed' | 'retrying' | 'approved' | 'rejected';
export type ProviderStatus = 'healthy' | 'degraded' | 'offline' | 'rateLimited';
export type GuardrailStatus = 'normal' | 'warning' | 'critical';
export type ModerationStatus = 'flagged' | 'needsReview' | 'approved' | 'rejected' | 'escalated' | 'blocked';
export type PublishingStatus = 'draft' | 'scheduled' | 'collision' | 'ready' | 'posted' | 'failed';
export type AccountStatus = 'healthy' | 'warning' | 'blocked';
export type IncidentSeverity = 'info' | 'warning' | 'critical';
export type IncidentStatus = 'active' | 'acknowledged' | 'resolved';
export type SystemRuleStatus = 'valid' | 'invalid' | 'overridden';

export interface VideoBatch {
  id: string;
  name: string;
  status: BatchStatus;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  targetPlatform: string;
  accountId: string;
  providerId: string;
  model: string;
  videoCount: number;
  completedCount: number;
  failedCount: number;
  progress: number;
  estimatedCost: number;
  actualCost: number;
  createdAt: string;
  estimatedCompletion: string;
}

export interface RenderJob {
  id: string;
  batchId: string;
  title: string;
  status: RenderJobStatus;
  providerId: string;
  model: string;
  duration: number;
  aspectRatio: string;
  cost: number;
  progress: number;
  qualityScore: number;
  failureReason?: string;
  retryCount: number;
  createdAt: string;
  estimatedCompletion: string;
  sceneCount: number;
}

export interface Provider {
  id: string;
  name: string;
  status: ProviderStatus;
  latencyMs: number;
  failureRate: number;
  queueDepth: number;
  costPerMinute: number;
  supportedModels: string[];
  lastIncidentAt?: string;
  fallbackProviderId?: string;
  quotaRemaining: number;
}

export interface CostRecord {
  id: string;
  date: string;
  providerId: string;
  batchId: string;
  totalCost: number;
  costPerUsableVideo: number;
  budgetLimit: number;
  guardrailStatus: GuardrailStatus;
  renderMinutes: number;
  usableVideoCount: number;
}

export interface ModerationItem {
  id: string;
  renderJobId: string;
  riskType: 'prompt' | 'output' | 'platform' | 'brand';
  severity: 'low' | 'medium' | 'high' | 'blocked';
  status: ModerationStatus;
  reason: string;
  reviewerNote: string;
  createdAt: string;
}

export interface PublishingSlot {
  id: string;
  renderJobId: string;
  platform: string;
  accountId: string;
  scheduledAt: string;
  status: PublishingStatus;
  collisionReason?: string;
  readinessIssues: string[];
}

export interface AccountChannel {
  id: string;
  platform: string;
  handle: string;
  status: AccountStatus;
  dailyCapacity: number;
  scheduledCount: number;
  lastPublishedAt: string;
}

export interface AlertIncident {
  id: string;
  type: 'provider' | 'queue' | 'cost' | 'moderation' | 'publishing';
  severity: IncidentSeverity;
  title: string;
  message: string;
  status: IncidentStatus;
  createdAt: string;
  actionRoute: string;
}

export interface SystemRule {
  id: string;
  group: 'queue' | 'retry' | 'provider' | 'cost' | 'moderation' | 'publishing';
  name: string;
  description: string;
  enabled: boolean;
  value: string;
  threshold?: number;
  status: SystemRuleStatus;
  updatedAt: string;
}

export interface PromptVersion {
  id: string;
  title: string;
  status: 'draft' | 'current' | 'archived';
  updatedAt: string;
  sceneCount: number;
}

export interface ScenePrompt {
  id: string;
  title: string;
  prompt: string;
  duration: number;
  status: 'valid' | 'invalid' | 'locked';
  issue?: string;
}
