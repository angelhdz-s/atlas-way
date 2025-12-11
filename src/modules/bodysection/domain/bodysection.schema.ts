import { z } from 'zod/v4';
import { intNumberIdRule } from '@/shared/domain/schemas/primitives';
import { createdAtRule, updatedAtRule } from '@/shared/domain/schemas/timestamps';

export const bodySectionIdRule = intNumberIdRule;
const bodySectionNameRule = z.string().nonempty();

export const BodySectionSchema = z.object({
	id: bodySectionIdRule,
	name: bodySectionNameRule,
	createdAt: createdAtRule,
	updatedAt: updatedAtRule,
});

export type BodySectionProps = z.infer<typeof BodySectionSchema>;
