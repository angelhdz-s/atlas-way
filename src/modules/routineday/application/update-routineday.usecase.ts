import { UpdateRoutineDay } from '../domain/routineday.entity';
import { IRoutineDayRepository } from '../domain/routineday.resporitory';
import { RoutineDayProps } from '../domain/routineday.schema';

export class CreateRoutineDayUseCase {
	constructor(private repository: IRoutineDayRepository) {}

	async execute(id: RoutineDayProps['id'], data: UpdateRoutineDay) {
		return await this.repository.update(id, data);
	}
}
