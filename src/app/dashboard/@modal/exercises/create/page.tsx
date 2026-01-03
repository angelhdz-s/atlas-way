import { ModalExerciseForm } from '@/modules/exercise/presentation/ui/components/ModalExerciseForm';
import { getAllMuscles } from '@/modules/muscle/presentation/muscle.actions';
import { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateExercisePage() {
	const title = 'New Exercise';
	const dbMuscles = await getAllMuscles();
	if (!dbMuscles.success || !dbMuscles.data)
		return <ModalExerciseForm title={title} muscles={[]} />;

	const muscles: SelectOption[] = dbMuscles.data.map((muscle) => ({
		label: muscle.name,
		value: muscle.id.toString(),
	}));
	return <ModalExerciseForm title={title} muscles={muscles} />;
}
