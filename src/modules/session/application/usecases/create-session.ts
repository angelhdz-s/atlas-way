import { CuidGeneratior } from '@/shared/infrastructure/uuid-generator';
import { ISessionReporitory } from '../../domain/session.repository';
import { CreateSessionInput } from '../dto/create-session.dto';
import { Session } from '../../domain/session.entity';
import { UseCase } from '@/shared/application/usecase';

export class CreateSession implements UseCase {
	constructor(
		private repository: ISessionReporitory,
		private generator: CuidGeneratior
	) {}

	async execute(data: CreateSessionInput) {
		const id = this.generator.generate();
		const newSession = Session.create(id, data);
		return await this.repository.create(newSession);
	}
}
