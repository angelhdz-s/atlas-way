import { MONTH_NAMES } from "@/modules/globals/constants/date";
import { TODAY } from "@/modules/globals/mocks/tracking";
import { DateDropdownlist } from "./DateDropdrownList";

export function MonthDropdownlist({ className }: { className?: string }) {
	const monthOptions = MONTH_NAMES.map((month) => ({
		value: month.month,
		label: month.name,
	}));
	return (
		<DateDropdownlist
			values={monthOptions}
			className={`${className}`}
			selectedValue={TODAY.getMonth() + 1}
		/>
	);
}
