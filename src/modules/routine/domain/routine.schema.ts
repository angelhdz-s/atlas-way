import z from 'zod/v4';

export const RoutineSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	active: z.boolean(),
	days: z.number().int(),
	initialDate: z.date(),
	createdAt: z.date(),
	updatedAt: z.date(),
	userId: z.uuid(),
	routineCycleId: z.string().nonempty(),
});

export type RoutineProps = z.infer<typeof RoutineSchema>;

export const NewRoutineSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	active: z.boolean(),
	days: z.number().int(),
	initialDate: z.date(),
	userId: z.uuid(),
	routineCycleId: z.string().nonempty(),
});

export type NewRoutineProps = z.infer<typeof NewRoutineSchema>;

export const UpdateRoutineSchema = z.object({
	name: z.string().nonempty().optional(),
	description: z.string().nonempty().or(z.null()).optional(),
	active: z.boolean().optional(),
	days: z.number().int().optional(),
	initialDate: z.date().optional(),
});

export type UpdateRoutineProps = z.infer<typeof UpdateRoutineSchema>;
