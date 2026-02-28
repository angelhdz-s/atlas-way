import { EXERCISES } from '@/presentation/globals/constants/db';
import { CardTitle } from '../../card/components/CardTitle';
import { SimpleTable } from './SimpleTable';
import { Card } from '../../card/components/Card';

export function ExercisesList({
  className = '',
}: {
  className?: string;
}) {
  const exerciseKeys = Object.keys(EXERCISES)
    .slice(0, 5)
    .map((key, index) => ({
      key: index,
      name: EXERCISES[key].name,
    }));

  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle title="Exercises" />
      <main>
        <SimpleTable
          header={{ key: '#', name: 'Exercise' }}
          values={exerciseKeys}
        />
      </main>
    </Card>
  );
}
