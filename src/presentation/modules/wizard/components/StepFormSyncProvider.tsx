'use client';

import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import {
  StepFormSyncContext,
  type StepFormSyncValue,
} from '@/presentation/modules/wizard/context/StepFormSyncContext';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import { useCallback, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

type SaveStepAction = (data: {
  phaseId: string;
  stepId: string;
  stepData: Record<string, any>;
}) => Promise<ActionResponseProps<true>>;

type Props = {
  children: React.ReactNode;
  saveStepAction: SaveStepAction;
};

export function StepFormSyncProvider({ children, saveStepAction }: Props) {
  const { currentStep, nextStep, prevStep } = useStepEngine();
  const { trigger, getValues } = useFormContext();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const { addToast } = useToast();

  const currentStepPath = `${currentStep.stepId}`;

  const saveCurrentStep = useCallback(async (): Promise<boolean> => {
    const isStepValid = await trigger(currentStepPath);
    if (!isStepValid) return false;
    setIsSaving(true);
    console.log('Saving');

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
      console.log('Ended');
    }
  }, [addToast, currentStep, currentStepPath, getValues, saveStepAction, trigger]);

  const handleNext = useCallback(async () => {
    const savedSuccessfully = await saveCurrentStep();
    if (savedSuccessfully) nextStep();
  }, [nextStep, saveCurrentStep]);

  const value: StepFormSyncValue = useMemo(
    () => ({
      currentStep,
      currentStepPath,
      handleNext,
      handlePrev: prevStep,
      isSaving,
      saveCurrentStep,
    }),
    [currentStep, currentStepPath, handleNext, isSaving, prevStep, saveCurrentStep]
  );

  return <StepFormSyncContext.Provider value={value}>{children}</StepFormSyncContext.Provider>;
}
