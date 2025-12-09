import { IRoutineDayRepository } from '../domain/routineday.resporitory';
import { RoutineDayProps } from '../domain/routineday.schema';

export class GetRoutineDayUseCase {
	constructor(private repository: IRoutineDayRepository) {}
	async execute(id: RoutineDayProps['id']) {
		return await this.repository.findById(id);
	}
}
