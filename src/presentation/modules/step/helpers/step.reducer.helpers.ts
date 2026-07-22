import type { FlatStep, StepState, WizardSchema } from '@/presentation/modules/step/step.types';

/**
 * Normalize schema steps to get flat steps list
 */
export function getFlatSteps(schema: WizardSchema): FlatStep[] {
  return schema.phases.flatMap((p) =>
    p.steps.map((s) => ({
      stepId: s.id,
      phaseId: p.id,
    }))
  );
}

/**
 * Generate initial step state based on schema data
 */
export function createInitialStepsState(schema: WizardSchema): StepState {
  const flatSteps = getFlatSteps(schema);
  const firstStep = flatSteps[0] ?? null;

  return {
    currentPhaseId: firstStep?.phaseId ?? null,
    currentStepId: firstStep?.stepId ?? null,
    history: [],
  };
}
