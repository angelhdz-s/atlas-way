import { prisma } from '@/shared/infrastructure/prisma/client';
import { IExerciseRepository } from '../domain/exercise.repository';
import { ExerciseMapper } from './exercise.mapper';
import { Failure, Success } from '@/shared/domain/result';
import { Exercise } from '../domain/exercise.entity';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';

export class ExercisePrismaRepository implements IExerciseRepository {
	async create(data: Exercise) {
		const exercisePersistence = ExerciseMapper.toPersistence(data);
		try {
			const created = await prisma.exercises.create({ data: exercisePersistence });
			return Success(ExerciseMapper.toDomain(created));
		} catch {
			return Failure(new PrismaError('Unavailable create service'));
		}
	}
	async update(data: Exercise) {
		const exercisePersistence = ExerciseMapper.toPersistence(data);
		try {
			const updated = await prisma.exercises.update({
				data: exercisePersistence,
				where: { id: exercisePersistence.id },
			});
			return Success(ExerciseMapper.toDomain(updated));
		} catch {
			return Failure(new PrismaError('Unavailable update service'));
		}
	}
	async findAll() {
		try {
			const exercises = await prisma.exercises.findMany();
			const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
			return Success(domainExercises);
		} catch {
			return Failure(new PrismaError('Unavailable fetching service'));
		}
	}
	async findById(id: Exercise['id']) {
		try {
			const exercise = await prisma.exercises.findUnique({ where: { id } });
			return Success(exercise ? ExerciseMapper.toDomain(exercise) : null);
		} catch {
			return Failure(new PrismaError('Unavailable fetching service'));
		}
	}
}
