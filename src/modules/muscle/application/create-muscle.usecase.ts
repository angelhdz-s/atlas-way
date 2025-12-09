import { IMuscleRepository } from '../domain/muscle.repository';
import { NewMuscleProps } from '../domain/muscle.schema';

export class CrateMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async create(data: NewMuscleProps) {
		return await this.repository.create(data);
	}
}
