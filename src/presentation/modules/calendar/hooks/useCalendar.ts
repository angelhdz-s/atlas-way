'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MONTH_NAMES, MonthDisplacement } from '@/presentation/globals/constants/date';
import {
	getCalendarDays,
	getPreviousNextMonthDate,
	getPreviousNextYearDate,
} from '@/presentation/globals/lib/dates';
import { CalendarContextType } from '../contexts/calendar-context';

export function useCalendar({ selectedDate, setCurrentDate }: CalendarContextType) {
	const [[currentYear, currentMonth], setCurrentYearMonth] = useState<[number, number]>([
		selectedDate.getFullYear(),
		selectedDate.getMonth(),
	]);

	const date = useRef(selectedDate);

	const updateMonthYear = (month: number, year: number) => {
		const newDate = new Date(year, month, selectedDate.getDate());
		date.current = newDate;
		setCurrentDate(newDate);
	};

	const days = useMemo(() => {
		const currentDay = date.current.getDate();
		return getCalendarDays(new Date(currentYear, currentMonth, currentDay));
	}, [currentMonth, currentYear]);

	const setNewMonthAndDate = (prev: Date, displacement: MonthDisplacement) => {
		const newDate = getPreviousNextMonthDate(prev, displacement);
		date.current = newDate;
		return newDate;
	};

	const setNewYearAndDate = (prev: Date, displacement: MonthDisplacement) => {
		const newDate = getPreviousNextYearDate(prev, displacement);
		date.current = newDate;
		return newDate;
	};

	const monthName = MONTH_NAMES[currentMonth].name;

	const handlePreviousMonth = () => {
		setCurrentDate((prev) => {
			return setNewMonthAndDate(prev, 'previous');
		});
	};

	const handleNextMonth = () => {
		setCurrentDate((prev) => {
			return setNewMonthAndDate(prev, 'next');
		});
	};

	const handlePreviousYear = () => {
		setCurrentDate((prev) => {
			return setNewYearAndDate(prev, 'previous');
		});
	};

	const handleNextYear = () => {
		setCurrentDate((prev) => {
			return setNewYearAndDate(prev, 'next');
		});
	};

	const handlePreviousDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() - 1);
			date.current = newDate;
			return newDate;
		});
	};

	const handleNextDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() + 1);
			date.current = newDate;
			return newDate;
		});
	};

	const handleMonthChange = (month: number) => {
		updateMonthYear(month, currentYear);
	};

	const handleYearChange = (year: number) => {
		updateMonthYear(currentMonth, year);
	};

	useEffect(() => {
		if (
			selectedDate.getMonth() !== currentMonth ||
			selectedDate.getFullYear() !== currentYear
		) {
			setCurrentYearMonth([selectedDate.getFullYear(), selectedDate.getMonth()]);
		}
	}, [selectedDate, currentMonth, currentYear]);

	return {
		selectedDate,
		currentYear,
		currentMonth,
		days,
		monthName,
		handlePreviousMonth,
		handleNextMonth,
		handlePreviousDate,
		handleNextDate,
		handlePreviousYear,
		handleNextYear,
		handleMonthChange,
		handleYearChange,
	};
}
