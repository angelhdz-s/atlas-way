import { Prisma, Muscles as PrismaMuscle } from '@/prisma/client';
import { Muscle as DomainMuscle, Muscle, NewMuscle, UpdateMuscle } from '../domain/muscle.entity';
import { MuscleProps } from '../domain/muscle.schema';

export class MuscleMapper {
	static toDomain(data: PrismaMuscle): DomainMuscle {
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

	static toPersistenceCreate(data: NewMuscle): Prisma.MusclesCreateManyInput {
		return {
			muscularGroupId: data.muscularGroupId,
			userId: data.userId,
			name: data.name,
			description: data.description,
		};
	}
	static toPersistenceUpdate(data: UpdateMuscle): Prisma.MusclesUpdateInput {
		const muscle: Prisma.MusclesUpdateInput = {};

		if (data.description) muscle.description = data.description;
		if (data.name) muscle.name = data.name;
		return muscle;
	}
}
