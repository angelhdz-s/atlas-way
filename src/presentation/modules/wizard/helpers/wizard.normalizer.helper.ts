import type {
  FlatStep,
  NormalizeDomain,
  StepEnginePhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';

export type NormalizeDataInput<FormStepValues> = {
  records: StepEnginePhaseEntries<FormStepValues>[];
  defaultValuesMap: (input: {
    step: FlatStep;
    globalIndex: number;
    phaseIndex: number;
    data: FormStepValues | undefined;
    lastDefaultValue: FormStepValues | undefined;
  }) => FormStepValues;
};

export function normalizeStepsData<FormStepValues>({
  defaultValuesMap,
  records,
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
        stepIndexInPhase: i,
        isFirstInPhase: i === 0,
        isLastInPhase: i === record.steps,
        globalIndex,
        phase: {
          id: record.id,
          order: recordIndex + 1,
        },
      };
      flatSteps.push(flatStep);
      const data = record.stepsData?.[i];
      defaultValues[stepId] = defaultValuesMap({
        data,
        globalIndex,
        phaseIndex: i,
        step: flatStep,
        lastDefaultValue,
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
