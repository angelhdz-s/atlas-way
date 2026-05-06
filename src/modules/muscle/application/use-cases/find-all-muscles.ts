import type { UseCase } from '@/shared/application/shared.use-case';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';

export class GetAllMuscles implements UseCase {
  constructor(private repository: IMuscleRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
