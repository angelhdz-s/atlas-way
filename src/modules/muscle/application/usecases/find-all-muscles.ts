import { UseCase } from '@/shared/application/usecase';
import { IMuscleRepository } from '../../domain/muscle.repository';

export class GetAllMuscles implements UseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
