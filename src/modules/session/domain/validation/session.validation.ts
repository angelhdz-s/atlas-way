import type { Result } from '@/shared/domain/result';
import type { ValidationFunction } from '@/shared/shared.types';
import type { SessionProps } from '../session.types';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import {
  isValidSessionDescription,
  isValidSessionId,
  isValidSessionName,
} from './session.validation.utils';
import { TechnicalError } from '@/shared/domain/errors/domain.errors';
import { Session } from '../session.entity';
import { Failure, Success } from '@/shared/domain/result';
import { isKeyOf, isObject } from '@/shared/domain/validation.utils';

type SessionFactoryData = Omit<SessionProps, 'createdAt' | 'updatedAt' | 'userId' | 'exercises'>;

type SessionValidators = {
  [K in keyof SessionFactoryData]: {
    validate: ValidationFunction;
    error: DomainError;
  };
};

export const sessionValidators: SessionValidators = {
  id: {
    validate: isValidSessionId,
    error: new TechnicalError(),
  },
  name: {
    validate: isValidSessionName,
    error: new TechnicalError(),
  },
  description: {
    validate: isValidSessionDescription,
    error: new TechnicalError(),
  },
};

export function validateSession(
  session: Omit<SessionProps, 'createdAt' | 'updatedAt'>
): Result<Session, DomainError> {
  if (!isObject(session)) return Failure(new TechnicalError());
  const validatorKeys = Object.keys(sessionValidators) as (keyof SessionFactoryData)[];
  for (const key of validatorKeys) {
    if (!isKeyOf(key, session)) return Failure(new TechnicalError());
    const validate = sessionValidators[key].validate;
    const value = session[key];
    if (!validate(value)) return Failure(sessionValidators[key].error);
  }

  const newSession = new Session({
    id: session.id,
    name: session.name,
    description: session.description,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: session.userId,
    exercises: session.exercises,
  });

  return Success(newSession);
}
