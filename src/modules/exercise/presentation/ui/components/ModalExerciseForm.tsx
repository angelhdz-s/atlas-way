'use client';

import { useExerciseForm } from '@/modules/exercise/presentation/ui/hooks/useExerciseForm';
import { InputNumber } from '@/modules/form/components/InputNumber';
import { InputText } from '@/modules/form/components/InputText';
import { Label } from '@/modules/form/components/LabelInput';
import { ModalForm } from '@/modules/form/components/ModalForm';
import { ModalFormButtons } from '@/modules/form/components/ModalFormButtons';
import { MultipleSelectBox } from '@/modules/form/components/MultipleSelectBox';
import { TextArea } from '@/modules/form/components/TextArea';
import { inputNumberConfig } from '@/modules/form/config/input-config';
import { SelectOption } from '@/modules/form/types';
import { useRouter } from 'next/navigation';

export function ModalExerciseForm({ title, muscles }: { title: string; muscles: SelectOption[] }) {
	const router = useRouter();

	const handleSuccess = () => {
		router.back();
	};

	const { isSubmitting, errors, fields, handleOnMusclesChange, handleSubmit, register } =
		useExerciseForm({ onSuccess: handleSuccess });

	return (
		<ModalForm title={title} onSubmit={handleSubmit}>
			<Label title="Name">
				<InputText
					{...register('exercise.name')}
					error={errors.exercise?.name?.message}
					placeholder="Bench Press"
				/>
			</Label>
			<Label title="Description">
				<TextArea
					{...register('exercise.description')}
					error={errors.exercise?.description?.message}
					placeholder="A compound exercise that targets the chest, shoulders, and triceps."
				/>
			</Label>
			<section className="flex items-start gap-2">
				<Label title="Sets">
					<InputNumber
						{...register('initialStats.sets', inputNumberConfig)}
						error={errors.initialStats?.sets?.message}
					/>
				</Label>
				<Label title="Reps">
					<InputNumber
						{...register('initialStats.reps', inputNumberConfig)}
						error={errors.initialStats?.reps?.message}
					/>
				</Label>
				<Label title="Weight (lbs)">
					<InputNumber
						{...register('initialStats.weight', inputNumberConfig)}
						error={errors.initialStats?.weight?.message}
					/>
				</Label>
			</section>
			<section>
				<MultipleSelectBox
					label="Muscles"
					selectingTitle="Select muscles"
					options={muscles}
					error={errors.exercise?.muscles?.message}
					onOptionsChange={handleOnMusclesChange}
				>
					{fields.map((field, index) => (
						<input
							type="hidden"
							key={field.id}
							{...register(`exercise.muscles.${index}.id`)}
						></input>
					))}
				</MultipleSelectBox>
			</section>
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons isPending={isSubmitting} />
			</footer>
		</ModalForm>
	);
}
