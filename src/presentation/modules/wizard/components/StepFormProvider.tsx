import { FormProvider, useForm } from 'react-hook-form';

type Props<FormValues> = {
  children: React.ReactNode;
  defaultValues: Record<string, FormValues[]>;
};

export function StepFormProvider<FormValues>({ children, defaultValues }: Props<FormValues>) {
  const methods = useForm<Props<FormValues>['defaultValues']>({
    defaultValues,
    mode: 'onTouched',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
