import type { IdGeneratorRepository } from '@/shared/application/id-generator';

/**
 * Mock for IdGeneratorRepository to control ID generation in tests.
 *
 * @property id: the string returned in `generate` method.
 */
export class MockIdGenerator implements IdGeneratorRepository {
  public id: string = 'Hello';
  generate() {
    return this.id;
  }
}
