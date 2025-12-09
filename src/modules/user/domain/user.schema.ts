import z from 'zod/v4';

export const UserSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	email: z.email(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type UserProps = z.infer<typeof UserSchema>;

export const NewUserSchema = z.object({
	id: z.uuid(),
	name: z.string().nonempty(),
	email: z.email(),
});

export type NewUserProps = z.infer<typeof NewUserSchema>;

export const UpdateUserSchema = z.object({
	name: z.string().nonempty().optional(),
	email: z.email().optional(),
});

export type UpdateUserProps = z.infer<typeof UpdateUserSchema>;
