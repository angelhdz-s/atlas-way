import { isToday } from "@/lib/dates";
import { ROUTINES, StatusDayType } from "./routines";
import { ExerciseType, PULL_DAY } from "./sessions";
import { minorValue } from "@/modules/globals/lib/utils";

type TrainingtDayNameType = "Training Day";
type RestDayNameType = "Rest Day";

type DayTypes = {
	TRAINING: TrainingtDayNameType;
	REST: RestDayNameType;
};

type DayDatesType = {
	date: Date;
	day: number;
};

export const DAY_TYPES: DayTypes = {
	TRAINING: "Training Day",
	REST: "Rest Day",
};

export type TypesOfDayType = keyof typeof DAY_TYPES;

export const START_TRACKING_DAYS = new Date(2025, 6, 1, 10, 30);
export const TRACKING_DAYS = 21;
export const TRACKING_DAYS_OFFSET = 3;
export const TODAY = new Date(2025, 6, 4);

const routine = ROUTINES.find((routine) => routine.name === "Push, Pull, Legs");

type RestDayType = {
	type: Extract<TypesOfDayType, "REST">;
	status: Extract<StatusDayType, "completed">;
	name: typeof DAY_TYPES.REST;
	routine: "Rest";
};

type NextRestDayType = {
	type: "REST";
	status: Exclude<StatusDayType, "canceled">;
	name: typeof DAY_TYPES.REST;
	routine: "Rest";
};

export type NextRestDayPlanifiedType = DayDatesType & NextRestDayType;

type ExerciseSkipped = ExerciseType["name"];

type TrainingDayType = {
	type: Extract<TypesOfDayType, "TRAINING">;
	status: Extract<StatusDayType, "completed" | "canceled">;
	name: string;
	routine: string;
	exercicesDone: ExerciseType[];
	exercicesSkipped: ExerciseSkipped[] | [];
};

export type TrackedDayType = DayDatesType & (RestDayType | TrainingDayType);

const REST_DAY: NextRestDayType = {
	type: "REST",
	routine: "Rest",
	name: DAY_TYPES.REST,
	status: "next",
};

export function getRestDay(date: Date): NextRestDayPlanifiedType {
	const status = isToday(date) ? "current" : "next";
	return {
		...REST_DAY,
		date,
		day: date.getDay(),
		status,
	};
}

export const TRACKED_DAYS: TrackedDayType[] = [
	{
		date: new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 3),
		routine: "Rest",
		day: new Date(
			TODAY.getFullYear(),
			TODAY.getMonth(),
			TODAY.getDate() - 3,
		).getDay(),
		type: "REST",
		name: DAY_TYPES.REST,
		status: "completed",
	},
	{
		date: new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 2),
		routine: routine?.name || "Push, Pull, Legs",
		day: new Date(
			TODAY.getFullYear(),
			TODAY.getMonth(),
			TODAY.getDate() - 2,
		).getDay(),
		type: "TRAINING",
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: "canceled",
	},
	{
		date: new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1),
		routine: "Rest",
		day: new Date(
			TODAY.getFullYear(),
			TODAY.getMonth(),
			TODAY.getDate() - 1,
		).getDay(),
		type: "REST",
		name: DAY_TYPES.REST,
		status: "completed",
	},
];

export const FIRST_TRACKED_DAY = TRACKED_DAYS.map((day) => day.date).reduce(
	(a, b) => minorValue(a, b),
);
