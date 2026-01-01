export type SessionTrackedStatusType = 'completed' | 'canceled' | 'pending';
export type CalendarDayStatusType = SessionTrackedStatusType | 'out';
export type CalendarDayPositionTimelineType = 'pastout' | 'past' | 'today' | 'future';

export type BodySectionsKeys = keyof typeof BODY_SECTIONS;

export const BODY_SECTIONS = {
	ARMS: 'Arms',
	LEGS: 'Legs',
	TORSO: 'Torso',
};

export const MUSCULAR_GROUPS = {
	// ARMS
	BICEPS: {
		name: 'Biceps',
		bodySection: BODY_SECTIONS.ARMS,
	},
	FOREARMS: {
		name: 'Forearms',
		bodySection: BODY_SECTIONS.ARMS,
	},
	SHOULDERS: {
		name: 'Shoulders',
		bodySection: BODY_SECTIONS.ARMS,
	},
	TRICEPS: {
		name: 'Triceps',
		bodySection: BODY_SECTIONS.ARMS,
	},

	// LEGS
	ABDUCTORS: {
		name: 'Abductors',
		bodySection: BODY_SECTIONS.LEGS,
	},
	CALVES: {
		name: 'Calves',
		bodySection: BODY_SECTIONS.LEGS,
	},
	GLUTES: {
		name: 'Glutes',
		bodySection: BODY_SECTIONS.LEGS,
	},
	HAMSTRINGS: {
		name: 'Hamstrings',
		bodySection: BODY_SECTIONS.LEGS,
	},
	QUADRICEPS: {
		name: 'Quadriceps',
		bodySection: BODY_SECTIONS.LEGS,
	},

	// TORSO
	ABS: {
		name: 'Abs',
		bodySection: BODY_SECTIONS.TORSO,
	},
	BACK: {
		name: 'Back',
		bodySection: BODY_SECTIONS.TORSO,
	},
	CHEST: {
		name: 'Chest',
		bodySection: BODY_SECTIONS.TORSO,
	},
};

export type MuscleType = {
	name: string;
	muscularGroup: string;
	bodySection: string;
};

export type MusclesType = {
	[key: string]: MuscleType;
};

