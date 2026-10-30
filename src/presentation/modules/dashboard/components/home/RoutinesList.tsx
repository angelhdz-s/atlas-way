import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { Card } from '@/presentation/modules/card/components/Card';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function RoutinesList({ className = '' }: { className?: string }) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle icon="waypoints" title="Routines" />
      <main>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="text-fg-strong text-base">1. Push, Pull, Legs</h4>
            </header>
            <ul className="text-fg-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <Icon
                  icon="alarm-clock"
                  className="size-4"
                  variant={{ size: 'md', weight: 'moderate' }}
                />
                <span className="font-light">3 Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="dumbbell"
                  className="size-4"
                  variant={{ size: 'md', weight: 'moderate' }}
                />
                <span className="font-light">16 Exercises</span>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="text-fg-strong text-base">2. Full Body</h4>
            </header>
            <ul className="text-fg-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <Icon
                  icon="alarm-clock"
                  className="size-4"
                  variant={{ size: 'md', weight: 'moderate' }}
                />
                <span className="font-light">1 Session</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="dumbbell"
                  className="size-4"
                  variant={{ size: 'md', weight: 'moderate' }}
                />
                <span className="font-light">8 Exercises</span>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </Card>
  );
}
