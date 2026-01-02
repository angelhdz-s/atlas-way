import { CreateDto } from '@/shared/application/dtos/create.types';
import { ExerciseInitialStatsProps } from '../../domain/exerciseinitialstats.types';

export type CreateExerciseInitialStatsInput = CreateDto<ExerciseInitialStatsProps>;
