import {
	MONTH_DAYS_LEAP,
	MONTH_DAYS,
	MONTH_LIMITS,
	MonthDisplacement,
} from '@/presentation/globals/constants/date';
import { StatusDayType } from '@/presentation/globals/mocks/routines';
import { NextSessionType, SESSIONS } from '@/presentation/globals/mocks/sessions';
import {
	getRestDay,
	NextRestDayPlanifiedType,
	TODAY,
	TRACKED_DAYS,
	TrackedDayType,
	TRACKING_DAYS_OFFSET,
	TRACKING_DAYS,
} from '@/presentation/globals/mocks/tracking';

export function getTrackingDates() {
	return [
		...getOffsetDates(TODAY),
		TODAY,
		...getNextDates(TODAY, TRACKING_DAYS - TRACKING_DAYS_OFFSET - 1),
	];
}

export function getOffsetDates(date: Date, offsetDays: number = TRACKING_DAYS_OFFSET) {
	const dates = [];

	for (let i = 1; i <= offsetDays; i++) {
		dates.push(getPastDate(date, i));
	}

	return dates.reverse();
}

export function getNextDates(date: Date, days: number): Date[] {
	const dates = [];

	for (let i = 1; i <= days; i++) {
		dates.push(getNextDate(date, i));
	}

	return dates;
}

export function getPastDate(date: Date, days: number): Date {
	const lastDate = new Date(date);
	lastDate.setDate(lastDate.getDate() - days);
	return lastDate;
}

export function getNextDate(date: Date, days: number): Date {
	const lastDate = new Date(date);
	lastDate.setDate(lastDate.getDate() + days);
	return lastDate;
}

export type SessionsTypes = TrackedDayType | NextRestDayPlanifiedType | NextSessionType;

export function getSessionFromDate(date: Date): SessionsTypes {
	const trackedDate = TRACKED_DAYS.find(
		(day) => getISOStringDate(day.date) === getISOStringDate(date)
	);

	if (trackedDate) {
		return trackedDate;
	}

	const weekDay = date.getDay() + 1;

	const session = SESSIONS.find((session) => session.weekDay === weekDay);

	if (session) {
		const status = isToday(date) ? 'current' : 'next';
		return {
			...session,
			status,
			type: 'TRAINING',
		};
	}

	return getRestDay(date);
}

export function getISOStringDate(date: Date): string {
	return date.toISOString().split('T')[0];
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
	type: StatusDayType | 'out';
	monthDay: number;
};

function getCalendarDay(date: Date, month: number, out = false): CalendarDayType {
	if (out) {
		return {
			date,
			type: 'out',
			monthDay: date.getDate(),
		};
	}

	return {
		date,
		type: 'next',
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

	if (dayOfTheWeek !== 7) {
		const daysOffset = dayOfTheWeek - 1;
		const lastMonth = month > 0 ? month - 1 : 11;
		const lastMonthYear = lastMonth == 11 ? year - 1 : year;
		const lastMonthDays = getMonthDays(lastMonthYear, lastMonth);
		for (let i = 0; i <= daysOffset; i++) {
			const day = new Date(lastMonthYear, lastMonth, lastMonthDays - daysOffset + i);
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
		trainingDay: type === 'TRAINING',
	};
}

function getPrevNextMonth(month: number, displacement: MonthDisplacement): number {
	if (displacement === 'previous')
		return month === MONTH_LIMITS.previous ? MONTH_LIMITS.next : month - 1;
	return month === MONTH_LIMITS.next ? MONTH_LIMITS.previous : month + 1;
}

function getPrevNextMonthYear(
	month: number,
	year: number,
	displacement: MonthDisplacement
): number {
	if (displacement === 'previous') return month === MONTH_LIMITS.next ? year - 1 : year;

	return month === MONTH_LIMITS.previous ? year + 1 : year;
}

function getPrevNextMonthDay(month: number, day: number): number {
	return day > MONTH_DAYS[month] ? MONTH_DAYS[month] : day;
}

export function getPreviousNextMonthDate(prevDate: Date, config: MonthDisplacement = 'next') {
	const [prevMonth, prevYear, prevDay] = [
		prevDate.getMonth(),
		prevDate.getFullYear(),
		prevDate.getDate(),
	];
	const newMonth = getPrevNextMonth(prevMonth, config);
	const newYear = getPrevNextMonthYear(newMonth, prevYear, config);
	const newDay = getPrevNextMonthDay(newMonth, prevDay);
	return new Date(newYear, newMonth, newDay);
}

export function getPrevAndNextDate(date: Date) {
	return [getPastDate(date, 1), getNextDate(date, 1)];
}

export function getPreviousNextYearDate(prevDate: Date, config: MonthDisplacement = 'next') {
	const [prevYear, currentMonth, prevDay] = [
		prevDate.getFullYear(),
		prevDate.getMonth(),
		prevDate.getDate(),
	];

	const newYear = config === 'next' ? prevYear + 1 : prevYear - 1;

	if (currentMonth === 1 && prevDay === 29) {
		const newDay = isLeapYear(newYear) ? 29 : 28;
		return new Date(newYear, currentMonth, newDay);
	}

	return new Date(newYear, currentMonth, prevDay);
}

export function getDaysDifference(a: Date, b: Date) {
	const diffTime = Math.abs(b.getTime() - a.getTime());
	return Math.ceil(diffTime / (24 * 60 * 60 * 1000));
}

export function getDays(a: Date, b: Date, range: number) {
	const diffDays = getDaysDifference(a, b);
	return diffDays % range;
}
