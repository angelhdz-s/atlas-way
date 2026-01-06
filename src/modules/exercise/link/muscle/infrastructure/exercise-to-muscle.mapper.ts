import { ExercisesToMuscles as PrismaExerciseToMuscle } from '@/prisma/client';
import { ExerciseToMuscleDTO } from '../application/dtos/exercise-to-muscle.dto';
import { ExerciseToMuscle } from '../domain/exercise-to-muscle.entity';
import { ExerciseToMuscleProps } from '../domain/exercise-to-muscle.types';

export class ExerciseToMuscleMapper {
	static toDomain(data: PrismaExerciseToMuscle): ExerciseToMuscle {
		const exerciseToMuscleProps: ExerciseToMuscleProps = {
			exerciseId: data.exerciseId,
			muscleId: data.muscleId,
			createdAt: data.createdAt,
		};
		return new ExerciseToMuscle(exerciseToMuscleProps);
	}

	static toPersistence(data: ExerciseToMuscle): PrismaExerciseToMuscle {
		return {
			exerciseId: data.exerciseId,
			muscleId: data.muscleId,
			createdAt: data.createdAt,
		};
	}

	static toDTO(data: ExerciseToMuscle): ExerciseToMuscleDTO {
		return {
			createdAt: data.createdAt,
		};
	}
}
