import { SIconCircleCheck } from '@/presentation/globals/components/icons/solid/SIconCircleCheck';
import { IconMapRoute } from '@/presentation/globals/components/icons/outline/IconMapRoute';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconAlarm } from '@/presentation/globals/components/icons/outline/IconAlarm';
import { Card } from '@/presentation/modules/card/components/Card';

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
              <SIconCircleCheck className="size-6" />
            </span>
            <span className="flex-1">Create Your Own Path</span>
          </li>
          <li>
            <span className="pt-1">
              <SIconCircleCheck className="size-6" />
            </span>
            <span className="flex-1">{"You Don't Need to Be an Expert"}</span>
          </li>
        </ul>
      </main>
      <ul className="*:border-bd-strong-light/50 relative z-1 flex w-full items-center justify-center gap-2 text-base *:flex *:items-center *:gap-2 *:rounded-full *:border *:px-3 *:py-1.5">
        <li>
          <IconMapRoute className="size-5" strokeWidth="1.5" />
          Routines
        </li>
        <li>
          <IconAlarm className="size-5" strokeWidth="1.5" />
          Sessions
        </li>
        <li>
          <IconBarbell className="size-5" strokeWidth="1.5" />
          Exercises
        </li>
      </ul>
    </Card>
  );
}
