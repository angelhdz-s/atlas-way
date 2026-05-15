import Link from 'next/link';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function NavList({ isOpen, onClose }: Props) {
  const { ref } = useLayer({
    isOpen,
    onClose,
  });

  if (!isOpen) return null;

  return (
    <>
      <div ref={ref}>
        <ul className="bg-fill-base text-fg-strong absolute top-10 -left-10 z-10 flex w-48 flex-col items-start gap-0 rounded-md py-2 text-left *:grid *:h-full *:w-full *:cursor-pointer *:place-items-start *:px-6 *:py-2 *:transition-colors *:hover:bg-sky-50/5 *:hover:text-current/50 md:relative md:top-auto md:left-auto md:flex md:w-full md:flex-row md:items-center md:gap-16 md:bg-transparent md:p-0 md:text-center *:md:w-fit *:md:place-items-center *:md:p-0 *:md:hover:bg-transparent">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Exercises</Link>
          </li>
          <li>
            <Link href="/">Workouts</Link>
          </li>
        </ul>
      </div>
      <TooltipBackdrop />
    </>
  );
}
