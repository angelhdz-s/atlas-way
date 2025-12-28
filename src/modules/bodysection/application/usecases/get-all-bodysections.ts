import { UseCase } from '@/shared/application/usecase';
import { IBodySectionRepository } from '../../domain/bodysection.repository';

export class GetAllBodySections implements UseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
