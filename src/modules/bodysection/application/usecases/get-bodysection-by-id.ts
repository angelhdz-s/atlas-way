import { IBodySectionRepository } from '@/modules/bodysection/domain/bodysection.repository';
import { BodySectionProps } from '@/modules/bodysection/domain/bodysection.types';
import { UseCase } from '@/shared/application/usecase';

export class GetBodySectionById implements UseCase {
	constructor(private repository: IBodySectionRepository) {}

	async execute(id: BodySectionProps['id']) {
		return await this.repository.findById(id);
	}
}
