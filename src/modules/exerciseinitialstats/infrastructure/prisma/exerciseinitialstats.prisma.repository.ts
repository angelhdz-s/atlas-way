import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { IExerciseInitialStatsRepository } from '../../domain/exerciseinitialstats.repository';
import { ExerciseInitialStatsMapper } from '../exerciseinitialstats.mapper';
import { ExerciseInitialStats } from '../../domain/exerciseinitialstats.entity';
import { PrismaClient } from '@/prisma/client';

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
		} catch {
			return Failure(new PrismaError("Can't create Exercise Initial Stats"));
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
		} catch {
			return Failure(new PrismaError("Can't update Exercise Initial Stats"));
		}
	}
	async findAll() {
		try {
			const exerciseStats = await this.prisma.exerciseInitialStats.findMany();
			const exerciseStatsDomain = exerciseStats.map((exerciseStats) =>
				ExerciseInitialStatsMapper.toDomain(exerciseStats)
			);

			return Success(exerciseStatsDomain);
		} catch {
			return Failure(new PrismaError("Can't find all Exercise Initial Stats"));
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
		} catch {
			return Failure(new PrismaError("Can't find Exercise Initial Stats by id"));
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
		} catch {
			return Failure(new PrismaError("Can't find Exercise Initial Stats by Exercise id"));
		}
	}
}