export const MUSCLES: MusclesType = {
	// ARMS

	// BICEPS
	BICEPS: {
		name: 'Biceps',
		muscularGroup: MUSCULAR_GROUPS.BICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	BICEPS_LONG_HEAD: {
		name: 'Biceps Long Head',
		muscularGroup: MUSCULAR_GROUPS.BICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	BICEPS_SHORT_HEAD: {
		name: 'Biceps Shost Head',
		muscularGroup: MUSCULAR_GROUPS.BICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},

	// TRICEPS
	TRICEPS: {
		name: 'Triceps',
		muscularGroup: MUSCULAR_GROUPS.TRICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	TRICEPS_LONG_HEAD: {
		name: 'Triceps Long Head',
		muscularGroup: MUSCULAR_GROUPS.TRICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	TRICEPS_SHORT_HEAD: {
		name: 'Triceps Short Head',
		muscularGroup: MUSCULAR_GROUPS.TRICEPS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},

	// SHOULDERS
	SHOULDERS: {
		name: 'Shoulders',
		muscularGroup: MUSCULAR_GROUPS.SHOULDERS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	ANTERIOR_SHOULDERS: {
		name: 'Anterior Shoulders',
		muscularGroup: MUSCULAR_GROUPS.SHOULDERS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	LATERAL_SHOULDERS: {
		name: 'Lateral Shoulders',
		muscularGroup: MUSCULAR_GROUPS.SHOULDERS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	REAR_SHOULDERS: {
		name: 'Rear Shoulders',
		muscularGroup: MUSCULAR_GROUPS.SHOULDERS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},

	// FOREARMS
	FOREARMS: {
		name: 'Forearms',
		muscularGroup: MUSCULAR_GROUPS.FOREARMS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	ANTERIOR_FOREARMS: {
		name: 'Anterior Forearms',
		muscularGroup: MUSCULAR_GROUPS.FOREARMS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},
	REAR_FOREARMS: {
		name: 'Rear Forearms',
		muscularGroup: MUSCULAR_GROUPS.FOREARMS.name,
		bodySection: BODY_SECTIONS.ARMS,
	},

	// LEGS

	// ABDUCTORS
	ABDUCTORS: {
		name: 'Abductors',
		muscularGroup: MUSCULAR_GROUPS.ABDUCTORS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},

	// CALVES
	CALVES: {
		name: 'Calves',
		muscularGroup: MUSCULAR_GROUPS.CALVES.name,
		bodySection: BODY_SECTIONS.LEGS,
	},

	// GLUTES
	GLUTES: {
		name: 'Glutes',
		muscularGroup: MUSCULAR_GROUPS.GLUTES.name,
		bodySection: BODY_SECTIONS.LEGS,
	},

	// HAMSTRINGS
	HAMSTRINGS: {
		name: 'Hamstrings',
		muscularGroup: MUSCULAR_GROUPS.HAMSTRINGS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},

	// QUADRICEPS
	QUADRICEPS: {
		name: 'Quadriceps',
		muscularGroup: MUSCULAR_GROUPS.QUADRICEPS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},
	RECTUS_FEMORIS: {
		name: 'Rectus Femoris',
		muscularGroup: MUSCULAR_GROUPS.QUADRICEPS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},
	VASTUS_MEDIALIS: {
		name: 'Vastus Medialis',
		muscularGroup: MUSCULAR_GROUPS.QUADRICEPS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},
	VASTUS_LATERALIS: {
		name: 'Vastus Lateralis',
		muscularGroup: MUSCULAR_GROUPS.QUADRICEPS.name,
		bodySection: BODY_SECTIONS.LEGS,
	},

	// TORSO

	// ABS
	ABS: {
		name: 'Abs',
		muscularGroup: MUSCULAR_GROUPS.ABS.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	UPPER_ABS: {
		name: 'Upper Abs',
		muscularGroup: MUSCULAR_GROUPS.ABS.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	LOWER_ABS: {
		name: 'Lower Abs',
		muscularGroup: MUSCULAR_GROUPS.ABS.name,
		bodySection: BODY_SECTIONS.TORSO,
	},

	// BACK
	BACK: {
		name: 'Back',
		muscularGroup: MUSCULAR_GROUPS.BACK.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	LUMBAR: {
		name: 'Lumbar',
		muscularGroup: MUSCULAR_GROUPS.BACK.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	BIBS: {
		name: 'Bibs',
		muscularGroup: MUSCULAR_GROUPS.BACK.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	TRAPEZIUS: {
		name: 'Trapezius',
		muscularGroup: MUSCULAR_GROUPS.BACK.name,
		bodySection: BODY_SECTIONS.TORSO,
	},

	// CHEST
	CHEST: {
		name: 'Chest',
		muscularGroup: MUSCULAR_GROUPS.CHEST.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	UPPER_CHEST: {
		name: 'Upper Chest',
		muscularGroup: MUSCULAR_GROUPS.CHEST.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	MIDDLE_CHEST: {
		name: 'Lower Chest',
		muscularGroup: MUSCULAR_GROUPS.CHEST.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
	LOWER_CHEST: {
		name: 'Lower Chest',
		muscularGroup: MUSCULAR_GROUPS.CHEST.name,
		bodySection: BODY_SECTIONS.TORSO,
	},
};

export type ExerciseType = {
	name: string;
	description: string;
	muscles: MuscleType[];
};

export type ExercisesType = {
	[key: string]: ExerciseType;
};

export const EXERCISES: ExercisesType = {
	// PUSH DAY
	ABS: {
		name: 'Abs',
		description: 'Abs Crounch',
		muscles: [MUSCLES.ABS],
	},
	FUNDS: {
		name: 'Funds',
		description: 'Chest Focus',
		muscles: [MUSCLES.CHEST, MUSCLES.TRICEPS, MUSCLES.ANTERIOR_SHOULDERS],
	},
	LATERAL_RAISES: {
		name: 'Lateral Raises',
		description: 'Standing',
		muscles: [MUSCLES.LATERAL_SHOULDERS],
	},
	PUSH_UPS: {
		name: 'Push Ups',
		description: 'Chest Focus',
		muscles: [MUSCLES.CHEST, MUSCLES.TRICEPS, MUSCLES.ANTERIOR_SHOULDERS],
	},
	SKULL_CRUSHERS: {
		name: 'Skull Crushers',
		description: 'Standing',
		muscles: [MUSCLES.TRICEPS],
	},

	// LEGS DAY
	BULGARIANS: {
		name: 'Bulgarian Split Squats',
		description: 'Single Leg',
		muscles: [MUSCLES.QUADRICEPS, MUSCLES.GLUTES, MUSCLES.HAMSTRINGS],
	},
	CALF_EXTENSIONS: {
		name: 'Calf Extensions',
		description: 'On Tiptoes',
		muscles: [MUSCLES.CALVES],
	},
	HAMSTRING_CURL: {
		name: 'Hamstring Curl',
		description: 'Machine',
		muscles: [MUSCLES.HAMSTRINGS],
	},
	ROMANIAN_DEADLIFT: {
		name: 'Romanian Deadlift',
		description: 'Barbell',
		muscles: [MUSCLES.HAMSTRINGS, MUSCLES.GLUTES, MUSCLES.QUADRICEPS],
	},
	SQUATS: {
		name: 'Squats',
		description: 'Barbell',
		muscles: [MUSCLES.QUADRICEPS, MUSCLES.GLUTES, MUSCLES.HAMSTRINGS],
	},
	STRIDES: {
		name: 'Strides',
		description: 'Walking',
		muscles: [MUSCLES.QUADRICEPS, MUSCLES.GLUTES, MUSCLES.HAMSTRINGS],
	},

	// PULL DAY
	BICEPS_CURL: {
		name: 'Biceps Curl',
		description: 'Supine and Prone Grip',
		muscles: [MUSCLES.BICEPS],
	},
	FOREARMS_EXTENSION: {
		name: 'Forearms Extension',
		description: 'Prone Grip',
		muscles: [MUSCLES.REAR_FOREARMS],
	},
	FOREARMS_FLEXION: {
		name: 'Forearms Flexion',
		description: 'Supine Grip',
		muscles: [MUSCLES.ANTERIOR_FOREARMS],
	},
	LATERAL_ROWS: {
		name: 'Lateral Rows',
		description: 'Dumbbell',
		muscles: [MUSCLES.BACK, MUSCLES.BICEPS],
	},
	PULL_UPS: {
		name: 'Pull Ups',
		description: 'Wide Grip',
		muscles: [MUSCLES.BACK, MUSCLES.BICEPS],
	},
};
