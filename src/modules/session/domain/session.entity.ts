import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { SessionProps } from '@/modules/session/domain/session.types';

export class Session {
  constructor(private data: SessionProps) {}

  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get description() {
    return this.data.description;
  }

  get exercises() {
    return this.data.exercises;
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
  changeName(name: SessionProps['name']) {
    this.data.name = name;
  }
  changeDescription(description: SessionProps['description']) {
    this.data.description = description;
  }
  changeExercises(exercises: Exercise[]) {
    this.data.exercises = exercises;
  }
  static create(
    id: SessionProps['id'],
    data: Omit<SessionProps, 'id' | 'createdAt' | 'updatedAt'>
  ) {
    return new Session({
      ...data,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
