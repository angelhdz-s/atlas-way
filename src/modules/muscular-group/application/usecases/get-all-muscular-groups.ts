import { UseCase } from '@/shared/application/usecase';
import { IMuscularGroupRepository } from '../../domain/muscular-group.repository';

export class GetAllMuscularGroups implements UseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute() {
		return this.repository.findAll();
	}
}
