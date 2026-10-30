'use client';

import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import type { StatusDayType } from '@/presentation/globals/mocks/routines';
import type { WorkoutStatusEnum } from '@/prisma/client';
import type { TodayTrackingOverview } from '@/modules/tracking/presentation/workout.actions';
import {
  SessionDetails,
  type SessionDetailsType,
} from '@/modules/session/presentation/ui/components/SessionDetails';
import { SubtleCard } from '@/presentation/modules/card/components/SubtleCard';
import { Card } from '@/presentation/modules/card/components/Card';
import { ConfirmSessionTrackingForm } from './ConfirmSessionTrackingForm';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { useState } from 'react';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { Button } from '@/presentation/modules/button/components/Button';
import { useRouter } from 'next/navigation';
import { Icon } from '@/presentation/modules/icon/components/Icon';

const getSessionStatus = (statusId?: WorkoutStatusEnum): StatusDayType => {
  if (statusId === 'IN_PROGRESS') return 'current';
  if (statusId === 'COMPLETED') return 'completed';
  if (statusId === 'INTERRUPTED' || statusId === 'SKIPPED') return 'canceled';
  return 'next';
};

const toSessionDetails = (overview: TodayTrackingOverview): SessionDetailsType | null => {
  if (!overview.session) return null;

  const status = getSessionStatus(overview.workout?.statusId);

  return {
    id: overview.session.id,
    name: overview.session.name,
    description: overview.session.description ?? undefined,
    status,
    exercises: overview.session.exercises.map((exercise) => ({
      id: exercise.id,
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
      status,
    })),
  };
};

export function ActivitiesToday({
  className,
  overview,
}: {
  className?: string;
  overview: TodayTrackingOverview;
}) {
  const { push } = useRouter();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const session = toSessionDetails(overview);
  const workoutStatusId = overview.workout?.statusId;
  const isWorkoutFinished =
    workoutStatusId === 'COMPLETED' ||
    workoutStatusId === 'INTERRUPTED' ||
    workoutStatusId === 'SKIPPED';
  const isWorkoutStarted = workoutStatusId === 'TARGETS_SET' || workoutStatusId === 'IN_PROGRESS';

  const closeConfirmForm = () => {
    if (isFormOpen !== false) setIsFormOpen(false);
  };

  const showConfirmForm = () => {
    if (isFormOpen !== true) setIsFormOpen(true);
  };

  const goToWorkout = () => {
    if (overview.workout && workoutStatusId !== 'PENDING') {
      push(`/dashboard/tracking/${overview.workout.id}/training`);
      return;
    }

    showConfirmForm();
  };

  const { ref } = useLayer({
    isOpen: isFormOpen,
    onClose: closeConfirmForm,
  });

  const buttonLabel = isWorkoutFinished
    ? 'View workout'
    : isWorkoutStarted
      ? 'Continue training'
      : "Let's train";

  return (
    <>
      <Card className={`flex flex-col gap-4 ${className}`}>
        <header>
          <CardTitle icon="calendar-clock" title="Today's Challenge" />
        </header>
        <main className="flex flex-col gap-1">
          <SubtleCard>
            {session ? (
              <SessionDetails withStatus={true} session={session} />
            ) : (
              <div className="space-y-1">
                <h4 className="text-lg">
                  {overview.isRestDay ? 'Rest day' : 'No session scheduled'}
                </h4>
                <p className="text-fg-default">
                  {overview.isRestDay
                    ? 'Take a break and recover for the next session.'
                    : overview.hasActiveRoutine
                      ? 'There is no session planned for today.'
                      : 'Create an active routine to start tracking your progress.'}
                </p>
              </div>
            )}
          </SubtleCard>
        </main>
        {session && (
          <footer>
            <Button
              type="button"
              variant={{
                size: 'sm',
                color: 'primary',
              }}
              className="flex items-center gap-1"
              onClick={goToWorkout}
            >
              <Icon icon="plus" variant={{ size: 'sm', weight: 'moderate' }} />
              {buttonLabel}
            </Button>
          </footer>
        )}
      </Card>
      {isFormOpen && overview.session && (
        <div className="fixed inset-0 z-2">
          <div ref={ref} className="fixed top-1/2 left-1/2 z-10 -translate-1/2">
            <ConfirmSessionTrackingForm session={overview.session} onClose={closeConfirmForm} />
          </div>
          <TooltipBackdrop />
        </div>
      )}
    </>
  );
}
