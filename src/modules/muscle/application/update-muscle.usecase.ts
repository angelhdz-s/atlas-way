import { IMuscleRepository } from '../domain/muscle.repository';
import { UpdateMuscleProps } from '../domain/muscle.schema';

export class CrateMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async create(id: string, data: UpdateMuscleProps) {
		return await this.repository.update(id, data);
	}
}
