import type {
  FlatStep,
  NormalizeDomain,
  PhaseEntries,
} from '@/presentation/modules/wizard/wizard.types';

export function normalizeDomainData<FormStepValues>(
  records: PhaseEntries<FormStepValues>[]
): NormalizeDomain<FormStepValues> {
  const flatSteps: FlatStep[] = [];
  const defaultValues: Record<string, any> = {};

  records.forEach((record) => {
    defaultValues[record.id] = record.stepsData || [];
    const stepCount = Math.max(1, record.steps);

    for (let i = 0; i < stepCount; i++) {
      flatSteps.push({
        stepId: `${record.id}_step_${i}`,
        phaseId: record.id,
        stepIndex: i,
        isCancelled: Boolean(record.isCancelled),
      });
    }
  });

  return {
    flatSteps,
    defaultValues,
  };
}
