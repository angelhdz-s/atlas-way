import { IBodySectionRepository } from '@/modules/body-section/domain/body-section.repository';
import { BodySectionProps } from '@/modules/body-section/domain/body-section.types';
import { UseCase } from '@/shared/application/use-case';

export class GetBodySectionById implements UseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute(id: BodySectionProps['id']) {
		return await this.repository.findById(id);
	}
}
