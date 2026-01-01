import { TODAY } from '@/modules/globals/mocks/tracking';
import { DROPDOWN_LIST_YEARS_RANGE } from '../constants/dropdown-list';
import { DateDropdownlist } from './DateDropdrownList';

function generateYearOptions<T>(_value: T, i: number) {
	const rangeHalf = Math.floor(DROPDOWN_LIST_YEARS_RANGE / 2);
	const year = TODAY.getFullYear() - rangeHalf + i;
	return { value: year, label: year.toString() };
}

export function YearDropdownlist({
	className,
	selectedValue,
	onChange,
}: {
	className?: string;
	selectedValue?: number;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	const yearOptions = Array.from({ length: DROPDOWN_LIST_YEARS_RANGE }, generateYearOptions);
	return (
		<DateDropdownlist
			values={yearOptions}
			className={`${className}`}
			selectedValue={selectedValue}
			onChange={onChange}
		/>
	);
}
