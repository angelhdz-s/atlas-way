import { UseCase } from '@/shared/application/use-case';
import { IRoutineDaysRepository } from '../../domain/routine-days.resporitory';
import { CreateRoutineDaysInput } from '../dtos/create-routine-days.dto';
import { UUIDGenerator } from '@/shared/infrastructure/generators/uuid-generator';
import { RoutineDays } from '../../domain/routine-days.entity';

export class CreateRoutineDays implements UseCase {
	constructor(
		private repository: IRoutineDaysRepository,
		private generator: UUIDGenerator
	) {}
	async execute(data: CreateRoutineDaysInput) {
		const id = this.generator.generate();
		const routineDays = RoutineDays.create(id, data);
		return await this.repository.create(routineDays);
	}
}
