import { getExercisesIdName } from '@/modules/exercise/actions/get-exercises';
import { SessionModalForm } from '@/modules/session/components/SessionModalForm';

export default async function CreateSessionPage() {
	const exercises = await getExercisesIdName();
	const formattedExercises = exercises.map((exercise) => ({
		value: exercise.id.toString(),
		label: exercise.name,
	}));
	return <SessionModalForm title="New Session" exercises={formattedExercises} />;
}
