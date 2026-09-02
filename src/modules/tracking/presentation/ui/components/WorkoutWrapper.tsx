'use client';

import type { StatusCode } from '@/modules/status/status.types';
import type {
  StepEnginePhaseEntries,
  StepStatus,
  WizardSummaryPhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';
import type { WorkoutTargets, WorkoutSets } from '@/prisma/client';
import type { WorkoutSetForm } from '@/modules/tracking/presentation/schemas/workout.schema';
import type { FullWorkoutTargets } from '@/modules/tracking/presentation/workout-target.actions';
import { processWorkoutSetData } from '@/modules/tracking/presentation/tracking.actions';
import { workoutSetSchema } from '@/modules/tracking/presentation/schemas/workout.schema';
import { normalizeStepsData } from '@/presentation/modules/wizard/helpers/wizard.normalizer.helper';
import { normalizeSummaryData } from '@/presentation/modules/wizard/helpers/wizard.summary.normalizer.helper';
import { WizardProvider } from '@/presentation/modules/wizard/components/WizardProvider';
import { Workout } from '@/modules/tracking/presentation/ui/components/Workout';

type Props = {
  className?: string;
  workoutTargets: FullWorkoutTargets[];
  workoutSets: WorkoutSets[];
};

const targetStatusMapper = (targetStatus: WorkoutTargets['statusId']): StatusCode => {
  if (targetStatus === 'SKIPPED' || targetStatus === 'INTERRUPTED') return 'CANCELED';
  if (targetStatus === 'TARGETS_SET') return 'PENDING';
  return targetStatus;
};

const targetSetsMap = (trainingSets: WorkoutSets[]): WorkoutSetForm[] => {
  return trainingSets
    .map((t) => ({
      id: t.id,
      workoutId: t.workoutId,
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
  currentStepValue: WorkoutSetForm;
  nextStepValue: WorkoutSetForm;
}): WorkoutSetForm => {
  if (nextStepValue.id !== undefined) return nextStepValue;
  return {
    ...nextStepValue,
    reps: currentStepValue.reps,
    rir: currentStepValue.rir,
    weight: currentStepValue.weight,
  };
};

export function WorkoutWrapper({ workoutTargets, workoutSets, className = '' }: Props) {
  const stepEnginePhaseEntries: StepEnginePhaseEntries<WorkoutSetForm>[] = workoutTargets.map(
    (t) => {
      const targetSets = workoutSets
        .filter((s) => s.exerciseId === t.exerciseId)
        .sort((a, b) => a.set - b.set);
      return {
        id: t.id,
        steps: t.sets,
        status: targetStatusMapper(t.statusId),
        stepsData:
          targetSets.length > 0
            ? targetSetsMap(targetSets)
            : [
                // Initialize a default values when no data comes from DB
                {
                  reps: t.reps,
                  rir: 0,
                  set: 1,
                  workoutId: t.id,
                  weight: t.weight,
                },
              ],
      };
    }
  );

  const wizardSummaryPhaseEntries: WizardSummaryPhaseEntries<WorkoutSetForm>[] = workoutTargets.map(
    (t) => {
      const targetSets = workoutSets
        .filter((s) => s.exerciseId === t.exerciseId)
        .sort((a, b) => a.set - b.set);

      return {
        id: t.id,
        steps: t.sets,
        title: t.exercise.name,
        description: t.exercise.description,
        status: targetStatusMapper(t.statusId),
        stepsData: targetSets.length > 0 ? targetSetsMap(targetSets) : [],
      };
    }
  );

  const normalizedSteps = normalizeStepsData<WorkoutSetForm>({
    records: stepEnginePhaseEntries,
    defaultValuesMap: ({ data, step, phaseIndex, lastDefaultValue }) => {
      if (data)
        return {
          id: data.id,
          set: data.set,
          rir: data.rir,
          reps: data.reps,
          weight: data.weight,
          workoutId: data.workoutId ?? step.phase.id,
        };

      return {
        set: phaseIndex + 1,
        rir: lastDefaultValue?.rir ?? 0,
        reps: lastDefaultValue?.reps ?? 12,
        weight: lastDefaultValue?.weight ?? 0,
        workoutId: lastDefaultValue?.workoutId ?? step.phase.id,
      };
    },
  });

  const setInitialStepStatus = (data: WorkoutSetForm | undefined): StepStatus => {
    if (data !== undefined) return 'COMPLETED';
    return 'PENDING';
  };

  const normalizedSummarySteps = normalizeSummaryData<WorkoutSetForm>({
    flatSteps: normalizedSteps.flatSteps,
    records: wizardSummaryPhaseEntries,
    stepTitleBuilder: ({ phaseIndex: i }) => `Set ${i + 1}`,
    setInitialStepStatus,
  });

  const isStepCompleted = (formData: WorkoutSetForm): boolean => {
    if (formData.id !== undefined) return true;
    return false;
  };

  const syncCurrentStep = ({
    currentFormValues,
    savedData,
  }: {
    savedData: WorkoutSets;
    currentFormValues: WorkoutSetForm;
  }): WorkoutSetForm => {
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
      formSchema={workoutSetSchema}
      isFormStepCompleted={isStepCompleted}
      populateNextPhaseStep={onNextStep}
      processSetFormData={processWorkoutSetData}
      syncCurrentStep={syncCurrentStep}
    >
      <div className="flex gap-4">
        <Workout className={className} />
      </div>
    </WizardProvider>
  );
}
