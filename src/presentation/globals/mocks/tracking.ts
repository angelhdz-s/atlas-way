import { getPastDate, isToday } from '@/presentation/globals/lib/dates';
import { ROUTINES, StatusDayType } from './routines';
import { ExerciseType, LEGS_DAY, PULL_DAY, PUSH_DAY } from './sessions';
import { minorValue } from '@/presentation/globals/lib/utils';

type TrainingtDayNameType = 'Training Day';
type RestDayNameType = 'Rest Day';

type DayTypes = {
	TRAINING: TrainingtDayNameType;
	REST: RestDayNameType;
};

type DayDatesType = {
	date: Date;
	day: number;
};

export const DAY_TYPES: DayTypes = {
	TRAINING: 'Training Day',
	REST: 'Rest Day',
};

export type TypesOfDayType = keyof typeof DAY_TYPES;

export const START_TRACKING_DAYS = new Date(2025, 6, 1, 10, 30);
export const TRACKING_DAYS = 21;
export const TRACKING_DAYS_OFFSET = 3;

const YEAR_TODAY = 2025;
const MONTH_TODAY = 6;
const DAY_TODAY = 4;
export const TODAY = new Date(YEAR_TODAY, MONTH_TODAY, DAY_TODAY);

const routine = ROUTINES.find((routine) => routine.name === 'Push, Pull, Legs');

type RestDayType = {
	type: Extract<TypesOfDayType, 'REST'>;
	status: Extract<StatusDayType, 'completed'>;
	name: typeof DAY_TYPES.REST;
	routine: 'Rest';
};

type NextRestDayType = {
	type: 'REST';
	status: Exclude<StatusDayType, 'canceled'>;
	name: typeof DAY_TYPES.REST;
	routine: 'Rest';
};

export type NextRestDayPlanifiedType = DayDatesType & NextRestDayType;

type ExerciseSkipped = ExerciseType['name'];

type TrainingDayType = {
	type: Extract<TypesOfDayType, 'TRAINING'>;
	status: Extract<StatusDayType, 'completed' | 'canceled'>;
	name: string;
	routine: string;
	exercicesDone: ExerciseType[];
	exercicesSkipped: ExerciseSkipped[] | [];
};

export type TrackedDayType = DayDatesType & (RestDayType | TrainingDayType);

const REST_DAY: NextRestDayType = {
	type: 'REST',
	routine: 'Rest',
	name: DAY_TYPES.REST,
	status: 'next',
};

export function getRestDay(date: Date): NextRestDayPlanifiedType {
	const status = isToday(date) ? 'current' : 'next';
	return {
		...REST_DAY,
		date,
		day: date.getDay(),
		status,
	};
}

