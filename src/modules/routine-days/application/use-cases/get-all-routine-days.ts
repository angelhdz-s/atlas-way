import type { UseCase } from '@/shared/application/use-case';
import type { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';

export class GetAllRoutineDays implements UseCase {
  constructor(private repository: IRoutineDaysRepository) {}
  async execute() {
    return await this.repository.findAll();
  }
}
