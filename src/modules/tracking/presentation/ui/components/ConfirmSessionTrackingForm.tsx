'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { TodayTrackingSession } from '@/modules/tracking/presentation/workout.actions';
import { getTodaysWorkout } from '@/modules/tracking/presentation/workout.actions';
import { Button } from '@/presentation/modules/button/components/Button';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';

type Props = {
  session: TodayTrackingSession;
  onClose: () => void;
};

export function ConfirmSessionTrackingForm({ session, onClose }: Props) {
  const { addToast } = useToast();
  const { push } = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToTargets = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const training = await getTodaysWorkout();
    if (!training.success) {
      setIsSubmitting(false);
      return addToast(training.message, {
        type: 'error',
      });
    }

    const trainingId = training.data.id;
    const destination = training.data.statusId === 'PENDING' ? 'targets' : 'training';

    push(`/dashboard/tracking/${trainingId}/${destination}`);
  };

  return (
    <div className="bg-fill-base border-bd-muted w-100 space-y-8 rounded-2xl p-8">
      <header>
        <h3 className="text-fg-strong">{session.name}</h3>
        <p className="text-fg-default">{session.description ?? 'Focused on muscle development'}</p>
      </header>
      <main>
        <ul className="w-full">
          {session.exercises.map((exercise) => (
            <li key={exercise.id} className="w-full">
              <ul className="flex w-full items-center gap-4">
                <li className="w-full">{exercise.name}</li>
                <li className="whitespace-nowrap">
                  {exercise.sets} x {exercise.reps}
                </li>
                <li className="whitespace-nowrap">{exercise.weight} lb</li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
      <footer className="flex items-center justify-end gap-4">
        <Button variant={{ color: 'simple' }} onClick={onClose}>
          Cancel
        </Button>
        <Button variant={{ color: 'primary' }} disabled={isSubmitting} onClick={goToTargets}>
          Confirm training
        </Button>
      </footer>
    </div>
  );
}
