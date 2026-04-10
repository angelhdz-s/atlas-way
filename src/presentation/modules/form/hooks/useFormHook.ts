'use client';

import { useEffect, useRef, useState } from 'react';
import type { TypeOf, ZodSchema } from 'zod/v3';
import { useForm } from 'react-hook-form';
import type { ActionResponseType } from '@/presentation/globals/presentation.types';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
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

  const methods = useForm<TypeOf<Schema>>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: TypeOf<Schema>) => {
    if (isSubmitting) return;
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
  }, [state]);

  useEffect(() => {
    if (!successToast) return;
    if (!state) return;
    const toastType = state.success ? 'success' : 'error';
    addToast(state.message, { type: toastType });
  }, [successToast, state, addToast]);

  return {
    methods,
    handleSubmit: handleSubmitWrapper,
  };
}
