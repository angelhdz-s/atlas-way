import { IBodySectionRepository } from '../domain/bodysection.repository';

export class GetAllBodySectionsWithMuscularGroupsUseCase {
	constructor(private repo: IBodySectionRepository) {}
	async execute() {
		return await this.repo.findAllWithMuscularGroups();
	}
}
