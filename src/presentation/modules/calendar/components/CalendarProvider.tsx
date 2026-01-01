import { useState } from 'react';
import { TODAY } from '@/modules/globals/mocks/tracking';
import { CalendarContext } from '@/presentation/modules/calendar/contexts/calendar-context';

export function CalendarProvider({ children }: { children: React.ReactNode }) {
	const [currentDate, setCurrentDate] = useState<Date>(TODAY);
	return (
		<CalendarContext.Provider value={{ selectedDate: currentDate, setCurrentDate }}>
			{children}
		</CalendarContext.Provider>
	);
}
