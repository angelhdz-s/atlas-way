import z from 'zod/v3';

export const workoutSetSchema = z.object({
  id: z.string().uuid().optional(),
  workoutId: z.string().uuid(),
  set: z.number().min(1),
  reps: z.number({ message: "Reps can't be empty" }).min(1),
  weight: z.number({ message: "Repeats in reserve can't be empty" }).min(0),
  rir: z.number({ message: "Weight can't be empty" }).min(0),
});

export type WorkoutSetForm = z.infer<typeof workoutSetSchema>;

export const workoutSetFormSchema = z.record(workoutSetSchema);

export type WorkoutForm = z.infer<typeof workoutSetFormSchema>;
