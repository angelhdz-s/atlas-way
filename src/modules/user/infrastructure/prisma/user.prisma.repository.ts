import type { User } from '@/modules/user/domain/user.entity';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import { UserMapper } from '@/modules/user/infrastructure/user.mapper';
import { Failure, Success } from '@/shared/domain/result';
import type { PrismaClient } from '@/prisma/client';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import { userIncludeAnatomy } from './user.prisma.types';

export class UserPrismaRepository implements IUserRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}
  async create(data: User) {
    const persistenceData = UserMapper.toPersistenceCreate(data);

    try {
      const created = await this.prisma.users.create({
        ...userIncludeAnatomy,
        data: persistenceData,
      });
      const domainUser = UserMapper.toDomain(created);
      return Success(domainUser);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }

  async update(data: User) {
    const persistenceData = UserMapper.toPersistenceUpdate(data);
    try {
      const updated = await this.prisma.users.update({
        ...userIncludeAnatomy,
        data: persistenceData,
        where: { id: data.id },
      });

      const domainUser = UserMapper.toDomain(updated);
      return Success(domainUser);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.users.findMany({
        ...userIncludeAnatomy,
      });
      const domainUsers = users.map((user) => UserMapper.toDomain(user));
      return Success(domainUsers);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }

  async findById(id: User['id']) {
    try {
      const user = await this.prisma.users.findUnique({
        ...userIncludeAnatomy,
        where: {
          id,
        },
      });
      return Success(user ? UserMapper.toDomain(user) : null);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findByEmail(email: User['email']) {
    try {
      const user = await this.prisma.users.findUnique({
        ...userIncludeAnatomy,
        where: {
          email,
        },
      });
      return Success(user ? UserMapper.toDomain(user) : null);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
