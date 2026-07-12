'use client';

import { useContext, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type {
  SessionTrainingForm,
  SessionTrainingSetForm,
} from '@/modules/tracking/presentation/tracking.presentation.types';
import { SessionTrainingContext } from '@/modules/tracking/presentation/ui/contexts/SessionTrainingContext';

export function useSessionTraining() {
  const {
    targets,
    stageIndex,
    stepIndex,
    currentStep,
    trainingState,
    nextStep,
    previousStep,
    updateCurrentStage,
  } = useContext(SessionTrainingContext);

  const methods = useFormContext<SessionTrainingForm>();

  const {
    control,
    getValues,
    register,
    trigger,
    formState: { errors, isReady },
    handleSubmit,
  } = methods;

  const { fields, replace, update } = useFieldArray({
    control,
    name: 'exercises',
  });

  const updateFields = (values: SessionTrainingSetForm) => {
    const stage = fields[stageIndex];
    if (!stage) return;
    const set = stage.sets[stepIndex];
    if (!set) return;
    const setsCopy = [...stage.sets];
    setsCopy[stepIndex] = values;

    const areStepsCompleted = setsCopy.every((s) => s.status === 'complete');
    update(stageIndex, {
      ...stage,
      sets: setsCopy,
      status: areStepsCompleted ? 'complete' : 'pending',
    });
  };

  const goNextStep = async () => {
    const isValid = await trigger(`exercises.${stageIndex}.sets.${stepIndex}`);

    const values = getValues();
    const step = values.exercises[stageIndex]?.sets[stepIndex];
    if (!step) return;
    updateCurrentStage(
      {
        ...step,
        status: isValid ? 'complete' : 'pending',
      },
      !isValid
    );

    updateFields({ ...step, status: isValid ? 'complete' : 'pending' });
    if (!isValid) return;

    nextStep();
  };

  const goPreviousStep = () => {
    previousStep();
  };

  useEffect(() => {
    replace(
      targets.map((t) => {
        const sets: SessionTrainingSetForm[] = Array.from({ length: t.sets }, (_, i) => i + 1).map(
          (s) => ({
            id: `${t.id}-${s}`,
            set: s,
            reps: t.reps,
            rir: 0,
            weight: t.weight,
            status: 'pending',
          })
        );

        return {
          exerciseId: t.id,
          status: 'pending',
          sets,
        };
      })
    );
  }, [targets, replace]);

  return {
    methods,
    targets,
    currentStep,
    stepIndex,
    stageIndex,
    trainingState,
    goPreviousStep,
    goNextStep,
    register,
    handleSubmit,
    isReady,
    errors,
  };
}
