import { ExerciseInitialStatsProps } from '../../domain/exercise-initial-stats.types';

export type ExerciseInitialStatsDTO = Pick<ExerciseInitialStatsProps, 'reps' | 'sets' | 'weight'>;
