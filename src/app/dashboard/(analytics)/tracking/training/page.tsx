import { getAllRoutines } from '@/modules/routine/presentation/routine.actions';
import { SessionTraining } from '@/modules/tracking/presentation/ui/components/SessionTraining';
import { SessionTrainingProvider } from '@/modules/tracking/presentation/ui/components/SessionTrainingProvider';

export default async function TrackingTrainingPage() {
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
    <SessionTrainingProvider targets={session.exercises}>
      <SessionTraining />
    </SessionTrainingProvider>
  );
}
