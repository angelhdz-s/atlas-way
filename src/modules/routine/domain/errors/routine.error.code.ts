export type RoutineInvalidDataErrorCodes =
  | 'NAME'
  | 'DESCRIPTION'
  | 'INITIAL_DATE'
  | 'ACTIVE'
  | 'PLAN'
  | 'DAYS'
  | 'CYCLE'
  | 'PLAN_LENGTH';

export type RoutineErrorCode =
  | 'ROUTINE_NOT_FOUND'
  | 'ROUTINE_CYCLE_NOT_FOUND'
  | 'ROUTINE_OWNERSHIP_ERROR'
  | 'INVALID_ROUTINE_DAYS'
  | 'INVALID_ROUTINE_DATA'
  | `INVALID_ROUTINE_DATA.${RoutineInvalidDataErrorCodes}`;
