export interface ExerciseType {
	name: string;
	reps: number;
	sets: number;
	rest: number;
	weight?: number; // Optional weight property
}

export interface SessionDayType {
	name: string;
	description: string;
	exercises: ExerciseType[];
	date: string;
	routines: number;
}

export const SESSIONS: SessionDayType[] = [
	{
		name: "Push Day",
		description:
			"Focus on pushing movements like bench press and shoulder press.",
		exercises: [
			{ name: "Shoulder Press", reps: 10, sets: 3, rest: 60, weight: 50 },
			{ name: "Tricep Dips", reps: 10, sets: 3, rest: 60, weight: 40 },
			{ name: "Lateral Raises", reps: 12, sets: 3, rest: 60, weight: 20 },
			{ name: "Push Ups", reps: 15, sets: 3, rest: 60, weight: 0 },
		],
		date: "1 day ago",
		routines: 1,
	},
	{
		name: "Pull Day",
		description: "Focus on pulling movements like deadlifts and pull-ups.",
		exercises: [
			{ name: "Deadlift", reps: 8, sets: 3, rest: 90, weight: 100 },
			{ name: "Pull Ups", reps: 8, sets: 3, rest: 90, weight: 0 },
			{ name: "Bent Over Rows", reps: 10, sets: 3, rest: 60, weight: 60 },
			{ name: "Face Pulls", reps: 12, sets: 3, rest: 60, weight: 30 },
			{ name: "Bicep Curls", reps: 12, sets: 3, rest: 60, weight: 25 },
		],
		date: "2 days ago",
		routines: 1,
	},
	{
		name: "Leg Day",
		description: "Focus on leg movements like squats and lunges.",
		exercises: [
			{ name: "Squats", reps: 10, sets: 3, rest: 90, weight: 80 },
			{ name: "Lunges", reps: 10, sets: 3, rest: 60, weight: 30 },
			{ name: "Leg Press", reps: 10, sets: 3, rest: 60, weight: 90 },
			{ name: "Calf Raises", reps: 15, sets: 3, rest: 60, weight: 40 },
			{ name: "Leg Curls", reps: 12, sets: 3, rest: 60, weight: 50 },
		],
		date: "3 days ago",
		routines: 1,
	},
];
