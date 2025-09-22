import { useContext } from "react";
import { DateControl } from "@/modules/calendar/components/DateControl";
import { MonthDropdownlist } from "@/modules/calendar/components/MonthDropdownlist";
import { CalendarContext } from "@/modules/calendar/contexts/calendar-context";
import { useCalendar } from "@/modules/calendar/hooks/useCalendar";

export function MonthDateSelector({ className }: { className?: string }) {
	const { selectedDate, setCurrentDate } = useContext(CalendarContext);
	const {
		selectedDate: currentDate,
		handlePreviousMonth,
		handleNextMonth,
		handleMonthChange,
	} = useCalendar({
		selectedDate,
		setCurrentDate,
	});
	const currentMonth = currentDate.getMonth() + 1;
	return (
		<DateControl
			onLeftClick={handlePreviousMonth}
			onRightClick={handleNextMonth}
		>
			<MonthDropdownlist
				selectedValue={currentMonth}
				className={`${className}`}
				onChange={(e) => {
					const newMonth = Number(e.target.value) - 1;
					handleMonthChange(newMonth);
				}}
			/>
		</DateControl>
	);
}
