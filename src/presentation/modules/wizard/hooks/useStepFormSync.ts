import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

type SaveStepAction = (data: {
  phaseId: string;
  stepId: string;
  stepData: Record<string, any>;
}) => Promise<ActionResponseProps<true>>;

export function useStepFormSync(saveStepAction: SaveStepAction) {
  const { currentStep, nextStep, prevStep } = useStepEngine();
  const { trigger, getValues } = useFormContext();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const { addToast } = useToast();

  const currentStepPath = `stepsData.${currentStep.stepId}`;

  const saveCurrentStep = async (): Promise<boolean> => {
    const isStepValid = await trigger(currentStepPath);
    if (!isStepValid) return false;
    setIsSaving(true);

    try {
      const formData = getValues(currentStepPath);

      const response = await saveStepAction({
        phaseId: currentStep.phaseId,
        stepId: currentStep.stepId,
        stepData: formData,
      });

      if (!response.success) {
        addToast('Error saving data', {
          type: 'error',
        });
        return false;
      }
      return true;
    } catch (e) {
      addToast('Unknown error', {
        type: 'error',
      });
      console.log(e);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleNext = async () => {
    const savedSuccessfully = await saveCurrentStep();
    if (savedSuccessfully) nextStep();
  };

  return {
    currentStep,
    currentStepPath,
    isSaving,
    saveCurrentStep,
    handleNext,
    handlePrev: prevStep,
  };
}
