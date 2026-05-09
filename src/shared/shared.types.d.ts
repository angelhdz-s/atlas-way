import type { Result } from '@/shared/domain/result';

export type NonEmptyString<T extends string> = T extends '' ? never : T;

export type EntityMethod = (...args: any[]) => Result<any, DomainError>;

export type ClassMethods<T> = {
  [K in keyof T as T[K] extends EntityMethod ? K : never]: T[K];
};

export type ValidationFunction = (arg: unknown) => boolean;
