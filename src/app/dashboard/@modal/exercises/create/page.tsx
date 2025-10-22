import { ModalExerciseForm } from '@/modules/exercise/components/ModalExerciseForm';
import { getMuscleIdName } from '@/modules/muscle/actions/getMuscles';

export default async function CreateExercisePage() {
	const muscles = await getMuscleIdName();
	const muscleOptions = muscles.map((muscle) => ({
		value: muscle.id.toString(),
		label: muscle.name,
	}));
	return <ModalExerciseForm title="New Exercise" muscles={muscleOptions} />;
}
