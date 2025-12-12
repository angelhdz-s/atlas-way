import { UpdateMuscle } from '../domain/muscle.entity';
import { IMuscleRepository } from '../domain/muscle.repository';
import { MuscleProps, UpdateMuscleProps } from '../domain/muscle.schema';

export class CrateMuscleUseCase {
	constructor(private repository: IMuscleRepository) {}

	async execute(id: MuscleProps['id'], data: UpdateMuscle) {
		return await this.repository.update(id, data);
	}
}
