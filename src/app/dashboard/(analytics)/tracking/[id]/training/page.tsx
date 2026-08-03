import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import type { SetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import {
  getTrainingById,
  getTrainingPlansByTrainingId,
} from '@/modules/tracking/presentation/tracking.actions';
import { Training } from '@/modules/tracking/presentation/ui/components/Training';
import { StepEngineProvider } from '@/presentation/modules/wizard/components/StepEngineProvider';
import { StepFormProvider } from '@/presentation/modules/wizard/components/StepFormProvider';
import { StepFormSyncProvider } from '@/presentation/modules/wizard/components/StepFormSyncProvider';
import { ActionSuccess, type ActionResponseProps } from '@/shared/presentation/action.response';

const processData = async (data: {
  phaseId: string;
  stepId: string;
  stepData: any;
}): Promise<ActionResponseProps<true>> => {
  'use server';
  console.log(data);
  return ActionSuccess(true, 'Done');
};

export default async function TrackingTrainingPage(
  pageParams: Promise<{ params: Promise<{ id: string }> }>
) {
  const syncPageParams = await pageParams;
  const syncParams = await syncPageParams.params;

  if (!syncParams.id) {
    console.log('No id parameter found');
    return <RoutineEmptyData />;
  }

  const trainingResult = await getTrainingById(syncParams.id);
  if (!trainingResult.success) {
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data) {
    console.log('Training not found');
    return <RoutineEmptyData />;
  }

  if (
    trainingResult.data?.statusId !== 'TARGETS_SET' &&
    trainingResult.data?.statusId !== 'IN_PROGRESS'
  ) {
    console.log(`Training status is ${trainingResult.data.statusId}`);
    return <RoutineEmptyData />;
  }

  const trainingPlansResult = await getTrainingPlansByTrainingId(syncParams.id);

  if (!trainingPlansResult.success) {
    return <RoutineEmptyData />;
  }

  if (trainingPlansResult.data.length < 0) {
    console.log('No training plans found');
    return <SessionEmptyData />;
  }

  const targets = trainingPlansResult.data;

  let stepIndex = 0;
  const flatSteps = targets.flatMap((t) =>
    Array.from({ length: t.sets }, (_, i) => i + 1).map((s) => {
      const flatStep = {
        phaseId: t.id,
        stepId: `${t.id}-${s}`,
        stepIndex,
        isCancelled: false,
      };
      stepIndex++;
      return flatStep;
    })
  );

  const defaultValues: Record<string, SetForm> = {};

  for (const target of targets) {
    const sets = Array.from({ length: target.sets }, (_, i) => i + 1);

    for (const set of sets) {
      const values: SetForm = {
        trainingPlanId: target.id,
        set: set,
        reps: target.reps,
        rir: 0,
        weight: target.weight,
      };
      defaultValues[`${target.id}-${set}`] = values;
    }
  }

  return (
    <StepEngineProvider flatSteps={flatSteps}>
      <StepFormProvider defaultValues={defaultValues}>
        <StepFormSyncProvider saveStepAction={processData}>
          <Training />
        </StepFormSyncProvider>
      </StepFormProvider>
    </StepEngineProvider>
  );
}
