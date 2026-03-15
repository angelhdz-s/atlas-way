import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';

export function SessionExercisesList({ exercises }: { exercises: ExerciseDTO[] }) {
  return (
    <ul className="flex flex-col gap-1 *:py-0.5">
      <li>
        <ul className="fg-strong grid grid-cols-[1rem_1fr_3rem_3rem_3rem] gap-1">
          <li className="text-left">#</li>
          <li className="text-left">Exercise</li>
          <li className="text-center">Sets</li>
          <li className="text-center">Reps</li>
          <li className="text-center">Weight</li>
        </ul>
      </li>
      {exercises.map(({ name, sets, reps, weight, id }, index) => (
        <li
          className="before:bg-subtle/20 relative before:absolute before:-top-px before:left-0 before:h-0.5 before:w-full"
          key={id}
        >
          <ul className="grid grid-cols-[1rem_1fr_3rem_3rem_3rem] gap-1 font-light">
            <li className="opacity-50">{index + 1}</li>
            <li>{name}</li>
            <li className="text-center">{sets}</li>
            <li className="text-center">{reps}</li>
            <li className="text-center">{weight}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
