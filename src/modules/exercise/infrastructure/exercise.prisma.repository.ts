import { prisma } from '@/shared/infrastructure/prisma/client';
import { Exercise, NewExercise, UpdateExercise } from '../domain/exercise.entity';
import { IExerciseRepository } from '../domain/exercise.repository';
import { ExerciseMapper } from './exercise.mapper';

export class ExercisePrismaRepository implements IExerciseRepository {
	async create(data: NewExercise): Promise<Exercise> {
		const exercisePersistence = ExerciseMapper.toPersistenceCreate(data);

		const created = await prisma.exercises.create({ data: exercisePersistence });

		return ExerciseMapper.toDomain(created);
	}
	async update(id: string, data: UpdateExercise): Promise<Exercise> {
		const exercisePersistence = ExerciseMapper.toPersistenceUpdate(data);
		const updated = await prisma.exercises.update({ data: exercisePersistence, where: { id } });

		return ExerciseMapper.toDomain(updated);
	}
	async findAll(): Promise<Exercise[]> {
		const exercises = await prisma.exercises.findMany();
		const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
		return domainExercises;
	}
	async findById(id: string): Promise<Exercise | null> {
		const exercise = await prisma.exercises.findUnique({ where: { id } });

		return exercise ? ExerciseMapper.toDomain(exercise) : null;
	}
}
