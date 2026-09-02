'use client';

import type { StatusCode } from '@/modules/status/status.types';
import type {
  StepEnginePhaseEntries,
  StepStatus,
  WizardSummaryPhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';
import type { TrainingPlan, TrainingSets } from '@/prisma/client';
import type { SetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import type { FullTrainingPlan } from '@/modules/tracking/presentation/tracking.actions';
import { processSetFormData } from '@/modules/tracking/presentation/tracking.actions';
import { Training } from '@/modules/tracking/presentation/ui/components/Training';
import { setSchema } from '@/modules/tracking/presentation/schemas/training.schema';
import { normalizeStepsData } from '@/presentation/modules/wizard/helpers/wizard.normalizer.helper';
import { normalizeSummaryData } from '@/presentation/modules/wizard/helpers/wizard.summary.normalizer.helper';
import { WizardProvider } from '@/presentation/modules/wizard/components/WizardProvider';

type Props = {
  className?: string;
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
  const stepEnginePhaseEntries: StepEnginePhaseEntries<SetForm>[] = targets.map((t) => ({
    id: t.id,
    steps: t.sets,
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

  const wizardSummaryPhaseEntries: WizardSummaryPhaseEntries<SetForm>[] = targets.map((t) => ({
    id: t.id,
    steps: t.sets,
    title: t.exercise.name,
    description: t.exercise.description,
    status: targetStatusMapper(t.statusId),
    stepsData: t.trainingSets.length > 0 ? targetSetsMap(t.trainingSets) : [],
  }));

  const normalizedSteps = normalizeStepsData<SetForm>({
    records: stepEnginePhaseEntries,
    defaultValuesMap: ({ data, step, phaseIndex, lastDefaultValue }) => {
      if (data)
        return {
          id: data.id,
          set: data.set,
          rir: data.rir,
          reps: data.reps,
          weight: data.weight,
          trainingPlanId: data.trainingPlanId ?? step.phase.id,
        };

      return {
        set: phaseIndex + 1,
        rir: lastDefaultValue?.rir ?? 0,
        reps: lastDefaultValue?.reps ?? 12,
        weight: lastDefaultValue?.weight ?? 0,
        trainingPlanId: lastDefaultValue?.trainingPlanId ?? step.phase.id,
      };
    },
  });

  const setInitialStepStatus = (data: SetForm | undefined): StepStatus => {
    if (data !== undefined) return 'COMPLETED';
    return 'PENDING';
  };

  const normalizedSummarySteps = normalizeSummaryData<SetForm>({
    flatSteps: normalizedSteps.flatSteps,
    records: wizardSummaryPhaseEntries,
    stepTitleBuilder: ({ phaseIndex: i }) => `Set ${i + 1}`,
    setInitialStepStatus,
  });

  const isStepCompleted = (formData: SetForm): boolean => {
    if (formData.id !== undefined) return true;
    return false;
  };

  const syncCurrentStep = ({
    currentFormValues,
    savedData,
  }: {
    savedData: TrainingSets;
    currentFormValues: SetForm;
  }): SetForm => {
    return {
      ...currentFormValues,
      id: savedData.id,
    };
  };

  return (
    <WizardProvider
      flatSteps={normalizedSteps.flatSteps}
      flatStepsWithText={normalizedSummarySteps}
      formDefaultValues={normalizedSteps.defaultValues}
      formSchema={setSchema}
      isFormStepCompleted={isStepCompleted}
      populateNextPhaseStep={onNextStep}
      processSetFormData={processSetFormData}
      syncCurrentStep={syncCurrentStep}
    >
      <div className="flex gap-4">
        <Training className={className} />
      </div>
    </WizardProvider>
  );
}
