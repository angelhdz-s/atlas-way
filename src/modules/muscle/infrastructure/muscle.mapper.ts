import { Muscles as PrismaMuscle } from '@/prisma/client';
import { MuscleProps } from '../domain/muscle.types';
import { Muscle } from '../domain/muscle.entity';

export class MuscleMapper {
	static toDomain(data: PrismaMuscle): Muscle {
		const muscle: MuscleProps = {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
			muscularGroupId: data.muscularGroupId,
		};
		return new Muscle(muscle);
	}
}
