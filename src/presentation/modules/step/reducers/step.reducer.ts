import {
  createInitialStepsState,
  getFlatSteps,
} from '@/presentation/modules/step/helpers/step.reducer.helpers';
import {
  StepActionType,
  type StepAction,
  type StepState,
  type WizardSchema,
} from '@/presentation/modules/step/step.types';

/**
 * Manage phases and steps navigation logic
 *
 * @param state Contains the current state
 * @param action Contains action type and payload
 * @param schema Schema of phases and steps data
 * @returns Updated step state
 */
export function stepReducer(state: StepState, action: StepAction, schema: WizardSchema): StepState {
  const flatSteps = getFlatSteps(schema);
  const currentIndex = flatSteps.findIndex((s) => s.stepId === state.currentStepId);

  if (currentIndex < 0) return state;

  switch (action.type) {
    case StepActionType.NEXT_STEP: {
      if (currentIndex >= flatSteps.length - 1) return state;

      const next = flatSteps[currentIndex + 1];
      if (!next) return state;

      return {
        ...state,
        currentPhaseId: next.phaseId,
        currentStepId: next.stepId,
        history: state.currentStepId ? [...state.history, state.currentStepId] : state.history,
      };
    }

    case StepActionType.PREV_STEP: {
      if (currentIndex === 0) return state;

      const prev = flatSteps[currentIndex - 1];
      if (!prev) return state;

      const historyCopy = [...state.history];

      return {
        ...state,
        currentPhaseId: prev.phaseId,
        currentStepId: prev.stepId,
        history: historyCopy.slice(0, -1),
      };
    }

    case StepActionType.JUMP_TO_PHASE: {
      const targetPhase = schema.phases.find((p) => p.id === action.payload.phaseId);
      if (!targetPhase || targetPhase.steps.length === 0) return state;

      const targetStep = targetPhase.steps[0];
      if (!targetStep) return state;

      return {
        ...state,
        currentPhaseId: targetPhase.id,
        currentStepId: targetStep.id,
        history: state.currentStepId ? [...state.history, state.currentStepId] : state.history,
      };
    }

    case StepActionType.JUMP_TO_STEP: {
      const targetStep = flatSteps.find((s) => s.stepId === action.payload.stepId);
      if (!targetStep || targetStep.stepId === state.currentStepId) return state;

      return {
        ...state,
        currentPhaseId: targetStep.phaseId,
        currentStepId: targetStep.stepId,
        history: state.currentStepId ? [...state.history, state.currentStepId] : state.history,
      };
    }

    case StepActionType.RESET: {
      return createInitialStepsState(schema);
    }

    default:
      return state;
  }
}
