import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { SessionProps } from '../../domain/session.types';

export type SessionDTO = Omit<SessionProps, 'updatedAt' | 'exercises'> & {
  exercises: ExerciseDTO[];
};
