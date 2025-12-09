import { IRoutineRepository } from '../domain/routine.repository';

export class GetRoutinesUseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute() {
		return this.repository.findaAll();
	}
}
