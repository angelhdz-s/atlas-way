import { Icon, type IconName } from '@/presentation/modules/icon/components/Icon';
import { Tag } from '@/presentation/modules/tag/components/Tag';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  title: string;
  icon: IconName;
  href: string;
  completedExercises: number;
  totalExercises: number;
};

export function WorkoutCard({
  className,
  icon,
  title,
  href,
  completedExercises,
  totalExercises,
}: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        'bg-sf-base-default border-bd-base-default hover:border-bd-base-subtle w-96 cursor-pointer rounded-[20px] border transition-colors',
        className
      )}
    >
      <header className="flex h-12 items-center gap-2 px-2">
        <div className="text-txt-base-body bg-sf-base-subtle grid aspect-square size-8 place-content-center rounded-lg">
          <Icon icon={icon} variant={{ size: 'lg' }} />
        </div>
        <h3 className="heading-6 text-txt-base-heading w-full">{title}</h3>
        <Tag variant={{ color: 'success' }} className="flex items-center">
          Completed <Icon icon="check" variant={{ size: 'sm' }} />
        </Tag>
        <div className="text-txt-base-default grid size-5 place-content-center">
          <Icon icon="arrow-up-right" variant={{ size: 'md' }} />
        </div>
      </header>
      <footer className="space-y-2 p-4">
        <p className="body-small text-txt-base-caption">
          {completedExercises} de {totalExercises} ejercicios
        </p>
        <div className="flex w-full items-center gap-4">
          <ul className="flex w-full items-center gap-2">
            {Array.from({ length: totalExercises }, (_, i) => i + 1).map((e) =>
              e <= completedExercises ? (
                <li
                  key={`${title}-${e}-exercise`}
                  className="bg-sf-success-static h-2 w-full rounded-full"
                />
              ) : (
                <li
                  key={`${title}-${e}-exercise`}
                  className="bg-sf-base-subtle h-2 w-full rounded-full"
                />
              )
            )}
          </ul>
          <p className="caption text-txt-base-caption w-8 text-right">
            {Math.round((completedExercises / totalExercises) * 100)}%
          </p>
        </div>
      </footer>
    </Link>
  );
}
