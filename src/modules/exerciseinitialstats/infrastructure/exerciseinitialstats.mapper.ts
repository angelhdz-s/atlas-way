import { Prisma, ExerciseInitialStats as PrismaExerciseInitialStats } from '@/prisma/client';
import {
	ExerciseInitialStats as DomainPrismaExerciseInitialStats,
	NewExerciseInitialStats,
	UpdateExerciseInitialStats,
} from '../domain/exerciseinitialstats.entity';
import {
	ExerciseInitialStatsProps,
	UpdateExerciseInitialStatsProps,
} from '../domain/exerciseinitialstats.schema';

export class ExerciseInitialStatsMapper {
	static toDomain(data: PrismaExerciseInitialStats): DomainPrismaExerciseInitialStats {
		const exerciseStats: ExerciseInitialStatsProps = {
			id: data.id,
			sets: data.sets,
			reps: data.reps,
			weight: data.weight,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			exerciseId: data.exerciseId,
		};

		return new DomainPrismaExerciseInitialStats(exerciseStats);
	}

	static toPersistenceCreate(
		data: NewExerciseInitialStats
	): Prisma.ExerciseInitialStatsCreateManyInput {
		return {
			id: data.id,
			sets: data.sets,
			reps: data.reps,
			weight: data.weight,
			exerciseId: data.exerciseId,
		};
	}

	static toPersistenceUpdate(
		data: UpdateExerciseInitialStats
	): Prisma.ExerciseInitialStatsUpdateInput {
		const exerciseStats: UpdateExerciseInitialStatsProps = {};

		if (data.sets) exerciseStats.sets = data.sets;
		if (data.reps) exerciseStats.reps = data.reps;
		if (data.weight) exerciseStats.weight = data.weight;

		return exerciseStats;
	}
}
