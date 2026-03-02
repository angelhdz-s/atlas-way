import type { UseCase } from '@/shared/application/use-case';
import type { IMuscleRepository } from '../../domain/muscle.repository';
import type { MuscleProps } from '../../domain/muscle.types';

export class GetMuscleById implements UseCase {
  constructor(private repository: IMuscleRepository) {}

  async execute(id: MuscleProps['id']) {
    return await this.repository.findById(id);
  }
}
