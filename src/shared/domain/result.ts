import type { DomainError } from './errors/domain.errors';

export type Result<T, E extends DomainError> =
  | { success: false; error: E }
  | { success: true; data: T };

export function Success<T>(data: T): Result<T, never> {
  return {
    success: true,
    data,
  };
}

export function Failure<E extends DomainError>(error: E): Result<never, E> {
  return {
    success: false,
    error,
  };
}
