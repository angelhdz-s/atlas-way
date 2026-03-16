import type { ExerciseDTO } from '../../application/dtos/exercise.dto';
import { ExerciseCard } from './ExerciseCard';

export function Exercises({ exercises }: { exercises: ExerciseDTO[] }) {
  return exercises
    .toSorted((a, b) => a.name.localeCompare(b.name))
    .map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />);
}
