import { ExerciseEmptyData } from '@/modules/exercise/presentation/components/ExerciseEmptyData';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { getSessionById } from '@/modules/session/presentation/session.actions';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import { getWorkoutById } from '@/modules/tracking/presentation/workout.actions';
import { ExerciseTargets } from '@/modules/tracking/presentation/ui/components/ExerciseTargets';
import { ExerciseTargetsProvider } from '@/modules/tracking/presentation/ui/components/ExerciseTargetsProvider';

export default async function TrackingTargetsPage(
  pageParams: Promise<{ params: Promise<{ id: string }> }>
) {
  const syncPageParams = await pageParams;
  const syncParams = await syncPageParams.params;
  const id = syncParams.id;
  if (!id) {
    return null;
  }

  const trainingResult = await getWorkoutById(id);
  if (!trainingResult.success) {
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data) {
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data.sessionId) {
    return <ExerciseEmptyData />;
  }

  const sessionResult = await getSessionById(trainingResult.data.sessionId);
  if (!sessionResult.success || !sessionResult.data) {
    return <SessionEmptyData />;
  }

  const exercises = sessionResult.data.exercises;

  return (
    <ExerciseTargetsProvider exercises={exercises}>
      <ExerciseTargets exercises={exercises} workoutId={id} />
    </ExerciseTargetsProvider>
  );
}
