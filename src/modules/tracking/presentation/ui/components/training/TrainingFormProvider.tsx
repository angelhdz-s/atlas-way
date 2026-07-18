import {
  trainingSetSchema,
  type TrainingSetForm,
} from '@/modules/tracking/presentation/schemas/training.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
};

export function TrainingFormProvider({ children }: Props) {
  const methods = useForm<TrainingSetForm>({
    resolver: zodResolver(trainingSetSchema),
    shouldUnregister: false,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
