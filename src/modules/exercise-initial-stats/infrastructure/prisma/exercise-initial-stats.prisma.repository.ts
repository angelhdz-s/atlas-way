import { Failure, Success } from '@/shared/domain/result';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import { ExerciseInitialStatsMapper } from '../exercise-initial-stats.mapper';
import { ExerciseInitialStats } from '../../domain/exercise-initial-stats.entity';
import { PrismaClient } from '@/prisma/client';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class ExerciseInitialStatsPrismaRepository implements IExerciseInitialStatsRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: InfrastructureErrorTranslator
	) {}
	async create(data: ExerciseInitialStats) {
		const exerciseStatsPersistence = ExerciseInitialStatsMapper.toPersistence(data);
		try {
			const created = await this.prisma.exerciseInitialStats.create({
				data: exerciseStatsPersistence,
			});
			const result = new ExerciseInitialStats(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async update(data: ExerciseInitialStats) {
		const exerciseStatsPersistence = ExerciseInitialStatsMapper.toPersistence(data);
		try {
			const updated = await this.prisma.exerciseInitialStats.update({
				data: exerciseStatsPersistence,
				where: { id: exerciseStatsPersistence.id },
			});

			const result = new ExerciseInitialStats(updated);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findAll() {
		try {
			const exerciseStats = await this.prisma.exerciseInitialStats.findMany();
			const exerciseStatsDomain = exerciseStats.map((exerciseStats) =>
				ExerciseInitialStatsMapper.toDomain(exerciseStats)
			);

			return Success(exerciseStatsDomain);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findById(id: ExerciseInitialStats['id']) {
		try {
			const exerciseStats = await this.prisma.exerciseInitialStats.findUnique({
				where: { id },
			});
			const result = exerciseStats
				? ExerciseInitialStatsMapper.toDomain(exerciseStats)
				: null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findByExerciseId(exerciseId: ExerciseInitialStats['exerciseId']) {
		try {
			const exerciseStats = await this.prisma.exerciseInitialStats.findUnique({
				where: { exerciseId },
			});
			const result = exerciseStats
				? ExerciseInitialStatsMapper.toDomain(exerciseStats)
				: null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
}
