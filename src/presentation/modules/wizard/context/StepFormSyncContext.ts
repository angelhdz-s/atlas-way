import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';
import { createContext } from 'react';

export type StepFormSyncValue = {
  currentStep: FlatStep;
  currentStepPath: string;
  isSaving: boolean;
  saveCurrentStep: () => void;
  handleNext: () => void;
  handlePrev: () => void;
};

export const StepFormSyncContext = createContext<StepFormSyncValue | null>(null);
