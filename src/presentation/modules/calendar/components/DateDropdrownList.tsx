import styles from './DateDropdownList.module.css';
import { DropdownList, DropdownListProps } from '@/presentation/globals/components/DropdownList';

export function DateDropdownlist({
	className = '',
	values,
	selectedValue,
	onChange,
}: DropdownListProps) {
	return (
		<DropdownList
			values={values}
			className={`font-light px-2 py-1 text-xs rounded-0 text-foreground/50 ${styles.select} ${className} outline-none!`}
			selectedValue={selectedValue}
			onChange={onChange}
		/>
	);
}
