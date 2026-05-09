export type RoutineInvalidDataErrorCodes =
  | 'NAME'
  | 'DESCRIPTION'
  | 'INITIAL_DATE'
  | 'ACTIVE'
  | 'ROUTINE_DAYS'
  | 'DAYS'
  | 'CYCLE'
  | 'ROUTINE_DAYS_LENGTH';

export type RoutineErrorCode =
  | 'ROUTINE_NOT_FOUND'
  | 'ROUTINE_CYCLE_NOT_FOUND'
  | 'ROUTINE_OWNERSHIP_ERROR'
  | 'INVALID_ROUTINE_DAYS'
  | 'INVALID_ROUTINE_DATA'
  | `INVALID_ROUTINE_DATA.${RoutineInvalidDataErrorCodes}`;
