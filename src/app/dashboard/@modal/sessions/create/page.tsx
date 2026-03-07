import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { SessionModalForm } from '@/modules/session/presentation/ui/components/SessionModalForm';
import type { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateSessionPage() {
  const exercisesRequest = await getAllUserExercises();
  const data = exercisesRequest.success ? exercisesRequest.data : [];
  const exercises: SelectOption[] = data.map((exercise) => ({
    label: exercise.name,
    value: exercise.id,
  }));

  return <SessionModalForm exercises={exercises} />;
}
