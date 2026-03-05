import { ModalExerciseForm } from '@/modules/exercise/presentation/ui/components/ModalExerciseForm';
import { getAllMuscles } from '@/modules/muscle/presentation/muscle.actions';
import type { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateExercisePage() {
  const dbMuscles = await getAllMuscles();
  const muscles: SelectOption[] = dbMuscles.data
    ? dbMuscles.data.map((muscle) => ({
        label: muscle.name,
        value: muscle.id.toString(),
      }))
    : [];
  return <ModalExerciseForm muscles={muscles} />;
}
