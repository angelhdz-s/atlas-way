import { GlobalErrorMapper } from './globalError.mapper';
import { technicalErrorsContainer } from './errors/technicalErrors.container';

export const globalErrorMapper = new GlobalErrorMapper(technicalErrorsContainer);
