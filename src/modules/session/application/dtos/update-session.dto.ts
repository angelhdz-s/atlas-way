import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { SessionProps } from '../../domain/session.types';
import type { UpdateDto } from '@/shared/application/dtos/create.types';

type UpdateProps = Pick<SessionProps, 'name' | 'description'>;

export type UpdateSessionInput = UpdateDto<UpdateProps> & {
  exerciseIds?: ExerciseProps['id'][];
};
