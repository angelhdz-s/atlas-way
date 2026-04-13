import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export type ExerciseDTO = Omit<ExerciseProps, 'userId' | 'muscles' | 'updatedAt'> & {
  muscles: MuscleDTO[];
};
