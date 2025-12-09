import z from 'zod/v4';

const routineDayIdRule = z.uuid();
const routineDayNameRule = z.string().nonempty();
const routineDayDayNumberRule = z.number().int();
const routineDayCreatedAtRule = z.date();
const routineDayUpdatedAtRule = z.date();
const routineDayRoutineIdRule = z.uuid();
const routineDaySessionIdRule = z.uuid().or(z.null());

export const RoutineDaySchema = z.object({
	id: routineDayIdRule,
	name: routineDayNameRule,
	dayNumber: routineDayDayNumberRule,
	createdAt: routineDayCreatedAtRule,
	updatedAt: routineDayUpdatedAtRule,
	routineId: routineDayRoutineIdRule,
	sessionId: routineDaySessionIdRule,
});

export type RoutineDayProps = z.infer<typeof RoutineDaySchema>;

export const NewRoutineDaySchema = z.object({
	id: routineDayIdRule,
	name: routineDayNameRule,
	dayNumber: routineDayDayNumberRule,
	routineId: routineDayRoutineIdRule,
	sessionId: routineDaySessionIdRule,
});

export type NewRoutineDayProps = z.infer<typeof NewRoutineDaySchema>;

export const UpdateRoutineDaySchema = z.object({
	name: routineDayNameRule.optional(),
	dayNumber: routineDayDayNumberRule.optional(),
});

export type UpdateRoutineDayProps = z.infer<typeof UpdateRoutineDaySchema>;
