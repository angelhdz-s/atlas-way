'use client';

import { useWizardSummary } from '@/presentation/modules/wizard/hooks/useWizardSummary';

export function WizardSummary<FormValues>() {
  const summary = useWizardSummary<FormValues>();

  return (
    <div className="rounded border p-4 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Training Summary</h2>

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-600">{summary.overallProgress}%</span>
        </div>
        <div className="h-2 w-full rounded-full">
          <div
            className="bg-success h-2 rounded-full"
            style={{ width: `${summary.overallProgress}%` }}
          ></div>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          {summary.completedSteps} / {summary.totalSteps} steps completed
        </p>
      </div>

      <div className="space-y-4">
        {summary.phases.map((phase) => (
          <div key={phase.phaseId} className="border-t pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{phase.title}</h3>
              <span
                className={`rounded px-2 py-1 text-xs ${
                  phase.status === 'COMPLETED'
                    ? 'bg-green-100 text-green-800'
                    : phase.status === 'IN_PROGRESS'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                }`}
              >
                {phase.status}
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {phase.steps.map((step) => (
                <li
                  key={step.stepId}
                  className={`flex justify-between text-xs ${step.isCurrent ? 'font-bold text-blue-600' : 'text-gray-600'}`}
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
