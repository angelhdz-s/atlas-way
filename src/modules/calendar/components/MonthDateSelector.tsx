import { DateControl } from "./DateControl";
import { MonthDropdownlist } from "./MonthDropdownlist";

export function MonthDateSelector({ className }: { className?: string }) {
	return (
		<DateControl>
			<MonthDropdownlist className={`${className}`} />
		</DateControl>
	);
}
