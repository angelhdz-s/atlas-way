import { createContext } from 'react';
import type { WizardSummary } from '@/presentation/modules/wizard/wizard.summary.types';

export const WizardSummaryContext = createContext<WizardSummary<any> | undefined>(undefined);
