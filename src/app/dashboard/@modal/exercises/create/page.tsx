import { getMuscles } from '@/app/_actions/muscle.actions';
import { ModalExerciseForm } from '@/modules/exercise/components/ModalExerciseForm';

export default async function CreateExercisePage() {
	const { data: muscles } = await getMuscles();
	const muscleOptions = muscles.map((muscle) => ({
		value: muscle.id.toString(),
		label: muscle.name,
	}));
	return <ModalExerciseForm title="New Exercise" muscles={muscleOptions} />;
}
