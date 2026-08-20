import type {
  FlatStep,
  NormalizeDomain,
  PhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';

export type NormalizeDataInput<FormStepValues> = {
  records: PhaseEntries<FormStepValues>[];
  defaultValuesMap: (input: {
    step: FlatStep;
    globalIndex: number;
    phaseIndex: number;
    data?: FormStepValues | undefined;
  }) => FormStepValues;
  stepTitleBuilder?: (input: {
    phaseRecord: PhaseEntries<FormStepValues>;
    globalIndex: number;
    phaseIndex: number;
  }) => string;
};

export function normalizeDomainData<FormStepValues>({
  defaultValuesMap,
  records,
  stepTitleBuilder,
}: NormalizeDataInput<FormStepValues>): NormalizeDomain<FormStepValues> {
  const flatSteps: FlatStep[] = [];
  const defaultValues: Record<string, FormStepValues> = {};

  let globalIndex = 0;

  let lastDefaultValue: FormStepValues | undefined;

  records.forEach((record, recordIndex) => {
    // defaultValues[record.id] = record.stepsData || [];
    const stepCount = Math.max(1, record.steps);
    if (recordIndex === 0) lastDefaultValue = undefined;

    for (let i = 0; i < stepCount; i++) {
      const stepId = `${record.id}_step_${i}`;
      const flatStep: FlatStep = {
        id: stepId,
        title:
          stepTitleBuilder?.({
            phaseRecord: record,
            globalIndex,
            phaseIndex: i,
          }) ?? `Step ${i + 1}`,
        stepIndexInPhase: i,
        isFirstInPhase: i === 0,
        isLastInPhase: i === record.steps,
        globalIndex,
        status: globalIndex === 0 ? 'IN_PROGRESS' : 'PENDING',
        phase: {
          id: record.id,
          order: recordIndex + 1,
          status: recordIndex === 0 ? 'IN_PROGRESS' : 'PENDING',
          title: record.title,
        },
      };
      flatSteps.push(flatStep);
      const data = record.stepsData?.[i] ?? lastDefaultValue;
      defaultValues[stepId] =
        data ??
        defaultValuesMap({
          data,
          globalIndex,
          phaseIndex: i,
          step: flatStep,
        });
      lastDefaultValue = defaultValues[stepId];
      globalIndex++;
    }
  });

  return {
    flatSteps,
    defaultValues,
  };
}
