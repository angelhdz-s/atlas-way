import type { StepEngineContextValue } from '@/presentation/modules/wizard/wizard.steps.types';
import { createContext } from 'react';

export const StepEngineContext = createContext<StepEngineContextValue | null>(null);
