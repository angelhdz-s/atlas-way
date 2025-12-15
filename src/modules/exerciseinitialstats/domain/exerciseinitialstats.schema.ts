import { exerciseIdRule } from '@/modules/exercise/domain/exercise.schema';
import { uuidRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';
import { z } from 'zod/v4';

export const exerciseInitialStatsIdRule = uuidRule;

const rules = {
	sets: z.number().int(),
	reps: z.number().int(),
	weight: z.number().int(),
};

export const ExerciseInitialStatsSchema = z.object({
	id: exerciseInitialStatsIdRule,
	sets: rules.reps,
	reps: rules.reps,
	weight: rules.weight,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	exerciseId: exerciseIdRule,
});

export type ExerciseInitialStatsProps = z.infer<typeof ExerciseInitialStatsSchema>;

export const NewExerciseInitialStatsSchema = z.object({
	id: exerciseInitialStatsIdRule,
	sets: rules.reps,
	reps: rules.reps,
	weight: rules.weight,
	exerciseId: exerciseIdRule,
});

export type NewExerciseInitialStatsProps = z.infer<typeof NewExerciseInitialStatsSchema>;

export const UpdateExerciseInitialStatsSchema = z.object({
	sets: rules.reps.optional(),
	reps: rules.reps.optional(),
	weight: rules.weight.optional(),
});

export type UpdateExerciseInitialStatsProps = z.infer<typeof UpdateExerciseInitialStatsSchema>;
