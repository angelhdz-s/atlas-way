import type { TrainingSetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';
import { useFormContext } from 'react-hook-form';

export function useTrainingForm() {
  const { nextStep, previousStep } = useTrainingSteps();

  const methods = useFormContext<TrainingSetForm>();

  const {
    register,
    formState: { errors, isReady },
    handleSubmit,
  } = methods;

  const goNextStep = async () => {
    nextStep();
  };

  const goPreviousStep = () => {
    previousStep();
  };

  return {
    goPreviousStep,
    goNextStep,
    register,
    handleSubmit,
    isReady,
    errors,
  };
}
