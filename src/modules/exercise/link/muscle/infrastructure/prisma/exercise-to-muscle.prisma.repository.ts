import { Failure, Success } from '@/shared/domain/result';
import { PrismaClient } from '@/prisma/client';
import { IExerciseToMuscleRepository } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.repository';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';
import { ExerciseToMuscleMapper } from '@/modules/exercise/link/muscle/infrastructure/exercise-to-muscle.mapper';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class ExerciseToMusclePrismaRepository implements IExerciseToMuscleRepository {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: InfrastructureErrorTranslator
	) {}
	async create(data: ExerciseToMuscle) {
		const exercisePersistence = ExerciseToMuscleMapper.toPersistence(data);
		try {
			const created = await this.prisma.exercisesToMuscles.create({
				data: exercisePersistence,
			});
			const result = ExerciseToMuscleMapper.toDomain(created);
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findAll() {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany();
			const domainExercises = exercises.map((exercise) =>
				ExerciseToMuscleMapper.toDomain(exercise)
			);
			return Success(domainExercises);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findByExerciseId(exerciseId: ExerciseToMuscle['exerciseId']) {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany({
				where: { exerciseId },
			});
			const result = exercises.map((exercise) => ExerciseToMuscleMapper.toDomain(exercise));
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
	async findByMuscleId(muscleId: ExerciseToMuscle['muscleId']) {
		try {
			const exercises = await this.prisma.exercisesToMuscles.findMany({
				where: { muscleId },
			});
			const result = exercises.map((exercise) => ExerciseToMuscleMapper.toDomain(exercise));
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
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
		} catch (e) {
			return Failure(this.errorMapper.translate(e));
		}
	}
}
