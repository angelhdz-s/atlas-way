import type { UseCase } from '@/shared/application/use-case';
import type { IMuscularGroupRepository } from '../../domain/muscular-group.repository';

export class GetAllMuscularGroups implements UseCase {
  constructor(private repository: IMuscularGroupRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
