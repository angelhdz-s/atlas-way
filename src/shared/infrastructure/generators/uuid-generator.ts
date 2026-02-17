import { IdGeneratorRepository } from '../../application/id-generator';

export class UUIDGenerator implements IdGeneratorRepository {
	generate() {
		return crypto.randomUUID();
	}
}
