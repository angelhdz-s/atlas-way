import { MuscularGroup } from '../domain/musculargroup.entity';
import { IMuscularGroupRepository } from '../domain/musculargroup.repository';

export class GetAllMuscularGroupByBodySectionUseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute(id: MuscularGroup['bodySectionId']) {
		return this.repository.findAllByBodySectionId(id);
	}
}
