import { twMerge } from 'tailwind-merge';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { useSessionTraining } from '@/modules/tracking/presentation/ui/hooks/useSessionTraining';

type Props = {
  className?: string;
};

export function SessionTrainingHeaderSteps({ className }: Props) {
  const { trainingState, currentStep, targets, stageIndex } = useSessionTraining();

  if (trainingState.stages.length < 1) return null;

  return (
    <header className={twMerge('space-y-8', className)}>
      <ul className="flex items-center gap-2">
        {trainingState.stages.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              className={twMerge(
                'flex size-8 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-2',
                s.stage === currentStep.stage ? 'bg-primary text-fg-strong' : 'bg-fill-base'
              )}
            >
              {`Step ${i + 1}`}
              {s.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
              {s.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
              {s.status === 'error' && <IconX size={16} strokeWidth={2} />}
            </button>
          </li>
        ))}
      </ul>

      {targets[stageIndex] !== undefined && (
        <div
          key={targets[stageIndex].id}
          className={twMerge('animate-duration-100', 'animate-fade-left')}
        >
          <h6>{targets[stageIndex].name}</h6>
          <p>{targets[stageIndex].description ?? 'No description.'}</p>
        </div>
      )}

      <div className="flex items-center gap-8">
        <div className="w-20">
          <h4>Stage</h4>
          <p>{currentStep.stage}</p>
        </div>
        <div className="w-20">
          <h4>Step</h4>
          <p>{currentStep.step}</p>
        </div>
      </div>
    </header>
  );
}
