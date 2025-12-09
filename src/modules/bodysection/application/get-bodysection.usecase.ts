import { IBodySectionRepository } from '../domain/bodysection.repository';

export class GetBodySectionUseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute(id: number) {
		return await this.repository.findById(id);
	}
}
