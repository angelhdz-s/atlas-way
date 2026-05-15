import type { Result } from '@/shared/domain/result';
import type { ValidationFunction } from '@/shared/shared.types';
import type { SessionFactoryData, SessionProps } from '@/modules/session/domain/session.types';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import {
  isValidSessionDescription,
  isValidSessionId,
  isValidSessionName,
} from '@/modules/session/domain/validation/session.validation.utils';
import { Session } from '@/modules/session/domain//session.entity';
import { Failure, Success } from '@/shared/domain/result';
import { isKeyOf, isObject } from '@/shared/domain/validation.utils';
import { InvalidSessionData } from '@/modules/session/domain//errors/session.errors';

type SessionValidationKeys = Omit<SessionFactoryData, 'userId' | 'exercises'> & {
  id: SessionProps['id'];
};

type SessionValidators = {
  [K in keyof SessionValidationKeys]: {
    validate: ValidationFunction;
    error: DomainError;
  };
};

export const sessionValidators: SessionValidators = {
  id: {
    validate: isValidSessionId,
    error: new InvalidSessionData(),
  },
  name: {
    validate: isValidSessionName,
    error: new InvalidSessionData('NAME'),
  },
  description: {
    validate: isValidSessionDescription,
    error: new InvalidSessionData('DESCRIPTION'),
  },
};

type SessionMinimumProps = SessionFactoryData & {
  id: SessionProps['id'];
};

export function validateSession(session: SessionMinimumProps): Result<Session, DomainError> {
  if (!isObject(session)) return Failure(new InvalidSessionData());
  const validatorKeys = Object.keys(sessionValidators) as (keyof SessionValidationKeys)[];
  for (const key of validatorKeys) {
    if (!isKeyOf(key, session)) return Failure(new InvalidSessionData());
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
