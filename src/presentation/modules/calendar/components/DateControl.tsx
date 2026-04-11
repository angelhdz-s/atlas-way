import { IconArrowUp } from '@/presentation/globals/components/icons/outline/IconArrowUp';
import { ArrowButton } from '@/presentation/modules/calendar/components/ArrowButton';

type Props = {
  className?: string;
  children: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

const iconSize = 'size-4';

export function DateControl({ className = '', children, onLeftClick, onRightClick }: Props) {
  return (
    <div className={`flex h-full items-center ${className}`}>
      <ArrowButton className="rounded-l" onClick={onLeftClick}>
        <IconArrowUp className={`${iconSize} -rotate-90`} strokeWidth="2" />
      </ArrowButton>
      {children}
      <ArrowButton className="rounded-r" onClick={onRightClick}>
        <IconArrowUp className={`${iconSize} rotate-90`} strokeWidth="2" />
      </ArrowButton>
    </div>
  );
}
