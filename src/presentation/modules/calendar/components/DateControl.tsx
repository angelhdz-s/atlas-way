import { ArrowButton } from '@/presentation/modules/calendar/components/ArrowButton';
import { Icon } from '@/presentation/modules/icon/components/Icon';

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
        <Icon
          icon="arrow-up"
          className={`${iconSize} -rotate-90`}
          variant={{ size: 'md', weight: 'medium' }}
        />
      </ArrowButton>
      {children}
      <ArrowButton className="rounded-r" onClick={onRightClick}>
        <Icon
          icon="arrow-up"
          className={`${iconSize} rotate-90`}
          variant={{ size: 'md', weight: 'medium' }}
        />
      </ArrowButton>
    </div>
  );
}
