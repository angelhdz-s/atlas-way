import { MUSCLES } from '@/presentation/globals/constants/db';
import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';
import { SimpleTable } from '@/presentation/modules/dashboard/home/components/SimpleTable';
import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { IconMan } from '@/presentation/globals/components/icons/outline/IconMan';

export function MusclesList({ className = '' }: { className?: string }) {
  const muscleKeys = Object.keys(MUSCLES)
    .slice(0, 5)
    .map((key, index) => ({
      key: index,
      name: MUSCLES[key].name,
    }));
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle Icon={IconMan} title="Muscles" />
      <main>
        <SimpleTable header={{ key: '#', name: 'Muscle' }} values={muscleKeys} />
      </main>
    </Card>
  );
}
