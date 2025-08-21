import { createContext, Dispatch, SetStateAction } from "react";

export const CalendarContext = createContext<{
	selectedDate: Date;
	setCurrentDate: Dispatch<SetStateAction<Date>>;
}>({
	selectedDate: new Date(),
	setCurrentDate: () => {},
});
