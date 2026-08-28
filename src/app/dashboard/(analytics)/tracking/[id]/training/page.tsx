import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import {
  getTrainingById,
  getTrainingPlansByTrainingId,
} from '@/modules/tracking/presentation/tracking.actions';
import { TrainingWrapper } from '@/modules/tracking/presentation/ui/components/TrainingWrapper';

export default async function TrackingTrainingPage(
  pageParams: Promise<{ params: Promise<{ id: string }> }>
) {
  const syncPageParams = await pageParams;
  const syncParams = await syncPageParams.params;

  if (!syncParams.id) {
    return <RoutineEmptyData />;
  }

  const trainingResult = await getTrainingById(syncParams.id);
  if (!trainingResult.success) {
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data) {
    return <RoutineEmptyData />;
  }

  if (
    trainingResult.data?.statusId !== 'TARGETS_SET' &&
    trainingResult.data?.statusId !== 'IN_PROGRESS'
  ) {
    return <RoutineEmptyData />;
  }

  const trainingPlansResult = await getTrainingPlansByTrainingId(syncParams.id);

  if (!trainingPlansResult.success) {
    return <RoutineEmptyData />;
  }

  if (trainingPlansResult.data.length < 0) {
    return <SessionEmptyData />;
  }

  const targets = trainingPlansResult.data;

  return <TrainingWrapper targets={targets} />;
}
