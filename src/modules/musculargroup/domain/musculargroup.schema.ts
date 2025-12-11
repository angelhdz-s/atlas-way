import { z } from 'zod/v4';
import { bodySectionIdRule } from '@/modules/bodysection/domain/bodysection.schema';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const muscularGroupIdRule = z.number().int();
const muscularGroupNameRule = z.string().nonempty();

export const MuscularGroupSchema = z.object({
	id: muscularGroupIdRule,
	name: muscularGroupNameRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
	bodySectionId: bodySectionIdRule,
});
export type MuscularGroupProps = z.infer<typeof MuscularGroupSchema>;
