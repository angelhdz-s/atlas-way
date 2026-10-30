import { Card } from '@/presentation/modules/card/components/Card';
import { Icon } from '@/presentation/modules/icon/components/Icon';

function CalendarHeader({ className = '' }: { className?: string }) {
  return (
    <header className={` ${className}`}>
      <ul className="font-funnel-display grid grid-cols-[1fr_auto_1fr] font-light">
        <li className="text-fg-default/50">July</li>
        <li className="text-fg-strong text-xl">August 2024</li>
        <li className="text-fg-default/50 text-right">September</li>
      </ul>
    </header>
  );
}

function CalendarCurrentWeek({ className }: { className?: string }) {
  return (
    <ul
      className={`flex items-end justify-around gap-2 text-sm leading-[1.2] *:w-full *:rounded-lg *:px-3 *:py-1 ${className}`}
    >
      <li className="bg-fill-middle text-fg-default/70 flex flex-col items-center gap-2 text-xs font-normal">
        <main>
          <header>Thu</header>
          <footer>07</footer>
        </main>
        <footer>
          <Icon icon="check" className="mx-auto" variant={{ size: 'md', weight: 'moderate' }} />
        </footer>
      </li>
      <li className="bg-fill-middle flex flex-col items-center gap-2">
        <main>
          <header>Fri</header>
          <footer>08</footer>
        </main>
        <footer>
          <Icon icon="check" className="mx-auto" variant={{ size: 'md', weight: 'moderate' }} />
        </footer>
      </li>
      <li className="bg-fill-middle text-accent flex flex-col items-center gap-2 text-xl leading-[1.2] font-medium">
        <main>
          <header>Sat</header>
          <footer>09</footer>
        </main>
        <footer>
          <Icon
            icon="alarm-clock"
            className="mx-auto"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
      <li className="bg-fill-middle flex flex-col items-center gap-2">
        <main>
          <header>Sun</header>
          <footer>10</footer>
        </main>
        <footer>
          <Icon icon="dumbbell" className="mx-auto" variant={{ size: 'md', weight: 'moderate' }} />
        </footer>
      </li>
      <li className="bg-fill-middle text-fg-default/70 flex flex-col items-center gap-2 text-xs font-normal">
        <main>
          <header>Mon</header>
          <footer>11</footer>
        </main>
        <footer>
          <Icon icon="bed" className="mx-auto" variant={{ size: 'md', weight: 'moderate' }} />
        </footer>
      </li>
    </ul>
  );
}

function CalendarNextWeek({ className }: { className?: string }) {
  return (
    <ul
      className={`text-fg-default/50 *:bg-fill-middle flex items-end justify-around gap-2 text-xs *:flex *:w-full *:flex-col *:items-center *:gap-1 *:rounded-lg *:px-3 *:py-1 ${className} `}
    >
      <li>
        <main>Tue 12</main>
        <footer>
          <Icon
            icon="dumbbell"
            className="mx-auto size-4"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
      <li>
        <main>Wed 13</main>
        <footer>
          <Icon
            icon="bed"
            className="mx-auto size-4"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
      <li>
        <main>Thu 14</main>
        <footer>
          <Icon
            icon="dumbbell"
            className="mx-auto size-4"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
      <li>
        <main>Fri 15</main>
        <footer>
          <Icon
            icon="bed"
            className="mx-auto size-4"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
      <li>
        <main>Sat 16</main>
        <footer>
          <Icon
            icon="bed"
            className="mx-auto size-4"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </footer>
      </li>
    </ul>
  );
}

export function Calendar({ className = '' }: { className?: string }) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CalendarHeader />
      <main className="flex flex-1 flex-col justify-end gap-2 text-center leading-[1.2] font-light">
        <CalendarCurrentWeek />
        <CalendarNextWeek />
      </main>
    </Card>
  );
}
