"use client";

import { FIRST_TRACKED_DAY, TODAY } from "@/mocks/tracking";
import { CalendarDay } from "@/modules/dashboard/components/tracking/calendar/CalendarDay";
import { useCalendar } from "@/modules/dashboard/hooks/useCalendar";
import { ArrowUp } from "@/modules/globals/components/Icons";

function ArrowButton({
	onClick,
	children,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="
			size-8 cursor-pointer rounded-full ld-sec-bg ld-main-fg 
			grid place-content-center hover:text-current/50
			"
		>
			{children}
		</button>
	);
}

export function Calendar() {
	const {
		currentDate,
		days,
		handleNextDate,
		handleNextMonth,
		handlePreviousDate,
		handlePreviousMonth,
		monthName,
	} = useCalendar({ todayDate: TODAY });

	return (
		<main className="h-86 flex items-start gap-2 w-fit">
			<aside className="h-full pt-34">
				<ArrowButton onClick={handlePreviousDate}>
					<ArrowUp className="size-5 -rotate-90" strokeWidth="2" />
				</ArrowButton>
			</aside>
			<main className="flex flex-col gap-2 p-4 ld-sec-bg rounded-lg">
				<header className="flex items-center justify-between">
					<button className="cursor-pointer p-2" onClick={handlePreviousMonth}>
						<ArrowUp className="size-5 -rotate-90" />
					</button>
					<span>{`${monthName} ${currentDate.getFullYear()}`}</span>
					<button className="cursor-pointer p-2" onClick={handleNextMonth}>
						<ArrowUp className="size-5 rotate-90" />
					</button>
				</header>
				<ul className="text-sm font-light grid grid-cols-7 w-fit gap-2">
					<ul className="font-bold grid grid-cols-7 col-span-7 gap-2 text-center">
						<li>S</li>
						<li>M</li>
						<li>T</li>
						<li>W</li>
						<li>T</li>
						<li>F</li>
						<li>S</li>
					</ul>
					{days.map((day, index) => (
						<CalendarDay
							key={index}
							day={day}
							initialDate={FIRST_TRACKED_DAY}
							currentDate={currentDate}
						/>
					))}
				</ul>
			</main>
			<aside className="h-full pt-34">
				<ArrowButton onClick={handleNextDate}>
					<ArrowUp className="size-5 rotate-90" strokeWidth="2" />
				</ArrowButton>
			</aside>
		</main>
	);
}
