import { Icon } from '@/presentation/modules/icon/components/Icon';
import { Tag } from '@/presentation/modules/tag/components/Tag';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Status = 'completed' | 'pending' | 'inProgress';

function getStatus(totalExercises: number, completedExercises: number): Status {
  if (totalExercises === completedExercises) return 'completed';
  if (completedExercises === 0) return 'pending';
  return 'inProgress';
}

type Props = {
  className?: string;
  href: string;
  session: {
    title: string;
    completedExercises: number;
    totalExercises: number;
  };
};

function CompletedTag() {
  return (
    <Tag variant={{ color: 'success' }} className="flex items-center">
      Completed <Icon icon="check" variant={{ size: 'sm' }} />
    </Tag>
  );
}

function PendingTag() {
  return (
    <Tag variant={{ color: 'warning' }} className="flex items-center">
      Not started yet <Icon icon="circle-dot" variant={{ size: 'sm' }} />
    </Tag>
  );
}

function InProgressTag() {
  return (
    <Tag variant={{ color: 'inProgress' }} className="flex items-center">
      In progress <Icon icon="circle-dot-dashed" variant={{ size: 'sm' }} />
    </Tag>
  );
}

const statusTag: Record<Status, React.ComponentType> = {
  pending: PendingTag,
  completed: CompletedTag,
  inProgress: InProgressTag,
};

export function WorkoutCard({ className, session, href }: Props) {
  const status = getStatus(session.totalExercises, session.completedExercises);
  const barBgClassName =
    status === 'inProgress' ? 'bg-sf-in-progress-static' : 'bg-sf-success-static';

  const Tag = statusTag[status] ?? PendingTag;

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
          <Icon icon="clipboard-list" variant={{ size: 'lg' }} />
        </div>
        <h3 className="heading-6 text-txt-base-heading w-full flex-1">{session.title}</h3>
        <Tag />
        <div className="text-txt-base-default grid size-5 place-content-center">
          <Icon icon="arrow-up-right" variant={{ size: 'md' }} />
        </div>
      </header>
      <footer className="space-y-2 p-4">
        <p className="body-small text-txt-base-caption">
          {`${session.completedExercises} de ${session.totalExercises} ejercicios`}
        </p>
        <div className="flex w-full items-center gap-4">
          <ul className="flex w-full items-center gap-2">
            {Array.from({ length: session.totalExercises }, (_, i) => i + 1).map((e) =>
              e <= session.completedExercises ? (
                <li
                  key={`${session.title}-${e}-exercise`}
                  className={twMerge('h-2 w-full rounded-full', barBgClassName)}
                />
              ) : (
                <li
                  key={`${session.title}-${e}-exercise`}
                  className="bg-sf-base-subtle h-2 w-full rounded-full"
                />
              )
            )}
          </ul>
          <p className="caption text-txt-base-caption w-8 text-right">
            {Math.round((session.completedExercises / session.totalExercises) * 100)}%
          </p>
        </div>
      </footer>
    </Link>
  );
}
