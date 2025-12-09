import z from 'zod/v4';

export const MuscleSchema = z.object({
	id: z.number().int(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	userId: z.string().nonempty(),
	muscleGroupId: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type MuscleProps = z.infer<typeof MuscleSchema>;

export const NewMuscleSchema = z.object({
	id: z.number().int(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	userId: z.string().nonempty(),
	muscleGroupId: z.number().int(),
});

export type NewMuscleProps = z.infer<typeof NewMuscleSchema>;

export const UpdateMuscleSchema = z.object({
	name: z.string().nonempty().optional(),
	description: z.string().nonempty().or(z.null()).optional(),
});

export type UpdateMuscleProps = z.infer<typeof UpdateMuscleSchema>;
