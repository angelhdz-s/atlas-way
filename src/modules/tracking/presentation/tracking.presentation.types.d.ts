import type {
  sessionTrainingSchema,
  sessionTrainingSetSchema,
} from '@/modules/tracking/presentation/schemas/session-training.schema';
import type z from 'zod/v3';

export type SessionTrainingForm = z.infer<typeof sessionTrainingSchema>;
export type SessionTrainingSetForm = z.infer<typeof sessionTrainingSetSchema>;
