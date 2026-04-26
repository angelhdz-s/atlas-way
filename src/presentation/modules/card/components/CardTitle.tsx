import { twMerge } from 'tailwind-merge';
import type { IconTypes } from '@/presentation/globals/presentation.types';

export function CardTitle({
  className = '',
  title,
  Icon,
}: {
  className?: string;
  title: string;
  Icon?: IconTypes;
}) {
  return (
    <h3
      className={twMerge(
        'font-funnel-display text-strong truncate overflow-hidden text-xl',
        Icon ? 'flex w-full items-center gap-4' : '',
        className
      )}
    >
      {Icon && (
        <div className="bg-fill-middle text-muted grid aspect-square size-9 place-content-center rounded-xl">
          <Icon strokeWidth="1.5" className="size-6" />
        </div>
      )}
      <span className="truncate">{title}</span>
    </h3>
  );
}
