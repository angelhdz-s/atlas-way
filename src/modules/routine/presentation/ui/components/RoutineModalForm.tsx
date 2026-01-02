'use client';

import { useState } from 'react';
import { InputNumber } from '@/presentation/modules/form/components/InputNumber';
import { InputText } from '@/presentation/modules/form/components/InputText';
import { Label, LabelGroup } from '@/presentation/modules/form/components/LabelInput';
import { ModalFormButtons } from '@/presentation/modules/form/components/ModalFormButtons';
import { TextArea } from '@/presentation/modules/form/components/TextArea';
import { createRoutineAction } from '@/modules/routine/presentation/routine.actions';
import { routineFormSchema } from '../config/routine-schema';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { daysOptions } from '../config/form';
import { useFormHook } from '@/presentation/modules/form/hooks/useFormHook';
import { InputDate } from '@/presentation/modules/form/components/InputDate';
import { ModalForm } from '@/presentation/modules/form/components/ModalForm';
import { RadiobuttonGroup } from '@/presentation/modules/form/components/RadiobuttonGroup';
import { useRouter } from 'next/navigation';

export function RoutineModalForm({ title }: { title: string }) {
	const router = useRouter();

	const handleSuccess = () => {
		router.back();
	};
	const { register, handleSubmit, errors, isSubmitting } = useFormHook({
		schema: routineFormSchema,
		action: createRoutineAction,
		onSuccess: handleSuccess,
	});
	const [daysEnabled, setDaysEnabled] = useState(false);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value === 'custom' && daysEnabled) return;
		setDaysEnabled(value === 'custom');
	};

	return (
		<ModalForm title={title} onSubmit={handleSubmit}>
			<section className="flex flex-col gap-2">
				<Label title="Name">
					<InputText
						{...register('name')}
						placeholder="Full Body Workout"
						error={errors.name?.message}
					/>
				</Label>
				<Label title="Description">
					<TextArea
						{...register('description')}
						error={errors.description?.message}
						placeholder="A workout routine for the whole body"
					/>
				</Label>
				<div className="grid grid-cols-2 gap-2">
					<LabelGroup title="Cycle" className="w-full">
						<RadiobuttonGroup
							{...register('cycle')}
							checked={'week'}
							options={daysOptions}
							onChange={handleOnChange}
							error={errors.cycle?.message}
							className="flex items-center gap-2"
						/>
					</LabelGroup>
					<Label title="Days" className="w-fit">
						<InputNumber
							{...register('days', inputNumberConfig)}
							value={'7'}
							placeholder="7"
							disabled={!daysEnabled}
							error={errors.days?.message}
						/>
					</Label>
				</div>
				<Label title="Initial Date" className="w-fit">
					<InputDate
						{...register('initialDate', {
							setValueAs: (value) => (value ? new Date(value) : undefined),
						})}
						error={errors.initialDate?.message}
					/>
				</Label>
			</section>
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons isPending={isSubmitting} />
			</footer>
		</ModalForm>
	);
}
