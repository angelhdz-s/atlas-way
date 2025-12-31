import { UseCase } from '@/shared/application/usecase';
import { IRoutineDaysRepository } from '../../domain/routinedays.resporitory';

export class GetAllRoutineDays implements UseCase {
	constructor(private repository: IRoutineDaysRepository) {}
	async execute() {
		return await this.repository.findAll();
	}
}
