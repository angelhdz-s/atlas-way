'use client';

import { useWizardSummary } from '@/presentation/modules/wizard/hooks/useWizardSummary';

export function WizardSummary<FormValues>() {
  const summary = useWizardSummary<FormValues>();

  return (
    <div className="space-y-4">
      <h2 className="text-xl">Summary</h2>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Progress</span>
          <span>{summary.overallProgress}%</span>
        </div>
        <div className="h-2 w-full rounded-full">
          <div
            className="bg-success h-2 rounded-full"
            style={{ width: `${summary.overallProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          {summary.completedSteps} / {summary.totalSteps} steps completed
        </p>
      </div>

      <div className="space-y-2">
        {summary.phases.map((phase) => (
          <div key={phase.phaseId}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{phase.title}</h3>
              <span
                className={`bg-fill-middle rounded px-1 py-0.5 text-xs capitalize ${
                  phase.status === 'COMPLETED'
                    ? 'text-success'
                    : phase.status === 'IN_PROGRESS'
                      ? 'text-info'
                      : 'text-current/80'
                }`}
              >
                {phase.status}
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {phase.steps.map((step) => (
                <li
                  key={step.stepId}
                  className={`flex justify-between text-sm ${step.isCurrent ? 'text-info' : 'text-fg-muted'}`}
                >
                  <span>{step.title}</span>
                  <span>{step.status}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
