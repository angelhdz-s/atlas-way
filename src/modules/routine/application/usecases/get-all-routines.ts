import { UseCase } from '@/shared/application/usecase';
import { IRoutineRepository } from '../../domain/routine.repository';

export class GetAllRoutines implements UseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute() {
		return this.repository.findaAll();
	}
}
