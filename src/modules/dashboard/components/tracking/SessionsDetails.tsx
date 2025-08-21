import { useContext } from "react";
import { CalendarContext } from "../../context/calendar-context";

export function SessionsDetails() {
	const { selectedDate } = useContext(CalendarContext);

	return (
		<main className="flex items-center gap-2 justify-between">
			<div>{selectedDate.getDay() - 1}</div>
			<div>{selectedDate.getDay()}</div>
			<div>{selectedDate.getDay() + 1}</div>
		</main>
	);
}
