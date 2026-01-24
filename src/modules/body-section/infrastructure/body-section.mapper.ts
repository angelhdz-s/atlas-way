import { BodySections as PrismaBodySection } from '@/prisma/client';
import { BodySection } from '../domain/body-section.entity';
import { BodySectionProps } from '../domain/body-section.types';
import { BodySectionDTO } from '../application/dtos/body-section.dto';

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

	static toDTO(data: BodySection): BodySectionDTO {
		return {
			id: data.id,
			name: data.name,
		};
	}
}
