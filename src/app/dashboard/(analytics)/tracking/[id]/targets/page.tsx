import { ExerciseEmptyData } from '@/modules/exercise/presentation/components/ExerciseEmptyData';
import { RoutineEmptyData } from '@/modules/routine/presentation/ui/components/RoutineEmptyData';
import { getSessionById } from '@/modules/session/presentation/session.actions';
import { SessionEmptyData } from '@/modules/session/presentation/ui/components/SessionEmptyData';
import { getTrainingById } from '@/modules/tracking/presentation/tracking.actions';
import { ExerciseTargets } from '@/modules/tracking/presentation/ui/components/ExerciseTargets';
import { ExerciseTargetsProvider } from '@/modules/tracking/presentation/ui/components/ExerciseTargetsProvider';

export default async function TrackingTargetsPage(
  pageParams: Promise<{ params: Promise<{ id: string }> }>
) {
  const syncPageParams = await pageParams;
  const syncParams = await syncPageParams.params;
  const id = syncParams.id;
  if (!id) {
    console.log('No param found', id);
    return null;
  }

  const trainingResult = await getTrainingById(id);
  if (!trainingResult.success) {
    console.log('Error:', trainingResult.message);
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data) {
    console.log('Training not found');
    return <RoutineEmptyData />;
  }

  if (!trainingResult.data.sessionId) {
    console.log('Session not included');
    return <ExerciseEmptyData />;
  }

  const sessionResult = await getSessionById(trainingResult.data.sessionId);
  if (!sessionResult.success || !sessionResult.data) {
    console.log(sessionResult);
    return <SessionEmptyData />;
  }

  const exercises = sessionResult.data.exercises;

  return (
    <ExerciseTargetsProvider exercises={exercises}>
      <ExerciseTargets exercises={exercises} trainingId={id} />
    </ExerciseTargetsProvider>
  );
}
