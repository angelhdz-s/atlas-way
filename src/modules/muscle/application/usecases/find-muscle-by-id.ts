import { UseCase } from '@/shared/application/usecase';
import { IMuscleRepository } from '../../domain/muscle.repository';
import { MuscleProps } from '../../domain/muscle.types';

export class GetMuscleById implements UseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(id: MuscleProps['id']) {
		return await this.repository.findById(id);
	}
}
