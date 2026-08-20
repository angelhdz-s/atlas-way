'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import type { ZodSchema } from 'zod/v3';

type Props<FormValues, Schema extends ZodSchema<any, any>> = {
  children: React.ReactNode;
  defaultValues: Record<string, FormValues>;
  schema: Schema;
};

export function StepFormProvider<FormValues, Schema extends ZodSchema<any, any>>({
  children,
  defaultValues,
  schema,
}: Props<FormValues, Schema>) {
  const methods = useForm<Props<FormValues, Schema>['defaultValues']>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onTouched',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
