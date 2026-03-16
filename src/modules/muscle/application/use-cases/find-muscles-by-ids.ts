import type { UseCase } from '@/shared/application/use-case';
import type { IMuscleRepository } from '../../domain/muscle.repository';
import type { MuscleProps } from '../../domain/muscle.types';

export class GetMusclesByIds implements UseCase {
  constructor(private repository: IMuscleRepository) {}

  async execute(ids: MuscleProps['id'][]) {
    return await this.repository.findByIds(ids);
  }
}
