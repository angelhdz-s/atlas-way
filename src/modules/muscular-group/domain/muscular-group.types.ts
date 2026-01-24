import { BodySectionProps } from '@/modules/body-section/domain/body-section.types';

export type MuscularGroupProps = {
	readonly id: number;
	readonly name: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly bodySectionId: BodySectionProps['id'];
};
