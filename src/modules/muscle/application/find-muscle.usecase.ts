import { IMuscleRepository } from '../domain/muscle.repository';
import { MuscleProps } from '../domain/muscle.schema';

export class GetByIdMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(id: MuscleProps['id']) {
		return await this.repository.findById(id);
	}
}
