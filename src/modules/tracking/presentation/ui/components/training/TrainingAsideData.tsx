'use client';

import { useStepEngine } from '@/presentation/modules/wizard/hooks/useStepEngine';

type Props = {
  className?: string;
};

export function TrainingAsideData({ className }: Props) {
  const { currentStep } = useStepEngine();

  return (
    <div className={className}>
      <div>{currentStep.isCancelled ? 'Cancelled' : 'Pending'}</div>
    </div>
  );

  // return (
  //   <div className={twMerge('space-y-4', className)}>
  //     {trainingState.stages.map((t) => (
  //       <section key={t.id} className="space-y-1">
  //         <header className="flex justify-between gap-8">
  //           <h5>{t.title}</h5>
  //           <aside>
  //             {t.status === 'PENDING' && <IconClock size={16} strokeWidth={2} />}
  //             {t.status === 'COMPLETED' && <IconCheck size={16} strokeWidth={2} />}
  //             {t.status === 'ERROR' && <IconX size={16} strokeWidth={2} />}
  //           </aside>
  //         </header>
  //         {t.steps.map((s) => (
  //           <ul key={s.key} className="flex items-center gap-2">
  //             <li className="w-full">{`Set ${s.set}`}</li>
  //             <li>{s.reps}</li>
  //             <li>{s.weight}</li>
  //             <li>
  //               {s.status === 'PENDING' && <IconClock size={16} strokeWidth={2} />}
  //               {s.status === 'COMPLETED' && <IconCheck size={16} strokeWidth={2} />}
  //               {s.status === 'ERROR' && <IconX size={16} strokeWidth={2} />}
  //             </li>
  //           </ul>
  //         ))}
  //       </section>
  //     ))}
  //   </div>
  // );
}
