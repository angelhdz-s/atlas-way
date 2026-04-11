'use client';

import { IconEdit } from '@/presentation/globals/components/icons/outline/IconEdit';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import { TableBody } from '@/presentation/globals/components/table/TableBody';
import { TableBodyRow } from '@/presentation/globals/components/table/TableBodyRow';
import { TableHeader } from '@/presentation/globals/components/table/TableHeader';
import { TableWrapper } from '@/presentation/globals/components/table/TableWrapper';
import { Button } from '@/presentation/modules/button/components/Button';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';

type Props = {
  exercises: ExerciseDTO[];
};

export function ExercisesTable({ exercises }: Props) {
  return (
    <TableWrapper>
      <TableHeader>
        <td className="w-10 text-center md:w-12">#</td>
        <td className="w-30 md:w-50">Exercise</td>
        <td className="hidden xl:table-cell">Description</td>
        <td className="text-center md:w-fit xl:w-20">Sets</td>
        <td className="text-center md:w-fit xl:w-20">Reps</td>
        <td className="text-center md:w-fit xl:w-20">Weight</td>
        <td className="hidden md:w-30">Date</td>
        <td className="w-24 text-center">Actions</td>
      </TableHeader>
      <TableBody>
        {exercises.map(({ id, name, description, sets, reps, weight, createdAt }, index) => (
          <TableBodyRow key={id}>
            <td className="fg-muted w-10 text-center font-light md:w-12">{index + 1}</td>
            <td className="fg-strong truncate">{name}</td>
            <td className="hidden w-[40%] truncate pr-4 xl:table-cell">{description}</td>
            <td className="text-center">{sets}</td>
            <td className="text-center">{reps}</td>
            <td className="text-center">{weight}</td>
            <td className="hidden md:w-30">{createdAt.toLocaleDateString()}</td>
            <td>
              <ul className="flex w-full items-center justify-center">
                <li>
                  <Button variantConfig={{ color: 'simple', type: 'square' }}>
                    <IconEdit className="size-5" />
                  </Button>
                </li>
                <li>
                  <Button variantConfig={{ color: 'simple', type: 'square' }}>
                    <IconTrash className="size-5" />
                  </Button>
                </li>
              </ul>
            </td>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
}
