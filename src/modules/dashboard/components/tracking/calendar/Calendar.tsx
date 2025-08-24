"use client";

import { useContext } from "react";
import { FIRST_TRACKED_DAY } from "@/mocks/tracking";
import { CalendarDay } from "@/modules/dashboard/components/tracking/calendar/CalendarDay";
import { CalendarContext } from "@/modules/dashboard/context/calendar-context";
import { useCalendar } from "@/modules/dashboard/hooks/useCalendar";
import { ArrowUp } from "@/modules/globals/components/Icons";

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
		<section
			className={`flex flex-col items-center justify-between ${className}`}
		>
			<ArrowButton onClick={onPreviousClick} className="text-foreground/25">
				<ArrowUp className="-mb-1.5 size-4" strokeWidth="3" />
			</ArrowButton>
			<span className="ld-main-fg font-bold">{children}</span>
			<ArrowButton onClick={onNextClick} className="text-foreground/25">
				<ArrowUp className="size-4 rotate-180" strokeWidth="3" />
			</ArrowButton>
		</section>
	);
}

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

export function Calendar() {
	const { selectedDate, setCurrentDate } = useContext(CalendarContext);

	const {
		days,
		handleNextDate,
		handleNextMonth,
		handlePreviousDate,
		handlePreviousMonth,
		handleNextYear,
		handlePreviousYear,
		monthName,
	} = useCalendar({ selectedDate, setCurrentDate });

	return (
		<main className="h-86 flex items-start gap-2 w-fit">
			<main className="flex flex-col gap-2 border-2 border-foreground/5 rounded-lg">
				<header className="pt-1 flex items-center justify-center gap-4 w-full">
					<DateController
						onPreviousClick={handlePreviousYear}
						onNextClick={handleNextYear}
					>
						{selectedDate.getFullYear()}
					</DateController>
					<DateController
						className="w-20"
						onPreviousClick={handlePreviousMonth}
						onNextClick={handleNextMonth}
					>
						{monthName}
					</DateController>
					<DateController
						onPreviousClick={handlePreviousDate}
						onNextClick={handleNextDate}
					>
						{selectedDate.getDate()}
					</DateController>
				</header>
				<main className="p-4 pt-0 text-sm font-light grid grid-cols-7 w-fit gap-2">
					<header className="col-span-7">
						<ul className="font-bold grid grid-cols-7 gap-2 text-center">
							<li>S</li>
							<li>M</li>
							<li>T</li>
							<li>W</li>
							<li>T</li>
							<li>F</li>
							<li>S</li>
						</ul>
					</header>
					<main className="col-span-7 grid grid-cols-7 gap-2">
						{days.map((day, index) => (
							<CalendarDay
								key={index}
								onClick={() => setCurrentDate(day.date)}
								day={day}
								initialDate={FIRST_TRACKED_DAY}
								currentDate={selectedDate}
							/>
						))}
					</main>
				</main>
			</main>
		</main>
	);
}
