import { Failure, Success } from '@/shared/domain/result';
import { sessionIncludeAnatomy } from './session.prisma.types';
import { SessionMapper } from '../session.mapper';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import type { ISessionRepository } from '../../domain/session.repository';
import type { PrismaClient } from '@/prisma/client';
import type { Session } from '../../domain/session.entity';
import type { SessionProps } from '../../domain/session.types';

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
}
