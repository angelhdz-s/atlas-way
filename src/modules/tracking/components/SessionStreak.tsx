import { SESSIONS_COUNTERS } from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '../../../presentation/modules/dashboard/card/components/CardTitle';
import { Counter, CounterIcon } from './Counter';
import { Flame } from '@/presentation/globals/components/Icons';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';

export function SessionStreak({
  className = '',
}: {
  className?: string;
}) {
  const { sessionStreak } = SESSIONS_COUNTERS;

  return (
    <Card className={`flex flex-col gap-1 ${className}`}>
      <CardTitle
        title="Session Streak"
        className="text-left"
      />
      <main className="flex flex-1 items-center gap-1">
        <CounterIcon icon={Flame} />
        <Counter number={sessionStreak} />
      </main>
    </Card>
  );
}
