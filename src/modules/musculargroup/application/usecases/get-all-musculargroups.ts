import { UseCase } from '@/shared/application/usecase';
import { IMuscularGroupRepository } from '../../domain/musculargroup.repository';

export class GetAllMuscularGroups implements UseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute() {
		return this.repository.findAll();
	}
}
