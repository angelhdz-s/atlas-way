import { IdGenerator } from '../../application/id-generator';

export class UUIDGenerator implements IdGenerator {
	generate() {
		return crypto.randomUUID();
	}
}
