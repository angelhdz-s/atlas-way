import { z } from 'zod/v4';
import { userIdRule } from '@/modules/user/domain/user.schema';
import { uuidRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const exerciseIdRule = uuidRule;
const exerciseNameRule = z.string().nonempty();
const exerciseDescriptionRule = z.string().nonempty().or(z.null());

export const ExerciseSchema = z.object({
	id: exerciseIdRule,
	name: exerciseNameRule,
	description: exerciseDescriptionRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	userId: userIdRule,
});
export type ExerciseProps = z.infer<typeof ExerciseSchema>;

export const NewExerciseSchema = z.object({
	id: exerciseIdRule,
	name: exerciseNameRule,
	description: exerciseDescriptionRule,
	userId: userIdRule,
});
export type NewExerciseProps = z.infer<typeof NewExerciseSchema>;

export const UpdateExerciseSchema = z.object({
	name: exerciseNameRule.optional(),
	description: exerciseDescriptionRule.optional(),
});
export type UpdateExerciseProps = z.infer<typeof UpdateExerciseSchema>;
