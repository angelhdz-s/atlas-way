import { twMerge } from 'tailwind-merge';
import { IconGripVertical } from '@/presentation/globals/components/icons/outline/IconGripVertical';
import { IconXMark } from '@/presentation/globals/components/icons/outline/IconXMark';
import { Button } from '@/presentation/modules/button/components/Button';
import type { DivProps } from '@/presentation/globals/presentation.types';

type Props = DivProps & {
  onRemove?: () => void;
};

export function DraggableBadge(props: Props) {
  const { onRemove, className, children, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={twMerge(
        `flex h-8 w-fit items-center justify-center gap-1 border`,
        'text-strong cursor-grab rounded-lg py-1 pl-1 text-sm',
        'bg-base shadow-back light:shadow-black/5 border-bd-default shadow-lg',
        className ?? ''
      )}
    >
      <IconGripVertical className="size-4" />
      <span className="w-15 truncate">{children}</span>
      {onRemove && (
        <Button
          variantConfig={{ type: 'square', size: 'xs', color: 'simple' }}
          aria-label="Remove item"
          onClick={onRemove}
        >
          <IconXMark className="size-5" />
        </Button>
      )}
    </div>
  );
}
