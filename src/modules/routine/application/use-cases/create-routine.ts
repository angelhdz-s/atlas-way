import { UseCase } from '@/shared/application/use-case';
import { IRoutineRepository } from '../../domain/routine.repository';
import { CreateRoutineInput } from '../dtos/create-routine.dto';
import { Routine } from '../../domain/routine.entity';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateRoutine implements UseCase {
	constructor(
		private repository: IRoutineRepository,
		private generator: IdGeneratorRepository
	) {}

	async execute(data: CreateRoutineInput) {
		const id = this.generator.generate();
		const newRoutine = Routine.create(id, data);
		return this.repository.create(newRoutine);
	}
}
