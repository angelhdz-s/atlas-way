import type { IconTypes } from '@/presentation/globals/presentation.types';
import { twMerge } from 'tailwind-merge';
import { EmptyData } from '@/presentation/globals/components/empty-data/EmptyData';

type Props = {
  Icon: IconTypes;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export function EmptyDataPage({ Icon, description, title, children, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative grid h-full w-full place-content-center overflow-hidden',
        className
      )}
    >
      <EmptyData Icon={Icon} title={title} description={description} className="z-1">
        {children}
      </EmptyData>
      <div className="absolute top-[50%] left-[50%] translate-[-50%] perspective-distant">
        <div className="rotate-x-70 rotate-z-0 transform mask-radial-from-black/0 mask-radial-from-10% mask-radial-to-black/50 mask-radial-to-50% mask-radial-at-center transform-3d">
          <div className="mask-linear-180 mask-linear-from-0 mask-linear-to-80%">
            <Icon className="text-fg-muted -z-1 size-400" strokeWidth={'0.1'} />
          </div>
        </div>
      </div>
    </div>
  );
}
