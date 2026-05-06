import { Failure, Success } from '@/shared/domain/result';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class UUIDGenerator implements IdGeneratorRepository {
  constructor(readonly errorMapper: InfrastructureErrorTranslator) {}
  async generate() {
    try {
      const id = crypto.randomUUID();
      return Success(id);
    } catch (e) {
      const error = this.errorMapper.translate(e);
      return Failure(error);
    }
  }
}
