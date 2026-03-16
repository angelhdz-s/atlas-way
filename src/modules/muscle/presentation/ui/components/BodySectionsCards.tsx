import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardTag } from '@/presentation/modules/dashboard/card/components/CardTags';

type BodySections = { name: string; groups: string[] };

export async function BodySectionCards({ sections }: { sections: BodySections[] }) {
  const sortedGroups = sections.toSorted((a, b) => a.name.localeCompare(b.name));
  return sortedGroups.map((section) => (
    <Card type="dashboard" width="md" key={section.name} className="gap-2 p-4">
      <CardHeader title={section.name}>
        <CardSubHeader
          description={`Muscular groups:`}
          counters={['3 routines', '5 exercises', `5 muscles`]}
        />
      </CardHeader>
      <CardFooter>
        <ul className="flex flex-wrap gap-2">
          {section.groups.map((name) => (
            <CardTag key={name} tag={{ value: name, selected: false }} />
          ))}
        </ul>
      </CardFooter>
    </Card>
  ));
}
