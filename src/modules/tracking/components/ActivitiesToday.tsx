import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';
import {
  IconCalendarClock,
  IconCirclePlus,
} from '@/presentation/globals/components/Icons';
import {
  SessionDetails,
  type SessionDetailsType,
} from '../../session/presentation/ui/components/SessionDetails';
import { SubtleCard } from '@/presentation/globals/components/SubtleCard';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';

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

export function ActivitiesToday({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <header>
        <CardTitle
          Icon={IconCalendarClock}
          title="Today's Challenge"
        />
      </header>
      <main className="flex flex-col gap-1">
        <SubtleCard>
          <SessionDetails
            withStatus={true}
            session={session}
          />
        </SubtleCard>
      </main>
      <footer>
        <VariantButton
          type="button"
          variantConfig={{
            size: 'sm',
            color: 'primary',
          }}
          className="flex items-center gap-1"
        >
          <IconCirclePlus className="size-5" />
          <span>Register</span>
        </VariantButton>
      </footer>
    </Card>
  );
}
