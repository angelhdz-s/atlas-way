import { IRoutineDayRepository } from '../domain/routineday.resporitory';

export class GetRoutineDaysUseCase {
	constructor(private repository: IRoutineDayRepository) {}
	async execute() {
		return await this.repository.findAll();
	}
}
