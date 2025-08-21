import {
	CalendarDayType,
	getCalendarStatusDay,
	getISOStringDate,
} from "@/lib/dates";
import { BoltSlash } from "@/modules/globals/components/Icons";

function CalendarDayItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<li
			className={`rounded-full size-8 flex items-center justify-center ${className}`}
		>
			{children}
		</li>
	);
}

type CalendarDayTypeProps = {
	day: number;
	isSelected?: boolean;
};

function CalendarDayCompleted({
	day,
	isSelected = false,
}: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			className={
				isSelected ? "text-main-foreground bg-green-600" : "bg-green-600/50"
			}
		>
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayCanceled({
	day,
	isSelected = false,
}: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			className={
				isSelected ? "text-main-foreground bg-red-600" : "bg-red-600/50"
			}
		>
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayCurrent({ isSelected = false }) {
	return (
		<CalendarDayItem
			className={`${isSelected ? "text-full-black bg-main-foreground light:text-main-foreground light:bg-full-black" : "bg-subtle/20"}`}
		>
			<BoltSlash className="size-5" strokeWidth={isSelected ? "2" : "1.5"} />
		</CalendarDayItem>
	);
}

function CalendarDayNormalSelected({ day }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem className="font-bold bg-main-foreground text-full-black light:bg-light-main-foreground light:text-main-foreground">
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayNextTraining({ day }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			className={`ld-main-fg outline-1 outline-offset-1 outline-foreground/20`}
		>
			{day}
		</CalendarDayItem>
	);
}

export function CalendarDay({
	day,
	currentDate,
	initialDate,
}: {
	day: CalendarDayType;
	currentDate: Date;
	initialDate: Date;
}) {
	const { type, monthDay, date } = day;

	const isSelected = getISOStringDate(date) === getISOStringDate(currentDate);

	if (type === "out") {
		return <CalendarDayItem className="opacity-50">{monthDay}</CalendarDayItem>;
	}

	if (date < initialDate) {
		return isSelected ? (
			<CalendarDayNormalSelected day={monthDay} isSelected={isSelected} />
		) : (
			<CalendarDayItem>{monthDay}</CalendarDayItem>
		);
	}

	const { status, trainingDay } = getCalendarStatusDay(date);

	if (status === "completed")
		return <CalendarDayCompleted day={monthDay} isSelected={isSelected} />;

	if (status === "canceled")
		return <CalendarDayCanceled day={monthDay} isSelected={isSelected} />;

	if (status === "current")
		return <CalendarDayCurrent isSelected={isSelected} />;

	if (isSelected)
		return <CalendarDayNormalSelected day={monthDay} isSelected={isSelected} />;

	if (trainingDay) return <CalendarDayNextTraining day={monthDay} />;

	return <CalendarDayItem>{monthDay}</CalendarDayItem>;
}
