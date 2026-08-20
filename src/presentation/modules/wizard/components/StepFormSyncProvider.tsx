'use client';

import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import type { StepFormSyncValue } from '@/presentation/modules/wizard/context/StepFormSyncContext';
import { useCallback, useMemo, useState } from 'react';
import { useFormContext, type FieldPath } from 'react-hook-form';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { StepFormSyncContext } from '@/presentation/modules/wizard/context/StepFormSyncContext';
import { getNextPhaseStepId } from '@/presentation/modules/wizard/helpers/wizard.flat-steps.helper';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';

type SaveStepAction<ActionResponseData> = (data: {
  phaseId: string;
  stepData: Record<string, any>;
}) => Promise<ActionResponseProps<ActionResponseData>>;

type SyncCurrentStep<FormValues, Data> = (args: {
  savedData: Data;
  formValues: FormValues;
}) => FormValues;

type Props<FormValues, SavedData> = {
  children: React.ReactNode;
  saveStepAction: SaveStepAction<SavedData>;
  populateNextPhaseStep?: (data: {
    currentStepValue: FormValues;
    nextStepValue: FormValues;
  }) => FormValues;
  syncCurrentStep: SyncCurrentStep<FormValues, SavedData>;
  flatSteps: FlatStep[];
  currentStepSave?: () => FormValues;
};

type FormKey<FormValues> = FieldPath<Record<string, FormValues>>;

type Form<FormValues> = {
  [key: string]: FormValues;
};

export function StepFormSyncProvider<FormValues, ActionResponseData>({
  children,
  flatSteps,
  saveStepAction,
  populateNextPhaseStep,
  syncCurrentStep,
}: Props<FormValues, ActionResponseData>) {
  const { currentStep, nextStep, prevStep } = useStepEngine();
  const { trigger, getValues, setValue } = useFormContext<Form<FormValues>>();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const { addToast } = useToast();

  const currentStepPath = `${currentStep.id}`;

  const saveCurrentStep = useCallback(async (): Promise<boolean> => {
    try {
      const isStepValid = await trigger(`${currentStepPath}` as FormKey<FormValues>);
      if (!isStepValid) return false;
      setIsSaving(true);
      console.log('Saving');

      const formData = getValues(currentStepPath as FormKey<FormValues>);
      if (!formData) return false;

      const response = await saveStepAction({
        phaseId: currentStep.phase.id,
        stepData: formData,
      });

      if (!response.success) {
        addToast('Error saving data', {
          type: 'error',
        });
        return false;
      }

      const newCurrentStepValues =
        syncCurrentStep?.({ savedData: response.data, formValues: formData as FormValues }) ??
        formData;

      if (syncCurrentStep !== undefined)
        setValue(currentStepPath as FormKey<FormValues>, newCurrentStepValues as never);

      if (!populateNextPhaseStep) return true;

      const nextStepId = getNextPhaseStepId(flatSteps, currentStep.globalIndex);
      if (!nextStepId) return true;

      const nextStepValues = getValues(nextStepId as FormKey<FormValues>) as FormValues | undefined;
      if (!nextStepValues) return true;

      const newNextStepValue = populateNextPhaseStep({
        currentStepValue: newCurrentStepValues as FormValues,
        nextStepValue: nextStepValues as FormValues,
      });

      setValue(nextStepId as FormKey<FormValues>, newNextStepValue as never);

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
  }, [
    addToast,
    currentStep,
    currentStepPath,
    getValues,
    saveStepAction,
    trigger,
    flatSteps,
    populateNextPhaseStep,
    setValue,
    syncCurrentStep,
  ]);

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
