import { useContext } from 'react';
import { WizardSummaryContext } from '@/presentation/modules/wizard/context/WizardSummaryContext';
import type { WizardSummary } from '@/presentation/modules/wizard/wizard.summary.types';

export function useWizardSummary<FormValues>(): WizardSummary<FormValues> {
  const context = useContext(WizardSummaryContext);
  
  if (!context) {
    throw new Error('useWizardSummary must be used within a WizardSummaryProvider');
  }
  
  return context as WizardSummary<FormValues>;
}
