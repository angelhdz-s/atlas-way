import type { UseCase } from '@/shared/application/use-case';
import type { IMuscularGroupRepository } from '../../domain/muscular-group.repository';
import type { MuscularGroupProps } from '../../domain/muscular-group.types';

export class GetMuscularGroupById implements UseCase {
  constructor(
    private repository: IMuscularGroupRepository
  ) {}

  async execute(id: MuscularGroupProps['id']) {
    return this.repository.findById(id);
  }
}
