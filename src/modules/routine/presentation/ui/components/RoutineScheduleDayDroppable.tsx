import { Icon, type IconName } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type Action = 'move' | 'add' | 'swap' | 'replace';

type Props = {
  className?: string;
  action?: Action;
};

type ActionContent = {
  icon: IconName;
  label: string;
};

const ACTION_CONTENTS: Record<Action, ActionContent> = {
  add: {
    icon: 'plus',
    label: 'Add session',
  },
  move: {
    icon: 'arrow-down',
    label: 'Move session',
  },
  replace: {
    icon: 'repeat',
    label: 'Replace session',
  },
  swap: {
    icon: 'shuffle',
    label: 'Swap sessions',
  },
};

export function RoutineScheduleDayDroppable({ className, action = 'add' }: Props) {
  const actionContent = ACTION_CONTENTS[action] ?? ACTION_CONTENTS.add;
  const icon = actionContent.icon;
  const label = actionContent.label;

  return (
    <div
      className={twMerge(
        'relative flex h-full w-full items-center justify-center overflow-visible rounded-sm p-1',
        className
      )}
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
          className={twMerge('transition-colors', 'stroke-white')}
        />
      </svg>
      <div className="text-txt-base-caption flex flex-col items-center justify-center">
        <Icon
          icon={icon}
          variant={{ size: 'sm', weight: 'thin' }}
          className="text-ic-base-caption"
        />
        <span className="caption flex-1 text-center text-pretty">{label}</span>
      </div>
    </div>
  );
}
