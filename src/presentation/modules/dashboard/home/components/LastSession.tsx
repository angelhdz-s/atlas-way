import { CardTitle } from '../../card/components/CardTitle';
import { Card } from '../../card/components/Card';
import { IconSolidCircleCheck } from '@/presentation/globals/components/SolidIcons';
import { IconPlayerTrackPrev } from '@/presentation/globals/components/Icons';

export function LastSession({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle
        Icon={IconPlayerTrackPrev}
        title="Last Sessions"
      />
      <main className="flex flex-col gap-4">
        <header className="flex items-center">
          <h4 className="fg-complete inline text-xl leading-none font-bold">
            Push Day
          </h4>
          <span className="bg-front text-default/70 ml-2 inline rounded-full px-3 py-1 text-sm font-light">
            Yesterday
          </span>
        </header>
        <main>
          <ul className="font-sm font-light">
            <li className="flex items-center justify-between gap-2">
              <main className="*:inline">
                <IconSolidCircleCheck className="fg-complete mr-1 size-6" />
                <span className="leading-none">
                  Push Ups
                </span>
              </main>
              <aside>
                <span className="text-default/50 text-sm font-light">
                  +1 Reps
                </span>
              </aside>
            </li>

            <li className="flex items-center justify-between gap-2">
              <main className="*:inline">
                <IconSolidCircleCheck className="fg-complete mr-1 size-6" />
                <span className="leading-none">
                  Lateral Raises
                </span>
              </main>
              <aside>
                <span className="text-default/50 text-sm font-light">
                  +1 Reps
                </span>
              </aside>
            </li>

            <li className="flex items-center justify-between gap-2">
              <main className="*:inline">
                <IconSolidCircleCheck className="fg-complete mr-1 size-6" />
                <span className="leading-none">Abs</span>
              </main>
              <aside>
                <span className="text-default/50 text-sm font-light">
                  +1 Reps
                </span>
              </aside>
            </li>

            <li className="flex items-center justify-between gap-2">
              <main className="*:inline">
                <IconSolidCircleCheck className="fg-complete mr-1 size-6" />
                <span className="leading-none">Dips</span>
              </main>
              <aside>
                <span className="text-default/50 text-sm font-light">
                  +1 Reps
                </span>
              </aside>
            </li>
          </ul>
        </main>
      </main>
    </Card>
  );
}
