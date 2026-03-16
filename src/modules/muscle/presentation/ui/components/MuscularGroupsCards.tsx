import { Card } from '@/presentation/modules/dashboard/card/components/Card';
import { CardFooter } from '@/presentation/modules/dashboard/card/components/CardFooter';
import { CardHeader } from '@/presentation/modules/dashboard/card/components/CardHeader';
import { CardTag } from '@/presentation/modules/dashboard/card/components/CardTags';

type MuscularGroup = {
  name: string;
  muscles: string[];
};

export async function MuscularGroupsCards({ groups }: { groups: MuscularGroup[] }) {
  const sortedGroups = groups.toSorted((a, b) => a.name.localeCompare(b.name));

  return sortedGroups.map((group) => (
    <Card type="dashboard" width="sm" key={group.name} className="gap-2 p-4">
      <CardHeader title={group.name} />
      <CardFooter>
        <ul className="flex flex-wrap gap-2">
          {group.muscles.map((name) => (
            <CardTag key={name} tag={{ value: name, selected: false }} />
          ))}
        </ul>
      </CardFooter>
    </Card>
  ));
}
