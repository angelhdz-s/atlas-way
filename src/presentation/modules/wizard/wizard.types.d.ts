import type { StatusCode } from '@/modules/status/status.types';

export type PhaseStatus = StatusCode;

export interface StepEnginePhaseEntries<FormStepValues> {
  id: string;
  steps: number;
  status?: PhaseStatus;
  stepsData?: FormStepValues[];
}

export interface WizardSummaryPhaseEntries<FormStepValues> {
  id: string;
  title: string;
  description: string | null;
  steps: number;
  status?: PhaseStatus;
  stepsData?: FormStepValues[];
}

export interface Phase {
  id: string;
  order: number;
}

export interface PhaseWithText extends Phase {
  title: string;
  description: string | null;
  status: PhaseStatus;
}

export type StepStatus = StatusCode;

export interface FlatStep {
  id: string;

  // Step position metadata
  globalIndex: number;
  stepIndexInPhase: number;
  isFirstInPhase: boolean;
  isLastInPhase: boolean;

  // Phase metadata
  phase: Phase;
}

export interface FlatStepWithText extends FlatStep {
  title: string;
  phase: PhaseWithText;
  status: StepStatus;
}
export interface NormalizeDomain<FormStepValues> {
  flatSteps: FlatStep[];
  // Initial values for react hook form organized by phase id
  defaultValues: Record<string, FormStepValues>;
}

export type WizardForm<FormValues> = Record<string, FormValues>;
