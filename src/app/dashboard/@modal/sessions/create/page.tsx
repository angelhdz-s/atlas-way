import { getExercisesIdName } from "@/modules/exercise/actions/get-exercises";
import { ModalSessionForm } from "@/modules/session/components/ModalSessionForm";

export default async function CreateSessionPage() {
	const exercises = await getExercisesIdName();
	const formattedExercises = exercises.map((exercise) => ({
		value: exercise.id.toString(),
		label: exercise.name,
	}));
	return (
		<ModalSessionForm title="New Session" exercises={formattedExercises} />
	);
}
