import { Failure, Success } from '@/shared/domain/result';
import { muscleAnatomyInclude } from './muscle.prisma.types';
import { MuscleMapper } from '../muscle.mapper';
import type { IMuscleRepository } from '../../domain/muscle.repository';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';
import type { PrismaClient } from '@/prisma/client';

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
  async findById(id: number) {
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
}
