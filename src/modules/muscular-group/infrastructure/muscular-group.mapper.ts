import { MuscularGroups as PrismaMuscularGroup } from '@/prisma/client';
import { MuscularGroup as DomainMuscularGroup } from '../domain/muscular-group.entity';
import { MuscularGroupProps } from '../domain/muscular-group.types';

export class MuscularGroupMapper {
	static toDomain(data: PrismaMuscularGroup): DomainMuscularGroup {
		const muscularGroup: MuscularGroupProps = {
			id: data.id,
			name: data.name,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			bodySectionId: data.bodySectionId,
		};

		return new DomainMuscularGroup(muscularGroup);
	}
}
