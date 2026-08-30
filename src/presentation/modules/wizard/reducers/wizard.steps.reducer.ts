import {
  StepEngineActionType,
  type StepEngineAction,
  type StepEngineState,
} from '@/presentation/modules/wizard/wizard.steps.types';

function findNextValidIndex(state: StepEngineState, startIndex: number, direction: 1 | -1): number {
  let currentIndex = startIndex + direction;
  while (currentIndex >= 0 && currentIndex < state.flatSteps.length) {
    const step = state.flatSteps[currentIndex];
    if (!step) return state.currentIndex;
    currentIndex += direction;
  }
  return state.currentIndex;
}

export function stepEngineReducer(
  state: StepEngineState,
  action: StepEngineAction
): StepEngineState {
  switch (action.type) {
    case StepEngineActionType.NEXT_STEP: {
      const nextIndex = findNextValidIndex(state, state.currentIndex, 1);
      return { ...state, currentIndex: nextIndex };
    }
    case StepEngineActionType.PREV_STEP: {
      const prevIndex = findNextValidIndex(state, state.currentIndex, -1);
      return { ...state, currentIndex: prevIndex };
    }
    case StepEngineActionType.JUMP_TO_PHASE: {
      const phaseStepIndex = state.flatSteps.findIndex(
        (s) => s.phase.id === action.payload.phaseId
      );
      if (phaseStepIndex === -1) return state;
      return { ...state, currentIndex: phaseStepIndex };
    }
    case StepEngineActionType.JUMP_TO_STEP: {
      const stepIndex = state.flatSteps.findIndex((s) => s.id === action.payload.stepId);
      if (stepIndex === -1) return state;
      return { ...state, currentIndex: stepIndex };
    }
    case StepEngineActionType.TOGGLE_CANCEL_PHASE: {
      const { phaseId } = action.payload;
      const isCurrentlyCancelled = state.cancelledPhaseIds.has(phaseId);
      const updatedCancelled: StepEngineState['cancelledPhaseIds'] = new Set(
        state.cancelledPhaseIds
      );

      if (isCurrentlyCancelled) {
        updatedCancelled.delete(phaseId);
        return {
          ...state,
          cancelledPhaseIds: updatedCancelled,
        };
      }

      updatedCancelled.add(phaseId);

      return {
        ...state,
        cancelledPhaseIds: updatedCancelled,
      };
    }
    case StepEngineActionType.RESET_ENGINE: {
      // ToDo: receive by prop cancelledPhaseIds as flatSteps
      const initialCancelled: StepEngineState['cancelledPhaseIds'] = new Set<string>();
      return {
        flatSteps: action.payload.flatSteps,
        currentIndex: 0,
        cancelledPhaseIds: initialCancelled,
      };
    }

    default: {
      return state;
    }
  }
}
