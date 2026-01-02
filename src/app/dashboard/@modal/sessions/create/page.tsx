import { SessionModalForm } from '@/modules/session/presentation/ui/components/SessionModalForm';
import { SelectOption } from '@/presentation/modules/form/types';

export default async function CreateSessionPage() {
	const exercises: SelectOption[] = [];

	return <SessionModalForm title="New Session" exercises={exercises} />;
}
