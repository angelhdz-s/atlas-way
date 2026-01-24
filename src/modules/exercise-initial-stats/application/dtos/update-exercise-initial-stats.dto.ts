import { UpdateDto } from '@/shared/application/dtos/create.types';
import { ExerciseInitialStatsProps } from '../../domain/exercise-initial-stats.types';

type UpdateProps = Pick<ExerciseInitialStatsProps, 'reps' | 'sets' | 'weight'>;
export type UpdateExerciseInitialStatsInput = UpdateDto<UpdateProps>;
