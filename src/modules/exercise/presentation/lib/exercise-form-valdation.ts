import {
	DESCRIPTION_MAX_LENGTH,
	DESCRIPTION_MIN_LENGTH,
	NAME_MAX_LENGTH,
	NAME_MIN_LENGTH,
} from '@/modules/exercise/domain/constants/exercise-data';
import {
	isNumber,
	isString,
	isStringInRange,
	isStringLength,
} from '@/modules/globals/lib/validation';

export function validateExerciseName(name: string) {
	if (!name || !isString(name) || isStringLength(name, 0)) return 'Name is required';

	if (!isStringInRange(name, NAME_MIN_LENGTH, NAME_MAX_LENGTH))
		return `Name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters`;

	return null;
}

export function validateExerciseDescription(description: string) {
	if (!description) return null;
	if (!isString(description)) return 'Description must be a string';

	if (!isStringInRange(description, DESCRIPTION_MIN_LENGTH, DESCRIPTION_MAX_LENGTH))
		return `Description must be ${DESCRIPTION_MAX_LENGTH} characters or less`;

	return null;
}

export function validateExerciseSets(sets: number) {
	if (!sets) return null;
	if (!isNumber(sets)) return 'Sets must be a number';
	return null;
}

export function validateExerciseReps(reps: number) {
	if (!reps) return null;
	if (!isNumber(reps)) return 'Reps must be a number';
	return null;
}

export function validateExerciseWeight(weight: number) {
	if (!weight) return null;
	if (!isNumber(weight)) return 'Weight must be a number';
	return null;
}
