import { NewMuscle } from '../domain/muscle.entity';
import { IMuscleRepository } from '../domain/muscle.repository';

export class CrateMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(data: NewMuscle) {
		return await this.repository.create(data);
	}
}
