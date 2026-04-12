import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class UUIDGenerator implements IdGeneratorRepository {
  generate() {
    return crypto.randomUUID();
  }
}
