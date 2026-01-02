import { DayWeeksType } from '@/presentation/globals/config/defaults';
import { StatusDayType } from './routines';
import { TypesOfDayType } from './tracking';

export interface ExerciseType {
	name: string;
	reps: number;
	sets: number;
	rest: number;
	muscleGroup: string;
	weight: number;
}

export interface SessionDayType {
	name: string;
	description: string;
	exercises: ExerciseType[];
	date: string;
	routines: number;
	weekDay: DayWeeksType;
}

export type NextSessionType = SessionDayType & {
	status: Extract<StatusDayType, 'current' | 'next'>;
	type: Extract<TypesOfDayType, 'TRAINING'>;
};

export const PUSH_DAY: SessionDayType = {
	name: 'Push Day',
	description: 'Focus on pushing movements like bench press and shoulder press.',
	exercises: [
		{
			name: 'Shoulder Press',
			reps: 10,
			sets: 3,
			rest: 60,
			weight: 50,
			muscleGroup: 'Shoulders',
		},
		{
			name: 'Tricep Dips',
			reps: 10,
			sets: 3,
			rest: 60,
			weight: 40,
			muscleGroup: 'Triceps',
		},
		{
			name: 'Lateral Raises',
			reps: 12,
			sets: 3,
			rest: 60,
			weight: 20,
			muscleGroup: 'Shoulders',
		},
		{
			name: 'Push Ups',
			reps: 15,
			sets: 3,
			rest: 60,
			weight: 0,
			muscleGroup: 'Chest',
		},
	],
	date: '1 day ago',
	routines: 1,
	weekDay: 1,
};

export const PULL_DAY: SessionDayType = {
	name: 'Pull Day',
	description: 'Focus on pulling movements like deadlifts and pull-ups.',
	exercises: [
		{
			name: 'Deadlift',
			reps: 8,
			sets: 3,
			rest: 90,
			weight: 100,
			muscleGroup: 'Back',
		},
		{
			name: 'Pull Ups',
			reps: 8,
			sets: 3,
			rest: 90,
			weight: 0,
			muscleGroup: 'Back',
		},
		{
			name: 'Bent Over Rows',
			reps: 10,
			sets: 3,
			rest: 60,
			weight: 60,
			muscleGroup: 'Back',
		},
		{
			name: 'Face Pulls',
			reps: 12,
			sets: 3,
			rest: 60,
			weight: 30,
			muscleGroup: 'Shoulders',
		},
		{
			name: 'Bicep Curls',
			reps: 12,
			sets: 3,
			rest: 60,
			weight: 25,
			muscleGroup: 'Biceps',
		},
	],
	date: '2 days ago',
	routines: 1,
	weekDay: 3,
};

export const LEGS_DAY: SessionDayType = {
	name: 'Leg Day',
	description: 'Focus on leg movements like squats and lunges.',
	exercises: [
		{
			name: 'Squats',
			reps: 10,
			sets: 3,
			rest: 90,
			weight: 80,
			muscleGroup: 'Legs',
		},
		{
			name: 'Lunges',
			reps: 10,
			sets: 3,
			rest: 60,
			weight: 30,
			muscleGroup: 'Legs',
		},
		{
			name: 'Leg Press',
			reps: 10,
			sets: 3,
			rest: 60,
			weight: 90,
			muscleGroup: 'Legs',
		},
		{
			name: 'Calf Raises',
			reps: 15,
			sets: 3,
			rest: 60,
			weight: 40,
			muscleGroup: 'Legs',
		},
		{
			name: 'Leg Curls',
			reps: 12,
			sets: 3,
			rest: 60,
			weight: 50,
			muscleGroup: 'Legs',
		},
	],
	date: '3 days ago',
	routines: 1,
	weekDay: 5,
};

export const SESSIONS: SessionDayType[] = [PUSH_DAY, PULL_DAY, LEGS_DAY];
