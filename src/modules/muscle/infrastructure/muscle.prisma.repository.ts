import { prisma } from '@/shared/infrastructure/prisma/client';
import { Muscle, NewMuscle, UpdateMuscle } from '../domain/muscle.entity';
import { IMuscleRepository } from '../domain/muscle.repository';
import { MuscleMapper } from './muscle.mapper';

export class MusclePrismaRepository implements IMuscleRepository {
	async create(data: NewMuscle): Promise<Muscle> {
		const musclePersistance = MuscleMapper.toPersistenceCreate(data);

		const created = await prisma.muscles.create({ data: musclePersistance });

		return MuscleMapper.toDomain(created);
	}
	async update(id: number, data: UpdateMuscle): Promise<Muscle> {
		const musclePersistence = MuscleMapper.toPersistenceUpdate(data);
		const updated = await prisma.muscles.update({
			data: musclePersistence,
			where: {
				id,
			},
		});

		return MuscleMapper.toDomain(updated);
	}
	async findAll(): Promise<Muscle[]> {
		const muscles = await prisma.muscles.findMany();
		const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
		return domainMuscles;
	}
	async findById(id: number): Promise<Muscle | null> {
		const muscle = await prisma.muscles.findUnique({
			where: { id },
		});
		return muscle ? MuscleMapper.toDomain(muscle) : null;
	}
}
