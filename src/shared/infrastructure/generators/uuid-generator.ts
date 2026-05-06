import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';

export class UUIDGenerator implements IdGeneratorRepository {
  generate() {
    return crypto.randomUUID();
  }
}
