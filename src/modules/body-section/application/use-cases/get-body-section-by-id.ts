import type { IBodySectionRepository } from '@/modules/body-section/domain/body-section.repository';
import type { BodySectionProps } from '@/modules/body-section/domain/body-section.types';
import type { UseCase } from '@/shared/application/use-case';

export class GetBodySectionById implements UseCase {
  constructor(private repository: IBodySectionRepository) {}

  async execute(id: BodySectionProps['id']) {
    return await this.repository.findById(id);
  }
}
