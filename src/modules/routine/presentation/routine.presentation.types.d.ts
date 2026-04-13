import type { RoutineDTO } from '@/modules/routine/application/dtos/routine.dto';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';

export interface FullRoutineDTO extends RoutineDTO {
  sessions: SessionDTO[];
}
