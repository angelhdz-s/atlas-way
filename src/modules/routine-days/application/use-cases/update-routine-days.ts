import { Failure } from '@/shared/domain/result';
import type { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';
import type { RoutineDaysProps } from '../../domain/routine-days.types';
import type { UpdateRoutineDaysInput } from '../dtos/update-routine-days.dto';
import { RoutineDaysNotFoundError } from '../../domain/errors/routine-days.errors';
import type { UseCase } from '@/shared/application/use-case';

export class UpdateRoutineDays implements UseCase {
  constructor(private repository: IRoutineDaysRepository) {}

  async execute(id: RoutineDaysProps['id'], data: UpdateRoutineDaysInput) {
    const routineDaysResult = await this.repository.findById(id);

    if (!routineDaysResult.success || !routineDaysResult.data) {
      if (!routineDaysResult.success) return Failure(routineDaysResult.error);
      return Failure(new RoutineDaysNotFoundError());
    }

    const routineDays = routineDaysResult.data;

    if (data.name) routineDays.changeName(data.name);
    if (data.dayNumber) routineDays.changeDayNumber(data.dayNumber);

    return await this.repository.update(routineDays);
  }
}
