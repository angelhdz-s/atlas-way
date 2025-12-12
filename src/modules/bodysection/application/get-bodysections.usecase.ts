import { IBodySectionRepository } from '../domain/bodysection.repository';

export class GetAllBodySectionsUseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
