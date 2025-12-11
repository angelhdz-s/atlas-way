import { z } from 'zod/v4';
import { userIdRule } from '@/modules/user/domain/user.schema';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';
import { uuidRule } from '@/shared/domain/schemas/primitives';

export const routineIdRule = uuidRule;
const routineNameRule = z.string().nonempty();
const routineDescriptionRule = z.string().nonempty().or(z.null());
const routineActiveRule = z.boolean();
const routineDaysRule = z.number().int();
const routineInitialDateRule = z.date();

export const RoutineSchema = z.object({
	id: routineIdRule,
	name: routineNameRule,
	description: routineDescriptionRule,
	active: routineActiveRule,
	days: routineDaysRule,
	initialDate: routineInitialDateRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	userId: userIdRule,
	routineCycleId: z.string().nonempty(),
});

export type RoutineProps = z.infer<typeof RoutineSchema>;

export const NewRoutineSchema = z.object({
	id: routineIdRule,
	name: routineNameRule,
	description: routineDescriptionRule,
	active: routineActiveRule,
	days: routineDaysRule,
	initialDate: routineInitialDateRule,
	userId: userIdRule,
	routineCycleId: z.string().nonempty(),
});

export type NewRoutineProps = z.infer<typeof NewRoutineSchema>;

export const UpdateRoutineSchema = z.object({
	name: routineNameRule.optional(),
	description: routineDescriptionRule.optional(),
	active: routineActiveRule.optional(),
	days: routineDaysRule.optional(),
	initialDate: routineInitialDateRule.optional(),
});

export type UpdateRoutineProps = z.infer<typeof UpdateRoutineSchema>;
