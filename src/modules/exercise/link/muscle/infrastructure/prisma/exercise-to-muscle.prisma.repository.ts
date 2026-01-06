import { Failure, Success } from '@/shared/domain/result';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { PrismaClient } from '@/prisma/client';
import { IExerciseToMuscleRepository } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.repository';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';
import { ExerciseToMuscleMapper } from '@/modules/exercise/link/muscle/infrastructure/exercise-to-muscle.mapper';

export class ExerciseToMusclePrismaRepository implements IExerciseToMuscleRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async create(data: ExerciseToMuscle) {
		const exercisePersistence = ExerciseToMuscleMapper.toPersistence(data);
		try {
			const created = await this.prisma.exercisesToMuscles.create({
				data: exercisePersistence,
			});
			const result = ExerciseToMuscleMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create relation Exercise-Muscle"));
		}
	}
	async findAll() {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany();
			const domainExercises = exercises.map((exercise) =>
				ExerciseToMuscleMapper.toDomain(exercise)
			);
			return Success(domainExercises);
		} catch {
			return Failure(new PrismaError("Can't create find all relations Exercise-Muscle"));
		}
	}
	async findByExerciseId(exerciseId: ExerciseToMuscle['exerciseId']) {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany({
				where: { exerciseId },
			});
			const result = exercises.map((exercise) => ExerciseToMuscleMapper.toDomain(exercise));
			return Success(result);
		} catch {
			return Failure(new PrismaError('Unavailable fetching service'));
		}
	}
	async findByMuscleId(muscleId: ExerciseToMuscle['muscleId']) {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany({
				where: { muscleId },
			});
			const result = exercises.map((exercise) => ExerciseToMuscleMapper.toDomain(exercise));
			return Success(result);
		} catch {
			return Failure(new PrismaError('Unavailable fetching service'));
		}
	}

	async findByExerciseAndMuscleId({
		exerciseId,
		muscleId,
	}: {
		exerciseId: ExerciseToMuscle['exerciseId'];
		muscleId: ExerciseToMuscle['muscleId'];
	}) {
		try {
			const exercise = await this.prisma.exercisesToMuscles.findUnique({
				where: {
					exerciseId_muscleId: {
						exerciseId,
						muscleId,
					},
				},
			});
			const result = exercise ? ExerciseToMuscleMapper.toDomain(exercise) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError('Unavailable fetching service'));
		}
	}
}
