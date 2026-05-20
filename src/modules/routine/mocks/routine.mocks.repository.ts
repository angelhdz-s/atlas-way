import { Success } from '@/shared/domain/result';
import { Routine } from '@/modules/routine/domain/routine.entity';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';

export class InMemoryRoutineRepository implements IRoutineRepository {
  public routines: Routine[] = [];
  async create(data: Routine) {
    this.routines.push(data);
    return Success(this.getCopy(data));
  }
  async update(data: Routine) {
    const index = this.routines.findIndex((r) => r.id === data.id);
    if (index !== -1) this.routines[index] = data;
    return Success(this.getCopy(data));
  }
  async findaAll() {
    return Success(this.getCopies(this.routines));
  }
  async findById(id: RoutineProps['id']) {
    const routine = this.routines.find((r) => r.id === id);
    if (!routine) return Success(null);
    return Success(this.getCopy(routine));
  }
  async delete(id: RoutineProps['id']) {
    const routine = this.routines.find((r) => r.id === id);
    if (!routine)
      return Success(
        routine ??
          new Routine({
            id: '',
            name: '',
            description: null,
            active: false,
            days: 0,
            initialDate: new Date(),
            cycle: { id: 'week', name: 'Week' },
            plan: [],
            userId: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          })
      );
    this.routines = this.routines.filter((r) => r.id !== id);
    return Success(this.getCopy(routine));
  }

  private getCopy(routine: Routine): Routine {
    const props: RoutineProps = {
      id: routine.id,
      name: routine.name,
      description: routine.description,
      active: routine.active,
      days: routine.days,
      initialDate: routine.initialDate,
      cycle: routine.cycle,
      plan: routine.plan,
      userId: routine.userId,
      createdAt: routine.createdAt,
      updatedAt: routine.updatedAt,
    };
    return new Routine(props);
  }

  private getCopies(routines: Routine[]): Routine[] {
    return routines.map((r) => this.getCopy(r));
  }
}
