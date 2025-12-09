import { NewRoutine } from '../domain/routine.entity';
import { IRoutineRepository } from '../domain/routine.repository';

export class CreateRoutineUseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute(data: NewRoutine) {
		return this.repository.create(data);
	}
}
