import { IMuscularGroupRepository } from '../domain/musculargroup.repository';

export class GetAllMuscularGroupUseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute() {
		return this.repository.findAll();
	}
}
