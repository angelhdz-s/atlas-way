import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import { TableBody } from '@/presentation/globals/components/table/TableBody';
import { TableBodyRow } from '@/presentation/globals/components/table/TableBodyRow';
import { TableHeader } from '@/presentation/globals/components/table/TableHeader';
import { TableWrapper } from '@/presentation/globals/components/table/TableWrapper';

export async function MuscularGroupsTable({ muscles }: { muscles: MuscleDTO[] }) {
  const sortedMuscles = muscles.toSorted((a, b) => a.name.localeCompare(b.name));

  const muscularGroups: (MuscleDTO['group'] & { muscles: string[] })[] = [];

  for (const muscle of sortedMuscles) {
    const index = muscularGroups.findIndex((m) => m.name === muscle.group.name);
    if (index === -1) {
      muscularGroups.push({
        ...muscle.group,
        muscles: [muscle.name],
      });
      continue;
    }

    muscularGroups[index].muscles.push(muscle.name);
  }

  return (
    <TableWrapper>
      <TableHeader>
        <td className="w-12 pl-4">#</td>
        <td className="">M. Group</td>
        <td className="">Section</td>
        <td className="">Muscles</td>
      </TableHeader>
      <TableBody>
        {muscularGroups.map(({ name, muscles, section }, index) => (
          <TableBodyRow key={name}>
            <td className="fg-muted pl-4 font-light">{index + 1}</td>
            <td className="fg-strong">{name}</td>
            <td className="text-sm">
              <div className="bg-front w-fit rounded-full px-3 py-1 font-light">{section.name}</div>
            </td>
            <td className="text-sm">
              <div className="hidden w-fit items-center gap-2 lg:flex">
                {muscles.map((m) => (
                  <div key={m} className="bg-front mx-auto w-fit rounded-full px-3 py-1 font-light">
                    {m}
                  </div>
                ))}
              </div>
              <div className="bg-front w-fit rounded-full px-3 py-1 font-light lg:hidden">
                {`${muscles.length} muscles`}
              </div>
            </td>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
}
