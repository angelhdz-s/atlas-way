import { Success } from '@/shared/domain/result';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';

/**
 * Mock for IdGeneratorRepository to control ID generation in tests.
 *
 * @property id: the string returned in `generate` method.
 */
export class MockIdGenerator implements IdGeneratorRepository {
  public id: string = '1df38173-6fae-4abb-8cb2-ce33b6c24da4';
  async generate() {
    return Success(this.id);
  }
}
