import type { DomainErrorCode } from '@/shared/domain/errors/error.types';

export const errorMessages: Record<DomainErrorCode, string> = {
  EXERCISE_NOT_FOUND: '',
  MUSCLE_NOT_FOUND: '',
  NOTIFICATION_NOT_FOUND: '',
  ROUTINE_NOT_FOUND: '',
  SESSION_NOT_FOUND: '',
  TECHNICAL_ERROR: '',
  UNAVAILABLE_AUTENTICATION_SERVICE: '',
  USER_NOT_FOUND: '',
  EXERCISE_OWNERSHIP_ERROR: '',
  ROLE_NOT_FOUND: '',
  ROUTINE_CYCLE_NOT_FOUND: '',
  ROUTINE_OWNERSHIP_ERROR: '',
  SESSION_ALREADY_ACTIVE: '',
  SESSION_OWNERSHIP_ERROR: '',
  INVALID_ROUTINE_DAYS: '',
};
