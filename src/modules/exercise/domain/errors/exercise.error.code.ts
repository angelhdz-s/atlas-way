export type ExerciseInvalidDataErrorCodes = 'NAME' | 'DESCRIPTION' | 'SETS' | 'REPS' | 'WEIGHT';

export type ExerciseErrorCode =
  | 'EXERCISE_NOT_FOUND'
  | 'EXERCISE_OWNERSHIP_ERROR'
  | 'INVALID_EXERCISE_DATA'
  | `INVALID_EXERCISE_DATA.${ExerciseInvalidDataErrorCodes}`;
