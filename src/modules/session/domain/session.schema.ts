import { z } from 'zod/v4';
import { userIdRule } from '@/modules/user/domain/user.schema';
import { uuidRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const sessionIdRule = uuidRule;
const sessionNameRule = z.string().nonempty();
const sessionDescriptionRule = z.string().nonempty().or(z.null());

export const SessionSchema = z.object({
	id: sessionIdRule,
	name: sessionNameRule,
	description: sessionDescriptionRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	userId: userIdRule,
});

export type SessionProps = z.infer<typeof SessionSchema>;

export const NewSessionSchema = z.object({
	id: sessionIdRule,
	name: sessionNameRule,
	description: sessionDescriptionRule,
	userId: userIdRule,
});

export type NewSessionProps = z.infer<typeof NewSessionSchema>;

export const UpdateSessionSchema = z.object({
	name: sessionNameRule.optional(),
	description: sessionDescriptionRule.optional(),
});

export type UpdateSessionProps = z.infer<typeof UpdateSessionSchema>;
