import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  className?: string;
};

export function FlexibleRoutines({ className }: Props) {
  return (
    <BentoCard className={`relative p-4 md:row-span-2 ${className}`}>
      <main>
        <p className="xs:p-0 font-funnel-display text-fg-strong max-w-48 pl-4 text-xl">
          Flexible routines to fit your lifestyle.
        </p>
      </main>
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <figure className="bg-primary absolute right-10 -bottom-21 h-32 w-fit rounded-full p-2">
          <Icon
            icon="arrow-left-right"
            className="text-fg-strong"
            variant={{ size: 'lg', weight: 'moderate' }}
          />
        </figure>
      </div>
    </BentoCard>
  );
}
