import { UseCase } from '@/shared/application/use-case';
import { RoutineProps } from '../../domain/routine.types';
import { IRoutineRepository } from '../../domain/routine.repository';

export class GetRoutineById implements UseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute(id: RoutineProps['id']) {
		return this.repository.findById(id);
	}
}
