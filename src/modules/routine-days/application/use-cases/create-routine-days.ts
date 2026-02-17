import { UseCase } from '@/shared/application/use-case';
import { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';
import { CreateRoutineDaysInput } from '../dtos/create-routine-days.dto';
import { RoutineDays } from '../../domain/routine-days.entity';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateRoutineDays implements UseCase {
	constructor(
		private repository: IRoutineDaysRepository,
		private generator: IdGeneratorRepository
	) {}
	async execute(data: CreateRoutineDaysInput) {
		const id = this.generator.generate();
		const routineDays = RoutineDays.create(id, data);
		return await this.repository.create(routineDays);
	}
}
