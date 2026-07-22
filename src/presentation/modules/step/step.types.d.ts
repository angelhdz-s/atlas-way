import type { StatusCode } from '@/modules/status/status.types';

type Step = {
  id: string;
  title: string;
  status: Exclude<StatusCode, 'CANCELED'>;
  [key: string]: unknown;
};

type Phase = {
  id: string;
  title: string;
  status: StatusCode;
  steps: Step[];
};

export type WizardSchema = {
  phases: Phase[];
  status: StatusCode;
};

export type StepState = {
  currentStepId: string | null;
  currentPhaseId: string | null;
  history: string[];
};

export enum StepActionType {
  NEXT_STEP = 'NEXT_STEP',
  PREV_STEP = 'PREV_STEP',
  JUMP_TO_PHASE = 'JUMP_TO_PHASE',
  JUMP_TO_STEP = 'JUMP_TO_STEP',
  RESET = 'RESET',
}

type NextStepAction = {
  type: StepActionType.NEXT_STEP;
};

type PreviousStepAction = {
  type: StepActionType.PREV_STEP;
};

type JumpToPhaseAction = {
  type: StepActionType.JUMP_TO_PHASE;
  payload: {
    phaseId: string;
  };
};

type JumpToStepAction = {
  type: StepActionType.JUMP_TO_STEP;
  payload: {
    stepId: string;
  };
};

type ResetAction = {
  type: StepActionType.RESET;
  payload: {
    stepId: string;
  };
};

export type StepAction =
  | NextStepAction
  | PreviousStepAction
  | JumpToPhaseAction
  | JumpToStepAction
  | ResetAction;

export interface FlatStep {
  stepId: string;
  phaseId: string;
}

export interface StepContextValue {
  currentPhaseId: string | null;
  currentStepId: string | null;
  isFirstStep: boolean;
  isLastStep: boolean;
  totalSteps: number;
  currentStepIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  goToPhase: (phaseId: string) => void;
  goToStep: (stepId: string) => void;
  resetSteps: () => void;
}
