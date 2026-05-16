import { Failure, Success } from '@/shared/domain/result';
import { isValidUuid } from '@/shared/domain/validation/validation.utils';
import { InvalidUserData, RoleNotFound } from '@/modules/user/domain/errors/user.errors';
import { ROLES } from '@/modules/user/domain/user.constants.roles';
import {
  isValidUserEmail,
  isValidUserName,
} from '@/modules/user/domain/validation/user.validation.lib';
import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { UserFactoryData, UserProps } from '@/modules/user/domain/user.types';

export class User {
  constructor(private props: UserProps) {}
  get id() {
    return this.props.id;
  }
  get name() {
    return this.props.name;
  }
  get email() {
    return this.props.email;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }
  get role() {
    return this.props.role;
  }
  changeName(name: UserProps['name']): Result<null, DomainError> {
    if (!isValidUserName(name)) return Failure(new InvalidUserData('NAME'));
    this.props.name = name;
    return Success(null);
  }
  changeEmail(email: UserProps['email']): Result<null, DomainError> {
    if (!isValidUserEmail(email)) return Failure(new InvalidUserData('EMAIL'));
    this.props.email = email;
    return Success(null);
  }
  static create(id: UserProps['id'], data: UserFactoryData): Result<User, DomainError> {
    if (!isValidUuid(id)) return Failure(new InvalidUserData());
    if (!isValidUserEmail(data.email)) return Failure(new InvalidUserData('EMAIL'));
    if (!isValidUserName(data.name)) return Failure(new InvalidUserData('NAME'));

    const role = Object.values(ROLES).find((r) => r.id === data.roleId);
    if (!role) return Failure(new RoleNotFound());

    const newUser = new User({
      ...data,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      id,
    });

    return Success(newUser);
  }
}
