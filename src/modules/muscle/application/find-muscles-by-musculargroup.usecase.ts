import { Muscle } from '../domain/muscle.entity';
import { IMuscleRepository } from '../domain/muscle.repository';

export class GetAllMusclesByMuscularGroupUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(id: Muscle['muscularGroupId']) {
		return await this.repository.findAllByMuscularGroupId(id);
	}
}
