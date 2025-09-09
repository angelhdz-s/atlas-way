import { MONTH_NAMES, WEEK_DAYS } from "@/modules/globals/constants/date";
import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";

export function SidebarFooter({ className = "" }: { className?: string }) {
	const date = new Date();
	const [dateWeekDay, dateDay, dateMonth, dateYear] = [
		WEEK_DAYS[date.getDay()].name,
		date.getDate(),
		MONTH_NAMES[date.getMonth()].name,
		date.getFullYear(),
	];
	const { isOpen } = useSidebar();
	return (
		<footer
			className={`flex items-center bg-background/50 light:bg-light-background ${className} ${isOpen ? "mx-1 rounded p-3" : "w-full justify-center"}`}
		>
			<span>{`${dateWeekDay}, ${dateDay} ${dateMonth}, ${dateYear}`}</span>
		</footer>
	);
}
