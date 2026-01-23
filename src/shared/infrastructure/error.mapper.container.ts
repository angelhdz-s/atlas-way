import { GlobalErrorMapper } from './error.mapper';
import { errorHandlersContainer } from './errors/error-handler.container';

export const globalErrorMapper = new GlobalErrorMapper(errorHandlersContainer);
