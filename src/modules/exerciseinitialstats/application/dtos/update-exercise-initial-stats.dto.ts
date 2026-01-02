import { UpdateDto } from '@/shared/application/dtos/create.types';
import { ExerciseInitialStatsProps } from '../../domain/exerciseinitialstats.types';

type UpdateProps = Pick<ExerciseInitialStatsProps, 'reps' | 'sets' | 'weight'>;
export type UpdateExerciseInitialStatsInput = UpdateDto<UpdateProps>;
