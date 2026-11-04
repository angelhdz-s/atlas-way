import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function RoutineScheduleDayEmpty({ className }: Props) {
  return (
    <div className={twMerge('', className)}>
      <Button variant={{ type: 'icon', size: 'sm', color: 'subtle' }} aria-label="Add session">
        <Icon icon="plus" variant={{ size: 'md', weight: 'moderate' }} />
      </Button>
    </div>
  );
}
