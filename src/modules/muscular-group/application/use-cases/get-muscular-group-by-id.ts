import { UseCase } from '@/shared/application/use-case';
import { IMuscularGroupRepository } from '../../domain/muscular-group.repository';
import { MuscularGroupProps } from '../../domain/muscular-group.types';

export class GetMuscularGroupById implements UseCase {
	constructor(private repository: IMuscularGroupRepository) {}

	async execute(id: MuscularGroupProps['id']) {
		return this.repository.findById(id);
	}
}
