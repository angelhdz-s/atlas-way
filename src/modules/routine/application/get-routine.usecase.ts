import { UpdateRoutine } from '../domain/routine.entity';
import { IRoutineRepository } from '../domain/routine.repository';

export class GetRoutineUseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute(id: string, data: UpdateRoutine) {
		return this.repository.update(id, data);
	}
}
