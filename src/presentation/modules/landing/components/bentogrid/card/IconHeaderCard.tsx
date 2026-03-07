import { type IconProps, IconTypes } from '@/presentation/globals/types';
import { BentoCard } from '../BentoCard';

type Props = {
  className?: string;
  Icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export function IconHeaderCard({ className, Icon, description, title }: Props) {
  return (
    <BentoCard className={`p-2 md:row-span-3 md:p-0 ${className}`}>
      <main className="flex h-full flex-col gap-2 overflow-hidden p-4">
        <header className="grid flex-1 place-content-center">
          <figure className="bg-primary shadow-primary/50 rounded-full p-1.5 shadow-lg">
            <Icon
              className="fg-strong size-6 mask-b-from-black mask-b-from-0% mask-b-to-black/40 mask-b-to-100% md:size-10"
              strokeWidth="1.5"
            />
          </figure>
        </header>
        <main className="text-center">
          <header className="font-funnel-display fg-strong text-xl font-bold">{title}</header>
          <p className="fg-default text-base leading-[1.3] md:text-lg">{description}</p>
        </main>
      </main>
    </BentoCard>
  );
}
