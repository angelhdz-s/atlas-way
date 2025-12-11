import { z } from 'zod/v4';
import { muscularGroupIdRule } from '@/modules/musculargroup/domain/musculargroup.schema';
import { userIdRule } from '@/modules/user/domain/user.schema';
import { intNumberIdRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const muscleIdRule = intNumberIdRule;
const muscleNameRule = z.string().nonempty();
const muscleDescriptionRule = z.string().nonempty().or(z.null());

export const MuscleSchema = z.object({
	id: muscleIdRule,
	name: muscleNameRule,
	description: muscleDescriptionRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	userId: userIdRule,
	muscularGroupId: muscularGroupIdRule,
});
export type MuscleProps = z.infer<typeof MuscleSchema>;

export const NewMuscleSchema = z.object({
	id: muscleIdRule,
	name: muscleNameRule,
	description: muscleDescriptionRule,
	userId: userIdRule,
	muscularGroupId: muscularGroupIdRule,
});
export type NewMuscleProps = z.infer<typeof NewMuscleSchema>;

export const UpdateMuscleSchema = z.object({
	name: muscleNameRule.optional(),
	description: muscleDescriptionRule.optional(),
});
export type UpdateMuscleProps = z.infer<typeof UpdateMuscleSchema>;
