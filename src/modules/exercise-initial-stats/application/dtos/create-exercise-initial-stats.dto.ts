import { CreateDto } from '@/shared/application/dtos/create.types';
import { ExerciseInitialStatsProps } from '../../domain/exercise-initial-stats.types';

export type CreateExerciseInitialStatsInput = CreateDto<ExerciseInitialStatsProps>;
export type CreateExerciseInitialStatsWithoutExerciseIdInput = Omit<
	CreateDto<ExerciseInitialStatsProps>,
	'exerciseId'
>;
