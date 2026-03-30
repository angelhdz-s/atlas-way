import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { UpdateDto } from '@/shared/application/dtos/create.types';

type UpdateProps = Pick<ExerciseProps, 'name' | 'description' | 'sets' | 'reps' | 'weight'>;
export type UpdateExerciseInput = UpdateDto<UpdateProps>;
