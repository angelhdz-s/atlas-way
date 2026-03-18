'use client';

import { IconEdit, IconTrash } from '@/presentation/globals/components/Icons';
import { TableBody } from '@/presentation/globals/components/table/TableBody';
import { TableBodyRow } from '@/presentation/globals/components/table/TableBodyRow';
import { TableHeader } from '@/presentation/globals/components/table/TableHeader';
import { TableWrapper } from '@/presentation/globals/components/table/TableWrapper';
import { VariantButton } from '@/presentation/modules/button/components/VariantButton';
import type { ExerciseDTO } from '../../application/dtos/exercise.dto';

type Props = {
  exercises: ExerciseDTO[];
};

export function ExercisesTable({ exercises }: Props) {
  return (
    <TableWrapper>
      <TableHeader>
        <td className="w-12 pl-4">#</td>
        <td className="w-50">Exercise</td>
        <td className="">Description</td>
        <td className="w-20">Sets</td>
        <td className="w-20">Reps</td>
        <td className="w-20">Weight</td>
        <td className="w-30">Date</td>
        <td className="w-36 text-center">Actions</td>
      </TableHeader>
      <TableBody>
        {exercises.map(({ id, name, description, sets, reps, weight, createdAt }, index) => (
          <TableBodyRow key={id}>
            <td className="fg-muted pl-4 font-light">{index + 1}</td>
            <td className="fg-strong truncate">{name}</td>
            <td className="w-[40%] truncate pr-4">{description}</td>
            <td>{sets}</td>
            <td>{reps}</td>
            <td>{weight}</td>
            <td>{createdAt.toLocaleDateString()}</td>
            <td>
              <ul className="flex w-full items-center justify-center">
                <li>
                  <VariantButton variantConfig={{ color: 'simple', type: 'square' }}>
                    <IconEdit className="size-5" />
                  </VariantButton>
                </li>
                <li>
                  <VariantButton variantConfig={{ color: 'simple', type: 'square' }}>
                    <IconEdit className="size-5" />
                  </VariantButton>
                </li>
                <li>
                  <VariantButton variantConfig={{ color: 'simple', type: 'square' }}>
                    <IconTrash className="size-5" />
                  </VariantButton>
                </li>
              </ul>
            </td>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
}
