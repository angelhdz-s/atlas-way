import { UseCase } from '@/shared/application/usecase';
import { IMuscularGroupRepository } from '../../domain/musculargroup.repository';
import { MuscularGroupProps } from '../../domain/musculargroup.types';

export class GetMuscularGroupById implements UseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute(id: MuscularGroupProps['id']) {
		return this.repository.findById(id);
	}
}
