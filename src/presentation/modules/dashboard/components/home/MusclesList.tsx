import { MUSCLES } from '@/presentation/globals/constants/db';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { SimpleTable } from '@/presentation/modules/dashboard/components/home/SimpleTable';
import { Card } from '@/presentation/modules/card/components/Card';
import { IconMan } from '@/presentation/globals/components/icons/outline/IconMan';

export function MusclesList({ className = '' }: { className?: string }) {
  const musclesKeys = Object.keys(MUSCLES).slice(0, 5) as (keyof typeof MUSCLES)[];
  const muscles = musclesKeys.map((key, index) => ({
    key: index,
    name: MUSCLES[key].name,
  }));
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle Icon={IconMan} title="Muscles" />
      <main>
        <SimpleTable header={{ key: '#', name: 'Muscle' }} values={muscles} />
      </main>
    </Card>
  );
}
