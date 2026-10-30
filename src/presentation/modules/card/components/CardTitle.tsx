import { twMerge } from 'tailwind-merge';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function CardTitle({
  className = '',
  title,
  icon,
}: {
  className?: string;
  title: string;
  icon?: IconName;
}) {
  return (
    <h3
      className={twMerge(
        'font-funnel-display text-fg-strong truncate overflow-hidden text-xl',
        icon ? 'flex w-full items-center gap-4' : '',
        className
      )}
    >
      {icon && (
        <div className="bg-fill-middle text-fg-subtle grid aspect-square size-9 place-content-center rounded-xl">
          <Icon icon={icon} variant={{ size: 'lg', weight: 'moderate' }} />
        </div>
      )}
      <span className="truncate">{title}</span>
    </h3>
  );
}
