import { StepEngineContext } from '@/presentation/modules/wizard/context/StepEngineContext';
import type { StepEngineContextValue } from '@/presentation/modules/wizard/wizard.steps.types';
import { useContext } from 'react';

export function useStepEngine(): StepEngineContextValue {
  const context = useContext(StepEngineContext);

  if (!context)
    throw new Error('useStepEngine needs to be used inside a StepEngineProvider component');

  return context;
}
