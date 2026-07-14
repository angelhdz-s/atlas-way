'use client';

import { useContext } from 'react';
import { SessionTrainingStepsContext } from '@/modules/tracking/presentation/ui/contexts/SessionTrainingStepsContext';

export function useSessionTrainingSteps() {
  const {
    targets,
    stageIndex,
    stepIndex,
    currentStep,
    trainingState,
    nextStep,
    previousStep,
    updateCurrentStage,
  } = useContext(SessionTrainingStepsContext);

  return {
    targets,
    currentStep,
    stepIndex,
    stageIndex,
    trainingState,
    nextStep,
    previousStep,
    updateCurrentStage,
  };
}
