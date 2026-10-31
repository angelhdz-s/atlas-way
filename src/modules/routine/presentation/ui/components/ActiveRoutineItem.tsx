import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

export type ActiveRoutineData = {
  name: string;
  description: string | null;
  date: string;
  daysWithSessions: number[];
};

type Props = ActiveRoutineData & {
  className?: string;
};

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function ActiveRoutineItem({ className, name, description, date, daysWithSessions }: Props) {
  return (
    <div className={twMerge('bg-sf-base-default flex gap-2 rounded-xl p-4', className)}>
      <main className="flex-1 space-y-1">
        <header className="body-medium text-txt-base-heading">{name}</header>
        <p className="body-small text-txt-base-body">{description ?? 'No description'}</p>
        <footer>
          <ul className="caption flex items-center gap-4">
            <li className="text-txt-base-caption flex items-center gap-1">
              <Icon icon="clipboard-list" variant={{ size: 'sm', weight: 'thin' }} />
              {`${daysWithSessions.length} sessions`}
            </li>
            <li className="text-txt-base-caption flex items-center gap-1">
              <Icon icon="bed" variant={{ size: 'sm', weight: 'thin' }} />
              {date}
            </li>
          </ul>
        </footer>
      </main>
      <aside className="flex gap-2">
        <div>
          <ol className="caption flex items-center gap-1">
            {daysWithSessions.map((d) => (
              <li
                key={`${name}-day-${date}-${d}`}
                className="text-txt-base-caption bg-sf-base-subtle grid h-8 place-content-center rounded-sm px-4"
              >
                {WEEK_DAYS[d] ?? 'Day'}
              </li>
            ))}
          </ol>
        </div>
        <Button
          variant={{
            type: 'icon',
            size: 'sm',
            color: 'simple',
          }}
        >
          <Icon icon="ellipsis-vertical" variant={{ size: 'sm', weight: 'moderate' }} />
        </Button>
      </aside>
    </div>
  );
}
