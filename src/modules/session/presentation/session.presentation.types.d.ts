import type { SessionDTO } from '../application/dtos/session.dto';
import type { FullExerciseDTO } from '@/modules/exercise/presentation/exercise.presentation.types';

export interface FullSessionDTO extends SessionDTO {
  exercises: FullExerciseDTO[];
}
