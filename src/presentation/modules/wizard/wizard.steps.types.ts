import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';

export interface StepEngineState {
  flatSteps: FlatStep[];
  currentIndex: number;
  cancelledPhaseIds: Set<string>;
}

export enum StepEngineActionType {
  NEXT_STEP = 'NEXT_STEP',
  PREV_STEP = 'PREV_STEP',
  JUMP_TO_STEP = 'JUMP_TO_STEP',
  JUMP_TO_PHASE = 'JUMP_TO_PHASE',
  RESET_ENGINE = 'RESET_ENGINE',
  TOGGLE_CANCEL_PHASE = 'TOGGLE_CANCEL_PHASE',
}

export type StepEngineAction =
  | {
      type: StepEngineActionType.NEXT_STEP;
    }
  | {
      type: StepEngineActionType.PREV_STEP;
    }
  | {
      type: StepEngineActionType.JUMP_TO_PHASE;
      payload: { phaseId: string };
    }
  | {
      type: StepEngineActionType.JUMP_TO_STEP;
      payload: { stepId: string };
    }
  | {
      type: StepEngineActionType.TOGGLE_CANCEL_PHASE;
      payload: { phaseId: string };
    }
  | {
      type: StepEngineActionType.RESET_ENGINE;
      payload: { flatSteps: FlatStep[] };
    };

export interface StepEngineContextValue {
  currentStep: FlatStep;
  currentIndex: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  cancelledPhaseIds: Set<string>;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (stepId: string) => void;
  toggleCancelPhase: (phaseId: string) => void;
}
