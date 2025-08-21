import { useState } from "react";
import { CalendarContext } from "@/modules/dashboard/context/calendar-context";

export function CalendarProvider({
	children,
	selectedDate,
}: {
	children: React.ReactNode;
	selectedDate: Date;
}) {
	const [currentDate, setCurrentDate] = useState<Date>(selectedDate);
	return (
		<CalendarContext.Provider
			value={{ selectedDate: currentDate, setCurrentDate }}
		>
			{children}
		</CalendarContext.Provider>
	);
}
