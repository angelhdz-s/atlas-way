'use client';

import { useRouter } from 'next/navigation';
import { getTodaysTraining } from '@/modules/tracking/presentation/tracking.actions';
import { Button } from '@/presentation/modules/button/components/Button';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';

export function ConfirmSessionTrackingForm() {
  const { addToast } = useToast();
  const { push } = useRouter();
  const goToTargets = async () => {
    const training = await getTodaysTraining();
    if (!training.success) {
      return addToast(training.message, {
        type: 'error',
      });
    }
    const trainingId = training.data.id;

    return push(`/dashboard/tracking/${trainingId}/targets`);
  };

  return (
    <div className="bg-fill-base border-bd-muted w-100 space-y-8 rounded-2xl p-8">
      <header>
        <h3 className="text-fg-strong">Push day</h3>
        <p className="text-fg-default">Focused on muscle development</p>
      </header>
      <main>
        <ul className="w-full">
          <li className="w-full">
            <ul className="flex w-full items-center gap-4">
              <li className="w-full">Exercise</li>
              <li className="whitespace-nowrap">4 x 12</li>
              <li className="whitespace-nowrap">50 lb</li>
              <li> More </li>
            </ul>
          </li>
          <li className="w-full">
            <ul className="flex w-full items-center gap-4">
              <li className="w-full">Exercise</li>
              <li className="whitespace-nowrap">4 x 12</li>
              <li className="whitespace-nowrap">50 lb</li>
              <li> More </li>
            </ul>
          </li>
          <li className="w-full">
            <ul className="flex w-full items-center gap-4">
              <li className="w-full">Exercise</li>
              <li className="whitespace-nowrap">4 x 12</li>
              <li className="whitespace-nowrap">50 lb</li>
              <li> More </li>
            </ul>
          </li>
          <li className="w-full">
            <ul className="flex w-full items-center gap-4">
              <li className="w-full">Exercise</li>
              <li className="whitespace-nowrap">4 x 12</li>
              <li className="whitespace-nowrap">50 lb</li>
              <li> More </li>
            </ul>
          </li>
        </ul>
      </main>
      <footer className="flex items-center justify-end gap-4">
        <Button variant={{ color: 'simple' }}>Cancel</Button>
        <Button variant={{ color: 'primary' }} onClick={goToTargets}>
          Confirm training
        </Button>
      </footer>
    </div>
  );
}
