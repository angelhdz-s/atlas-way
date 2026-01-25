import { MuscleMapper } from '../muscle.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { IMuscleRepository } from '../../domain/muscle.repository';
import { PrismaClient } from '@/prisma/client';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class MusclePrismaRepository implements IMuscleRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: InfrastructureErrorTranslator
	) {}
	async findAll() {
		try {
			const muscles = await this.prisma.muscles.findMany();
			const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
			return Success(domainMuscles);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
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
			return Failure(this.errorMapper.translate(e));
		}
	}
}
