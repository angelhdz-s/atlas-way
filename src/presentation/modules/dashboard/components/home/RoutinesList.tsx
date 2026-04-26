import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconRouteX } from '@/presentation/globals/components/icons/outline/IconRouteX';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { IconAlarm } from '@/presentation/globals/components/icons/outline/IconAlarm';
import { Card } from '@/presentation/modules/card/components/Card';

export function RoutinesList({ className = '' }: { className?: string }) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle Icon={IconRouteX} title="Routines" />
      <main>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="text-strong text-base">1. Push, Pull, Legs</h4>
            </header>
            <ul className="text-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <IconAlarm className="size-4" strokeWidth="1.5" />
                <span className="font-light">3 Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <IconBarbell className="size-4" strokeWidth="1.5" />
                <span className="font-light">16 Exercises</span>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="text-strong text-base">2. Full Body</h4>
            </header>
            <ul className="text-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <IconAlarm className="size-4" strokeWidth="1.5" />
                <span className="font-light">1 Session</span>
              </li>
              <li className="flex items-center gap-2">
                <IconBarbell className="size-4" strokeWidth="1.5" />
                <span className="font-light">8 Exercises</span>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </Card>
  );
}
