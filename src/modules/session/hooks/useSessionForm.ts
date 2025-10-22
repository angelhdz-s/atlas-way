'use client';

import { createSessionAction } from '@/modules/session/actions/create-session';
import { useFieldArray } from 'react-hook-form';
import { SelectOption } from '@/modules/form/types';
import { useFormHook } from '@/modules/form/hooks/useFormHook';
import { sessionFormSchema } from '../config/session-schema';

export function useSessionForm({
	onSuccess,
}: {
	onSuccess?: () => void;
} = {}) {
	const { register, isSubmitting, handleSubmit, errors, control } = useFormHook({
		action: createSessionAction,
		schema: sessionFormSchema,
		onSuccess: onSuccess,
	});

	const { fields, replace } = useFieldArray({
		control,
		name: 'exercises',
	});

	const handleOnExercisesChange = (options: SelectOption[]) => {
		const exerciseId = options.map((option) => ({ id: option.value }));
		replace(exerciseId);
	};

	return {
		isSubmitting,
		register,
		errors,
		handleSubmit,
		fields,
		handleOnExercisesChange,
	};
}
