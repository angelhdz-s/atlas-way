import { isString, isValidUuid } from '@/shared/domain/validation.utils';
import { SESSION_DESCRIPTION_LENGTH, SESSION_NAME_LENGTH } from './session.validation.constants';

export function isValidSessionId(id: unknown) {
  return isValidUuid(id);
}

export function isValidSessionName(name: unknown) {
  if (name === null) return true;
  if (!isString(name)) return false;
  if (name.length < SESSION_NAME_LENGTH.min) return false;
  return name.length <= SESSION_NAME_LENGTH.max;
}

export function isValidSessionDescription(description: unknown) {
  if (description === null) return true;
  if (!isString(description)) return false;
  if (description.length < SESSION_DESCRIPTION_LENGTH.min) return false;
  return description.length <= SESSION_DESCRIPTION_LENGTH.max;
}