export const TRACKED_DAYS: TrackedDayType[] = [
	// SAT
	{
		date: getPastDate(TODAY, 35),
		routine: 'Rest',
		day: getPastDate(TODAY, 35).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// SUN
	{
		date: getPastDate(TODAY, 34),
		routine: 'Rest',
		day: getPastDate(TODAY, 34).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// MON - PUSH
	{
		date: getPastDate(TODAY, 33),
		routine: 'Push, Pull, Legs',
		day: getPastDate(TODAY, 33).getDay(),
		type: 'TRAINING',
		name: PUSH_DAY.name,
		exercicesDone: PUSH_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// TUE
	{
		date: getPastDate(TODAY, 32),
		routine: 'Rest',
		day: getPastDate(TODAY, 32).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// WED - LEGS
	{
		date: getPastDate(TODAY, 31),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 31).getDay(),
		type: 'TRAINING',
		name: LEGS_DAY.name,
		exercicesDone: LEGS_DAY.exercises,
		exercicesSkipped: [],
		status: 'canceled',
	},
	// THU
	{
		date: getPastDate(TODAY, 30),
		routine: 'Rest',
		day: getPastDate(TODAY, 30).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// FRI - PULL
	{
		date: getPastDate(TODAY, 29),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 29).getDay(),
		type: 'TRAINING',
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// SAT
	{
		date: getPastDate(TODAY, 28),
		routine: 'Rest',
		day: getPastDate(TODAY, 28).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// SUN
	{
		date: getPastDate(TODAY, 27),
		routine: 'Rest',
		day: getPastDate(TODAY, 27).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// MON - PUSH
	{
		date: getPastDate(TODAY, 26),
		routine: 'Push, Pull, Legs',
		day: getPastDate(TODAY, 26).getDay(),
		type: 'TRAINING',
		name: PUSH_DAY.name,
		exercicesDone: PUSH_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// TUE
	{
		date: getPastDate(TODAY, 25),
		routine: 'Rest',
		day: getPastDate(TODAY, 25).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// WED - LEGS
	{
		date: getPastDate(TODAY, 24),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 24).getDay(),
		type: 'TRAINING',
		name: LEGS_DAY.name,
		exercicesDone: LEGS_DAY.exercises,
		exercicesSkipped: [],
		status: 'canceled',
	},
	// THU
	{
		date: getPastDate(TODAY, 23),
		routine: 'Rest',
		day: getPastDate(TODAY, 23).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// FRI - PULL
	{
		date: getPastDate(TODAY, 22),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 22).getDay(),
		type: 'TRAINING',
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// SAT
	{
		date: getPastDate(TODAY, 21),
		routine: 'Rest',
		day: getPastDate(TODAY, 21).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// SUN
	{
		date: getPastDate(TODAY, 20),
		routine: 'Rest',
		day: getPastDate(TODAY, 20).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// MON - PUSH
	{
		date: getPastDate(TODAY, 19),
		routine: 'Push, Pull, Legs',
		day: getPastDate(TODAY, 19).getDay(),
		type: 'TRAINING',
		name: PUSH_DAY.name,
		exercicesDone: PUSH_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// TUE
	{
		date: getPastDate(TODAY, 18),
		routine: 'Rest',
		day: getPastDate(TODAY, 18).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// WED - LEGS
	{
		date: getPastDate(TODAY, 17),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 17).getDay(),
		type: 'TRAINING',
		name: LEGS_DAY.name,
		exercicesDone: LEGS_DAY.exercises,
		exercicesSkipped: [],
		status: 'canceled',
	},
	// THU
	{
		date: getPastDate(TODAY, 16),
		routine: 'Rest',
		day: getPastDate(TODAY, 16).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// FRI - PULL
	{
		date: getPastDate(TODAY, 15),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 15).getDay(),
		type: 'TRAINING',
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// SAT
	{
		date: getPastDate(TODAY, 14),
		routine: 'Rest',
		day: getPastDate(TODAY, 14).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// SUN
	{
		date: getPastDate(TODAY, 13),
		routine: 'Rest',
		day: getPastDate(TODAY, 13).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// MON - PUSH
	{
		date: getPastDate(TODAY, 12),
		routine: 'Push, Pull, Legs',
		day: getPastDate(TODAY, 12).getDay(),
		type: 'TRAINING',
		name: PUSH_DAY.name,
		exercicesDone: PUSH_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// TUE
	{
		date: getPastDate(TODAY, 11),
		routine: 'Rest',
		day: getPastDate(TODAY, 11).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// WED - LEGS
	{
		date: getPastDate(TODAY, 10),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 10).getDay(),
		type: 'TRAINING',
		name: LEGS_DAY.name,
		exercicesDone: LEGS_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// THU
	{
		date: getPastDate(TODAY, 9),
		routine: 'Rest',
		day: getPastDate(TODAY, 9).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// FRI - PULL
	{
		date: getPastDate(TODAY, 8),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 8).getDay(),
		type: 'TRAINING',
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// SAT
	{
		date: getPastDate(TODAY, 7),
		routine: 'Rest',
		day: getPastDate(TODAY, 7).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// SUN
	{
		date: getPastDate(TODAY, 6),
		routine: 'Rest',
		day: getPastDate(TODAY, 6).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// MON - PUSH
	{
		date: getPastDate(TODAY, 5),
		routine: 'Push, Pull, Legs',
		day: getPastDate(TODAY, 5).getDay(),
		type: 'TRAINING',
		name: PUSH_DAY.name,
		exercicesDone: PUSH_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// TUE
	{
		date: getPastDate(TODAY, 4),
		routine: 'Rest',
		day: getPastDate(TODAY, 4).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// WED - LEGS
	{
		date: getPastDate(TODAY, 3),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 3).getDay(),
		type: 'TRAINING',
		name: LEGS_DAY.name,
		exercicesDone: LEGS_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
	// THU
	{
		date: getPastDate(TODAY, 2),
		routine: 'Rest',
		day: getPastDate(TODAY, 2).getDay(),
		type: 'REST',
		name: DAY_TYPES.REST,
		status: 'completed',
	},
	// FRI - PULL
	{
		date: getPastDate(TODAY, 1),
		routine: routine?.name || 'Push, Pull, Legs',
		day: getPastDate(TODAY, 1).getDay(),
		type: 'TRAINING',
		name: PULL_DAY.name,
		exercicesDone: PULL_DAY.exercises,
		exercicesSkipped: [],
		status: 'completed',
	},
];

export const FIRST_TRACKED_DAY = TRACKED_DAYS.map((day) => day.date).reduce((a, b) =>
	minorValue(a, b)
);

export const SESSIONS_COUNTERS = {
	sessionStreak: 16,
	totalSessions: 58,
	currentMonth: 8,
	currentYear: 43,
	averagePerMonth: 14,
	averagePerYear: 97,
};

export const EXERCISES_COUNTERS = {
	exerciseStreak: 16,
	totalExercises: 58,
	currentMonth: 12,
	currentYear: 134,
	averagePerMonth: 28,
	averagePerYear: 413,
};
