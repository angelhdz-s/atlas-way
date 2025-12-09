import { IMuscularGroupRepository } from '../domain/musculargroup.repository';

export class GetMuscularGroupUseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute(id: number) {
		return this.repository.findById(id);
	}
}
