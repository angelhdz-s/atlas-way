import { MONTH_NAMES, WEEK_DAYS } from '@/presentation/globals/constants/date';

export function SidebarFooter({ className = '' }: { className?: string }) {
	const date = new Date();
	const [dateWeekDay, dateDay, dateMonth, dateYear] = [
		WEEK_DAYS[date.getDay()].name,
		date.getDate(),
		MONTH_NAMES[date.getMonth()].name,
		date.getFullYear(),
	];
	return (
		<footer
			className={`flex items-center bg-background/50 light:bg-light-background mx-1 rounded p-3 ${className}`}
		>
			<span>{`${dateWeekDay}, ${dateDay} ${dateMonth}, ${dateYear}`}</span>
		</footer>
	);
}
