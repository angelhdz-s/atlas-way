import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import type { FullExerciseDTO } from '../exercise.actions';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardMain } from '@/presentation/modules/dashboard/card/components/CardMain';
import { CardTag } from '@/presentation/modules/dashboard/card/components/CardTags';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardButton } from '@/presentation/modules/dashboard/card/components/CardButton';
import { IconBarbell } from '@/presentation/globals/components/Icons';

export function ExerciseCard({
  description,
  id,
  muscles,
  name,
}: FullExerciseDTO) {
  return (
    <Card type="dashboard" width="sm" key={id}>
      <CardHeader title={name}>
        <CardSubHeader description={description ?? ''} />
      </CardHeader>
      <CardMain>
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
