import { Success } from '@/shared/domain/result';
import { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';

const MOCK_MUSCLES: MuscleProps[] = [
  {
    id: 1,
    name: 'Pectoral',
    description: 'Chest muscle',
    userId: 'user-123',
    createdAt: new Date(),
    updatedAt: new Date(),
    group: {
      id: 1,
      name: 'Chest',
      createdAt: new Date(),
      updatedAt: new Date(),
      section: {
        id: 1,
        name: 'Upper Body',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
  },
  {
    id: 2,
    name: 'Biceps',
    description: 'Arm muscle',
    userId: 'user-123',
    createdAt: new Date(),
    updatedAt: new Date(),
    group: {
      id: 2,
      name: 'Arms',
      createdAt: new Date(),
      updatedAt: new Date(),
      section: {
        id: 1,
        name: 'Upper Body',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
  },
];

export class InMemoryMuscleRepository implements IMuscleRepository {
  public muscles: Muscle[] = MOCK_MUSCLES.map((m) => new Muscle(m));
  async findAll() {
    return Success([...this.muscles]);
  }
  async findById(id: MuscleProps['id']) {
    const muscle = this.muscles.find((m) => m.id === id);
    if (!muscle) return Success(null);
    return Success(muscle);
  }
  async findByIds(ids: MuscleProps['id'][]) {
    const muscles = this.muscles.filter((m) => ids.includes(m.id));
    return Success([...muscles]);
  }
}
