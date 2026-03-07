import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardTag } from '@/presentation/modules/dashboard/card/components/CardTags';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';

export default async function MusclesTable() {
  const bodySections = [
    {
      id: 1,
      name: 'Torso',
      muscularGroups: [
        { id: 1, name: 'Chest' },
        { id: 2, name: 'Abs' },
        { id: 3, name: 'Back' },
      ],
    },
  ];

  return bodySections.map((section) => {
    return (
      <Card type="dashboard" width="lg" key={section.id}>
        <CardHeader title={section.name}>
          <CardSubHeader
            description={`Muscular groups:`}
            counters={[
              '3 routines',
              '5 exercises',
              `${section.muscularGroups?.length ?? 0} muscles`,
            ]}
          ></CardSubHeader>
        </CardHeader>
        <CardFooter>
          <ul className="flex flex-wrap gap-2">
            {section.muscularGroups.map(({ name, id }) => (
              <CardTag key={id} tag={{ value: name, selected: false }} />
            ))}
          </ul>
        </CardFooter>
      </Card>
    );
  });
}
