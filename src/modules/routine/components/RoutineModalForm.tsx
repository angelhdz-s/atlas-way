'use client';

import { useState } from 'react';
import { InputNumber } from '@/modules/form/components/InputNumber';
import { InputText } from '@/modules/form/components/InputText';
import { Label } from '@/modules/form/components/LabelInput';
import { ModalFormButtons } from '@/modules/form/components/ModalFormButtons';
import { Select } from '@/modules/form/components/Select';
import { TextArea } from '@/modules/form/components/TextArea';
import { createRoutineAction } from '../actions/create-routine';
import { routineFormSchema } from '../config/routine-schema';
import { inputNumberConfig } from '@/modules/form/config/input-config';
import { daysOptions } from '../config/form';
import { useFormHook } from '@/modules/form/hooks/useFormHook';

export function RoutineModalForm({ title }: { title: string }) {
	const { register, handleSubmit, errors } = useFormHook({
		schema: routineFormSchema,
		action: createRoutineAction,
	});
	const [daysEnabled, setDaysEnabled] = useState(false);

	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setDaysEnabled(value === 'custom');
	};

	return (
		<>
			<header className="ld-main-fg">{title}</header>
			<main>
				<form className="flex flex-col gap-4 w-92" onSubmit={handleSubmit}>
					<section className="flex flex-col gap-2">
						<Label title="Routine name">
							<InputText
								{...register('name')}
								placeholder="Full Body Workout"
								error={errors.name?.message}
							/>
						</Label>
						<Label title="Description name">
							<TextArea
								{...register('description')}
								error={errors.description?.message}
								placeholder="A workout routine for the whole body"
							/>
						</Label>
						<div className="grid grid-cols-2 gap-2">
							<Label title="Cycle" className="flex-1">
								<Select
									{...register('cycle')}
									options={daysOptions}
									multiple={false}
									onChange={handleOnChange}
									error={errors.cycle?.message}
								/>
							</Label>
							<Label title="Days" className="w-fit">
								<InputNumber
									{...register('days', inputNumberConfig)}
									value={'7'}
									placeholder="7"
									disabled={!daysEnabled}
									error={errors.days?.message}
								/>
							</Label>
							<Label title="Initial Date" className="w-fit">
								<input type="date" />
							</Label>
						</div>
					</section>
					<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
						<ModalFormButtons />
					</footer>
				</form>
			</main>
		</>
	);
}
