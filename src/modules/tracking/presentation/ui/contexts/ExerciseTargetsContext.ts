import type { StatusCode } from '@/modules/status/status.types';
import { createContext } from 'react';

export type ExerciseTargetsStep = {
  id: string;
  title: string;
  step: number;
  status: Exclude<StatusCode, 'IN_PROGRESS' | 'CANCELED'> | 'ERROR';
  sets: number;
  reps: number;
  weight: number;
};

type ExerciseTargetsContextType = {
  steps: ExerciseTargetsStep[];
  step: number;
  stepIndex: number;
  movement: number;
  updateStep: (i: number, stepData: Omit<ExerciseTargetsStep, 'id' | 'step' | 'title'>) => void;
  goNextStep: () => void;
  goPreviousStep: () => void;
  goToStep: (targetStep: number) => void;
  completeCurrentStep: () => void;
  errorCurrentStep: () => void;
};

export const ExerciseTargetsContext = createContext<ExerciseTargetsContextType>({
  step: 1,
  stepIndex: 0,
  steps: [],
  movement: 0,
  updateStep: () => {},
  goNextStep: () => {},
  goPreviousStep: () => {},
  goToStep: () => {},
  completeCurrentStep: () => {},
  errorCurrentStep: () => {},
});
