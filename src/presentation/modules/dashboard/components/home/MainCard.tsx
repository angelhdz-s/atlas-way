import { Card } from '@/presentation/modules/card/components/Card';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function MainCard({ className = '' }: { className?: string }) {
  return (
    <Card color="main" className={`relative flex flex-col gap-4 ${className}`}>
      <header className="relative z-1">
        <h3 className="font-funnel-display max-w-100 text-2xl tracking-tight">
          Start achieving your goals with <span className="text-accent">AtlasWay</span>
        </h3>
      </header>
      <main className="relative z-1 flex max-w-140 flex-1 flex-col">
        <ul className="flex flex-col gap-0 text-lg *:relative *:flex *:items-start *:gap-2">
          <li>
            <span className="pt-1">
              <Icon icon="check" variant={{ size: 'lg', weight: 'moderate' }} />
            </span>
            <span className="flex-1">Create Your Own Path</span>
          </li>
          <li>
            <span className="pt-1">
              <Icon icon="check" variant={{ size: 'lg', weight: 'moderate' }} />
            </span>
            <span className="flex-1">{"You Don't Need to Be an Expert"}</span>
          </li>
        </ul>
      </main>
      <ul className="*:border-bd-strong-light/50 relative z-1 flex w-full items-center justify-center gap-2 text-base *:flex *:items-center *:gap-2 *:rounded-full *:border *:px-3 *:py-1.5">
        <li>
          <Icon icon="waypoints" variant={{ size: 'md', weight: 'moderate' }} />
          Routines
        </li>
        <li>
          <Icon icon="alarm-clock" variant={{ size: 'md', weight: 'moderate' }} />
          Sessions
        </li>
        <li>
          <Icon icon="dumbbell" variant={{ size: 'md', weight: 'moderate' }} />
          Exercises
        </li>
      </ul>
    </Card>
  );
}
