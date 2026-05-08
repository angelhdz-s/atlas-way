export type UserInvalidDataErrorCodes = 'EMAIL' | 'NAME';

export type UserErrorCode =
  | 'USER_NOT_FOUND'
  | 'USER_EMAIL_ALREADY_EXISTS'
  | 'ROLE_NOT_FOUND'
  | 'INVALID_USER_DATA'
  | `INVALID_USER_DATA.${UserInvalidDataErrorCodes}`;
