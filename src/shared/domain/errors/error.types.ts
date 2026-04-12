import type { AuthErrorCode } from '@/modules/auth/domain/errors/auth.error.code';
import type { ExerciseErrorCode } from '@/modules/exercise/domain/errors/exercise.error.code';
import type { MuscleErrorCode } from '@/modules/muscle/domain/errors/muscle.error.code';
import type { NotificationErrorCode } from '@/modules/notification/domain/errors/notification.error.code';
import type { RoutineErrorCode } from '@/modules/routine/domain/errors/routine.error.code';
import type { SessionErrorCode } from '@/modules/session/domain/errors/session.error.code';
import type { UserErrorCode } from '@/modules/user/domain/errors/user.error.code';

export type DomainErrorCode =
  | AuthErrorCode
  | ExerciseErrorCode
  | MuscleErrorCode
  | NotificationErrorCode
  | RoutineErrorCode
  | SessionErrorCode
  | UserErrorCode
  | 'TECHNICAL_ERROR';
