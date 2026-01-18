import { GlobalErrorMapper } from './globalError.mapper';
import { technicalErrorsContainer } from './errors/errorHandler.container';

export const globalErrorMapper = new GlobalErrorMapper(technicalErrorsContainer);
