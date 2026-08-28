'use client';

import type { StatusCode } from '@/modules/status/status.types';
import type { PhaseEntries } from '@/presentation/modules/wizard/wizard.types';
import type { TrainingPlan, TrainingSets } from '@/prisma/client';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import type { SetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import type { FullTrainingPlan } from '@/modules/tracking/presentation/tracking.actions';
import { processSetFormData } from '@/modules/tracking/presentation/tracking.actions';
import { Training } from '@/modules/tracking/presentation/ui/components/Training';
import { trainingSetFormSchema } from '@/modules/tracking/presentation/schemas/training.schema';
import { WizardSummaryProvider } from '@/presentation/modules/wizard/components/WizardSummaryProvider';
import { WizardSummary } from '@/presentation/modules/wizard/components/WizardSummary';
import { StepEngineProvider } from '@/presentation/modules/wizard/components/StepEngineProvider';
import { StepFormProvider } from '@/presentation/modules/wizard/components/StepFormProvider';
import { StepFormSyncProvider } from '@/presentation/modules/wizard/components/StepFormSyncProvider';
import { normalizeDomainData } from '@/presentation/modules/wizard/helpers/wizard.normalizer.helper';

type Props = {
  className?: string;
  saveDataAction: (data: { phaseId: string; stepData: any }) => Promise<ActionResponseProps<true>>;
  targets: FullTrainingPlan[];
};

const targetStatusMapper = (targetStatus: TrainingPlan['statusId']): StatusCode => {
  if (targetStatus === 'ABANDONED' || targetStatus === 'INTERRUPTED') return 'CANCELED';
  if (targetStatus === 'TARGETS_SET') return 'PENDING';
  return targetStatus;
};

const targetSetsMap = (trainingSets: TrainingSets[]): SetForm[] => {
  return trainingSets
    .map((t) => ({
      id: t.id,
      trainingPlanId: t.trainingPlanId,
      reps: t.reps,
      set: t.set,
      rir: 0,
      weight: t.weight,
    }))
    .sort((a, b) => (a.set > b.set ? 1 : -1));
};

const onNextStep = ({
  currentStepValue,
  nextStepValue,
}: {
  currentStepValue: SetForm;
  nextStepValue: SetForm;
}): SetForm => {
  if (nextStepValue.id !== undefined) return nextStepValue;
  return {
    ...nextStepValue,
    reps: currentStepValue.reps,
    rir: currentStepValue.rir,
    weight: currentStepValue.weight,
  };
};

export function TrainingWrapper({ targets, className = '' }: Props) {
  const phaseEntries: PhaseEntries<SetForm>[] = targets.map((t) => ({
    id: t.id,
    steps: t.sets,
    title: t.exercise.name,
    status: targetStatusMapper(t.statusId),
    stepsData:
      t.trainingSets.length > 0
        ? targetSetsMap(t.trainingSets)
        : [
            // Initialize a default values when no data comes from DB
            {
              reps: t.reps,
              rir: 0,
              set: 1,
              trainingPlanId: t.id,
              weight: t.weight,
            },
          ],
  }));

  const normalizedInput = normalizeDomainData<SetForm>({
    records: phaseEntries,
    defaultValuesMap: ({ data, step, phaseIndex }) => ({
      id: data?.id,
      reps: data?.reps ?? 12,
      rir: data?.rir ?? 0,
      weight: data?.weight ?? 0,
      set: data?.set ?? phaseIndex + 1,
      trainingPlanId: data?.trainingPlanId ?? step.phase.id,
    }),
    stepTitleBuilder: ({ phaseIndex: i }) => `Set ${i + 1}`,
  });

  const isStepCompleted = (formData: SetForm): boolean => {
    if (formData.id !== undefined) {
      console.log(formData);
      return true;
    }
    return false;
  };

  return (
    <StepEngineProvider flatSteps={normalizedInput.flatSteps}>
      <StepFormProvider
        schema={trainingSetFormSchema}
        defaultValues={normalizedInput.defaultValues}
      >
        <StepFormSyncProvider
          flatSteps={normalizedInput.flatSteps}
          saveStepAction={processSetFormData}
          populateNextPhaseStep={onNextStep}
        >
          <WizardSummaryProvider
            flatSteps={normalizedInput.flatSteps}
            areFieldValuesCompleted={isStepCompleted}
          >
            <div className="flex gap-4">
              <Training className={className} />
            </div>
          </WizardSummaryProvider>
        </StepFormSyncProvider>
      </StepFormProvider>
    </StepEngineProvider>
  );
}
