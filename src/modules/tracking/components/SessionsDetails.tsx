import { useContext } from 'react';
import { getPrevAndNextDate } from '@/presentation/globals/lib/dates';
import { CalendarContext } from '../../../presentation/modules/calendar/contexts/calendar-context';
import { TrackingDay } from './TrackingDay';

export function SessionsDetails({
  className,
}: {
  className?: string;
}) {
  const { selectedDate } = useContext(CalendarContext);
  const [prevDate, nextDate] =
    getPrevAndNextDate(selectedDate);

  return (
    <main
      className={`bg-middle/20 flex h-86 flex-1 flex-col gap-4 rounded p-8 ${className}`}
    >
      <header className="font-funnel-display text-center text-2xl font-light">
        Details
      </header>
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
        <TrackingDay date={prevDate} />
        <TrackingDay date={selectedDate} main />
        <TrackingDay date={nextDate} />
      </div>
    </main>
  );
}
