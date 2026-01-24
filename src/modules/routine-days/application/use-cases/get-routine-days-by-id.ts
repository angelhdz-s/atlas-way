import { UseCase } from '@/shared/application/use-case';
import { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';
import { RoutineDaysProps } from '../../domain/routine-days.types';

export class GetRoutineDaysById implements UseCase {
	constructor(private repository: IRoutineDaysRepository) {}
	async execute(id: RoutineDaysProps['id']) {
		return await this.repository.findById(id);
	}
}
