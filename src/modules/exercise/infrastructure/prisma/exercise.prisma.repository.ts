import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { ExerciseMapper } from '@/modules/exercise/infrastructure/exercise.mapper';
import { Failure, Success } from '@/shared/domain/result';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { PrismaClient } from '@/prisma/client';
import type { ExerciseProps } from '../../domain/exercise.types';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import { exerciseIncludeAnatomy } from './exercise.prisma.types';

export class ExercisePrismaRepository implements IExerciseRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}
  async create(data: Exercise) {
    const exercisePersistence = ExerciseMapper.toPersistenceCreate(data);
    try {
      const created = await this.prisma.exercises.create({
        data: exercisePersistence,
        ...exerciseIncludeAnatomy,
      });
      return Success(ExerciseMapper.toDomain(created));
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async update(data: Exercise) {
    const exercisePersistence = ExerciseMapper.toPersistenceUpdate(data);
    try {
      const updated = await this.prisma.exercises.update({
        data: exercisePersistence,
        where: {
          id: data.id,
        },
        ...exerciseIncludeAnatomy,
      });
      return Success(ExerciseMapper.toDomain(updated));
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findAll() {
    try {
      const exercises = await this.prisma.exercises.findMany({
        ...exerciseIncludeAnatomy,
      });
      const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
      return Success(domainExercises);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findById(id: ExerciseProps['id']) {
    try {
      const exercise = await this.prisma.exercises.findUnique({
        where: { id },
        ...exerciseIncludeAnatomy,
      });
      return Success(exercise ? ExerciseMapper.toDomain(exercise) : null);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findByIds(ids: ExerciseProps['id'][]) {
    try {
      const exercises = await this.prisma.exercises.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        ...exerciseIncludeAnatomy,
      });
      const domainExercises = exercises.map((e) => ExerciseMapper.toDomain(e));
      return Success(domainExercises);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findAllByUserId(userId: ExerciseProps['userId']) {
    try {
      const exercises = await this.prisma.exercises.findMany({
        where: { userId },
        ...exerciseIncludeAnatomy,
      });
      const domainExercises = exercises.map((exercise) => ExerciseMapper.toDomain(exercise));
      return Success(domainExercises);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
