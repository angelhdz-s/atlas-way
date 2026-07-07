'use client';

import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { IconCalendarClock } from '@/presentation/globals/components/icons/outline/IconCalendarClock';
import { IconCirclePlus } from '@/presentation/globals/components/icons/outline/IconCirclePlus';
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

const session = {
  id: 1,
  name: 'Push Day',
  description: 'Take it easy today!',
  exercises: [
    {
      id: 1,
      name: 'Push Ups',
      sets: 3,
      reps: 10,
      weight: 0,
      status: 'next',
    },
    {
      id: 2,
      name: 'Shoulder Press',
      sets: 3,
      reps: 12,
      weight: 20,
      status: 'next',
    },
    {
      id: 3,
      name: 'Tricep Dips',
      sets: 3,
      reps: 10,
      weight: 10,
      status: 'next',
    },
    {
      id: 4,
      name: 'Lateral Raises',
      sets: 3,
      reps: 15,
      weight: 5,
      status: 'next',
    },
  ],
  status: 'next',
} as SessionDetailsType;

export function ActivitiesToday({ className }: { className?: string }) {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const closeConfirmForm = () => {
    if (isFormOpen !== false) setIsFormOpen(false);
  };

  const showConfirmForm = () => {
    if (isFormOpen !== true) setIsFormOpen(true);
  };

  const { ref } = useLayer({
    isOpen: isFormOpen,
    onClose: closeConfirmForm,
  });

  return (
    <>
      <Card className={`flex flex-col gap-4 ${className}`}>
        <header>
          <CardTitle Icon={IconCalendarClock} title="Today's Challenge" />
        </header>
        <main className="flex flex-col gap-1">
          <SubtleCard>
            <SessionDetails withStatus={true} session={session} />
          </SubtleCard>
        </main>
        <footer>
          <Button
            type="button"
            variant={{
              size: 'sm',
              color: 'primary',
              type: 'iconText',
            }}
            className="flex items-center gap-1"
            Icon={IconCirclePlus}
            onClick={showConfirmForm}
          >
            Let's train
          </Button>
        </footer>
      </Card>
      {isFormOpen && (
        <div className="fixed inset-0 z-2">
          <div ref={ref} className="fixed top-1/2 left-1/2 z-10 -translate-1/2">
            <ConfirmSessionTrackingForm />
          </div>
          <TooltipBackdrop />
        </div>
      )}
    </>
  );
}
