import { Failure, Success } from '@/shared/domain/result';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { ExerciseNotFoundError } from '../domain/errors/exercise.errors';

export class InMemoryExerciseRepository implements IExerciseRepository {
  public exercises: Exercise[] = [];
  async create(data: Exercise) {
    this.exercises.push(data);
    const copy = this.getCopy(data);
    return Success(copy);
  }
  async update(data: Exercise) {
    const index = this.exercises.findIndex((e) => e.id === data.id);
    if (index !== -1) {
      this.exercises[index] = data;
    }
    const copy = this.getCopy(data);
    return Success(copy);
  }
  async findAll() {
    return Success(this.getCopies(this.exercises));
  }
  async findById(id: Exercise['id']) {
    const exercise = this.exercises.find((e) => e.id === id);
    if (!exercise) return Success(null);
    return Success(this.getCopy(exercise));
  }
  async findByIds(ids: Exercise['id'][]) {
    const exercises = this.exercises.filter((e) => ids.includes(e.id));
    return Success(this.getCopies(exercises));
  }
  async findAllByUserId(userId: Exercise['userId']) {
    const exercises = this.exercises.filter((e) => e.userId === userId);
    return Success(this.getCopies(exercises));
  }
  async delete(id: Exercise['id']) {
    const exercise = this.exercises.find((e) => e.id === id);
    if (!exercise) return Failure(new ExerciseNotFoundError());
    this.exercises = this.exercises.filter((e) => e.id !== id);
    return Success(this.getCopy(exercise));
  }

  private getCopy(exercise: Exercise): Exercise {
    const props: ExerciseProps = {
      id: exercise.id,
      name: exercise.name,
      description: exercise.description,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
      muscles: exercise.muscles,
      userId: exercise.userId,
      createdAt: exercise.createdAt,
      updatedAt: exercise.updatedAt,
    };
    return new Exercise(props);
  }

  private getCopies(exercises: Exercise[]): Exercise[] {
    return exercises.map((e) => this.getCopy(e));
  }
}
