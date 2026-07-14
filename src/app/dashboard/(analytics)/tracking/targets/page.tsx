import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { ExerciseTargets } from '@/modules/tracking/presentation/ui/components/ExerciseTargets';
import { ExerciseTargetsProvider } from '@/modules/tracking/presentation/ui/components/ExerciseTargetsProvider';

export default async function TrackingTargetsPage() {
  const routinesResult = await getAllRoutines();
  const routine = routinesResult.success ? routinesResult.data[0] : null;
  if (!routine) return null;
  const plan = routine.plan.find((p) => p.session !== null);
  if (!plan) return null;

  const { session } = plan;
  if (!session) return null;

  const exercise = session.exercises[0];
  if (!exercise) return null;

  return (
    <ExerciseTargetsProvider exercises={session.exercises}>
      <ExerciseTargets exercises={session.exercises} />
    </ExerciseTargetsProvider>
  );
}
