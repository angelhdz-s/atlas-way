import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import {
  getTrainingById,
  getTrainingPlansByTrainingId,
} from '@/modules/tracking/presentation/tracking.actions';
import { Training } from '@/modules/tracking/presentation/ui/components/Training';
import { TrainingStepsProvider } from '@/modules/tracking/presentation/ui/components/training/TrainingStepsProvider';

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

  return (
    <TrainingStepsProvider targets={targets}>
      <Training />
    </TrainingStepsProvider>
  );
}
