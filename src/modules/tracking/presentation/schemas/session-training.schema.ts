import z from 'zod/v3';

export const sessionTrainingSetSchema = z.object({
  set: z.number().min(1),
  reps: z.number({ message: "Reps can't be empty" }).min(1),
  weight: z.number({ message: "Repeats in reserve can't be empty" }).min(0),
  rir: z.number({ message: "Weight can't be empty" }).min(0),
  status: z.enum(['PENDING', 'COMPLETED', 'IN_PROGRESS']),
});

export type SessionTrainingSetForm = z.infer<typeof sessionTrainingSetSchema>;

export const sessionTrainingSchema = z.object({
  exercises: z.array(
    z.object({
      exerciseId: z.string().uuid(),
      status: z.enum(['PENDING', 'COMPLETED', 'IN_PROGRESS']),
      sets: z.array(sessionTrainingSetSchema),
    })
  ),
});

export type SessionTrainingForm = z.infer<typeof sessionTrainingSchema>;
