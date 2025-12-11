import { z } from 'zod/v4';
import { routineIdRule } from '@/modules/routine/domain/routine.schema';
import { sessionIdRule } from '@/modules/session/domain/session.schema';
import { uuidRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const routineDayIdRule = uuidRule;
const routineDayNameRule = z.string().nonempty();
const routineDayDayNumberRule = z.number().int();

export const RoutineDaySchema = z.object({
	id: routineDayIdRule,
	name: routineDayNameRule,
	dayNumber: routineDayDayNumberRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	routineId: routineIdRule,
	sessionId: sessionIdRule.or(z.null()),
});

export type RoutineDayProps = z.infer<typeof RoutineDaySchema>;

export const NewRoutineDaySchema = z.object({
	id: routineDayIdRule,
	name: routineDayNameRule,
	dayNumber: routineDayDayNumberRule,
	routineId: routineIdRule,
	sessionId: sessionIdRule.or(z.null()),
});

export type NewRoutineDayProps = z.infer<typeof NewRoutineDaySchema>;

export const UpdateRoutineDaySchema = z.object({
	name: routineDayNameRule.optional(),
	dayNumber: routineDayDayNumberRule.optional(),
});

export type UpdateRoutineDayProps = z.infer<typeof UpdateRoutineDaySchema>;
