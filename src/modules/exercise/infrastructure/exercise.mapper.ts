import { Prisma, Exercises as PrismaExercise } from '@/prisma/client';
import {
	Exercise as DomainExercise,
	Exercise,
	NewExercise,
	UpdateExercise,
} from '../domain/exercise.entity';
import { ExerciseProps } from '../domain/exercise.schema';

export class ExerciseMapper {
	static toDomain(data: PrismaExercise): DomainExercise {
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
	static toPersistenceCreate(data: NewExercise): Prisma.ExercisesCreateManyInput {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			userId: data.userId,
		};
	}
	static toPersistenceUpdate(data: UpdateExercise): Prisma.ExercisesUpdateInput {
		const exercise: Prisma.ExercisesUpdateInput = {};

		if (data.description) exercise.description = data.description;
		if (data.name) exercise.name = data.name;

		return exercise;
	}
}
