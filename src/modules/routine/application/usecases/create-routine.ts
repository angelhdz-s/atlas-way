import { UseCase } from '@/shared/application/usecase';
import { IRoutineRepository } from '../../domain/routine.repository';
import { CreateRoutineInput } from '../dtos/create-routine.dto';
import { UUIDGenerator } from '@/shared/infrastructure/generators/uuid-generator';
import { Routine } from '../../domain/routine.entity';

export class CreateRoutine implements UseCase {
	constructor(
		private repository: IRoutineRepository,
		private generator: UUIDGenerator
	) {}

	async execute(data: CreateRoutineInput) {
		const id = this.generator.generate();
		const newRoutine = Routine.create(id, data);
		return this.repository.create(newRoutine);
	}
}
