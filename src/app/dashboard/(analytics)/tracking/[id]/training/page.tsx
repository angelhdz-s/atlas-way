import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import {
  getWorkoutById,
  getWorkoutSetsByWorkoutId,
  getWorkoutTargetsByWorkoutId,
} from '@/modules/tracking/presentation/tracking.actions';
import { WorkoutWrapper } from '@/modules/tracking/presentation/ui/components/WorkoutWrapper';

export default async function TrackingTrainingPage(
  pageParams: Promise<{ params: Promise<{ id: string }> }>
) {
  const syncPageParams = await pageParams;
  const syncParams = await syncPageParams.params;

  if (!syncParams.id) return <RoutineEmptyData />;

  const workoutResult = await getWorkoutById(syncParams.id);
  if (!workoutResult.success) return <RoutineEmptyData />;
  if (!workoutResult.data) return <RoutineEmptyData />;
  const workoutId = workoutResult.data.id;

  if (
    workoutResult.data?.statusId !== 'TARGETS_SET' &&
    workoutResult.data?.statusId !== 'IN_PROGRESS'
  )
    return <RoutineEmptyData />;

  const workoutTargetsResult = await getWorkoutTargetsByWorkoutId(workoutId);

  if (!workoutTargetsResult.success) return <RoutineEmptyData />;
  if (workoutTargetsResult.data.length < 0) return <SessionEmptyData />;
  const workoutTargets = workoutTargetsResult.data;

  const workoutSetsResult = await getWorkoutSetsByWorkoutId(workoutId);
  if (!workoutSetsResult.success) return <SessionEmptyData />;
  const workoutSets = workoutSetsResult.data;

  return <WorkoutWrapper workoutTargets={workoutTargets} workoutSets={workoutSets} />;
}
