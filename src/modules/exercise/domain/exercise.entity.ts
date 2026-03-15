import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { ExerciseProps } from './exercise.types';

export class Exercise {
  constructor(private data: ExerciseProps) {}
  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }
  get sets() {
    return this.data.sets;
  }
  get reps() {
    return this.data.reps;
  }
  get weight() {
    return this.data.weight;
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
  get muscles(): Muscle[] {
    return this.muscles;
  }
  changeName(name: ExerciseProps['name']) {
    this.data.name = name;
  }
  changeDescription(description: ExerciseProps['description']) {
    this.data.description = description;
  }

  changeId(description: ExerciseProps['description']) {
    this.data.description = description;
  }

  static create(
    id: ExerciseProps['id'],
    data: Omit<ExerciseProps, 'id' | 'createdAt' | 'updatedAt'>
  ) {
    return new Exercise({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      id,
    });
  }
}
