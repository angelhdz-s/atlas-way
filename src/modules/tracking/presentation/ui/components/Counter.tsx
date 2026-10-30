import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function Counter({ className = '', number }: { className?: string; number: number }) {
  return (
    <span
      className={`font-funnel-display text-accent p-0.5 text-3xl leading-none font-medium ${className}`}
    >
      {number}
    </span>
  );
}

export function CounterIcon({ icon }: { icon: IconName }) {
  return <Icon icon={icon} className="text-accent size-8" variant={{ weight: 'medium' }} />;
}
