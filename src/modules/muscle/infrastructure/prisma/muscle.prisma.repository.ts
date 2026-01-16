import { MuscleMapper } from '../muscle.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { IMuscleRepository } from '../../domain/muscle.repository';
import { PrismaClient } from '@/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/globalErrorMapper.container';

export class MusclePrismaRepository implements IMuscleRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async findAll() {
		try {
			const muscles = await this.prisma.muscles.findMany();
			const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
			return Success(domainMuscles);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
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
			return Failure(globalErrorMapper.handle(e));
		}
	}
}
