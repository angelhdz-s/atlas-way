import type { IconTypes } from '@/presentation/globals/presentation.types';

export function Counter({ className, number }: { className?: string; number: number }) {
  return (
    <span
      className={`font-funnel-display text-accent p-0.5 text-3xl leading-none font-medium ${className}`}
    >
      {number}
    </span>
  );
}

export function CounterIcon({ icon: Icon }: { icon: IconTypes }) {
  return <Icon className="text-accent size-8" strokeWidth="2" />;
}
