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

  let globalIndex = 0;

  records.forEach((record, recordIndex) => {
    defaultValues[record.id] = record.stepsData || [];
    const stepCount = Math.max(1, record.steps);

    for (let i = 0; i < stepCount; i++) {
      flatSteps.push({
        id: `${record.id}_step_${i}`,
        title: `Step ${i + 1}`,
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
      });
      globalIndex++;
    }
  });

  return {
    flatSteps,
    defaultValues,
  };
}
