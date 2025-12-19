import {
	ExerciseInitialStats as PrismaExerciseInitialStats,
	Prisma,
	Exercises as PrismaExercise,
} from '@/prisma/client';
import { Exercise } from '../domain/exercise.entity';
import { ExerciseProps } from '../domain/exercise.types';

export class ExerciseMapper {
	static toDomain(data: PrismaExercise): Exercise {
		const props: ExerciseProps = {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
		};

		return new Exercise(props);
	}
	static toPersistence(data: Exercise): PrismaExercise {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			userId: data.userId,
		};
	}
}
