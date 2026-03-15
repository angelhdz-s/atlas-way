import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardTag } from '@/presentation/modules/dashboard/card/components/CardTags';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { IconBarbell } from '@/presentation/globals/components/Icons';
import type { ExerciseDTO } from '../../application/dtos/exercise.dto';

export function ExerciseCard({ exercise }: { exercise: ExerciseDTO }) {
  const { id, muscles, name, reps, description, sets, weight } = exercise;
  return (
    <Card type="dashboard" width="md" key={id} className="p-4">
      <CardHeader title={name}>
        <CardSubHeader description={description ?? ''} />
      </CardHeader>
      <CardMain>
        <section className="fg-strong flex items-center gap-8 text-4xl tracking-widest">
          <span>{`${sets} x ${reps}`}</span>
          <span className="bg-front rounded-full px-4 py-1">
            {`${weight}`} <span className="fg-default text-xl">lb</span>{' '}
          </span>
        </section>
        <ul className="flex flex-row flex-wrap items-center gap-1">
          {muscles.map((muscle, index) => (
            <CardTag
              key={index}
              tag={{
                value: muscle.name,
                selected: false,
              }}
            />
          ))}
        </ul>
      </CardMain>
      <CardFooter>
        <CardButton>
          <IconBarbell className="size-5" />
          Edit
        </CardButton>
      </CardFooter>
    </Card>
  );
}
