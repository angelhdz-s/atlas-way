import { BodySections as PrismaBodySection } from '@/prisma/client';
import { BodySection } from '../domain/bodysection.entity';
import { BodySectionProps } from '../domain/bodysection.types';

export class BodySectionMapper {
	static toDomain(data: PrismaBodySection): BodySection {
		const bodySection: BodySectionProps = {
			id: data.id,
			name: data.name,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
		return new BodySection(bodySection);
	}
}
