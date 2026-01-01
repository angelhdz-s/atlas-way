import { useContext } from 'react';
import { CalendarContext } from '@/presentation/modules/calendar/contexts/calendar-context';
import { useCalendar } from '@/presentation/modules/calendar/hooks/useCalendar';
import { ArrowUp } from '@/modules/globals/components/Icons';

function ArrowButton({
	onClick,
	children,
	className,
}: {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
}) {
	return (
		<button
			onClick={onClick}
			className={`
			size-6 cursor-pointer rounded-full hover:text-main-foreground light:hover:text-light:main-foreground
			grid place-content-center transition-colors
			${className}
			`}
		>
			{children}
		</button>
	);
}

type DateControllerProps = {
	onPreviousClick: () => void;
	onNextClick: () => void;
	children: React.ReactNode;
	className?: string;
};

function DateController({
	className,
	onPreviousClick,
	children,
	onNextClick,
}: DateControllerProps) {
	return (
		<section className={`flex flex-col gap-2 items-center justify-between ${className}`}>
			<ArrowButton onClick={onPreviousClick} className="text-foreground/25">
				<ArrowUp className="-mb-1.5 size-8" strokeWidth="2" />
			</ArrowButton>
			<span className="text-3xl ld-main-fg font-bold">{children}</span>
			<ArrowButton onClick={onNextClick} className="text-foreground/25">
				<ArrowUp className="size-8 rotate-180" strokeWidth="2" />
			</ArrowButton>
		</section>
	);
}

export function DateSelector({ className = '' }: { className?: string }) {
	const { selectedDate, setCurrentDate } = useContext(CalendarContext);

	const {
		handleNextDate,
		handleNextMonth,
		handlePreviousDate,
		handlePreviousMonth,
		handleNextYear,
		handlePreviousYear,
		monthName,
	} = useCalendar({ selectedDate, setCurrentDate });
	return (
		<section
			className={`rounded-xl p-6 border-1 border-foreground/10 flex-1 flex justify-center items-center flex-col gap-4 w-full ${className}`}
		>
			<header className="text-4xl font-medium font-funnel-display ld-main-fg">
				<h2>Friday, July 5</h2>
			</header>
			<main className="flex gap-4">
				<DateController onPreviousClick={handlePreviousYear} onNextClick={handleNextYear}>
					{selectedDate.getFullYear()}
				</DateController>
				<DateController
					className="w-36"
					onPreviousClick={handlePreviousMonth}
					onNextClick={handleNextMonth}
				>
					{monthName}
				</DateController>
				<DateController
					className="w-16"
					onPreviousClick={handlePreviousDate}
					onNextClick={handleNextDate}
				>
					{selectedDate.getDate()}
				</DateController>
			</main>
		</section>
	);
}
