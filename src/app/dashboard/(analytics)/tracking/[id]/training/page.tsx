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
import { normalizeDomainData } from '@/presentation/modules/wizard/helpers/wizard.normalizer.helper';
import type { PhaseEntries } from '@/presentation/modules/wizard/wizard.types';
import { ActionSuccess, type ActionResponseProps } from '@/shared/presentation/action.response';

const processData = async (data: {
  phaseId: string;
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

  const phaseEntries: PhaseEntries<SetForm>[] = targets.map((t) => ({
    id: t.id,
    steps: t.sets,
    title: t.exercise.name,
    isCancelled: t.statusId === 'ABANDONED' || t.statusId === 'INTERRUPTED',
  }));

  const normalizedInput = normalizeDomainData<SetForm>(phaseEntries);

  return (
    <StepEngineProvider flatSteps={normalizedInput.flatSteps}>
      <StepFormProvider defaultValues={normalizedInput.defaultValues}>
        <StepFormSyncProvider saveStepAction={processData}>
          <Training />
        </StepFormSyncProvider>
      </StepFormProvider>
    </StepEngineProvider>
  );
}
