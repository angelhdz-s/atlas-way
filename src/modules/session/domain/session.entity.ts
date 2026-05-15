import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { SessionFactoryData, SessionProps } from '@/modules/session/domain/session.types';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { Result } from '@/shared/domain/result';
import { Failure, Success } from '@/shared/domain/result';
import {
  sessionValidators,
  validateSession,
} from '@/modules/session/domain/validation/session.validation';

export class Session {
  constructor(private data: SessionProps) {}

  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }

  get exercises() {
    return this.data.exercises;
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
  changeName(name: SessionProps['name']): Result<null, DomainError> {
    if (!sessionValidators.name.validate(name)) return Failure(sessionValidators.name.error);
    this.data.name = name.trim();
    return Success(null);
  }
  changeDescription(description: SessionProps['description']): Result<null, DomainError> {
    if (!sessionValidators.description.validate(description))
      return Failure(sessionValidators.description.error);
    this.data.description = description !== null ? description.trim() : null;
    return Success(null);
  }
  changeExercises(exercises: Exercise[]): Result<null, DomainError> {
    this.data.exercises = exercises;
    return Success(null);
  }
  static create(id: SessionProps['id'], data: SessionFactoryData): Result<Session, DomainError> {
    const validateResult = validateSession({
      id,
      ...data,
    });

    if (!validateResult.success) return validateResult;
    const session = validateResult.data;
    return Success(session);
  }
}
