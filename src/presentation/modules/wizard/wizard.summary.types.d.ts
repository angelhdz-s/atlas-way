export interface StepSummary<FormValues> {
  stepId: string;
  title: string;
  status: StepStatus;
  isCurrent: boolean;
  dataSnapshot?: FormValues; // Snapshot from form values
}

export interface PhaseSummary<FormValues> {
  phaseId: string;
  title: string;
  status: PhaseStatus;
  isCancelled: boolean;
  steps: StepSummary<FormValues>[];
  completedCount: number;
  totalCount: number;
}

export interface WizardSummary<FormValues> {
  phases: PhaseSummary<FormValues>[];
  overallProgress: number; // percentage 0-100%
  totalSteps: number;
  completedSteps: number;
}
