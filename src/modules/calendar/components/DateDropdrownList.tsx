import styles from "@/modules/calendar/components/DateDropdownList.module.css";
import {
	DropdownList,
	DropdownListProps,
} from "@/modules/globals/components/DropdownList";

export function DateDropdownlist({
	className = "",
	values,
	selectedValue,
}: DropdownListProps) {
	return (
		<DropdownList
			values={values}
			className={`font-light px-2 py-1 text-xs rounded-0 text-foreground/50 ${styles.select} ${className} outline-none!`}
			selectedValue={selectedValue}
		/>
	);
}
