import { createId } from '@paralleldrive/cuid2';
import { IdGenerator } from '../application/id-generator';

export class CuidGeneratior implements IdGenerator {
	generate() {
		return createId();
	}
}
