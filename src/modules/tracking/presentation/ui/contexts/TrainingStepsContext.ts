import type { StatusCode } from '@/modules/status/status.types';
import type { FullTrainingPlan } from '@/modules/tracking/presentation/tracking.actions';
import { createContext } from 'react';

export type TrainingStep = {
  id?: string;
  key: string;
  title: string;
  set: number;
  reps: number;
  rir: number;
  weight: number;
  status: StatusCode | 'ERROR';
};

export type TrainingStage = {
  id: string;
  title: string;
  stage: number;
  status: StatusCode | 'ERROR';
  steps: TrainingStep[];
};

export type TrainingState = {
  lastStep: number;
  length: number;
  stages: TrainingStage[];
};

export type TrainingStepsContextType = {
  targets: FullTrainingPlan[];
  stepIndex: number;
  stageIndex: number;
  currentStep: {
    step: number;
    stage: number;
  };
  trainingState: TrainingState;
  nextStep: () => void;
  previousStep: () => void;
  updateCurrentStep: (step: TrainingStep, stageIndex: number, stepIndex: number) => void;
  updateStage: (stage: TrainingStage, stageIndex: number) => void;
  finishStage: (stageIndex: number) => void;
};

export const TrainingStepsContext = createContext<TrainingStepsContextType>({
  targets: [],
  stepIndex: 0,
  stageIndex: 0,
  currentStep: {
    stage: 1,
    step: 1,
  },
  trainingState: {
    length: 1,
    lastStep: 1,
    stages: [],
  },
  nextStep: () => {},
  previousStep: () => {},
  updateCurrentStep: () => {},
  updateStage: () => {},
  finishStage: () => {},
});
