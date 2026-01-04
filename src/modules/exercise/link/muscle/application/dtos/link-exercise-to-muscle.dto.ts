import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { CreateDto } from '@/shared/application/dtos/create.types';
import { ExerciseToMuscleProps } from '../../domain/exercise-to-muscle.types';

export type LinkExerciseToMuscleInput = CreateDto<ExerciseToMuscleProps>;
