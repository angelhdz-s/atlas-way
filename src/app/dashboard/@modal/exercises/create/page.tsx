import { ModalExerciseForm } from '@/modules/exercise/presentation/ui/components/ModalExerciseForm';
import { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateExercisePage() {
	const muscles: SelectOption[] = [];
	return <ModalExerciseForm title="New Exercise" muscles={muscles} />;
}
