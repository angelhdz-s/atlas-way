import { IMuscularGroupRepository } from '../domain/musculargroup.repository';

export class GetMuscularGroupUseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute() {
		return this.repository.findAll();
	}
}
