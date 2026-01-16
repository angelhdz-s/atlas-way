import { Failure, Success } from '@/shared/domain/result';
import { IExerciseInitialStatsRepository } from '../../domain/exerciseinitialstats.repository';
import { ExerciseInitialStatsMapper } from '../exerciseinitialstats.mapper';
import { ExerciseInitialStats } from '../../domain/exerciseinitialstats.entity';
import { PrismaClient } from '@/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/globalErrorMapper.container';

export class ExerciseInitialStatsPrismaRepository implements IExerciseInitialStatsRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async create(data: ExerciseInitialStats) {
		const exerciseStatsPersistence = ExerciseInitialStatsMapper.toPersistence(data);
		try {
			const created = await this.prisma.exerciseInitialStats.create({
				data: exerciseStatsPersistence,
			});
			const result = new ExerciseInitialStats(created);
			return Success(result);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
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
			return Failure(globalErrorMapper.handle(e));
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
			return Failure(globalErrorMapper.handle(e));
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
			return Failure(globalErrorMapper.handle(e));
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
			return Failure(globalErrorMapper.handle(e));
		}
	}
}
