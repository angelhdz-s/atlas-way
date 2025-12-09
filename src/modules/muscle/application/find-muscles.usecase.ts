import { IMuscleRepository } from '../domain/muscle.repository';

export class GetAllMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async getAll() {
		return await this.repository.findAll();
	}
}
