import { DateControl } from "./DateControl";
import { YearDropdownlist } from "./YearDropdownlist";

export function YearDateSelector({ className }: { className?: string }) {
	return (
		<DateControl>
			<YearDropdownlist className={`${className}`} />
		</DateControl>
	);
}
