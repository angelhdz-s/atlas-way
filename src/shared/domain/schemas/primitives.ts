import { z } from 'zod/v4';

export const emailRule = z.email();
export const uuidRule = z.uuid();
export const intNumberIdRule = z.number().int();
