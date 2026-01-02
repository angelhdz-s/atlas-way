'use client';

import { useFieldArray } from 'react-hook-form';
import { SelectOption } from '@/presentation/modules/form/types';
import { useFormHook } from '@/presentation/modules/form/hooks/useFormHook';
import { sessionFormSchema } from '../config/session-schema';
import { createSessionAction } from '../../session.actions';

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
