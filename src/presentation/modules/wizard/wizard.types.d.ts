export interface PhaseEntries<FormStepValues> {
  id: string;
  steps: number;
  isCancelled?: boolean;
  stepsData?: FormStepValues[];
}

export interface FlatStep {
  stepId: string;
  phaseId: string;
  stepIndex: number;
  // Phase cancelled status
  isCancelled: boolean;
}
export interface NormalizeDomain<FormStepValues> {
  flatSteps: FlatStep[];
  // Initial values for react hook form organized by phase id
  defaultValues: Record<string, FormStepValues[]>;
}
