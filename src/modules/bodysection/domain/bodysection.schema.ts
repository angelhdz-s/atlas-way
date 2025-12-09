import z from 'zod/v4';

export const BodySectionSchema = z.object({
	id: z.number().int(),
	name: z.string().nonempty(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type BodySectionProps = z.infer<typeof BodySectionSchema>;
