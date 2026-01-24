import { MuscleMapper } from '../muscle.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { IMuscleRepository } from '../../domain/muscle.repository';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/errors/error.mapper';

export class MusclePrismaRepository implements IMuscleRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
	) {}
	async findAll() {
		try {
			const muscles = await this.prisma.muscles.findMany();
			const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
			return Success(domainMuscles);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: number) {
		try {
			const muscle = await this.prisma.muscles.findUnique({
				where: { id },
			});
			const result = muscle ? MuscleMapper.toDomain(muscle) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
