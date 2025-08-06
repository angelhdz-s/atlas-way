export type StatusDayType = "completed" | "canceled" | "current" | "next";

export type RestStatusType = Exclude<StatusDayType, "canceled">;

export type DayTypeProps = "training" | "rest" | "recovery" | "yoga";

export type DayType = {
	name: string;
	weekDay: string;
	weekDayShort: string;
} & (
	| {
			type: "rest";
			status: RestStatusType;
	  }
	| {
			type: Exclude<DayTypeProps, "rest">;
			status: StatusDayType;
	  }
);

export interface RoutineType {
	name: string;
	description: string;
	days: DayType[];
	date: string;
	sessions: number;
	exercisesCount: number;
}

export const ROUTINES: RoutineType[] = [
	{
		name: "Push, Pull, Legs",
		description: "A split routine focusing on push, pull, and leg exercises.",
		days: [
			{
				name: "Push Day",
				status: "current",
				type: "training",
				weekDay: "Monday",
				weekDayShort: "Mon",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Tuesday",
				weekDayShort: "Tue",
			},
			{
				name: "Pull Day",
				status: "next",
				type: "training",
				weekDay: "Wednesday",
				weekDayShort: "Wed",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Thursday",
				weekDayShort: "Thu",
			},
			{
				name: "Leg Day",
				status: "next",
				type: "training",
				weekDay: "Friday",
				weekDayShort: "Fri",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Saturday",
				weekDayShort: "Sat",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Sunday",
				weekDayShort: "Sun",
			},
		],
		date: "1 week ago",
		sessions: 1,
		exercisesCount: 16,
	},
	{
		name: "Full Body",
		description: "A comprehensive full-body workout routine.",
		days: [
			{
				name: "Rest Day",
				status: "completed",
				type: "rest",
				weekDay: "Monday",
				weekDayShort: "Mon",
			},
			{
				name: "Full Body Day",
				status: "completed",
				type: "training",
				weekDay: "Tuesday",
				weekDayShort: "Tue",
			},
			{
				name: "Rest Day",
				status: "current",
				type: "rest",
				weekDay: "Wednesday",
				weekDayShort: "Wed",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Thursday",
				weekDayShort: "Thu",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Friday",
				weekDayShort: "Fri",
			},
			{
				name: "Cardio Day",
				status: "next",
				type: "training",
				weekDay: "Saturday",
				weekDayShort: "Sat",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Sunday",
				weekDayShort: "Sun",
			},
		],
		date: "2 weeks ago",
		sessions: 1,
		exercisesCount: 20,
	},
	{
		name: "Cardio",
		description: "A high-intensity cardio routine for endurance.",
		days: [
			{
				name: "Rest Day",
				status: "completed",
				type: "rest",
				weekDay: "Monday",
				weekDayShort: "Mon",
			},
			{
				name: "Rest Day",
				status: "completed",
				type: "rest",
				weekDay: "Tuesday",
				weekDayShort: "Tue",
			},
			{
				name: "Rest Day",
				status: "completed",
				type: "rest",
				weekDay: "Wednesday",
				weekDayShort: "Wed",
			},
			{
				name: "HIIT Day",
				status: "current",
				type: "training",
				weekDay: "Thursday",
				weekDayShort: "Thu",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Friday",
				weekDayShort: "Fri",
			},
			{
				name: "Steady State Cardio",
				status: "next",
				type: "training",
				weekDay: "Saturday",
				weekDayShort: "Sat",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Sunday",
				weekDayShort: "Sun",
			},
		],
		date: "3 weeks ago",
		sessions: 1,
		exercisesCount: 12,
	},
	{
		name: "Yoga",
		description: "A calming yoga routine for flexibility and relaxation.",
		days: [
			{
				name: "Morning Yoga",
				status: "completed",
				type: "yoga",
				weekDay: "Monday",
				weekDayShort: "Mon",
			},
			{
				name: "Rest Day",
				status: "completed",
				type: "rest",
				weekDay: "Tuesday",
				weekDayShort: "Tue",
			},
			{
				name: "Evening Yoga",
				status: "current",
				type: "yoga",
				weekDay: "Wednesday",
				weekDayShort: "Wed",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Thursday",
				weekDayShort: "Thu",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Friday",
				weekDayShort: "Fri",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Saturday",
				weekDayShort: "Sat",
			},
			{
				name: "Rest Day",
				status: "next",
				type: "rest",
				weekDay: "Sunday",
				weekDayShort: "Sun",
			},
		],
		date: "4 weeks ago",
		sessions: 1,
		exercisesCount: 10,
	},
];
