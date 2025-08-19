"use client";

import { useState } from "react";
import {
	CalendarDayType,
	getCalendarDays,
	getCalendarStatusDay,
	getISOStringDate,
} from "@/lib/dates";
import { TODAY } from "@/mocks/tracking";
import { ArrowUp } from "@/modules/globals/components/Icons";

function CalendarDay({
	day,
	currentDate,
}: {
	day: CalendarDayType;
	currentDate: Date;
}) {
	const { type, monthDay, date } = day;

	if (type === "out") {
		return <li className="opacity-50">{monthDay}</li>;
	}

	const isSelected = getISOStringDate(date) === getISOStringDate(currentDate);

	const { status, trainingDay } = getCalendarStatusDay(date);

	if (status === "completed")
		return (
			<li
				className={
					isSelected
						? "text-green-400 bg-green-800"
						: "text-green-600 outline-1 outline-offset-1 outline-green-800"
				}
			>
				{monthDay}
			</li>
		);

	if (status === "canceled")
		return (
			<li
				className={
					isSelected
						? "text-red-300 bg-red-800"
						: "text-red-400 outline-1 outline-offset-1 outline-red-800"
				}
			>
				{monthDay}
			</li>
		);

	if (status === "current")
		return (
			<li
				className={
					isSelected
						? "text-main-foreground bg-blue-600"
						: "text-main-foreground outline-1 outline-offset-1 outline-blue-700"
				}
			>
				{monthDay}
			</li>
		);

	if (isSelected)
		return (
			<li className="font-medium bg-main-foreground text-full-black light:bg-light-main-foreground light:text-main-background">
				{monthDay}
			</li>
		);

	if (trainingDay)
		return (
			<li
				className={`ld-main-fg outline-1 outline-offset-1 outline-foreground/20`}
			>
				{monthDay}
			</li>
		);

	return <li>{monthDay}</li>;
}

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
			className="rounded-full ld-sec-bg grid place-content-center size-8"
		>
			{children}
		</button>
	);
}

export function Calendar() {
	const [currentDate, setCurrentDate] = useState(TODAY);
	const days = getCalendarDays(currentDate);

	const handlePreviousDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() - 1);
			return newDate;
		});
	};

	const handleNextDate = () => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			newDate.setDate(prev.getDate() + 1);
			return newDate;
		});
	};

	return (
		<main className="flex items-center gap-2">
			<ArrowButton onClick={handlePreviousDate}>
				<ArrowUp className="size-6 -rotate-90" />
			</ArrowButton>
			<ul className="text-sm ld-sec-bg rounded-lg p-4 font-light grid grid-cols-7 w-fit gap-2 *:rounded-full *:size-6 *:flex *:items-center *:justify-center">
				<li>S</li>
				<li>M</li>
				<li>T</li>
				<li>W</li>
				<li>T</li>
				<li>F</li>
				<li>S</li>
				{days.map((day, index) => (
					<CalendarDay key={index} day={day} currentDate={currentDate} />
				))}
			</ul>
			<ArrowButton onClick={handleNextDate}>
				<ArrowUp className="size-6 rotate-90" />
			</ArrowButton>
		</main>
	);
}
