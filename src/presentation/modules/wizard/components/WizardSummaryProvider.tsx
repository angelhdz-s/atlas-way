'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';
import type { FlatStepWithText, PhaseWithText } from '@/presentation/modules/wizard/wizard.types';
import type { PhaseSummary, StepSummary } from '@/presentation/modules/wizard/wizard.summary.types';
import { WizardSummaryContext } from '@/presentation/modules/wizard/context/WizardSummaryContext';

type Props<FormValues> = {
  children: React.ReactNode;
  flatSteps: FlatStepWithText[];
  areFieldValuesCompleted?: (formData: FormValues) => boolean;
};

export function WizardSummaryProvider<FormValues>({
  children,
  flatSteps,
  areFieldValuesCompleted,
}: Props<FormValues>) {
  const { currentStep, cancelledPhaseIds } = useStepEngine();
  const { watch } = useFormContext();
  const formData = watch() || {};

  const summary = useMemo(() => {
    let totalValidSteps = 0;
    let totalCompletedSteps = 0;

    const phaseMap = new Map<string, PhaseSummary<FormValues>>();

    flatSteps.forEach((s) => {
      const isCancelled = cancelledPhaseIds[s.phase.id] === true;
      const isCurrent = s.id === currentStep.id;
      const stepData = formData[s.id] as FormValues | undefined;

      // Evaluate step status
      let status: FlatStepWithText['status'] = 'PENDING';

      if (isCancelled) status = 'CANCELED';
      else if (stepData && areFieldValuesCompleted?.(stepData)) status = 'COMPLETED';
      else if (isCurrent) status = 'IN_PROGRESS';

      if (!isCancelled) {
        totalValidSteps++;
        if (status === 'COMPLETED') totalCompletedSteps++;
      }

      const stepSummary: StepSummary<FormValues> = {
        stepId: s.id,
        title: s.title,
        status: status,
        isCurrent,
        dataSnapshot: stepData as FormValues,
      };

      if (!phaseMap.has(s.phase.id)) {
        phaseMap.set(s.phase.id, {
          phaseId: s.phase.id,
          title: s.phase.title || `Phase`, // Use phase title if available
          description: s.phase.description,
          status: status,
          isCancelled,
          steps: [stepSummary],
          completedCount: status === 'COMPLETED' ? 1 : 0,
          totalCount: 1,
        });
      } else {
        const phase = phaseMap.get(s.phase.id);
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
          status: 'CANCELED',
        };

      const allCompleted = p.steps.every((s) => s.status === 'COMPLETED');
      const hasStarted = p.steps.some(
        (s) => s.status === 'COMPLETED' || s.status === 'IN_PROGRESS'
      );

      let phaseStatus: PhaseWithText['status'] = 'PENDING';
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
  }, [flatSteps, currentStep, cancelledPhaseIds, formData, areFieldValuesCompleted]);

  return <WizardSummaryContext.Provider value={summary}>{children}</WizardSummaryContext.Provider>;
}
