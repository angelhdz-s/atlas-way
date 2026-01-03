'use client';

import { useFieldArray } from 'react-hook-form';
import { SelectOption } from '@/presentation/modules/form/types';
import { useFormHook } from '@/presentation/modules/form/hooks/useFormHook';
import { ExerciseFormSchema } from '../schemas/exercise.schema';
import { createExerciseAction } from '@/modules/exercise/presentation/exercise.actions';
export function useExerciseForm({
	onSuccess,
}: {
	onSuccess?: () => void;
} = {}) {
	const { register, control, isSubmitting, errors, handleSubmit } = useFormHook({
		action: createExerciseAction,
		schema: ExerciseFormSchema,
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
