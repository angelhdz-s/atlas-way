import { UseCase } from '@/shared/application/use-case';
import { IBodySectionRepository } from '../../domain/body-section.repository';

export class GetAllBodySections implements UseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
