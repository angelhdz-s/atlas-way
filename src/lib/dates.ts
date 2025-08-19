import { MONTH_DAYS, MONTH_DAYS_LEAP } from "@/constants/date";
import { StatusDayType } from "@/mocks/routines";
import { NextSessionType, SESSIONS } from "@/mocks/sessions";
import {
	getRestDay,
	NextRestDayPlanifiedType,
	TODAY,
	TRACKED_DAYS,
	TrackedDayType,
	TRACKING_DAYS_OFFSET,
	TRACKING_DAYS,
} from "@/mocks/tracking";

export function getTrackingDates() {
	return [...getOffsetDates(TODAY), TODAY, ...getNextDates(TODAY)];
}

function getOffsetDates(date: Date) {
	const dates = [];

	for (let i = 1; i <= TRACKING_DAYS_OFFSET; i++) {
		dates.push(getPastDate(date, i));
	}

	return dates.reverse();
}

function getNextDates(date: Date): Date[] {
	const dates = [];

	for (let i = 1; i <= TRACKING_DAYS - TRACKING_DAYS_OFFSET - 1; i++) {
		dates.push(getNextDate(date, i));
	}

	return dates;
}

function getPastDate(date: Date, days: number): Date {
	const lastDate = new Date(date);
	lastDate.setDate(lastDate.getDate() - days);
	return lastDate;
}

function getNextDate(date: Date, days: number): Date {
	const lastDate = new Date(date);
	lastDate.setDate(lastDate.getDate() + days);
	return lastDate;
}

type SessionsTypes =
	| TrackedDayType
	| NextRestDayPlanifiedType
	| NextSessionType;

export function getSessionFromDate(date: Date): SessionsTypes {
	const trackedDate = TRACKED_DAYS.find(
		(day) => getISOStringDate(day.date) === getISOStringDate(date),
	);

	if (trackedDate) {
		return trackedDate;
	}

	const weekDay = date.getDay() + 1;

	const session = SESSIONS.find((session) => session.weekDay === weekDay);

	if (session) {
		const status = isToday(date) ? "current" : "next";
		return {
			...session,
			status,
			type: "TRAINING",
		};
	}

	return getRestDay(date);
}

export function getISOStringDate(date: Date): string {
	return date.toISOString().split("T")[0];
}

export function isToday(date: Date): boolean {
	return getISOStringDate(date) === getISOStringDate(TODAY);
}

function getMonthDays(year: number, month: number) {
	return isLeapYear(year) ? MONTH_DAYS_LEAP[month] : MONTH_DAYS[month];
}

function isLeapYear(year: number): boolean {
	return year % 4 === 0;
}

export type CalendarDayType = {
	date: Date;
	type: StatusDayType | "out";
	monthDay: number;
};

function getCalendarDay(
	date: Date,
	month: number,
	out = false,
): CalendarDayType {
	if (out) {
		return {
			date,
			type: "out",
			monthDay: date.getDate(),
		};
	}

	return {
		date,
		type: "next",
		monthDay: date.getDate(),
	};
}

export function getCalendarDays(date: Date): CalendarDayType[] {
	const days = [];
	const month = date.getMonth();
	const year = date.getFullYear();
	const monthDays = getMonthDays(year, month);

	const firstOfTheMonth = new Date(year, month, 1);
	const dayOfTheWeek = firstOfTheMonth.getDay();
	console.log(`Day of the week: ${dayOfTheWeek}`);

	if (dayOfTheWeek !== 7) {
		const daysOffset = dayOfTheWeek - 1;
		const lastMonth = month > 0 ? month - 1 : 11;
		const lastMonthYear = lastMonth == 11 ? year - 1 : year;
		const lastMonthDays = getMonthDays(lastMonthYear, lastMonth);
		for (let i = 0; i <= daysOffset; i++) {
			const day = new Date(
				lastMonthYear,
				lastMonth,
				lastMonthDays - daysOffset + i,
			);
			days.push(getCalendarDay(day, month, true));
		}
	}

	for (let i = 1; i <= monthDays; i++) {
		const day = new Date(year, month, i);
		days.push(getCalendarDay(day, month));
	}

	const monthLastDay = new Date(year, month, monthDays);
	const monthLastWeekDay = monthLastDay.getDay();

	if (monthLastWeekDay !== 7) {
		const nextMonth = month < 11 ? month + 1 : 0;
		const nextMonthYear = nextMonth === 0 ? year + 1 : year;
		const pendingDays = 7 - monthLastWeekDay;

		for (let i = 1; i < pendingDays; i++) {
			const day = new Date(nextMonthYear, nextMonth, i);
			days.push(getCalendarDay(day, month, true));
		}
	}

	return days;
}

export function getCalendarStatusDay(date: Date) {
	const { status, type } = getSessionFromDate(date);
	return {
		status,
		trainingDay: type === "TRAINING",
	};
}
