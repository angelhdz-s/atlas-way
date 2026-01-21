import { Failure } from '@/shared/domain/result';
import { IRoutineDaysRepository } from '../../domain/routinedays.resporitory';
import { RoutineDaysProps } from '../../domain/routinedays.types';
import { UpdateRoutineDaysInput } from '../dtos/update-routinedays.dto';
import { RoutineDaysNotFoundError } from '../../domain/errors/routinedays.errors';
import { UseCase } from '@/shared/application/usecase';

export class UpdateRoutineDays implements UseCase {
	constructor(private repository: IRoutineDaysRepository) {}

	async execute(id: RoutineDaysProps['id'], data: UpdateRoutineDaysInput) {
		const existingRoutineDays = await this.repository.findById(id);

		if (!existingRoutineDays.success || !existingRoutineDays.data) {
			if (!existingRoutineDays.success) return Failure(existingRoutineDays.error);
			return Failure(new RoutineDaysNotFoundError());
		}

		const routineDays = existingRoutineDays.data;

		if (data.name) routineDays.changeName(data.name);
		if (data.dayNumber) routineDays.changeDayNumber(data.dayNumber);

		return await this.repository.update(routineDays);
	}
}
