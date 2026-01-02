'use client';

import { useEffect, useRef, useState } from 'react';
import { ActionResponseType } from '@/presentation/globals/types';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { TypeOf, ZodSchema } from 'zod/v3';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type ModalFormHookProps<T extends ZodSchema<any, any>> = {
	action: (data: TypeOf<T>) => Promise<ActionResponseType>;
	schema: T;
	onSuccess?: () => void;
	successToast?: boolean;
};
export function useFormHook<Schema extends ZodSchema<any, any>>({
	action,
	schema,
	onSuccess,
	successToast = true,
}: ModalFormHookProps<Schema>) {
	const [state, setState] = useState<ActionResponseType | null>(null);
	const isAlreadySuccess = useRef(false);
	const { addToast } = useToast();

	const {
		control,
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<TypeOf<Schema>>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: TypeOf<Schema>) => {
		const result = await action(data);
		setState(result);
		if (result.success) {
			onSuccess?.();
		}
	};

	const handleSubmitWrapper = handleSubmit(onSubmit);

	useEffect(() => {
		if (!state || !state.success) return;
		if (isAlreadySuccess.current) return;
		isAlreadySuccess.current = true;
	}, [state, isAlreadySuccess]);

	useEffect(() => {
		if (!successToast) return;
		if (!state) return;
		const toastType = state.success ? 'success' : 'error';
		addToast(state.message, { type: toastType });
	}, [successToast, state, addToast]);

	return {
		register,
		errors,
		handleSubmit: handleSubmitWrapper,
		control,
		isSubmitting,
	};
}
