import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import { BentoCard } from '../BentoCard';

type Props = {
  className?: string;
};

export function FlexibleRoutines({ className }: Props) {
  return (
    <BentoCard
      className={`relative p-4 md:row-span-2 ${className}`}
    >
      <main>
        <p className="xs:p-0 font-funnel-display fg-strong max-w-48 pl-4 text-xl">
          Flexible routines to fit your lifestyle.
        </p>
      </main>
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <figure className="bg-primary absolute right-10 -bottom-21 h-32 w-fit rounded-full p-2">
          <ArrowsLeftRight
            className="fg-strong size-6"
            strokeWidth="1.5"
          />
        </figure>
      </div>
    </BentoCard>
  );
}
