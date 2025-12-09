import z from 'zod/v4';

const sessionIdRule = z.uuid();
const sessionNameRule = z.string().nonempty();
const sessionDescriptionRule = z.string().nonempty().or(z.null());
const sessionCreatedAtRule = z.date();
const sessionUpdatedAtRule = z.date();
const SessionUserIdRule = z.uuid();

export const SessionSchema = z.object({
	id: sessionIdRule,
	name: sessionNameRule,
	description: sessionDescriptionRule,
	createdAt: sessionCreatedAtRule,
	updatedAt: sessionUpdatedAtRule,
	userId: SessionUserIdRule,
});

export type SessionProps = z.infer<typeof SessionSchema>;

export const NewSessionSchema = z.object({
	id: sessionIdRule,
	name: sessionNameRule,
	description: sessionDescriptionRule,
	userId: SessionUserIdRule,
});

export type NewSessionProps = z.infer<typeof NewSessionSchema>;

export const UpdateSessionSchema = z.object({
	name: sessionNameRule.optional(),
	description: sessionDescriptionRule.optional(),
});

export type UpdateSessionProps = z.infer<typeof UpdateSessionSchema>;
