import { prisma } from '@/shared/infrastructure/prisma/client';
import {
	NewExerciseInitialStats,
	ExerciseInitialStats,
	UpdateExerciseInitialStats,
} from '../domain/exerciseinitialstats.entity';
import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';
import { ExerciseInitialStatsMapper } from './exerciseinitialstats.mapper';

export class ExerciseInitialStatsPrismaRepository implements IExerciseInitialStats {
	async create(data: NewExerciseInitialStats): Promise<ExerciseInitialStats> {
		const exerciseStatsPersistence = ExerciseInitialStatsMapper.toPersistenceCreate(data);
		const created = await prisma.exerciseInitialStats.create({
			data: exerciseStatsPersistence,
		});

		return new ExerciseInitialStats(created);
	}
	async update(
		id: ExerciseInitialStats['id'],
		data: UpdateExerciseInitialStats
	): Promise<ExerciseInitialStats> {
		const exerciseStatsPersistence = ExerciseInitialStatsMapper.toPersistenceUpdate(data);
		const updated = await prisma.exerciseInitialStats.update({
			data: exerciseStatsPersistence,
			where: { id },
		});

		return new ExerciseInitialStats(updated);
	}
	async findAll(): Promise<ExerciseInitialStats[]> {
		const exerciseStats = await prisma.exerciseInitialStats.findMany();
		const exerciseStatsDomain = exerciseStats.map((exerciseStats) =>
			ExerciseInitialStatsMapper.toDomain(exerciseStats)
		);

		return exerciseStatsDomain;
	}
	async findById(id: ExerciseInitialStats['id']): Promise<ExerciseInitialStats | null> {
		const exerciseStats = await prisma.exerciseInitialStats.findUnique({
			where: { id },
		});
		return exerciseStats ? ExerciseInitialStatsMapper.toDomain(exerciseStats) : null;
	}
	async findByExerciseId(
		exerciseId: ExerciseInitialStats['exerciseId']
	): Promise<ExerciseInitialStats | null> {
		const exerciseStats = await prisma.exerciseInitialStats.findUnique({
			where: { exerciseId },
		});
		return exerciseStats ? ExerciseInitialStatsMapper.toDomain(exerciseStats) : null;
	}
}
