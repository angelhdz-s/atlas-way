import { useContext } from 'react';
import { CalendarContext } from '@/presentation/modules/calendar/contexts/calendar-context';
import { useCalendar } from '@/presentation/modules/calendar/hooks/useCalendar';
import { ArrowUp } from '@/presentation/globals/components/Icons';

function ArrowButton({
  onClick,
  children,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hover:fg-strong grid size-6 cursor-pointer place-content-center rounded-full transition-colors ${className} `}
    >
      {children}
    </button>
  );
}

type DateControllerProps = {
  onPreviousClick: () => void;
  onNextClick: () => void;
  children: React.ReactNode;
  className?: string;
};

function DateController({
  className,
  onPreviousClick,
  children,
  onNextClick,
}: DateControllerProps) {
  return (
    <section
      className={`flex flex-col items-center justify-between gap-2 ${className}`}
    >
      <ArrowButton
        onClick={onPreviousClick}
        className="text-default/25"
      >
        <ArrowUp
          className="-mb-1.5 size-8"
          strokeWidth="2"
        />
      </ArrowButton>
      <span className="fg-strong text-3xl font-bold">
        {children}
      </span>
      <ArrowButton
        onClick={onNextClick}
        className="text-default/25"
      >
        <ArrowUp
          className="size-8 rotate-180"
          strokeWidth="2"
        />
      </ArrowButton>
    </section>
  );
}

export function DateSelector({
  className = '',
}: {
  className?: string;
}) {
  const { selectedDate, setCurrentDate } =
    useContext(CalendarContext);

  const {
    handleNextDate,
    handleNextMonth,
    handlePreviousDate,
    handlePreviousMonth,
    handleNextYear,
    handlePreviousYear,
    monthName,
  } = useCalendar({ selectedDate, setCurrentDate });
  return (
    <section
      className={`border-bd-default flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-6 ${className}`}
    >
      <header className="font-funnel-display fg-strong text-4xl font-medium">
        <h2>Friday, July 5</h2>
      </header>
      <main className="flex gap-4">
        <DateController
          onPreviousClick={handlePreviousYear}
          onNextClick={handleNextYear}
        >
          {selectedDate.getFullYear()}
        </DateController>
        <DateController
          className="w-36"
          onPreviousClick={handlePreviousMonth}
          onNextClick={handleNextMonth}
        >
          {monthName}
        </DateController>
        <DateController
          className="w-16"
          onPreviousClick={handlePreviousDate}
          onNextClick={handleNextDate}
        >
          {selectedDate.getDate()}
        </DateController>
      </main>
    </section>
  );
}
