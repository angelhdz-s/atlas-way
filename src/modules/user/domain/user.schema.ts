import { z } from 'zod/v4';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';
import { emailRule } from '@/shared/domain/schemas/primitives';

export const userIdRule = z.uuid();
const userNameRule = z.string().nonempty();

export const UserSchema = z.object({
	id: userIdRule,
	name: userNameRule,
	email: emailRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
});

export type UserProps = z.infer<typeof UserSchema>;

export const NewUserSchema = z.object({
	id: userIdRule,
	name: userNameRule,
	email: emailRule,
});

export type NewUserProps = z.infer<typeof NewUserSchema>;

export const UpdateUserSchema = z.object({
	name: userNameRule.optional(),
	email: emailRule.optional(),
});

export type UpdateUserProps = z.infer<typeof UpdateUserSchema>;
