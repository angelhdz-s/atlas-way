import { MONTH_NAMES } from '@/presentation/globals/constants/date';
import {
  SESSIONS_COUNTERS,
  TODAY,
} from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';
import { Counter, CounterIcon } from './Counter';
import { CalendarWeek } from '@/presentation/globals/components/Icons';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';

export function CurrentMonthSessionsCounter({
  className,
}: {
  className?: string;
}) {
  const { currentMonth } = SESSIONS_COUNTERS;
  const monthName = MONTH_NAMES[TODAY.getMonth()].name;

  return (
    <Card
      className={`flex flex-col gap-1 font-light ${className}`}
    >
      <header>
        <CardTitle
          title={`${monthName}'s Reached Sessions`}
        />
      </header>
      <main className="flex flex-1 items-center gap-1">
        <CounterIcon icon={CalendarWeek} />
        <Counter number={currentMonth} />
      </main>
    </Card>
  );
}
