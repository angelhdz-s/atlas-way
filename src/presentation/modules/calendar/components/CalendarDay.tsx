import {
	CalendarDayType,
	getCalendarStatusDay,
	getISOStringDate,
} from '@/presentation/globals/lib/dates';
import { BarbellOff } from '@/presentation/globals/components/Icons';

function CalendarDayItem({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<button onClick={onClick} className="cursor-pointer w-full flex justify-center">
			<div className={`flex items-center justify-center rounded-full size-6 ${className}`}>
				{children}
			</div>
		</button>
	);
}

type CalendarDayTypeProps = {
	day: number;
	isSelected?: boolean;
	onClick?: () => void;
};

function CalendarDayCompleted({ day, isSelected = false, onClick }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			onClick={onClick}
			className={isSelected ? 'fg-strong bg-green-600' : 'bg-green-600/50'}
		>
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayCanceled({ day, isSelected = false, onClick }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			onClick={onClick}
			className={isSelected ? 'fg-strong bg-red-600' : 'bg-red-600/50'}
		>
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayCurrent({
	isSelected = false,
	onClick,
}: {
	isSelected: boolean;
	onClick?: () => void;
}) {
	return (
		<CalendarDayItem
			onClick={onClick}
			className={`${isSelected ? 'bg-strong fg-strong-light light:fg-strong-dark' : 'bg-subtle/20'}`}
		>
			<BarbellOff className="size-4.5" strokeWidth={isSelected ? '2' : '1.5'} />
		</CalendarDayItem>
	);
}

function CalendarDayNormalSelected({ day, onClick }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem onClick={onClick} className="bg-strong fg-full-black light:fg-strong-dark">
			{day}
		</CalendarDayItem>
	);
}

function CalendarDayNextTraining({ day, onClick }: CalendarDayTypeProps) {
	return (
		<CalendarDayItem
			onClick={onClick}
			className={`fg-strong outline-1 outline-offset-1 outline-bd-default`}
		>
			{day}
		</CalendarDayItem>
	);
}

export function CalendarDay({
	day,
	currentDate,
	initialDate,
	onClick,
}: {
	day: CalendarDayType;
	currentDate: Date;
	initialDate: Date;
	onClick?: () => void;
}) {
	const { type, monthDay, date } = day;

	if (type === 'out') {
		return (
			<CalendarDayItem onClick={onClick} className="opacity-50">
				{monthDay}
			</CalendarDayItem>
		);
	}

	const isSelected = getISOStringDate(date) === getISOStringDate(currentDate);

	if (date < initialDate) {
		return isSelected ? (
			<CalendarDayNormalSelected onClick={onClick} day={monthDay} isSelected={isSelected} />
		) : (
			<CalendarDayItem onClick={onClick}>{monthDay}</CalendarDayItem>
		);
	}

	const { status, trainingDay } = getCalendarStatusDay(date);

	if (status === 'completed')
		return <CalendarDayCompleted onClick={onClick} day={monthDay} isSelected={isSelected} />;

	if (status === 'canceled')
		return <CalendarDayCanceled onClick={onClick} day={monthDay} isSelected={isSelected} />;

	if (status === 'current')
		return <CalendarDayCurrent onClick={onClick} isSelected={isSelected} />;

	if (isSelected)
		return (
			<CalendarDayNormalSelected onClick={onClick} day={monthDay} isSelected={isSelected} />
		);

	if (trainingDay) return <CalendarDayNextTraining onClick={onClick} day={monthDay} />;

	return <CalendarDayItem onClick={onClick}>{monthDay}</CalendarDayItem>;
}
