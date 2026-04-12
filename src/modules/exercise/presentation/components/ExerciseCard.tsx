import { Card } from '@/presentation/modules/card/components/Card';
import { CardHeader } from '@/presentation/modules/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/card/components/CardMain';
import { CardTag } from '@/presentation/modules/card/components/CardTag';
import type { ExerciseDTO } from '../../application/dtos/exercise.dto';
import { CardTitle } from '@/presentation/modules/card/components/CardTitle';
import { CardTagsWrapperFade } from '@/presentation/modules/card/components/CardTagsWrapperFade';

export function ExerciseCard({ exercise }: { exercise: ExerciseDTO }) {
  const { muscles, name, reps, description, sets, weight } = exercise;
  return (
    <Card type="dashboard" width="md" className="gap-4">
      <CardHeader>
        <CardTitle title={name} />
        <CardSubHeader description={description ?? ''} />
      </CardHeader>
      <CardMain>
        <CardTagsWrapperFade>
          {muscles.map((muscle, index) => (
            <CardTag
              key={index}
              tag={{
                value: muscle.name,
                selected: false,
              }}
            />
          ))}
        </CardTagsWrapperFade>
        <section className="fg-strong flex items-center gap-4">
          <span className="text-5xl">{`${sets} x ${reps}`}</span>
          <div className="bg-front border-bd-muted w-fit rounded-full border px-3 py-0.5">
            <span className="text-2xl">{weight}</span>{' '}
            <span className="fg-default text-xl font-light">lb</span>
          </div>
        </section>
      </CardMain>
    </Card>
  );
}
