import {
  Barbell,
  BarbellOff,
  CircleCheck,
  Alarm,
} from '@/presentation/globals/components/Icons';
import { Card } from '../../card/components/Card';

function CalendarHeader({
  className = '',
}: {
  className?: string;
}) {
  return (
    <header className={` ${className}`}>
      <ul className="font-funnel-display grid grid-cols-[1fr_auto_1fr] font-light">
        <li className="text-default/50">July</li>
        <li className="fg-strong text-xl">August 2024</li>
        <li className="text-default/50 text-right">
          September
        </li>
      </ul>
    </header>
  );
}

function CalendarCurrentWeek({
  className,
}: {
  className?: string;
}) {
  return (
    <ul
      className={`flex items-end justify-around gap-2 text-sm leading-[1.2] *:w-full *:rounded-lg *:px-3 *:py-1 ${className}`}
    >
      <li className="bg-subtle/5 text-default/70 flex flex-col items-center gap-2 text-xs font-normal">
        <main>
          <header>Thu</header>
          <footer>07</footer>
        </main>
        <footer>
          <CircleCheck className="mx-auto size-5" />
        </footer>
      </li>
      <li className="bg-subtle/10 flex flex-col items-center gap-2">
        <main>
          <header>Fri</header>
          <footer>08</footer>
        </main>
        <footer>
          <CircleCheck className="mx-auto size-5" />
        </footer>
      </li>
      <li className="bg-subtle/10 fg-accent flex flex-col items-center gap-2 text-xl leading-[1.2] font-medium">
        <main>
          <header>Sat</header>
          <footer>09</footer>
        </main>
        <footer>
          <Alarm className="mx-auto size-5" />
        </footer>
      </li>
      <li className="bg-subtle/10 flex flex-col items-center gap-2">
        <main>
          <header>Sun</header>
          <footer>10</footer>
        </main>
        <footer>
          <Barbell className="mx-auto size-5" />
        </footer>
      </li>
      <li className="bg-subtle/5 text-default/70 flex flex-col items-center gap-2 text-xs font-normal">
        <main>
          <header>Mon</header>
          <footer>11</footer>
        </main>
        <footer>
          <BarbellOff className="mx-auto size-5" />
        </footer>
      </li>
    </ul>
  );
}

function CalendarNextWeek({
  className,
}: {
  className?: string;
}) {
  return (
    <ul
      className={`text-default/50 *:bg-subtle/5 flex items-end justify-around gap-2 text-xs *:flex *:w-full *:flex-col *:items-center *:gap-1 *:rounded-lg *:px-3 *:py-1 ${className} `}
    >
      <li>
        <main>Tue 12</main>
        <footer>
          <Barbell
            className="mx-auto size-4"
            strokeWidth="1.5"
          />
        </footer>
      </li>
      <li>
        <main>Wed 13</main>
        <footer>
          <BarbellOff
            className="mx-auto size-4"
            strokeWidth="1.5"
          />
        </footer>
      </li>
      <li>
        <main>Thu 14</main>
        <footer>
          <Barbell
            className="mx-auto size-4"
            strokeWidth="1.5"
          />
        </footer>
      </li>
      <li>
        <main>Fri 15</main>
        <footer>
          <BarbellOff
            className="mx-auto size-4"
            strokeWidth="1.5"
          />
        </footer>
      </li>
      <li>
        <main>Sat 16</main>
        <footer>
          <BarbellOff
            className="mx-auto size-4"
            strokeWidth="1.5"
          />
        </footer>
      </li>
    </ul>
  );
}

export function Calendar({
  className = '',
}: {
  className?: string;
}) {
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
