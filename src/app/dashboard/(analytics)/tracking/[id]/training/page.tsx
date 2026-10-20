import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import {
  getWorkoutById,
  setWorkoutInProgress,
} from '@/modules/tracking/presentation/workout.actions';
import { getWorkoutTargetsByWorkoutId } from '@/modules/tracking/presentation/workout-target.actions';
import { getWorkoutSetsByWorkoutId } from '@/modules/tracking/presentation/workout-set.actions';
import { WorkoutFinished } from '@/modules/tracking/presentation/ui/components/WorkoutFinished';
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

  let workout = workoutResult.data;

  if (workout.statusId === 'TARGETS_SET') {
    const startWorkoutResult = await setWorkoutInProgress(workout.id);
    if (!startWorkoutResult.success) return <RoutineEmptyData />;
    workout = startWorkoutResult.data;
  }

  if (
    workout.statusId === 'COMPLETED' ||
    workout.statusId === 'INTERRUPTED' ||
    workout.statusId === 'SKIPPED'
  ) {
    return <WorkoutFinished statusId={workout.statusId} />;
  }

  if (workout.statusId !== 'IN_PROGRESS') return <RoutineEmptyData />;

  const workoutTargetsResult = await getWorkoutTargetsByWorkoutId(workout.id);
  if (!workoutTargetsResult.success) return <RoutineEmptyData />;
  if (workoutTargetsResult.data.length === 0) return <SessionEmptyData />;

  const workoutSetsResult = await getWorkoutSetsByWorkoutId(workout.id);
  if (!workoutSetsResult.success) return <SessionEmptyData />;

  return (
    <WorkoutWrapper
      workoutId={workout.id}
      workoutTargets={workoutTargetsResult.data}
      workoutSets={workoutSetsResult.data}
    />
  );
}
