import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardSubHeader } from '@/presentation/modules/dashboard/card/components/CardSubHeader';
import { CardTitle } from '@/presentation/modules/dashboard/card/components/CardTitle';

type BodySections = { name: string; groups: string[] };

export async function BodySectionCards({ sections }: { sections: BodySections[] }) {
  const sortedGroups = sections.toSorted((a, b) => a.name.localeCompare(b.name));
  return sortedGroups.map((section) => (
    <Card type="dashboard" width="xs" key={section.name} className="gap-0 p-4">
      <CardTitle title={section.name} />
      <CardSubHeader description={'3 muscles'} />
    </Card>
  ));
}
