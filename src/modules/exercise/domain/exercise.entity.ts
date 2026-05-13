import type { Result } from '@/shared/domain/result';
import type { ExerciseFactoryData, ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import { Failure, Success } from '@/shared/domain/result';
import {
  exerciseValidators,
  validateExercise,
} from '@/modules/exercise/domain/validation/exercise.validation';

export class Exercise {
  constructor(private data: ExerciseProps) {}
  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }
  get sets() {
    return this.data.sets;
  }
  get reps() {
    return this.data.reps;
  }
  get weight() {
    return this.data.weight;
  }
  get createdAt() {
    return this.data.createdAt;
  }
  get updatedAt() {
    return this.data.updatedAt;
  }
  get userId() {
    return this.data.userId;
  }
  get muscles() {
    return this.data.muscles;
  }
  changeName(name: ExerciseProps['name']): Result<null, DomainError> {
    if (!exerciseValidators.name.validate(name)) return Failure(exerciseValidators.name.error);
    this.data.name = name.trim();
    return Success(null);
  }
  changeDescription(description: ExerciseProps['description']): Result<null, DomainError> {
    if (!exerciseValidators.description.validate(description))
      return Failure(exerciseValidators.description.error);
    this.data.description = description ? description.trim() : null;
    return Success(null);
  }
  changeSets(sets: ExerciseProps['sets']): Result<null, DomainError> {
    if (!exerciseValidators.sets.validate(sets)) return Failure(exerciseValidators.sets.error);
    this.data.sets = sets;
    return Success(null);
  }
  changeReps(reps: ExerciseProps['reps']): Result<null, DomainError> {
    if (!exerciseValidators.reps.validate(reps)) return Failure(exerciseValidators.reps.error);
    this.data.reps = reps;
    return Success(null);
  }
  changeWeight(weight: ExerciseProps['weight']): Result<null, DomainError> {
    if (!exerciseValidators.weight.validate(weight))
      return Failure(exerciseValidators.weight.error);
    this.data.weight = weight;
    return Success(null);
  }
  changeMuscles(muscles: Muscle[]): Result<null, DomainError> {
    this.data.muscles = muscles;
    return Success(null);
  }

  static create(id: ExerciseProps['id'], data: ExerciseFactoryData): Result<Exercise, DomainError> {
    const exerciseResult = validateExercise({
      id,
      ...data,
    });

    if (!exerciseResult.success) return exerciseResult;
    const exercise = exerciseResult.data;
    return Success(exercise);
  }
}
