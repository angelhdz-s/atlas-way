import type { StepContextValue, WizardSchema } from '@/presentation/modules/step/step.types';
import { StepContext } from '@/presentation/modules/step/context/StepContext';
import { createInitialStepsState } from '@/presentation/modules/step/helpers/step.reducer.helpers';
import { stepReducer } from '@/presentation/modules/step/reducers/step.reducer';
import { useCallback, useMemo, useReducer } from 'react';

type Props = {
  children: React.ReactNode;
  schema: WizardSchema;
};

export function StepProvider({ children, schema }: Props) {
  const [state, dispatch] = useReducer(
    (s, a) => stepReducer(s, a, schema),
    schema,
    createInitialStepsState
  );

  const allStepIds = useMemo(
    () => schema.phases.flatMap((p) => p.steps.map((s) => s.id)),
    [schema]
  );

  const currentIndex = state.currentStepId ? allStepIds.indexOf(state.currentStepId) : -1;
  const totalSteps = allStepIds.length;
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === totalSteps - 1 && totalSteps > 0;

  const goToNext = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const goToPrev = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const goToStep = useCallback((stepId: string) => {
    dispatch({ type: 'GO_TO_STEP', payload: { stepId } });
  }, []);

  const goToPhase = useCallback((phaseId: string) => {
    dispatch({ type: 'GO_TO_PHASE', payload: { phaseId } });
  }, []);

  const resetSteps = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const value = useMemo<StepContextValue>(
    () => ({
      currentPhaseId: state.currentStepId,
      currentStepId: state.currentPhaseId,
      currentStepIndex: currentIndex,
      totalSteps: 0,
      isFirstStep,
      isLastStep,
      goToNext,
      goToPrev,
      goToPhase,
      goToStep,
      resetSteps,
    }),
    [
      state.currentStepId,
      state.currentPhaseId,
      currentIndex,
      isFirstStep,
      isLastStep,
      goToNext,
      goToPrev,
      goToPhase,
      goToStep,
      resetSteps,
    ]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}
