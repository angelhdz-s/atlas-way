import { twMerge } from 'tailwind-merge';
import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  icon: IconName;
  className?: string;
  statTitle: string;
  statData: string;
};

export function StatCard({ icon, statData, statTitle, className }: Props) {
  return (
    <div
      className={twMerge(
        'border-bd-muted from-fill-back to-fill-base col-span-3 flex items-center gap-4 rounded-[20px] border bg-linear-315 from-[-25%] to-125% p-4',
        className
      )}
    >
      <picture className="grid size-9 place-content-center p-1">
        <Icon icon={icon} className="text-fg-default" variant={{ size: 'lg', weight: 'moderate' }} />
      </picture>
      <main className="space-y-1">
        <header className="text-fg-default leading-none font-light">{statTitle}</header>
        <p className="text-fg-strong font-funnel-display text-xl leading-none font-medium">
          {statData}
        </p>
      </main>
    </div>
  );
}
