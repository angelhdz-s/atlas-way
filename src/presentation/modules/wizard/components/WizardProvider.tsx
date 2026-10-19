import { StepEngineProvider } from '@/presentation/modules/wizard/components/StepEngineProvider';
import { StepFormProvider } from '@/presentation/modules/wizard/components/StepFormProvider';
import { StepFormSyncProvider } from '@/presentation/modules/wizard/components/StepFormSyncProvider';
import { WizardOrchestratorInner } from '@/presentation/modules/wizard/components/WizardOrchestratorInner';
import { WizardSummaryProvider } from '@/presentation/modules/wizard/components/WizardSummaryProvider';
import type { FlatStep, FlatStepWithText } from '@/presentation/modules/wizard/wizard.types';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import type { Different } from '@/shared/shared.types';
import type { ZodSchema } from 'zod/v3';

type Props<Schema extends ZodSchema<any, any>, FormValues, FormEntityDTO> = {
  children: React.ReactNode;
  flatSteps: FlatStep[];
  flatStepsWithText: FlatStepWithText[];
  formSchema: Schema;
  formDefaultValues: Record<string, FormValues>;
  processSetFormData: (
    data: FormValues
  ) => Promise<ActionResponseProps<Different<FormEntityDTO, FormValues>>>;
  populateNextPhaseStep?:
    | ((data: { currentStepValue: FormValues; nextStepValue: FormValues }) => FormValues)
    | undefined;
  syncCurrentStep?:
    | ((data: {
        savedData: Different<FormEntityDTO, FormValues>;
        currentFormValues: FormValues;
      }) => FormValues)
    | undefined;
  isFormStepCompleted: (data: FormValues) => boolean;
  initialCanceledPhaseIds?: string[] | undefined;
  onComplete?: (() => Promise<void> | void) | undefined;
};

export function WizardProvider<Schema extends ZodSchema<any, any>, FormValues, FormEntityDTO>({
  children,
  flatSteps,
  flatStepsWithText,
  formSchema,
  formDefaultValues,
  processSetFormData,
  populateNextPhaseStep,
  syncCurrentStep,
  isFormStepCompleted,
  initialCanceledPhaseIds,
  onComplete,
}: Props<Schema, FormValues, FormEntityDTO>) {
  return (
    <StepEngineProvider flatSteps={flatSteps} initialCanceledPhaseIds={initialCanceledPhaseIds}>
      <StepFormProvider schema={formSchema} defaultValues={formDefaultValues}>
        <StepFormSyncProvider
          flatSteps={flatSteps}
          saveStepAction={processSetFormData}
          populateNextPhaseStep={populateNextPhaseStep}
          syncCurrentStep={syncCurrentStep}
        >
          <WizardSummaryProvider
            flatSteps={flatStepsWithText}
            areFieldValuesCompleted={isFormStepCompleted}
          >
            <WizardOrchestratorInner flatSteps={flatSteps} onComplete={onComplete}>
              {children}
            </WizardOrchestratorInner>
          </WizardSummaryProvider>
        </StepFormSyncProvider>
      </StepFormProvider>
    </StepEngineProvider>
  );
}
