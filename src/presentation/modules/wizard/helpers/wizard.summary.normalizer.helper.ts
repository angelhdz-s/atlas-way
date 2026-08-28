import type {
  FlatStep,
  FlatStepWithText,
  StepEnginePhaseEntries,
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
};

export function normalizeSummaryData<FormStepValues>({
  flatSteps,
  records,
  stepTitleBuilder,
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

    return {
      ...step,
      title: phase
        ? stepTitleBuilder({
            phaseRecord: phase,
            globalIndex: step.globalIndex,
            phaseIndex: step.stepIndexInPhase,
          })
        : `Step ${step.stepIndexInPhase + 1}`,
      phase: {
        ...step.phase,
        title: phase?.title ?? 'Phase not found',
        description: phase?.description ?? 'No description',
      },
    };
  });
}
