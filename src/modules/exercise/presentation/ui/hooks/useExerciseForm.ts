'use client';

import { useFieldArray } from 'react-hook-form';
import { SelectOption } from '@/modules/form/types';
import { useFormHook } from '@/modules/form/hooks/useFormHook';
import { exerciseFormSchema } from '../schemas/exercise.schema';
import { createExerciseAction } from '@/app/_actions/exercise.actions';
export function useExerciseForm({
	onSuccess,
}: {
	onSuccess?: () => void;
} = {}) {
	const { register, control, isSubmitting, errors, handleSubmit } = useFormHook({
		action: createExerciseAction,
		schema: exerciseFormSchema,
		onSuccess,
	});

	const { fields, replace } = useFieldArray({
		control,
		name: 'exercise.muscles',
	});

	const handleOnMusclesChange = (options: SelectOption[]) => {
		const values = options.map((option) => ({ id: option.value }));
		replace(values);
	};

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		fields,
		handleOnMusclesChange,
	};
}
