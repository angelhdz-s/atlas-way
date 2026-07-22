import type { StepContextValue } from '@/presentation/modules/step/step.types';
import { createContext } from 'react';

export const StepContext = createContext<StepContextValue>({
  currentPhaseId: null,
  currentStepId: null,
  currentStepIndex: 0,
  isFirstStep: true,
  isLastStep: false,
  totalSteps: 0,
  goToNext: () => {},
  goToPrev: () => {},
  goToPhase: () => {},
  goToStep: () => {},
  resetSteps: () => {},
});
