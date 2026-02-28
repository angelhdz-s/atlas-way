import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import {
  DashboardCardFooter,
  DashboardCardHeader,
  DashboardCardSubHeader,
  DashboardCardTag,
} from '@/presentation/modules/dashboard/components/Card';

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
        <DashboardCardHeader title={section.name}>
          <DashboardCardSubHeader
            description={`Muscular groups:`}
            counters={[
              '3 routines',
              '5 exercises',
              `${section.muscularGroups?.length ?? 0} muscles`,
            ]}
          ></DashboardCardSubHeader>
        </DashboardCardHeader>
        <DashboardCardFooter>
          <ul className="flex flex-wrap gap-2">
            {section.muscularGroups.map(({ name, id }) => (
              <DashboardCardTag
                key={id}
                tag={{ value: name, selected: false }}
              />
            ))}
          </ul>
        </DashboardCardFooter>
      </Card>
    );
  });
}
