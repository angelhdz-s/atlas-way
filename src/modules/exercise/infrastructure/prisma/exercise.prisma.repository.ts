import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { ExerciseMapper } from '@/modules/exercise/infrastructure/exercise.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { PrismaClient } from '@/prisma/client';
import { ExerciseProps } from '../../domain/exercise.types';
import { globalErrorMapper } from '@/shared/infrastructure/globalErrorMapper.container';

export class ExercisePrismaRepository implements IExerciseRepository {
	constructor(private readonly prisma: PrismaClient) {}
	async create(data: Exercise) {
		const exercisePersistence = ExerciseMapper.toPersistence(data);
		try {
			const created = await this.prisma.exercises.create({ data: exercisePersistence });
			return Success(ExerciseMapper.toDomain(created));
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
	async update(data: Exercise) {
		const exercisePersistence = ExerciseMapper.toPersistence(data);
		try {
			const updated = await this.prisma.exercises.update({
				data: exercisePersistence,
				where: { id: exercisePersistence.id },
			});
			return Success(ExerciseMapper.toDomain(updated));
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
	async findAll() {
		try {
			const exercises = await this.prisma.exercises.findMany();
			const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
			return Success(domainExercises);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
	async findById(id: ExerciseProps['id']) {
		try {
			const exercise = await this.prisma.exercises.findUnique({ where: { id } });
			return Success(exercise ? ExerciseMapper.toDomain(exercise) : null);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
	async findAllByUserId(userId: ExerciseProps['userId']) {
		try {
			const exercises = await this.prisma.exercises.findMany({ where: { userId } });
			const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
			return Success(domainExercises);
		} catch (e) {
			return Failure(globalErrorMapper.handle(e));
		}
	}
}
