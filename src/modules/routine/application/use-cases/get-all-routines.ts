import { UseCase } from '@/shared/application/use-case';
import { IRoutineRepository } from '../../domain/routine.repository';

export class GetAllRoutines implements UseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute() {
		return this.repository.findaAll();
	}
}
