import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';
import type { CreateDto } from '@/shared/application/dtos/create.types';

export type CreateExerciseInput = Omit<CreateDto<ExerciseProps>, 'muscles'> & {
  muscleIds: MuscleProps['id'][];
};
