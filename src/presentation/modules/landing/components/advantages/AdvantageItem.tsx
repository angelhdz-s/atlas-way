import type { IconTypes } from '@/presentation/globals/types';

export function AdvantageItem({
  tile,
  description,
  Icon,
}: {
  tile: string;
  description: string;
  Icon: IconTypes;
}) {
  return (
    <li className="xs:flex-col flex list-disc flex-row gap-4 rounded-md p-4">
      <div className="bg-accent fg-strong-light h-fit w-fit rounded-full p-2">
        <Icon className="size-6" strokeWidth="1.5" />
      </div>
      <main className="xs:p-0 flex flex-1 flex-col gap-2 pt-1.5">
        <h3 className="fg-strong text-xl font-medium">{tile}</h3>
        <p>{description}</p>
      </main>
    </li>
  );
}
