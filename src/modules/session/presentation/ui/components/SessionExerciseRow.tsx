import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  header?: boolean;
};

export function SessionExerciseRow({ children, header }: Props) {
  return (
    <li
      className={twMerge(
        'py-0.5',
        header ? 'text-fg-strong font-normal' : 'text-fg-subtle font-light'
      )}
    >
      <ul className="grid grid-cols-[1rem_1fr_3rem_3rem_3rem] place-content-center gap-1">
        {children}
      </ul>
    </li>
  );
}
