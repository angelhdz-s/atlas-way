import { Failure, Success } from '@/shared/domain/result';
import { muscleAnatomyInclude } from '@/modules/muscle/infrastructure/prisma/muscle.prisma.types';
import { MuscleMapper } from '@/modules/muscle/infrastructure/muscle.mapper';
import type { PrismaClient } from '@/prisma/client';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';

export class MusclePrismaRepository implements IMuscleRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}

  async findAll() {
    try {
      const muscles = await this.prisma.muscles.findMany({
        ...muscleAnatomyInclude,
      });
      const domainMuscles = muscles.map((muscle) => MuscleMapper.toDomain(muscle));
      return Success(domainMuscles);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findById(id: MuscleProps['id']) {
    try {
      const muscle = await this.prisma.muscles.findUnique({
        where: { id },
        ...muscleAnatomyInclude,
      });
      const result = muscle ? MuscleMapper.toDomain(muscle) : null;
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findByIds(ids: MuscleProps['id'][]) {
    try {
      const muscles = await this.prisma.muscles.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        ...muscleAnatomyInclude,
      });
      const result = muscles.map((m) => MuscleMapper.toDomain(m));
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
