import { getExercisesIdName } from "@/modules/exercise/actions/get-exercises";
import { SessionForm } from "@/modules/session/components/SessionForm";

export default async function CreateSessionPage() {
	const exercises = await getExercisesIdName();
	const formattedExercises = exercises.map((exercise) => ({
		value: exercise.id.toString(),
		label: exercise.name,
	}));
	return <SessionForm title="New Session" exercises={formattedExercises} />;
}
