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

  const updateCurrentStep = (
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

  const getNextAvailableStageIndex = () => {
    const lastStageIndex = trainingState.length - 1;
    if (lastStageIndex === stageIndex) {
      console.log('stages less than 1');
      return;
    }
    const stages = lastStageIndex - stageIndex;

    for (let i = 1; i <= stages; i++) {
      const currentStage = trainingState.stages[i + stageIndex];
      if (!currentStage) {
        console.log('currentStage not found');
        return;
      }
      console.log('Current steps length', currentStage.steps.length);
      if (currentStage.steps.length > 0) {
        return i + stageIndex;
      }
    }
  };

  const getPreviousAvailableStageIndex = () => {
    if (stageIndex === 0) return;

    for (let i = stageIndex - 1; i >= 0; i--) {
      const currentStage = trainingState.stages[i];
      if (!currentStage) return;
      if (currentStage.steps.length > 0) return i;
    }
  };

  const nextStep = async () => {
    if (currentStep.stage === trainingState.length && currentStep.step === trainingState.lastStep)
      return;

    const stageData = trainingState.stages[stageIndex];
    if (!stageData) return;

    if (currentStep.step + 1 > stageData.steps.length) {
      const nextStageIndex = getNextAvailableStageIndex();
      if (nextStageIndex === undefined) return console.log('No stageIndex available');

      return setCurrentStep({
        stage: nextStageIndex + 1,
        step: 1,
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
      const previousStageAvailableIndex = getPreviousAvailableStageIndex();
      if (previousStageAvailableIndex === undefined) return;
      const stageData = trainingState.stages[previousStageAvailableIndex];
      if (!stageData) return;
      return setCurrentStep({
        stage: previousStageAvailableIndex + 1,
        step: stageData.steps.length,
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

  const updateStage = (stage: TrainingStage, stageIndex: number) => {
    const targetStage = trainingState.stages[stageIndex];
    if (!targetStage) return;
    setTrainingState((prev) => {
      const prevCopy = { ...prev };
      const targetStage = prevCopy.stages[stageIndex];
      if (!targetStage) return prev;
      prevCopy.stages[stageIndex] = stage;
      if (stageIndex + 1 === prev.stages.length) {
        prevCopy.lastStep = prevCopy.stages[stageIndex].steps.length;
      }
      return prevCopy;
    });
  };

  const finishStage = (stageIndex: number) => {
    const targetStage = trainingState.stages[stageIndex];
    const notValidStatus: TrainingStage['status'][] = ['COMPLETED', 'CANCELED'];
    if (!targetStage || notValidStatus.includes(targetStage.status)) return;

    updateStage(
      {
        ...targetStage,
        status: 'CANCELED',
        steps: targetStage.steps.filter((s) => s.status === 'COMPLETED'),
      },
      stageIndex
    );
  };

  useEffect(() => {
    const initialState = initializeStages(targets);
    setTrainingState(initializeStages(targets));
    const targetStatusDictionary: Record<Exclude<TrainingStage['status'], 'ERROR'>, number> = {
      COMPLETED: 0,
      IN_PROGRESS: 0,
      PENDING: 0,
      CANCELED: 0,
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
        updateCurrentStep,
        updateStage,
        finishStage,
      }}
    >
      {children}
    </TrainingStepsContext.Provider>
  );
}
