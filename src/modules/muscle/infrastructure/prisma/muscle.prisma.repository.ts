import { MuscleMapper } from '../muscle.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { IMuscleRepository } from '../../domain/muscle.repository';
import { PrismaClient } from '@/prisma/client';

export class MusclePrismaRepository implements IMuscleRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async findAll() {
		try {
			const muscles = await this.prisma.muscles.findMany();
			const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
			return Success(domainMuscles);
		} catch {
			return Failure(new PrismaError("Can't find all Muscles"));
		}
	}
	async findById(id: number) {
		try {
			const muscle = await this.prisma.muscles.findUnique({
				where: { id },
			});
			const result = muscle ? MuscleMapper.toDomain(muscle) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't find Muscle by id"));
		}
	}
}
