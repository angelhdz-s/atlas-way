import { twMerge } from 'tailwind-merge';
import { Link } from '@/presentation/modules/button/components/Link';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  className?: string;
  name: string;
  date: string;
  href: string;
  sets: number;
  reps: number;
};

export function ExercisePanelItem({ className, href, name, date, reps, sets }: Props) {
  return (
    <div className={twMerge('w-full', className)}>
      <div className="flex w-full items-center gap-1">
        <main className="w-full space-y-1">
          <p className="text-txt-base-body body-medium">{name}</p>
          <footer>
            <ul className="caption flex gap-4">
              <li className="text-txt-base-caption flex gap-1">
                <Icon icon="calendar" variant={{ size: 'sm', weight: 'thin' }} />
                {date}
              </li>
            </ul>
          </footer>
        </main>
        <aside className="flex items-center gap-1">
          <div className="body-small text-txt-base-caption whitespace-nowrap">
            {`${sets} x ${reps}`}
          </div>
          <Link
            href={href}
            variant={{
              color: 'simple',
              type: 'icon',
            }}
          >
            <Icon icon="chevron-right" variant={{ size: 'md', weight: 'moderate' }} />
          </Link>
        </aside>
      </div>
    </div>
  );
}
