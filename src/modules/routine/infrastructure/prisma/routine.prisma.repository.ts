import { Failure, Success } from '@/shared/domain/result';
import { routineIncludeAnatomy } from './routine.prisma.types';
import { RoutineMapper } from '../routine.mapper';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import type { IRoutineRepository } from '../../domain/routine.repository';
import type { PrismaClient } from '@/prisma/client';
import type { Routine } from '../../domain/routine.entity';
import type { RoutineProps } from '../../domain/routine.types';

export class RoutinePrismaRepository implements IRoutineRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}
  async create(data: Routine) {
    const routinePersistence = RoutineMapper.toPersistenceCreate(data);
    try {
      const created = await this.prisma.routines.create({
        data: routinePersistence,
        ...routineIncludeAnatomy,
      });
      const result = RoutineMapper.toDomain(created);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async update(data: Routine) {
    const routinePersistence = RoutineMapper.toPersistenceUpdate(data);
    try {
      const created = await this.prisma.routines.update({
        data: routinePersistence,
        where: { id: data.id },
        ...routineIncludeAnatomy,
      });
      const result = RoutineMapper.toDomain(created);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findaAll() {
    try {
      const routines = await this.prisma.routines.findMany({
        ...routineIncludeAnatomy,
      });
      const routinesDomain = routines.map((routine) => RoutineMapper.toDomain(routine));
      return Success(routinesDomain);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findById(id: RoutineProps['id']) {
    try {
      const routine = await this.prisma.routines.findUnique({
        where: { id },
        ...routineIncludeAnatomy,
      });
      const result = routine ? RoutineMapper.toDomain(routine) : null;
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async delete(routineId: RoutineProps['id']) {
    try {
      const routine = await this.prisma.routines.delete({
        where: { id: routineId },
        ...routineIncludeAnatomy,
      });
      const result = RoutineMapper.toDomain(routine);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
