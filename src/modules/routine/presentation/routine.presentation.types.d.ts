import type { FullSessionDTO } from '@/modules/session/presentation/session.presentation.types';
import type { RoutineDTO } from '../application/dtos/routine.dto';

export interface FullRoutineDTO extends RoutineDTO {
  sessions: FullSessionDTO[];
}
