import { UseCase } from '@/shared/application/use-case';
import { IAuthRepository } from '../../domain/auth.respository';

export class GetCurrentSession implements UseCase {
	constructor(private repository: IAuthRepository) {}
	async execute() {
		return this.repository.getSession();
	}
}
