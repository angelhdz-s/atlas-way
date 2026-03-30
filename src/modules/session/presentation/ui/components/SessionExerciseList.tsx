import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import { IconDots } from '@/presentation/globals/components/Icons';
import { twMerge } from 'tailwind-merge';
import { SessionExerciseRow } from './SessionExerciseRow';

export function SessionExercisesList({ exercises }: { exercises: ExerciseDTO[] }) {
  return (
    <ul
      className={twMerge(
        'no-scrollbar divide-bd-default flex h-40 flex-col gap-1 divide-y overflow-y-scroll pb-6',
        'mask-b-from-90% mask-b-to-120%'
      )}
    >
      <SessionExerciseRow header>
        <li className="">#</li>
        <li className="truncate">Exercise</li>
        <li className="text-center">Sets</li>
        <li className="text-center">Reps</li>
        <li className="text-center">Weight</li>
      </SessionExerciseRow>

      {exercises.map(({ name, sets, reps, weight, id }, index) => (
        <SessionExerciseRow key={id}>
          <li className="fg-muted">{index + 1}</li>
          <li className="truncate">{name}</li>
          <li className="text-center">{sets}</li>
          <li className="text-center">{reps}</li>
          <li className="text-center">{weight}</li>
        </SessionExerciseRow>
      ))}
      <li className="flex items-center justify-center">
        <IconDots className="text-muted/50" />
      </li>
    </ul>
  );
}
