import { IMuscleRepository } from '../domain/muscle.repository';

export class GetByIdMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async getById(id: string) {
		return await this.repository.findById(id);
	}
}
