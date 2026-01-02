import { BodySectionProps } from '@/modules/bodysection/domain/bodysection.types';

export type MuscularGroupProps = {
	readonly id: number;
	readonly name: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly bodySectionId: BodySectionProps['id'];
};
