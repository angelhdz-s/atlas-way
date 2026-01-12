import { CreateDto } from '@/shared/application/dtos/create.types';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';

export type CreateSessionToExerciseInput = CreateDto<SessionToExerciseProps>;
