import { REGEX_EMAIL, REGEX_UUID } from '@/shared/domain/validation.constants';

export function isValidUuid(id: string) {
  return REGEX_UUID.test(id);
}

export function isValidEmail(email: string) {
  return REGEX_EMAIL.test(email);
}
