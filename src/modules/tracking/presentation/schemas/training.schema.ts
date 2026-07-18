import z from 'zod/v3';

export const trainingSetSchema = z.object({
  id: z.string().uuid().optional(),
  trainingId: z.string().uuid(),
  exerciseId: z.string().uuid(),
  set: z.number().min(1),
  reps: z.number({ message: "Reps can't be empty" }).min(1),
  weight: z.number({ message: "Repeats in reserve can't be empty" }).min(0),
  rir: z.number({ message: "Weight can't be empty" }).min(0),
});

export type TrainingSetForm = z.infer<typeof trainingSetSchema>;
