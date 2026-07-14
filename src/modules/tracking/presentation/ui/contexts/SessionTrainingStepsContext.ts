import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { SessionTrainingSetForm } from '@/modules/tracking/presentation/tracking.presentation.types';
import { createContext } from 'react';

export type TrainingStep = {
  id: string;
  title: string;
  set: number;
  reps: number;
  rir: number;
  weight: number;
  status: 'pending' | 'complete' | 'error' | 'cancel';
};

export type TrainingStage = {
  id: string;
  title: string;
  stage: number;
  status: 'pending' | 'complete' | 'cancel' | 'error';
  steps: TrainingStep[];
};

export type TrainingState = {
  lastStep: number;
  length: number;
  stages: TrainingStage[];
};

export type SessionTrainingStepsContextType = {
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
  updateCurrentStage: (currentStepValues: SessionTrainingSetForm, error?: boolean) => void;
};

export const SessionTrainingStepsContext = createContext<SessionTrainingStepsContextType>({
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
