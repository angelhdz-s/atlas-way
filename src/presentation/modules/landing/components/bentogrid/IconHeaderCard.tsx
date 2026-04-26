import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';
import { type IconProps } from '@/presentation/globals/presentation.types';

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
              className="text-fg-strong size-6 mask-b-from-black mask-b-from-0% mask-b-to-black/40 mask-b-to-100% md:size-10"
              strokeWidth="1.5"
            />
          </figure>
        </header>
        <main className="text-center">
          <header className="font-funnel-display text-fg-strong text-xl font-bold">{title}</header>
          <p className="text-fg-default text-base leading-[1.3] md:text-lg">{description}</p>
        </main>
      </main>
    </BentoCard>
  );
}
