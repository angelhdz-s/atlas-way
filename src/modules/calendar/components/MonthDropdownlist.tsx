import { MONTH_NAMES } from "@/modules/globals/constants/date";
import { DateDropdownlist } from "./DateDropdrownList";

export function MonthDropdownlist({
	className,
	selectedValue,
	onChange,
}: {
	className?: string;
	selectedValue?: number;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	const monthOptions = MONTH_NAMES.map((month) => ({
		value: month.month,
		label: month.name,
	}));
	return (
		<DateDropdownlist
			values={monthOptions}
			className={`${className}`}
			selectedValue={selectedValue}
			onChange={onChange}
		/>
	);
}
