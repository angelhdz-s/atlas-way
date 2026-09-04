'use client';

import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import {
  ExerciseTargetsContext,
  type ExerciseTargetsStep,
} from '@/modules/tracking/presentation/ui/contexts/ExerciseTargetsContext';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  exercises: ExerciseDTO[];
};

export function ExerciseTargetsProvider({ children, exercises }: Props) {
  const [step, setStep] = useState<number>(1);
  const stepIndex = step - 1;

  const [movement, setMovement] = useState<number>(0);
  const [steps, setSteps] = useState<ExerciseTargetsStep[]>(
    exercises.map((e, i) => ({
      id: e.id,
      step: i + 1,
      title: e.name,
      sets: e.sets,
      reps: e.reps,
      weight: e.weight,
      status: 'PENDING',
    }))
  );

  const completeCurrentStep = () => {
    if (steps[stepIndex]?.status === 'COMPLETED') return;
    setSteps((prevSteps) => {
      const prevStepsCopy = [...prevSteps];
      if (!prevStepsCopy[stepIndex]) return prevSteps;
      prevStepsCopy[stepIndex].status = 'COMPLETED';
      return [...prevStepsCopy];
    });
  };

  const errorCurrentStep = () => {
    if (steps[stepIndex]?.status === 'ERROR') return;
    setSteps((prevSteps) => {
      const prevStepsCopy = [...prevSteps];
      if (!prevStepsCopy[stepIndex]) return prevSteps;
      prevStepsCopy[stepIndex].status = 'ERROR';
      return [...prevStepsCopy];
    });
  };

  const goNextStep = async () => {
    if (step + 1 > steps.length) return;
    setStep((step) => step + 1);
    if (movement !== 0) setMovement(0);
  };

  const goPreviousStep = async () => {
    if (step - 1 < 1) return;
    setStep((step) => step - 1);
    if (movement !== -1) setMovement(-1);
  };

  const goToStep = async (targetStep: number) => {
    if (targetStep === step) return;
    if (targetStep < 1 || targetStep > steps.length) return;

    const stepDiff = step - targetStep;
    if (stepDiff === -1) return goNextStep();
    if (stepDiff === 1) return goPreviousStep();

    const stepInfo = steps[targetStep - 1];
    if (!stepInfo) return;
    if (steps[targetStep - 2]?.status === 'PENDING' && stepInfo.status === 'PENDING') return;
    setStep(targetStep);
  };

  const updateStep = (
    index: number,
    newStepData: Omit<ExerciseTargetsStep, 'id' | 'title' | 'step'>
  ) => {
    if (index < 0 || index > steps.length - 1) return;
    const stepData = steps[index];
    if (!stepData) return;
    setSteps((prevSteps) => {
      const stepsCopy = [...prevSteps];
      const targetStep = stepsCopy[index];
      if (targetStep)
        stepsCopy[index] = {
          ...targetStep,
          ...newStepData,
        };
      return [...stepsCopy];
    });
  };

  useEffect(() => {
    setSteps(
      exercises.map((e, i) => ({
        id: e.id,
        step: i + 1,
        title: e.name,
        sets: e.sets,
        reps: e.reps,
        weight: e.weight,
        status: 'PENDING',
      }))
    );
  }, [exercises]);

  return (
    <ExerciseTargetsContext.Provider
      value={{
        steps,
        step,
        stepIndex,
        movement,
        updateStep,
        goNextStep,
        goPreviousStep,
        goToStep,
        completeCurrentStep,
        errorCurrentStep,
      }}
    >
      {children}
    </ExerciseTargetsContext.Provider>
  );
}
