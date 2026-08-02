'use client';

import { useContext } from 'react';
import { StepFormSyncContext } from '@/presentation/modules/wizard/context/StepFormSyncContext';

export function useStepFormSync() {
  const context = useContext(StepFormSyncContext);

  if (!context) {
    throw new Error('useStepFormSync must be used inside of StepFormSyncProvider');
  }

  return context;
}
