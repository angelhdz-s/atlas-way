import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import type { SessionDTO } from '../application/dtos/session.dto';

export interface FullSessionDTO extends SessionDTO {
  exercises: ExerciseDTO[];
}
