import type {
  FlatStep,
  FlatStepWithText,
  StepEnginePhaseEntries,
  StepStatus,
  WizardSummaryPhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';

export type NormalizeSummaryDataInput<FormStepValues> = {
  flatSteps: FlatStep[];
  records: WizardSummaryPhaseEntries<FormStepValues>[];
  stepTitleBuilder: (input: {
    phaseRecord: StepEnginePhaseEntries<FormStepValues>;
    globalIndex: number;
    phaseIndex: number;
  }) => string;
  setInitialStepStatus?: (data: FormStepValues | undefined) => StepStatus;
};

export function normalizeSummaryData<FormStepValues>({
  flatSteps,
  records,
  stepTitleBuilder,
  setInitialStepStatus,
}: NormalizeSummaryDataInput<FormStepValues>): FlatStepWithText[] {
  const phases: {
    [key: string]: WizardSummaryPhaseEntries<FormStepValues> | undefined;
  } = {};

  return flatSteps.map((step) => {
    if (phases[step.phase.id] === undefined) {
      const phaseRecord = records.find((r) => r.id === step.phase.id);
      phases[step.phase.id] = phaseRecord;
    }

    const phase = phases[step.phase.id];
    const stepData = phase?.stepsData?.[step.stepIndexInPhase];
    const stepStatus: StepStatus = setInitialStepStatus?.(stepData) ?? 'PENDING';

    return {
      ...step,
      title: phase
        ? stepTitleBuilder({
            phaseRecord: phase,
            globalIndex: step.globalIndex,
            phaseIndex: step.stepIndexInPhase,
          })
        : `Step ${step.stepIndexInPhase + 1}`,
      status: stepStatus,
      phase: {
        ...step.phase,
        title: phase?.title ?? 'Phase not found',
        description: phase?.description ?? 'No description',
        status: phase?.status ?? 'PENDING',
      },
    };
  });
}
