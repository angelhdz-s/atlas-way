import { IconRocket } from '@/presentation/globals/components/icons/outline/IconRocket';
import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';
import { Link } from '@/presentation/modules/button/components/Link';

type Props = {
  className?: string;
};

export function GetStartedCard({ className }: Props) {
  return (
    <BentoCard className={`xs:grid hidden place-content-center md:row-span-2 ${className}`}>
      <Link
        href="/dashboard"
        variantConfig={{
          size: 'lg',
        }}
        className="from-accent to-primary text-strong-dark border-back outline-bd-default flex min-h-14 items-center gap-2 rounded-full border-4 bg-radial-[50%_50%_at_50%_0%] outline"
      >
        <IconRocket className="-ml-2 size-7" strokeWidth="1.4" />
        <span className="text-lg whitespace-nowrap">Start Now</span>
      </Link>
    </BentoCard>
  );
}
