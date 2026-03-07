import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { ExerciseToMuscleProps } from '../../domain/exercise-to-muscle.types';

export type LinkExerciseToMuscleInput = CreateDto<ExerciseToMuscleProps>;
