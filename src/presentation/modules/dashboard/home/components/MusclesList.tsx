import { MUSCLES } from '@/presentation/globals/constants/db';
import { CardTitle } from '../../card/components/CardTitle';
import { SimpleTable } from './SimpleTable';
import { Card } from '../../card/components/Card';

export function MusclesList({
  className = '',
}: {
  className?: string;
}) {
  const muscleKeys = Object.keys(MUSCLES)
    .slice(0, 5)
    .map((key, index) => ({
      key: index,
      name: MUSCLES[key].name,
    }));
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle title="Muscles" />
      <main>
        <SimpleTable
          header={{ key: '#', name: 'Muscle' }}
          values={muscleKeys}
        />
      </main>
    </Card>
  );
}
