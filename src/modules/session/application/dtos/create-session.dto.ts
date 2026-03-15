import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { SessionProps } from '../../domain/session.types';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export type CreateSessionInput = Omit<
  CreateDto<SessionProps>,
  'id' | 'createdAt' | 'updatedAt' | 'exercises'
> & {
  exerciseIds: ExerciseProps['id'][];
};
