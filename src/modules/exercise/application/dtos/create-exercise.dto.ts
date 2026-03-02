import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { CreateDto } from '@/shared/application/dtos/create.types';

export type CreateExerciseInput = CreateDto<ExerciseProps>;
