'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/ModalFormButtons';
import { SelectOption } from '@/presentation/modules/form/types';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import { InputText } from '@/presentation/modules/form/components/InputText';
import { TextArea } from '@/presentation/modules/form/components/TextArea';
import { MultipleSelectBox } from '@/presentation/modules/form/components/MultipleSelectBox';
import { useSessionForm } from '../hooks/useSessionForm';

export function SessionModalForm({
	title,
	exercises,
}: {
	title: string;
	exercises: SelectOption[];
}) {
	const router = useRouter();
	const handleSuccess = () => {
		router.back();
	};

	const { register, isSubmitting, fields, handleSubmit, handleOnExercisesChange } =
		useSessionForm({ onSuccess: handleSuccess });

	return (
		<ModalForm title={title} onSubmit={handleSubmit}>
			<Label title="Name">
				<InputText {...register('name')} placeholder="Enter Session name" />
			</Label>
			<Label title="Description">
				<TextArea {...register('description')} placeholder="Day focused on arms training" />
			</Label>
			<MultipleSelectBox
				selectingTitle="Select exercises"
				label="Exercises"
				options={exercises}
				onOptionsChange={handleOnExercisesChange}
			>
				{fields.map((field, index) => (
					<input type="hidden" key={field.id} {...register(`exercises.${index}.id`)} />
				))}
			</MultipleSelectBox>
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons isPending={isSubmitting} />
			</footer>
		</ModalForm>
	);
}
