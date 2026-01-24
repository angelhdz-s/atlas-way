import { UseCase } from '@/shared/application/use-case';
import { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';

export class GetAllRoutineDays implements UseCase {
	constructor(private repository: IRoutineDaysRepository) {}
	async execute() {
		return await this.repository.findAll();
	}
}
