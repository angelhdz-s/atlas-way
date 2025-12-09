import { BodySections as PrismaBodySection } from '@/prisma/client';
import { BodySection as DomainBodySection } from '../domain/bodysection.entity';
import { BodySectionProps } from '../domain/bodysection.schema';

export class BodySectionMapper {
	static toDomain(data: PrismaBodySection): DomainBodySection {
		const bodySection: BodySectionProps = {
			id: data.id,
			name: data.name,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
		return new DomainBodySection(bodySection);
	}
}
