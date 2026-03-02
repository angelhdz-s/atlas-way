'use client';

import { useContext } from 'react';
import { FIRST_TRACKED_DAY } from '@/presentation/globals/mocks/tracking';
import { CalendarDay } from '@/presentation/modules/calendar/components/CalendarDay';
import { CalendarContext } from '@/presentation/modules/calendar/contexts/calendar-context';
import { useCalendar } from '@/presentation/modules/calendar/hooks/useCalendar';

export function Calendar() {
  const { selectedDate, setCurrentDate } =
    useContext(CalendarContext);

  const { days } = useCalendar({
    selectedDate,
    setCurrentDate,
  });

  return (
    <main className="border-bd-default flex w-full min-w-60 flex-col gap-2 rounded-xl border p-4 text-sm font-light">
      <header className="w-full">
        <ul className="grid w-full grid-cols-7 gap-2 text-center font-bold">
          <li>S</li>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
        </ul>
      </header>
      <main className="grid w-full grid-cols-7 gap-2">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            onClick={() => setCurrentDate(day.date)}
            day={day}
            initialDate={FIRST_TRACKED_DAY}
            currentDate={selectedDate}
          />
        ))}
      </main>
    </main>
  );
}
