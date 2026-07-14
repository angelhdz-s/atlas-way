import { twMerge } from 'tailwind-merge';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { useSessionTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingSteps';

type Props = {
  className?: string;
};

export function SessionTrainingAsideData({ className }: Props) {
  const { trainingState } = useSessionTrainingSteps();

  if (trainingState.stages.length < 1) return null;

  return (
    <div className={twMerge('space-y-4', className)}>
      {trainingState.stages.map((t) => (
        <section key={t.id} className="space-y-1">
          <header className="flex justify-between gap-8">
            <h5>{t.title}</h5>
            <aside>
              {t.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
              {t.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
              {t.status === 'error' && <IconX size={16} strokeWidth={2} />}
            </aside>
          </header>
          {t.steps.map((s) => (
            <ul key={s.id} className="flex items-center gap-2">
              <li className="w-full">{`Set ${s.set}`}</li>
              <li>{s.reps}</li>
              <li>{s.weight}</li>
              <li>
                {s.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
                {s.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
                {s.status === 'error' && <IconX size={16} strokeWidth={2} />}
              </li>
            </ul>
          ))}
        </section>
      ))}
    </div>
  );
}
