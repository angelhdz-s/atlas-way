export const MONTH_DAYS = [
	31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
] as const;

export const MONTH_DAYS_LEAP = [
	31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
] as const;

type MonthType = {
	name: string;
	shortName: string;
	month: number;
};

export const MONTH_NAMES: MonthType[] = [
	{
		name: "January",
		shortName: "Jan",
		month: 1,
	},
	{
		name: "February",
		shortName: "Feb",
		month: 2,
	},
	{
		name: "March",
		shortName: "Mar",
		month: 3,
	},
	{
		name: "April",
		shortName: "Apr",
		month: 4,
	},
	{
		name: "May",
		shortName: "May",
		month: 5,
	},
	{
		name: "June",
		shortName: "Jun",
		month: 6,
	},
	{
		name: "July",
		shortName: "Jul",
		month: 7,
	},
	{
		name: "August",
		shortName: "Aug",
		month: 8,
	},
	{
		name: "September",
		shortName: "Sep",
		month: 9,
	},
	{
		name: "October",
		shortName: "Oct",
		month: 10,
	},
	{
		name: "November",
		shortName: "Nov",
		month: 11,
	},
	{
		name: "December",
		shortName: "Dec",
		month: 12,
	},
] as const;

export const MONTH_LIMITS = {
	previous: 0,
	next: 11,
};

export type MonthDisplacement = keyof typeof MONTH_LIMITS;
