import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import type {
  PhaseStatus,
  PhaseSummary,
  StepStatus,
  StepSummary,
} from '@/presentation/modules/wizard/wizard.summary.types';
import type { FlatStep } from '@/presentation/modules/wizard/wizard.types';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function useWizardSummary<FormValues>(flatSteps: FlatStep[]) {
  // 1. Get navigation and cancels from step engine
  const { currentStep, cancelledPhaseIds } = useStepEngine();

  // 2. Get current from state from step form sync
  const { watch } = useFormContext();
  const formData = watch() || {};

  // 3. Calculate new state with useMemo
  return useMemo(() => {
    let totalValidSteps = 0;
    let totalCompletedSteps = 0;

    const phaseMap = new Map<string, PhaseSummary<FormValues>>();

    flatSteps.forEach((s) => {
      const isCancelled = cancelledPhaseIds[s.phaseId] === true;
      const isCurrent = s.stepId === currentStep.stepId;
      const stepData = formData[s.stepId];

      // Evaluate step status
      let status: StepStatus = 'PENDING';

      if (isCancelled) status = 'CANCELED';
      else if (isCurrent) status = 'IN_PROGRESS';
      else if (stepData && Object.keys(stepData).length > 0) status = 'COMPLETED';

      if (!isCancelled) {
        totalValidSteps++;
        if (status === 'COMPLETED') totalCompletedSteps++;
      }

      const stepSummary: StepSummary<FormValues> = {
        stepId: s.stepId,
        title: `Step ${s.stepIndex + 1}`,
        status,
        isCurrent,
        dataSnapshot: stepData,
      };

      if (!phaseMap.has(s.stepId))
        phaseMap.set(s.stepId, {
          phaseId: s.phaseId,
          title: `Phase`,
          status: isCancelled ? 'CANCELED' : 'PENDING',
          isCancelled,
          steps: [stepSummary],
          completedCount: status === 'COMPLETED' ? 1 : 0,
          totalCount: 1,
        });
      else {
        const phase = phaseMap.get(s.stepId);
        if (phase) {
          phase.steps.push(stepSummary);
          phase.totalCount++;
          if (status === 'COMPLETED') phase.completedCount++;
        }
      }
    });

    // Adjust final phase status
    const phases: PhaseSummary<FormValues>[] = Array.from(phaseMap.values()).map((p) => {
      if (p.isCancelled)
        return {
          ...p,
          status: 'CANCELED' as PhaseStatus,
        };

      const allCompleted = p.steps.every((s) => s.status === 'COMPLETED');
      const hasStarted = p.steps.some(
        (s) => s.status === 'COMPLETED' || s.status === 'IN_PROGRESS'
      );

      let phaseStatus: PhaseStatus = 'PENDING';
      if (allCompleted) phaseStatus = 'COMPLETED';
      else if (hasStarted) phaseStatus = 'IN_PROGRESS';

      return { ...p, status: phaseStatus };
    });

    // Calculate percentage progress
    const overallProgress =
      totalValidSteps > 0 ? Math.round((totalCompletedSteps / totalValidSteps) * 100) : 0;

    return {
      phases,
      overallProgress,
      totalSteps: totalValidSteps,
      completedSteps: totalCompletedSteps,
    };
  }, [flatSteps, currentStep, cancelledPhaseIds, formData]);
}
