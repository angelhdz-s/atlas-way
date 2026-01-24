import { Failure } from '@/shared/domain/result';
import { IRoutineRepository } from '../../domain/routine.repository';
import { RoutineProps } from '../../domain/routine.types';
import { UpdateRoutineInput } from '../dtos/update-routine.dto';
import { RoutineNotFoundError } from '../../domain/errors/routine.errors';
import { UseCase } from '@/shared/application/usecase';

export class UpdateRoutine implements UseCase {
	constructor(private repository: IRoutineRepository) {}

	async execute(id: RoutineProps['id'], data: UpdateRoutineInput) {
		const routineResult = await this.repository.findById(id);
		if (!routineResult.success || !routineResult.data) {
			if (!routineResult.success) return Failure(routineResult.error);
			return Failure(new RoutineNotFoundError());
		}

		const routine = routineResult.data;

		if (data.name) routine.changeName(data.name);
		if (data.description) routine.changeDescription(data.description);
		if (data.active) routine.changeActive(data.active);
		if (data.days) routine.changeDays(data.days);
		if (data.initialDate) routine.changeInitialDate(data.initialDate);

		return this.repository.create(routine);
	}
}
