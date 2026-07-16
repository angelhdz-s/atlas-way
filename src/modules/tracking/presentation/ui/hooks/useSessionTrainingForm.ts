import type {
  SessionTrainingForm,
  SessionTrainingSetForm,
} from '@/modules/tracking/presentation/tracking.presentation.types';
import { useSessionTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingSteps';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function useSessionTrainingForm() {
  const { targets, stageIndex, stepIndex, nextStep, previousStep, updateCurrentStage } =
    useSessionTrainingSteps();

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

    const areStepsCompleted = setsCopy.every((s) => s.status === 'COMPLETED');
    update(stageIndex, {
      ...stage,
      sets: setsCopy,
      status: areStepsCompleted ? 'COMPLETED' : 'PENDING',
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
        status: isValid ? 'COMPLETED' : 'PENDING',
      },
      !isValid
    );

    updateFields({ ...step, status: isValid ? 'COMPLETED' : 'PENDING' });
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
            status: 'PENDING',
          })
        );

        return {
          exerciseId: t.id,
          status: 'PENDING',
          sets,
        };
      })
    );
  }, [targets, replace]);

  return {
    goPreviousStep,
    goNextStep,
    register,
    handleSubmit,
    isReady,
    errors,
  };
}
