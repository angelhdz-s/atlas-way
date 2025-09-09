"use client";

import { useContext } from "react";
import { FIRST_TRACKED_DAY } from "@/modules/globals/mocks/tracking";
import { CalendarDay } from "@/modules/calendar/components/CalendarDay";
import { CalendarContext } from "@/modules/calendar/context/calendar-context";
import { useCalendar } from "@/modules/calendar/hooks/useCalendar";

export function Calendar() {
	const { selectedDate, setCurrentDate } = useContext(CalendarContext);

	const { days } = useCalendar({ selectedDate, setCurrentDate });

	return (
		<main className="flex flex-col gap-2 p-4 border-1 border-foreground/10 rounded-xl text-sm font-light w-full min-w-60">
			<header className="w-full">
				<ul className="font-bold grid grid-cols-7 gap-2 text-center w-full">
					<li>S</li>
					<li>M</li>
					<li>T</li>
					<li>W</li>
					<li>T</li>
					<li>F</li>
					<li>S</li>
				</ul>
			</header>
			<main className="grid grid-cols-7 gap-2 w-full">
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
