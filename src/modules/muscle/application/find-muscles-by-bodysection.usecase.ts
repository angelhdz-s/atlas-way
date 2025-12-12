import { BodySection } from '@/modules/bodysection/domain/bodysection.entity';
import { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';

export class GetAllMusclesByBodySectionUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(id: BodySection['id']) {
		return await this.repository.findAllByBodySection(id);
	}
}
