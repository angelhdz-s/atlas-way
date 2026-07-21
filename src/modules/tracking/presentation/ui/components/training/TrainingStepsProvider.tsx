'use client';

import type { FullTrainingPlan } from '@/modules/tracking/presentation/tracking.actions';
import type {
  TrainingStage,
  TrainingState,
  TrainingStep,
} from '@/modules/tracking/presentation/ui/contexts/TrainingStepsContext';
import type { TrainingStepsContextType } from '@/modules/tracking/presentation/ui/contexts/TrainingStepsContext';
import type { TrainingSets } from '@/prisma/client';
import { useEffect, useState } from 'react';
import { TrainingStepsContext } from '@/modules/tracking/presentation/ui/contexts/TrainingStepsContext';

export type CurrentStep = Omit<TrainingSets, 'id' | 'createdAt' | 'updatedAt'>;

type Props = {
  children: React.ReactNode;
  targets: FullTrainingPlan[];
};

type Step = Pick<TrainingStepsContextType['currentStep'], 'stage' | 'step'>;

const initializeStages = (targets: FullTrainingPlan[]): TrainingState => {
  const limitStage = targets.length;
  let limitStep: number = 1;
  const stages: TrainingStage[] = targets.map((t, index) => {
    const steps: TrainingStep[] = Array.from({ length: t.sets }, (_, i) => i + 1).map((s, i) => {
      const trainingSet = t.trainingSets[i];
      return {
        title: `Set ${s}`,
        key: `${t.id}-${s}`,
        set: trainingSet?.set ?? s,
        reps: trainingSet?.reps ?? t.reps,
        rir: 0,
        weight: trainingSet?.weight ?? t.weight,
        status: trainingSet ? 'COMPLETED' : 'PENDING',
        ...(trainingSet?.id ? { id: trainingSet.id } : {}),
      };
    });

    if (index === limitStage - 1) limitStep = t.sets;

    return {
      id: t.id,
      stage: index + 1,
      title: t.exercise.name,
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
  const [currentStep, setCurrentStep] = useState<Step>({
    stage: 1,
    step: 1,
  });
  const stepIndex = currentStep.step - 1;
  const stageIndex = currentStep.stage - 1;

  const [trainingState, setTrainingState] = useState<TrainingState>(initializeStages(targets));

  const updateCurrentStage = (
    currentStepValues: TrainingStep,
    stageIndex: number,
    stepIndex: number
  ) => {
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
        ...(currentStepValues.id ? { id: currentStepValues.id } : {}),
      };

      const areStepsComplete = stageCopy.steps.every((s) => s.status === 'COMPLETED');
      stageCopy.status = areStepsComplete ? 'COMPLETED' : 'PENDING';

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
        const { stage } = prevCopy;

        return {
          stage: stage + 1,
          step: 1,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { step, stage } = prevCopy;

      return {
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
        const { stage } = prevCopy;

        return {
          stage: stage - 1,
          step: stageData.steps.length,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { step, stage } = prevCopy;

      return {
        step: step - 1,
        stage,
      };
    });
  };

  useEffect(() => {
    const initialState = initializeStages(targets);
    setTrainingState(initializeStages(targets));
    const targetStatusDictionary: Record<Exclude<TrainingStage['status'], 'ERROR'>, number> = {
      COMPLETED: 0,
      IN_PROGRESS: 0,
      PENDING: 0,
    };

    const inProgressStageIndex = initialState.stages.findIndex((s) => {
      targetStatusDictionary[s.status as Exclude<TrainingStage['status'], 'ERROR'>]++;
      return s.status === 'IN_PROGRESS';
    });

    if (inProgressStageIndex < 0) return;

    const lastSetCompletedIndex = initialState.stages[inProgressStageIndex]?.steps.findLastIndex(
      (s) => s.status === 'COMPLETED'
    );

    if (!lastSetCompletedIndex || lastSetCompletedIndex < 0)
      return setCurrentStep({ stage: inProgressStageIndex + 1, step: 1 });

    return setCurrentStep({
      stage: inProgressStageIndex + 1,
      step: lastSetCompletedIndex + 2,
    });
  }, [targets]);

  return (
    <TrainingStepsContext.Provider
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
      {children}
    </TrainingStepsContext.Provider>
  );
}
