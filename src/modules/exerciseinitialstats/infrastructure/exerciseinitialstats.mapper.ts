import { ExerciseInitialStats as PrismaExerciseInitialStats } from '@/prisma/client';
import { ExerciseInitialStats } from '../domain/exerciseinitialstats.entity';
import { ExerciseInitialStatsProps } from '../domain/exerciseinitialstats.types';
import { ExerciseInitialStatsDTO } from '../application/dtos/exercise-initial-stats.dto';

export class ExerciseInitialStatsMapper {
	static toDomain(data: PrismaExerciseInitialStats): ExerciseInitialStats {
		const exerciseStats: ExerciseInitialStatsProps = {
			id: data.id,
			sets: data.sets,
			reps: data.reps,
			weight: data.weight,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			exerciseId: data.exerciseId,
		};

		return new ExerciseInitialStats(exerciseStats);
	}

	static toPersistence(data: ExerciseInitialStats): PrismaExerciseInitialStats {
		return {
			id: data.id,
			sets: data.sets,
			reps: data.reps,
			weight: data.weight,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			exerciseId: data.exerciseId,
		};
	}

	static toDTO(data: ExerciseInitialStats): ExerciseInitialStatsDTO {
		return {
			sets: data.sets,
			reps: data.reps,
			weight: data.weight,
		};
	}
}
