export type SessionInvalidDataCodes = 'NAME' | 'DESCRIPTION';

export type SessionErrorCode =
  | 'SESSION_NOT_FOUND'
  | 'SESSION_OWNERSHIP_ERROR'
  | 'INVALID_SESSION_DATA'
  | `INVALID_SESSION_DATA.${SessionInvalidDataCodes}`;
