import { useContext } from 'react';
import { getPrevAndNextDate } from '@/presentation/globals/lib/dates';
import { CalendarContext } from '../../../presentation/modules/calendar/contexts/calendar-context';
import { TrackingDay } from './TrackingDay';

export function SessionsDetails({ className }: { className?: string }) {
	const { selectedDate } = useContext(CalendarContext);
	const [prevDate, nextDate] = getPrevAndNextDate(selectedDate);

	return (
		<main className={`rounded bg-middle/20 h-86 p-8 flex-1 flex flex-col gap-4 ${className}`}>
			<header className="text-center text-2xl font-light font-funnel-display">Details</header>
			<div className="mx-auto max-w-5xl w-full flex items-center gap-4 justify-between">
				<TrackingDay date={prevDate} />
				<TrackingDay date={selectedDate} main />
				<TrackingDay date={nextDate} />
			</div>
		</main>
	);
}
