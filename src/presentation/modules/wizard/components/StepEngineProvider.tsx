'use client';

import { useMemo, useReducer } from 'react';
import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';
import type {
  StepEngineContextValue,
  StepEngineState,
} from '@/presentation/modules/wizard/wizard.steps.types';
import { StepEngineActionType } from '@/presentation/modules/wizard/wizard.steps.types';
import { StepEngineContext } from '@/presentation/modules/wizard/context/StepEngineContext';
import { stepEngineReducer } from '@/presentation/modules/wizard/reducers/wizard.steps.reducer';

type Props = {
  children: React.ReactNode;
  flatSteps: FlatStep[];
};

export function StepEngineProvider({ children, flatSteps }: Props) {
  const initialCancelled = useMemo(() => {
    const map: StepEngineState['cancelledPhaseIds'] = {};
    flatSteps.forEach((step) => {
      if (step.status === 'CANCELED') map[step.id] = true;
    });
    return map;
  }, [flatSteps]);

  const [state, dispatch] = useReducer(stepEngineReducer, {
    flatSteps,
    currentIndex: 0,
    cancelledPhaseIds: initialCancelled,
  });

  const currentStep = state.flatSteps[state.currentIndex] as FlatStep;
  const totalSteps = state.flatSteps.length;
  const isFirstStep = state.currentIndex === 0;
  const isLastStep = state.currentIndex === totalSteps - 1;

  const value: StepEngineContextValue = useMemo(
    () => ({
      currentStep,
      isFirstStep,
      isLastStep,
      totalSteps,
      cancelledPhaseIds: state.cancelledPhaseIds,
      currentIndex: state.currentIndex,
      nextStep: () => dispatch({ type: StepEngineActionType.NEXT_STEP }),
      prevStep: () => dispatch({ type: StepEngineActionType.PREV_STEP }),
      goToStep: (stepId: string) =>
        dispatch({ type: StepEngineActionType.JUMP_TO_STEP, payload: { stepId } }),
      goToPhase: (phaseId: string) =>
        dispatch({ type: StepEngineActionType.JUMP_TO_PHASE, payload: { phaseId } }),
      toggleCancelPhase: (phaseId: string) =>
        dispatch({ type: StepEngineActionType.TOGGLE_CANCEL_PHASE, payload: { phaseId } }),
    }),
    [state.currentIndex, state.cancelledPhaseIds, currentStep, isFirstStep, isLastStep, totalSteps]
  );

  return <StepEngineContext.Provider value={value}>{children}</StepEngineContext.Provider>;
}
