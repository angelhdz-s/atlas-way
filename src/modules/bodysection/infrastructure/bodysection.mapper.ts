import { MuscularGroups, BodySections as PrismaBodySection } from '@/prisma/client';
import {
	BodySection as DomainBodySection,
	BodySectionWithMuscularGroups,
} from '../domain/bodysection.entity';
import { BodySectionProps } from '../domain/bodysection.schema';
import { MuscularGroupMapper } from '@/modules/musculargroup/infrastructure/musculargroup.mapper';

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

	static withMuscularGroupsToDomain(
		data: PrismaBodySection & { muscularGroups: MuscularGroups[] }
	): BodySectionWithMuscularGroups {
		const muscularGroups = data.muscularGroups.map((muscGroup) =>
			MuscularGroupMapper.toDomain(muscGroup)
		);
		const bodySection: BodySectionProps = {
			id: data.id,
			name: data.name,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
		return new BodySectionWithMuscularGroups(bodySection, muscularGroups);
	}
}
