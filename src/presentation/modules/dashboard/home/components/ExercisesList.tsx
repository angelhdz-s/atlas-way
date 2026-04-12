import { EXERCISES } from '@/presentation/globals/constants/db';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { SimpleTable } from '@/presentation/modules/dashboard/home/components/SimpleTable';
import { Card } from '@/presentation/modules/card/components/Card';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';

export function ExercisesList({ className = '' }: { className?: string }) {
  const exerciseKeys = Object.keys(EXERCISES)
    .slice(0, 5)
    .map((key, index) => ({
      key: index,
      name: EXERCISES[key].name,
    }));

  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle Icon={IconBarbell} title="Exercises" />
      <main>
        <SimpleTable header={{ key: '#', name: 'Exercise' }} values={exerciseKeys} />
      </main>
    </Card>
  );
}
