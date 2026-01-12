import { UseCase } from '@/shared/application/usecase';
import { ISessionRepository } from '../../domain/session.repository';

export class GetAllSessions implements UseCase {
	constructor(private repository: ISessionRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
