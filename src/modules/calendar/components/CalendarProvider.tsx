import { useState } from "react";
import { TODAY } from "@/modules/globals/mocks/tracking";
import { CalendarContext } from "@/modules/calendar/context/calendar-context";

export function CalendarProvider({ children }: { children: React.ReactNode }) {
	const [currentDate, setCurrentDate] = useState<Date>(TODAY);

	return (
		<CalendarContext.Provider
			value={{ selectedDate: currentDate, setCurrentDate }}
		>
			{children}
		</CalendarContext.Provider>
	);
}
