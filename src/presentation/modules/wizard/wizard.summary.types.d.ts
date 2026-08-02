import type { StatusCode } from '@/modules/status/status.types';

export type StepStatus = StatusCode;
export type PhaseStatus = StatusCode;

export interface StepSummary<FormValues> {
  stepId: string;
  title: string;
  status: StepStatus;
  isCurrent: boolean;
  dataSnapshot?: Record<string, FormValues>; // Snapshot from from values
}

export interface PhaseSummary<FormValues> {
  phaseId: string;
  title: string;
  status: PhaseStatus;
  isCancelled: boolean;
  steps: StepSummary<FormValues>[];
  completedCount: number;
  totalCount: number;
}

export interface WizardSummary<FormValues> {
  phases: PhaseSummary<FormValues>[];
  overallProgress: number; // percentage 0-100%
  totalSteps: number;
  completedSteps: number;
}
