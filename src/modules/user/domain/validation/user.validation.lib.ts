import { isValidEmail } from '@/shared/domain/validation.lib';
import {
  USER_EMAIL_SERVICES,
  USER_NAME_LENGTH,
} from '@/modules/user/domain/validation/user.validation.constants';

export function isValidUserName(name: string) {
  const newName = name.trim();
  const isNameMinimumLength = newName.length >= USER_NAME_LENGTH.min;
  const isNameMaximumLength = newName.length <= USER_NAME_LENGTH.max;
  return isNameMinimumLength && isNameMaximumLength;
}

export function isValidUserEmail(email: string) {
  if (!isValidEmail(email)) return false;

  for (const service of USER_EMAIL_SERVICES) {
    if (email.endsWith(service)) return true;
  }

  return false;
}
