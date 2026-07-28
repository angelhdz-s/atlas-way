'use client';

import { TrainingStepsContext } from '@/modules/tracking/presentation/ui/contexts/TrainingStepsContext';
import { useContext } from 'react';

export function useTrainingSteps() {
  const {
    targets,
    stageIndex,
    stepIndex,
    currentStep,
    trainingState,
    nextStep,
    previousStep,
    updateCurrentStep,
    updateStage,
    finishStage,
  } = useContext(TrainingStepsContext);

  return {
    targets,
    currentStep,
    stepIndex,
    stageIndex,
    trainingState,
    nextStep,
    previousStep,
    updateCurrentStep,
    updateStage,
    finishStage,
  };
}
