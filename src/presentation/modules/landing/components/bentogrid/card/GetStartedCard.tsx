import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import { BentoCard } from '../BentoCard';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

type Props = {
  className?: string;
};

export function GetStartedCard({ className }: Props) {
  return (
    <BentoCard
      className={`xs:grid hidden place-content-center md:row-span-2 ${className}`}
    >
      <VariantLink
        href="/dashboard"
        size="lg"
        className="from-accent to-primary fg-strong-dark border-back outline-bd-default flex items-center gap-2 rounded-full border-4 bg-radial-[50%_50%_at_50%_0%] outline"
      >
        <ArrowsLeftRight className="-ml-1 size-6" />
        <span className="text-lg whitespace-nowrap">
          Start Now
        </span>
      </VariantLink>
    </BentoCard>
  );
}
