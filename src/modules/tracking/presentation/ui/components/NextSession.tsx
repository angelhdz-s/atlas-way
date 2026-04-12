import { Card } from '@/presentation/modules/card/components/Card';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import {
  SessionDetails,
  type SessionDetailsType,
} from '@/modules/session/presentation/ui/components/SessionDetails';
import { IconPlayerTrackNext } from '@/presentation/globals/components/icons/outline/IconPlayerTrackNext';

const session = {
  id: 2,
  name: 'Pull Day',
  description: 'Get a good pump!',
  exercises: [
    {
      id: 1,
      name: 'Pull Ups',
      sets: 3,
      reps: 8,
      weight: 0,
      status: 'next',
    },
    {
      id: 2,
      name: 'Barbell Rows',
      sets: 3,
      reps: 10,
      weight: 40,
      status: 'next',
    },
    {
      id: 3,
      name: 'Bicep Curls',
      sets: 3,
      reps: 12,
      weight: 15,
      status: 'next',
    },
    {
      id: 4,
      name: 'Face Pulls',
      sets: 3,
      reps: 15,
      weight: 10,
      status: 'next',
    },
  ],
  status: 'next',
  date: 'Aug 10, 2024',
} as SessionDetailsType;
export function NextSession({ className = '' }: { className?: string }) {
  return (
    <Card border="highlighted" className={`flex flex-col gap-4 ${className}`}>
      <header>
        <CardTitle Icon={IconPlayerTrackNext} title="Next Session" />
      </header>
      <main className="flex flex-col gap-1">
        <SessionDetails withStatus={false} session={session} />
      </main>
    </Card>
  );
}
