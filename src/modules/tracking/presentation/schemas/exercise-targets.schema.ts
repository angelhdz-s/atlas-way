import { ExerciseSchema } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import z from 'zod/v3';

export const exerciseMetricsSchema = ExerciseSchema.pick({
  reps: true,
  sets: true,
  weight: true,
}).merge(
  z.object({
    exerciseId: z.string().uuid(),
    order: z.number().int(),
  })
);

export const exerciseTargetsSchema = z.object({
  exercises: z.array(exerciseMetricsSchema),
  trainingId: z.string().uuid(),
});

export type ExerciseTargetsForm = z.infer<typeof exerciseTargetsSchema>;
