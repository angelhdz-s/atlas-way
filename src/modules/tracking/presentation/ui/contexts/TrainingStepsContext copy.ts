import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { StatusCode } from '@/modules/status/status.types';
import { createContext } from 'react';

type StatusCodeWithoutCanceled = Exclude<StatusCode, 'CANCELED'>;

export type TrainingStep = {
  id?: string;
  title: string;
  set: number;
  reps: number;
  rir: number;
  weight: number;
  status: StatusCodeWithoutCanceled | 'ERROR';
};

export type TrainingStage = {
  id: string;
  title: string;
  stage: number;
  status: StatusCodeWithoutCanceled | 'ERROR';
  steps: TrainingStep[];
};

export type TrainingState = {
  lastStep: number;
  length: number;
  stages: TrainingStage[];
};

export type TrainingStepsContextType = {
  targets: ExerciseDTO[];
  stepIndex: number;
  stageIndex: number;
  currentStep: {
    step: number;
    stage: number;
    accumulatedStep: number;
  };
  trainingState: TrainingState;
  nextStep: () => void;
  previousStep: () => void;
  updateCurrentStage: (currentStepValues: TrainingStep, error?: boolean) => void;
};

export const TrainingStepsContext = createContext<TrainingStepsContextType>({
  targets: [],
  stepIndex: 0,
  stageIndex: 0,
  currentStep: {
    accumulatedStep: 1,
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
  updateCurrentStage: () => {},
});
