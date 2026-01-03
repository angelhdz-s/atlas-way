import { Muscles as PrismaMuscle } from '@/prisma/client';
import { MuscleProps } from '../domain/muscle.types';
import { Muscle } from '../domain/muscle.entity';
import { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';

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

	static toPersistence(data: Muscle): PrismaMuscle {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
			muscularGroupId: data.muscularGroupId,
		};
	}

	static toDTO(data: Muscle): MuscleDTO {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
		};
	}
}
