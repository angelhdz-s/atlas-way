import z from 'zod/v4';

export const ExerciseSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	createdAt: z.date(),
	updatedAt: z.date(),
	userId: z.uuid(),
});

export type ExerciseProps = z.infer<typeof ExerciseSchema>;

export const NewExerciseSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	description: z.string().nonempty().or(z.null()),
	userId: z.uuid(),
});

export type NewExerciseProps = z.infer<typeof NewExerciseSchema>;
export const UpdateExerciseSchema = z.object({
	name: z.string().nonempty().optional(),
	description: z.string().nonempty().or(z.null()).optional(),
});

export type UpdateExerciseProps = z.infer<typeof UpdateExerciseSchema>;
