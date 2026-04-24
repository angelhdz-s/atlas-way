import { Failure, Success } from '@/shared/domain/result';
import { User } from '@/modules/user/domain/user.entity';
import { SessionAlreadyActive } from '@/modules/auth/domain/errors/auth.errors';
import type { UseCase } from '@/shared/application/use-case';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { LoginInput } from '@/modules/auth/application/dtos/login-input.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class Login implements UseCase {
  constructor(
    readonly authRepository: IAuthRepository,
    readonly userRepository: IUserRepository,
    readonly generatorRepository: IdGeneratorRepository
  ) {}
  async execute(data: LoginInput) {
    const sessionResult = await this.authRepository.getSession();
    if (!sessionResult.success) return sessionResult;
    if (sessionResult.data) return Failure(new SessionAlreadyActive());
    const userResult = await this.userRepository.findByEmail(data.email);
    if (!userResult.success) return userResult;
    if (userResult.data) return Success(null);
    const userId = this.generatorRepository.generate();
    const domainUser = User.create(userId, {
      email: data.email,
      name: data.name,
      roleId: 'base',
    });

    const createUserResult = await this.userRepository.create(domainUser);
    if (!createUserResult.success) return createUserResult;
    return Success(null);
  }
}
