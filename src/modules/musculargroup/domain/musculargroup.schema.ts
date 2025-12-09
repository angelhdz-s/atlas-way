import z from 'zod/v4';

export const MuscularGroupSchema = z.object({
	id: z.number().int(),
	name: z.string().nonempty(),
	createdAt: z.date(),
	updatedAt: z.date(),
	bodySectionId: z.number().int(),
});

export type MuscularGroupProps = z.infer<typeof MuscularGroupSchema>;
