import { twMerge } from 'tailwind-merge';
import { Button } from '@/presentation/modules/button/components/Button';
import type { DivProps } from '@/presentation/globals/presentation.types';
import { Icon } from '@/presentation/modules/icon/components/Icon';

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
        'text-fg-strong cursor-grab rounded-lg py-1 pl-1 text-sm',
        'bg-fill-base shadow-back light:shadow-black/5 border-bd-default shadow-lg',
        className ?? ''
      )}
    >
      <Icon
        icon="grip-vertical"
        className="size-4"
        variant={{ size: 'md', weight: 'moderate' }}
      />
      <span className="w-15 truncate">{children}</span>
      {onRemove && (
        <Button
          variant={{ type: 'icon', size: 'sm', color: 'simple' }}
          aria-label="Remove item"
          onClick={onRemove}
        >
          <Icon icon="x" variant={{ size: 'sm', weight: 'moderate' }} />
        </Button>
      )}
    </div>
  );
}
