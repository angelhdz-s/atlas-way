import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { CreateDto } from '@/shared/application/dtos/create.types';

export type CreateExerciseInput = CreateDto<ExerciseProps>;
