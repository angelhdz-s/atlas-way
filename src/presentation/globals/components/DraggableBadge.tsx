import { twMerge } from 'tailwind-merge';
import type { DivProps } from '../types';
import { IconGripVertical } from './Icons';

export function DraggableBadge(props: DivProps) {
  const { className, children, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={twMerge(
        `flex h-8 w-fit items-center justify-center gap-1 border`,
        'fg-strong cursor-grab rounded-lg py-1 pr-3 pl-1 text-sm',
        'bg-middle shadow-back light:shadow-black/5 border-bd-default shadow-lg',
        className ?? ''
      )}
    >
      <IconGripVertical className="size-4" />
      {children}
    </div>
  );
}
