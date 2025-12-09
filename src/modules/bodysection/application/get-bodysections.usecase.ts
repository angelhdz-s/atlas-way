import { IBodySectionRepository } from '../domain/bodysection.repository';

export class GetBodySectionsUseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
