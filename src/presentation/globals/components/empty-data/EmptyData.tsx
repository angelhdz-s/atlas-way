import type { IconTypes } from '@/presentation/globals/presentation.types';
import { twMerge } from 'tailwind-merge';

type Props = {
  Icon: IconTypes;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export function EmptyData({ Icon, title, description, className, children }: Props) {
  return (
    <div className={twMerge('w-76 space-y-6', className)}>
      <div className="grid place-content-center">
        <div className="bg-fill-base border-bd-muted grid size-20 place-content-center rounded-4xl border-2">
          <div className="mask-linear-125 mask-linear-from-40% mask-linear-to-100%">
            <Icon className="text-fg-default size-12" strokeWidth="1.2" />
          </div>
        </div>
      </div>
      <header className="space-y-1 text-center">
        <h3 className="text-fg-strong font-funnel-display text-2xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-fg-default text-base font-light">{description}</p>
      </header>
      <footer className="flex items-center justify-center">{children}</footer>
    </div>
  );
}
