import { getAllUserExercises } from '@/modules/exercise/presentation/exercise.actions';
import { SessionModalForm } from '@/modules/session/presentation/ui/components/SessionModalForm';
import { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateSessionPage() {
	const exercisesRequest = await getAllUserExercises({ includeMuscles: true });
	const data = exercisesRequest.success ? exercisesRequest.data : [];
	const exercises: SelectOption[] = data.map((exercise) => ({
		label: exercise.name,
		value: exercise.id,
	}));

	return <SessionModalForm title="New Session" exercises={exercises} />;
}
