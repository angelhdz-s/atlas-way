import { Failure, Success } from '@/shared/domain/result';
import { sessionIncludeAnatomy } from '@/modules/session/infrastructure/prisma/session.prisma.types';
import { SessionMapper } from '@/modules/session/infrastructure/session.mapper';
import type { PrismaClient } from '@/prisma/client';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { Session } from '@/modules/session/domain/session.entity';
import type { SessionProps } from '@/modules/session/domain/session.types';

export class SessionPrismaRepository implements ISessionRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}
  async create(data: Session) {
    try {
      const sessionPersistence = SessionMapper.toPersistenceCreate(data);
      const created = await this.prisma.sessions.create({
        data: sessionPersistence,
        ...sessionIncludeAnatomy,
      });
      const result = SessionMapper.toDomain(created);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async update(data: Session) {
    try {
      const sessionPersistence = SessionMapper.toPersistenceUpdate(data);
      const updated = await this.prisma.sessions.update({
        data: sessionPersistence,
        where: { id: data.id },
        ...sessionIncludeAnatomy,
      });
      const result = SessionMapper.toDomain(updated);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findAll() {
    try {
      const sessions = await this.prisma.sessions.findMany({
        ...sessionIncludeAnatomy,
      });
      const sessionsDomain = sessions.map((session) => SessionMapper.toDomain(session));
      return Success(sessionsDomain);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findById(id: SessionProps['id']) {
    try {
      const session = await this.prisma.sessions.findUnique({
        where: { id },
        ...sessionIncludeAnatomy,
      });
      const result = session ? SessionMapper.toDomain(session) : null;
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findByIds(ids: SessionProps['id'][]) {
    try {
      const sessions = await this.prisma.sessions.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        ...sessionIncludeAnatomy,
      });
      const result = sessions.map((s) => SessionMapper.toDomain(s));
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async delete(sessionId: SessionProps['id']) {
    try {
      const session = await this.prisma.sessions.delete({
        where: {
          id: sessionId,
        },
        ...sessionIncludeAnatomy,
      });
      const domainSession = SessionMapper.toDomain(session);
      return Success(domainSession);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
