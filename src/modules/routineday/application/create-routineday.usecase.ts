import { NewRoutineDay } from '../domain/routineday.entity';
import { IRoutineDayRepository } from '../domain/routineday.resporitory';

export class CreateRoutineDayUseCase {
	constructor(private repository: IRoutineDayRepository) {}

	async execute(data: NewRoutineDay) {
		return await this.repository.create(data);
	}
}
