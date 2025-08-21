import { useCallback, useMemo, useRef, useState } from "react";
import { MONTH_NAMES, MonthDisplacement } from "@/constants/date";
import { getCalendarDays, getPreviousNextMonthDate } from "@/lib/dates";

export function useCalendar({ todayDate }: { todayDate: Date }) {
	const [currentDate, setCurrentDate] = useState<Date>(todayDate);
	const [currentMonth, setCurrentMonth] = useState<number>(
		todayDate.getMonth(),
	);
	const date = useRef(currentDate);

	const days = useMemo(() => {
		const currentYear = date.current.getFullYear();
		const currentDay = date.current.getDate();
		return getCalendarDays(new Date(currentYear, currentMonth, currentDay));
	}, [currentMonth]);

	const setNewMonthAndDate = useCallback(
		(prev: Date, displacement: MonthDisplacement) => {
			const newDate = getPreviousNextMonthDate(prev, displacement);
			setCurrentMonth(newDate.getMonth());
			date.current = newDate;
			return newDate;
		},
		[],
	);

	const monthName = useMemo(
		() => MONTH_NAMES[currentMonth].name,
		[currentMonth],
	);

	const handlePreviousMonth = () => {
		setCurrentDate((prev) => {
			return setNewMonthAndDate(prev, "previous");
		});
	};

	const handleNextMonth = () => {
		setCurrentDate((prev) => {
			return setNewMonthAndDate(prev, "next");
		});
	};

	const handlePreviousDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() - 1);
			date.current = newDate;
			if (currentMonth !== newDate.getMonth())
				setCurrentMonth(newDate.getMonth());
			return newDate;
		});
	};

	const handleNextDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() + 1);
			date.current = newDate;
			if (currentMonth !== newDate.getMonth())
				setCurrentMonth(newDate.getMonth());
			return newDate;
		});
	};

	return {
		currentDate,
		days,
		monthName,
		handlePreviousMonth,
		handleNextMonth,
		handlePreviousDate,
		handleNextDate,
	};
}
