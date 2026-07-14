import { sessionTrainingSchema } from '@/modules/tracking/presentation/schemas/session-training.schema';
import type { SessionTrainingForm } from '@/modules/tracking/presentation/tracking.presentation.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
};

export function SessionTrainingFormProvider({ children }: Props) {
  const methods = useForm<SessionTrainingForm>({
    resolver: zodResolver(sessionTrainingSchema),
    shouldUnregister: false,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
