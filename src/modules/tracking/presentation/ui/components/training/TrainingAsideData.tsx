import { twMerge } from 'tailwind-merge';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';

type Props = {
  className?: string;
};

export function TrainingAsideData({ className }: Props) {
  const { trainingState } = useTrainingSteps();

  if (trainingState.stages.length < 1) return null;

  return (
    <div className={twMerge('space-y-4', className)}>
      {trainingState.stages.map((t) => (
        <section key={t.id} className="space-y-1">
          <header className="flex justify-between gap-8">
            <h5>{t.title}</h5>
            <aside>
              {t.status === 'PENDING' && <IconClock size={16} strokeWidth={2} />}
              {t.status === 'COMPLETED' && <IconCheck size={16} strokeWidth={2} />}
              {t.status === 'ERROR' && <IconX size={16} strokeWidth={2} />}
            </aside>
          </header>
          {t.steps.map((s) => (
            <ul key={s.id} className="flex items-center gap-2">
              <li className="w-full">{`Set ${s.set}`}</li>
              <li>{s.reps}</li>
              <li>{s.weight}</li>
              <li>
                {s.status === 'PENDING' && <IconClock size={16} strokeWidth={2} />}
                {s.status === 'COMPLETED' && <IconCheck size={16} strokeWidth={2} />}
                {s.status === 'ERROR' && <IconX size={16} strokeWidth={2} />}
              </li>
            </ul>
          ))}
        </section>
      ))}
    </div>
  );
}
