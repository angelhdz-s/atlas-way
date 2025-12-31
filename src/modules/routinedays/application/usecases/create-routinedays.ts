import { UseCase } from '@/shared/application/usecase';
import { IRoutineDaysRepository } from '../../domain/routinedays.resporitory';
import { CreateRoutineDaysInput } from '../dtos/create-routinedays.dto';
import { CuidGeneratior } from '@/shared/infrastructure/uuid-generator';
import { RoutineDays } from '../../domain/routinedays.entity';

export class CreateRoutineDays implements UseCase {
	constructor(
		private repository: IRoutineDaysRepository,
		private generator: CuidGeneratior
	) {}
	async execute(data: CreateRoutineDaysInput) {
		const id = this.generator.generate();
		const routineDays = RoutineDays.create(id, data);
		return await this.repository.create(routineDays);
	}
}
