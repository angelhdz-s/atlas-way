import type { UseCase } from '@/shared/application/shared.use-case';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';

export class GetAllRoutines implements UseCase {
  constructor(private repository: IRoutineRepository) {}

  async execute() {
    return this.repository.findaAll();
  }
}
