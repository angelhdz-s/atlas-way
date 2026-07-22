import { StepContext } from '@/presentation/modules/step/context/StepContext';
import type { StepContextValue } from '@/presentation/modules/step/step.types';
import { useContext } from 'react';

export function useStepEngine(): StepContextValue {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error('useStepEngine must be used inside of <StepProvider> component');
  }

  return context;
}
