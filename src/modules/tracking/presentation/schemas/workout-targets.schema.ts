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

export const workoutTargetsSchema = z.object({
  exercises: z.array(exerciseMetricsSchema),
  workoutId: z.string().uuid(),
});

export type WorkoutTargetsForm = z.infer<typeof workoutTargetsSchema>;
