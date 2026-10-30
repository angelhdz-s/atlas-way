import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function AdvantageItem({
  tile,
  description,
  icon,
}: {
  tile: string;
  description: string;
  icon: IconName;
}) {
  return (
    <li className="xs:flex-col flex list-disc flex-row gap-4 rounded-md p-4">
      <div className="bg-accent text-fg-strong-light h-fit w-fit rounded-full p-2">
        <Icon icon={icon} variant={{ size: 'lg', weight: 'moderate' }} />
      </div>
      <main className="xs:p-0 flex flex-1 flex-col gap-2 pt-1.5">
        <h3 className="text-fg-strong text-xl font-medium">{tile}</h3>
        <p>{description}</p>
      </main>
    </li>
  );
}
