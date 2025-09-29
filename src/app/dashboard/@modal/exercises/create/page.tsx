import { ExerciseForm } from "@/modules/exercise/components/ExerciseForm";
import { getMuscleIdName } from "@/modules/muscle/actions/getMuscles";

export default async function CreateExercisePage() {
	const muscles = await getMuscleIdName();
	return <ExerciseForm title="New Exercise" muscles={muscles} />;
}
