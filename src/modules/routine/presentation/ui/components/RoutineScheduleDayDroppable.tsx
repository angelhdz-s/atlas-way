import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useDroppable } from '@dnd-kit/react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function RoutineScheduleDayDroppable({ className }: Props) {
  const id = useId();
  const { ref, isDropTarget } = useDroppable({
    id,
  });
  return (
    <div
      className={twMerge(
        'relative grid h-full w-full place-content-center overflow-visible rounded-sm p-2',
        className
      )}
      ref={ref}
    >
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute h-full w-full"
        preserveAspectRatio="none"
        aria-hidden={true}
      >
        <rect
          x={1}
          y={1}
          width="98"
          height="98"
          fill="none"
          strokeDasharray="8, 8"
          strokeDashoffset="0"
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect={'non-scaling-stroke'}
          className={twMerge(
            'transition-colors',
            isDropTarget ? 'stroke-white' : 'stroke-bd-base-subtle'
          )}
        />
      </svg>
      <div className="text-txt-base-caption flex flex-col items-center justify-center">
        <Icon
          icon="plus"
          variant={{ size: 'sm', weight: 'thin' }}
          className="text-ic-base-caption"
        />
        <span className="caption flex-1 text-center text-pretty">
          {!isDropTarget ? 'Drag and drop your session here' : 'Drop your session here'}
        </span>
      </div>
    </div>
  );
}
