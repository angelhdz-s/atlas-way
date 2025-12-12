import { IMuscleRepository } from '../domain/muscle.repository';

export class GetAllMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
