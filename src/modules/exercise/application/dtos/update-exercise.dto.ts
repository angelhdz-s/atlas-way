import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { UpdateDto } from '@/shared/application/dtos/create.types';

type UpdateProps = Pick<ExerciseProps, 'name' | 'description'>;
export type UpdateExerciseInput = UpdateDto<UpdateProps>;
