import type { FullExerciseDTO } from '../exercise.actions';
import { ExerciseCard } from './ExerciseCard';

export function Exercises({
  exercises,
}: {
  exercises: FullExerciseDTO[];
}) {
  return exercises
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((exercise) => (
      <ExerciseCard key={exercise.id} {...exercise} />
    ));
}
