export type StatusDayType = 'completed' | 'canceled' | 'current' | 'next';

export type RestStatusType = Exclude<StatusDayType, 'canceled'>;

export type DayTypeProps = 'training' | 'rest' | 'recovery' | 'yoga';

export type DayType = {
	name: string;
	weekDay: number;
} & (
	| {
			type: 'rest';
			status: RestStatusType;
	  }
	| {
			type: Exclude<DayTypeProps, 'rest'>;
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
		name: 'Push, Pull, Legs',
		description: 'A split routine focusing on push, pull, and leg exercises.',
		days: [
			{
				name: 'Push Day',
				status: 'current',
				type: 'training',
				weekDay: 1,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 2,
			},
			{
				name: 'Pull Day',
				status: 'next',
				type: 'training',
				weekDay: 3,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 4,
			},
			{
				name: 'Leg Day',
				status: 'next',
				type: 'training',
				weekDay: 5,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 6,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 7,
			},
		],
		date: '1 week ago',
		sessions: 1,
		exercisesCount: 16,
	},
	{
		name: 'Full Body',
		description: 'A comprehensive full-body workout routine.',
		days: [
			{
				name: 'Rest Day',
				status: 'completed',
				type: 'rest',
				weekDay: 1,
			},
			{
				name: 'Full Body Day',
				status: 'completed',
				type: 'training',
				weekDay: 2,
			},
			{
				name: 'Rest Day',
				status: 'current',
				type: 'rest',
				weekDay: 3,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 4,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 5,
			},
			{
				name: 'Cardio Day',
				status: 'next',
				type: 'training',
				weekDay: 6,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 7,
			},
		],
		date: '2 weeks ago',
		sessions: 1,
		exercisesCount: 20,
	},
	{
		name: 'Cardio',
		description: 'A high-intensity cardio routine for endurance.',
		days: [
			{
				name: 'Rest Day',
				status: 'completed',
				type: 'rest',
				weekDay: 1,
			},
			{
				name: 'Rest Day',
				status: 'completed',
				type: 'rest',
				weekDay: 2,
			},
			{
				name: 'Rest Day',
				status: 'completed',
				type: 'rest',
				weekDay: 3,
			},
			{
				name: 'HIIT Day',
				status: 'current',
				type: 'training',
				weekDay: 4,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 5,
			},
			{
				name: 'Steady State Cardio',
				status: 'next',
				type: 'training',
				weekDay: 6,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 7,
			},
		],
		date: '3 weeks ago',
		sessions: 1,
		exercisesCount: 12,
	},
	{
		name: 'Yoga',
		description: 'A calming yoga routine for flexibility and relaxation.',
		days: [
			{
				name: 'Morning Yoga',
				status: 'completed',
				type: 'yoga',
				weekDay: 1,
			},
			{
				name: 'Rest Day',
				status: 'completed',
				type: 'rest',
				weekDay: 2,
			},
			{
				name: 'Evening Yoga',
				status: 'current',
				type: 'yoga',
				weekDay: 3,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 4,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 5,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 6,
			},
			{
				name: 'Rest Day',
				status: 'next',
				type: 'rest',
				weekDay: 7,
			},
		],
		date: '4 weeks ago',
		sessions: 1,
		exercisesCount: 10,
	},
];
