import type { StatusCode } from '@/modules/status/status.types';

export type PhaseStatus = StatusCode;

export interface PhaseEntries<FormStepValues> {
  id: string;
  title: string;
  steps: number;
  status?: PhaseStatus;
  stepsData?: FormStepValues[];
}

export interface Phase {
  id: string;
  order: number;
  status: PhaseStatus;
}


export type StepStatus = StatusCode;

export interface FlatStep {
  id: string;
  status: StepStatus;

  // Step position metadata
  globalIndex: number;
  stepIndexInPhase: number;
  isFirstInPhase: boolean;
  isLastInPhase: boolean;

  // Phase metadata
  phase: Phase;
}
export interface NormalizeDomain<FormStepValues> {
  flatSteps: FlatStep[];
  // Initial values for react hook form organized by phase id
  defaultValues: Record<string, FormStepValues>;
}
