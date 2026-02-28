import {
  Barbell,
  Alarm,
} from '@/presentation/globals/components/Icons';
import { CardTitle } from '../../card/components/CardTitle';
import { Card } from '../../card/components/Card';

export function RoutinesList({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle title="Routines" />
      <main>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="fg-strong text-base">
                1. Push, Pull, Legs
              </h4>
            </header>
            <ul className="text-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <Alarm
                  className="size-4"
                  strokeWidth="1.5"
                />
                <span className="font-light">
                  3 Sessions
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Barbell
                  className="size-4"
                  strokeWidth="1.5"
                />
                <span className="font-light">
                  16 Exercises
                </span>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-1">
            <header className="">
              <h4 className="fg-strong text-base">
                2. Full Body
              </h4>
            </header>
            <ul className="text-default/70 flex flex-col gap-1 text-sm *:leading-none">
              <li className="flex items-center gap-2">
                <Alarm
                  className="size-4"
                  strokeWidth="1.5"
                />
                <span className="font-light">
                  1 Session
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Barbell
                  className="size-4"
                  strokeWidth="1.5"
                />
                <span className="font-light">
                  8 Exercises
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </Card>
  );
}
