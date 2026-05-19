import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';

export class Muscle {
  constructor(private data: MuscleProps) {}
  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }
  get createdAt() {
    return this.data.createdAt;
  }
  get updatedAt() {
    return this.data.updatedAt;
  }
  get userId() {
    return this.data.userId;
  }
  get muscularGroup() {
    return this.data.group;
  }
  get bodySection() {
    return this.data.group.section;
  }
}
