import { AuthErrorCode } from '@/modules/auth/domain/errors/auth.error.code';
import { ExerciseErrorCode } from '@/modules/exercise/domain/errors/exercise.error.code';
import { ExerciseInitialStatsErrorCode } from '@/modules/exerciseinitialstats/domain/errors/exerciseinitialstats.error.code';
import { MuscleErrorCode } from '@/modules/muscle/domain/errors/muscle.error.code';
import { NotificationErrorCode } from '@/modules/notification/domain/errors/notification.error.code';
import { RoutineErrorCode } from '@/modules/routine/domain/errors/routine.error.code';
import { RoutineDaysErrorCode } from '@/modules/routinedays/domain/errors/routinedays.error.code';
import { SessionErrorCode } from '@/modules/session/domain/errors/session.error.code';
import { UserErrorCode } from '@/modules/user/domain/errors/user.error.code';

export type DomainErrorCode =
	| AuthErrorCode
	| ExerciseErrorCode
	| ExerciseInitialStatsErrorCode
	| MuscleErrorCode
	| NotificationErrorCode
	| RoutineErrorCode
	| RoutineDaysErrorCode
	| SessionErrorCode
	| UserErrorCode
	| 'TECHNICAL_ERROR';
