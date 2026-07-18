'use client';

import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import { trainingSetSchema } from '@/modules/tracking/presentation/schemas/training.schema';
import {
  SessionTrainingStepsContext,
  type SessionTrainingStepsContextType,
  type TrainingStage,
  type TrainingState,
  type TrainingStep,
} from '@/modules/tracking/presentation/ui/contexts/SessionTrainingStepsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  targets: ExerciseDTO[];
};

type Step = Pick<
  SessionTrainingStepsContextType['currentStep'],
  'stage' | 'step' | 'accumulatedStep'
>;

const initializeStages = (targets: ExerciseDTO[]): TrainingState => {
  const limitStage = targets.length;
  let limitStep: number = 1;
  const stages: TrainingStage[] = targets.map((t, index) => {
    const steps: TrainingStep[] = Array.from({ length: t.sets }, (_, i) => i + 1).map((s) => ({
      title: `Set ${s}`,
      id: `${t.id}-${s}`,
      set: s,
      reps: t.reps,
      rir: 0,
      weight: t.weight,
      status: 'PENDING',
    }));

    if (index === limitStage - 1) limitStep = t.sets;

    return {
      id: t.id,
      stage: index + 1,
      title: t.name,
      status: 'PENDING',
      steps,
    };
  });

  return {
    lastStep: limitStep,
    length: limitStage,
    stages,
  };
};

export function TrainingStepsProvider({ children, targets }: Props) {
  const methods = useForm({
    resolver: zodResolver(trainingSetSchema),
    shouldUnregister: false,
  });

  const [currentStep, setCurrentStep] = useState<Step>({
    stage: 1,
    step: 1,
    accumulatedStep: 1,
  });
  const stepIndex = currentStep.step - 1;
  const stageIndex = currentStep.stage - 1;

  const [trainingState, setTrainingState] = useState<TrainingState>(initializeStages(targets));

  const updateCurrentStage = (currentStepValues: TrainingStep, error = false) => {
    const stage = trainingState.stages[stageIndex];
    if (!stage) return;
    const step = stage.steps[stepIndex];
    if (!step) return;

    setTrainingState((prev) => {
      const stateCopy = { ...prev };
      const stageCopy = stateCopy.stages[stageIndex];
      if (!stageCopy) return prev;
      const stepCopy = stageCopy.steps[stepIndex];
      if (!stepCopy) return prev;
      stageCopy.steps[stepIndex] = {
        ...stepCopy,
        reps: currentStepValues.reps ?? stepCopy.reps,
        set: currentStepValues.set ?? stepCopy.set,
        weight: currentStepValues.weight ?? stepCopy.weight,
        rir: currentStepValues.rir ?? stepCopy.rir,
        status: currentStepValues.status,
      };

      if (error) stageCopy.status = 'ERROR';
      else {
        const areStepsComplete = stageCopy.steps.every((s) => s.id !== undefined);
        stageCopy.status = areStepsComplete ? 'COMPLETED' : 'PENDING';
      }

      stateCopy.stages[stageIndex] = stageCopy;
      return stateCopy;
    });
  };

  const nextStep = async () => {
    if (currentStep.stage === trainingState.length && currentStep.step === trainingState.lastStep)
      return;

    const stageData = trainingState.stages[stageIndex];
    if (!stageData) return;

    if (currentStep.step + 1 > stageData.steps.length) {
      return setCurrentStep((prev) => {
        const prevCopy = { ...prev };
        const { accumulatedStep, stage } = prevCopy;

        return {
          accumulatedStep: accumulatedStep + 1,
          stage: stage + 1,
          step: 1,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { accumulatedStep, step, stage } = prevCopy;

      return {
        accumulatedStep: accumulatedStep + 1,
        step: step + 1,
        stage,
      };
    });
  };

  const previousStep = () => {
    if (currentStep.stage === 1 && currentStep.step === 1) return;

    if (currentStep.step - 1 < 1) {
      const stageData = trainingState.stages[stageIndex - 1];
      if (!stageData) return;
      return setCurrentStep((prev) => {
        const prevCopy = { ...prev };
        const { accumulatedStep, stage } = prevCopy;

        return {
          accumulatedStep: accumulatedStep - 1,
          stage: stage - 1,
          step: stageData.steps.length,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { accumulatedStep, step, stage } = prevCopy;

      return {
        accumulatedStep: accumulatedStep - 1,
        step: step - 1,
        stage,
      };
    });
  };

  useEffect(() => {
    setTrainingState(initializeStages(targets));
  }, [targets]);

  return (
    <SessionTrainingStepsContext.Provider
      value={{
        targets,
        currentStep: {
          ...currentStep,
        },
        stageIndex,
        stepIndex,
        trainingState,
        nextStep,
        previousStep,
        updateCurrentStage,
      }}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </SessionTrainingStepsContext.Provider>
  );
}
