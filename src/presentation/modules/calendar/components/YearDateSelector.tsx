import { useContext } from 'react';
import { DateControl } from '@/presentation/modules/calendar/components/DateControl';
import { YearDropdownlist } from '@/presentation/modules/calendar/components/YearDropdownlist';
import { CalendarContext } from '@/presentation/modules/calendar/contexts/calendar-context';
import { useCalendar } from '@/presentation/modules/calendar/hooks/useCalendar';

export function YearDateSelector({ className }: { className?: string }) {
	const { selectedDate, setCurrentDate } = useContext(CalendarContext);
	const { handlePreviousYear, handleNextYear, handleYearChange, currentYear } = useCalendar({
		selectedDate,
		setCurrentDate,
	});
	return (
		<DateControl onLeftClick={handlePreviousYear} onRightClick={handleNextYear}>
			<YearDropdownlist
				className={`${className}`}
				onChange={(e) => handleYearChange(Number(e.target.value))}
				selectedValue={currentYear}
			/>
		</DateControl>
	);
}
