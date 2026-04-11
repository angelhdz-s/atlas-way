import { SESSIONS_COUNTERS } from '@/presentation/globals/mocks/tracking';
import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';
import { Counter } from '@/modules/tracking/components/Counter';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { IconTrophy } from '@/presentation/globals/components/icons/outline/IconTrophy';

export function AllSessionsDoneCounter({ className }: { className?: string }) {
  const { totalSessions } = SESSIONS_COUNTERS;
  return (
    <Card className={`flex flex-col gap-1 ${className}`}>
      <header>
        <CardTitle Icon={IconTrophy} title="Total Sessions" />
      </header>
      <main className="flex flex-1 items-center gap-1">
        <Counter number={totalSessions} />
      </main>
    </Card>
  );
}
